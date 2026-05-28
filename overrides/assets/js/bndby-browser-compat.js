(() => {
	const DEFAULT_BROWSERS = [
		"chrome",
		"edge",
		"firefox",
		"opera",
		"safari",
		"chrome_android",
		"firefox_android",
		"safari_ios",
		"samsunginternet_android",
		"webview_android",
	];

	const BROWSER_LABELS = {
		chrome: "Chrome",
		edge: "Edge",
		firefox: "Firefox",
		opera: "Opera",
		safari: "Safari",
		chrome_android: "Chrome Android",
		firefox_android: "Firefox Android",
		safari_ios: "Safari iOS",
		samsunginternet_android: "Samsung Internet",
		webview_android: "WebView Android",
	};

	const BROWSER_ALIASES = {
		android: "webview_android",
		ios_saf: "safari_ios",
	};

	const BROWSER_GROUPS = {
		desktop: ["chrome", "edge", "firefox", "opera", "safari"],
		mobile: ["chrome_android", "firefox_android", "safari_ios", "samsunginternet_android", "webview_android"],
	};

	const MIRROR_TARGETS = {
		chrome_android: "chrome",
		edge: "chrome",
		firefox_android: "firefox",
		opera: "chrome",
		opera_android: "chrome_android",
		safari_ios: "safari",
		samsunginternet_android: "chrome_android",
		webview_android: "chrome_android",
		webview_ios: "safari_ios",
	};

	const browserReleaseCache = new Map();

	class BndbyBrowserCompat extends HTMLElement {
		static get observedAttributes() {
			return ["feature", "browsers"];
		}

		constructor() {
			super();
			this.attachShadow({ mode: "open" });
			this._requestId = 0;
		}

		connectedCallback() {
			this.render();
		}

		attributeChangedCallback() {
			this.render();
		}

		async render() {
			const feature = this.getAttribute("feature")?.trim();
			const browsers = this.parseBrowsers(this.getAttribute("browsers"));

			if (!feature) {
				this.renderError("Укажите атрибут feature, например: css.properties.backdrop-filter");
				return;
			}

			const currentRequestId = ++this._requestId;
			this.renderLoading();

			try {
				const data = await this.loadFeatureData(feature);
				if (currentRequestId !== this._requestId) {
					return;
				}

				const compat = this.getCompatNode(data, feature);
				if (!compat) {
					this.renderError(`Не найден блок __compat для "${feature}".`);
					return;
				}

				const browserReleases = await this.loadBrowserReleases(browsers);
				if (currentRequestId !== this._requestId) {
					return;
				}

				const rows = browsers.map((browser) =>
					this.buildBrowserRow(browser, this.resolveSupport(browser, compat.support), browserReleases[browser])
				);
				this.renderTable(rows, compat.mdn_url);
			} catch (error) {
				if (currentRequestId !== this._requestId) {
					return;
				}
				this.renderError(`Ошибка загрузки данных MDN: ${error.message}`);
			}
		}

		parseBrowsers(value) {
			if (!value) {
				return DEFAULT_BROWSERS;
			}

			const list = value
				.split(",")
				.map((browser) => browser.trim())
				.map((browser) => BROWSER_ALIASES[browser] || browser)
				.filter(Boolean);

			return list.length ? list : DEFAULT_BROWSERS;
		}

		async loadFeatureData(featurePath) {
			const parts = featurePath.split(".").filter(Boolean);
			if (parts.length < 2) {
				throw new Error("feature должен содержать минимум два сегмента, например css.properties.color");
			}

			let response;
			for (let depth = parts.length; depth >= 2; depth -= 1) {
				const candidatePath = parts.slice(0, depth).join("/");
				const url = `https://raw.githubusercontent.com/mdn/browser-compat-data/main/${candidatePath}.json`;
				response = await fetch(url);
				if (response.ok) {
					return response.json();
				}
			}

			throw new Error(`Не удалось найти JSON для ${featurePath}`);
		}

		async loadBrowserReleases(browsers) {
			const entries = await Promise.all(
				browsers.map(async (browser) => {
					if (!browserReleaseCache.has(browser)) {
						browserReleaseCache.set(browser, this.loadBrowserReleaseData(browser));
					}

					return [browser, await browserReleaseCache.get(browser)];
				})
			);

			return Object.fromEntries(entries);
		}

		async loadBrowserReleaseData(browser) {
			const response = await fetch(`https://raw.githubusercontent.com/mdn/browser-compat-data/main/browsers/${browser}.json`);
			if (!response.ok) {
				return {};
			}

			const data = await response.json();
			return data?.browsers?.[browser]?.releases || {};
		}

		getCompatNode(json, featurePath) {
			const parts = featurePath.split(".");
			let node = json;
			for (const part of parts) {
				if (!node || typeof node !== "object" || !(part in node)) {
					return null;
				}
				node = node[part];
			}
			return node?.__compat || null;
		}

		buildBrowserRow(browserKey, rawSupport, releases) {
			const label = BROWSER_LABELS[browserKey] || browserKey;
			const normalized = this.normalizeSupportStatement(rawSupport, releases);
			return {
				browserKey,
				label,
				...normalized,
			};
		}

		resolveSupport(browserKey, support, visited = new Set()) {
			const rawSupport = support?.[browserKey];
			if (rawSupport !== "mirror") {
				return rawSupport;
			}

			const mirrorTarget = MIRROR_TARGETS[browserKey];
			if (!mirrorTarget || visited.has(mirrorTarget)) {
				return null;
			}

			visited.add(browserKey);
			return this.resolveSupport(mirrorTarget, support, visited);
		}

		normalizeSupportStatement(rawSupport, releases = {}) {
			const statement = this.pickSupportStatement(rawSupport);
			if (!statement) {
				return {
					status: "none",
					cellText: "?",
					versionText: "Нет данных",
					releaseDate: "",
					note: "",
				};
			}

			const versionAdded = statement.version_added;
			const isSupported = versionAdded !== false && versionAdded != null;
			if (!isSupported) {
				return {
					status: "none",
					cellText: "—",
					versionText: "Не поддерживается",
					releaseDate: "",
					note: "",
				};
			}

			const isPartial =
				Boolean(statement.partial_implementation) ||
				Boolean(statement.prefix) ||
				Boolean(statement.alternative_name) ||
				Boolean(statement.flags);

			const cellText = versionAdded === true ? "yes" : String(versionAdded);
			const versionText = versionAdded === true ? "Да" : `С ${versionAdded}`;
			const releaseDate = this.getReleaseDate(releases, versionAdded);
			const note = this.getStatementNote(statement);

			return {
				status: isPartial ? "partial" : "full",
				cellText,
				versionText,
				releaseDate,
				note,
			};
		}

		getStatementNote(statement) {
			const notes = [];
			if (statement.prefix) notes.push(`Префикс: ${statement.prefix}`);
			if (statement.alternative_name) notes.push(`Альт. имя: ${statement.alternative_name}`);
			if (statement.partial_implementation) notes.push("Частичная реализация");
			if (statement.flags) notes.push("Требуются флаги");

			const mdnNotes = Array.isArray(statement.notes) ? statement.notes : [statement.notes].filter(Boolean);
			notes.push(...mdnNotes.map((note) => this.cleanTooltipText(note)));

			return notes.join(". ");
		}

		cleanTooltipText(text) {
			return String(text)
				.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
				.replace(/`([^`]+)`/g, "$1")
				.replace(/\s+/g, " ")
				.trim();
		}

		escapeAttribute(value) {
			return String(value)
				.replace(/&/g, "&amp;")
				.replace(/"/g, "&quot;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;");
		}

		getReleaseDate(releases, version) {
			if (version === true || version == null) {
				return "";
			}

			const versionKey = String(version);
			const exactRelease = releases[versionKey]?.release_date;
			if (exactRelease) {
				return exactRelease;
			}

			const normalizedVersion = versionKey.replace(/\.0$/, "");
			if (normalizedVersion !== versionKey && releases[normalizedVersion]?.release_date) {
				return releases[normalizedVersion].release_date;
			}

			const matchingKey = Object.keys(releases).find((release) => versionKey.startsWith(`${release}.`));
			return matchingKey ? releases[matchingKey]?.release_date || "" : "";
		}

		pickSupportStatement(rawSupport) {
			if (!rawSupport) {
				return null;
			}

			const candidates = Array.isArray(rawSupport) ? rawSupport : [rawSupport];
			const active = candidates.filter((entry) => entry && !entry.version_removed);
			if (!active.length) {
				return null;
			}

			const sorted = active.sort((a, b) => {
				const scoreA = this.getStatementScore(a);
				const scoreB = this.getStatementScore(b);
				return scoreB - scoreA;
			});

			return sorted[0];
		}

		getStatementScore(entry) {
			let score = 0;
			if (entry.version_added && entry.version_added !== false) score += 10;
			if (!entry.partial_implementation) score += 3;
			if (!entry.prefix) score += 2;
			if (!entry.alternative_name) score += 2;
			if (!entry.flags) score += 2;
			return score;
		}

		getStatusText(status) {
			if (status === "full") return "Полная";
			if (status === "partial") return "Частичная";
			return "Нет";
		}

		getSupportTitle(row) {
			const parts = [`${row.label}: ${this.getStatusText(row.status)}`];
			if (row.note) {
				parts.push(row.note);
			}
			return parts.join(". ");
		}

		getGroupRows(rows) {
			return [
				{
					title: "Desktop",
					rows: rows.filter((row) => BROWSER_GROUPS.desktop.includes(row.browserKey)),
				},
				{
					title: "Mobile",
					rows: rows.filter((row) => BROWSER_GROUPS.mobile.includes(row.browserKey)),
				},
			].filter((group) => group.rows.length);
		}

		getVersionTitle(row) {
			const parts = [`${row.label}: ${this.getStatusText(row.status)}`, row.versionText];
			if (row.releaseDate) {
				parts.push(`Дата релиза: ${row.releaseDate}`);
			}
			if (row.note) {
				parts.push(row.note);
			}
			return parts.join(". ");
		}

		getSupportSummary(rows) {
			const supported = rows.filter((row) => row.status === "full").length;
			const partial = rows.filter((row) => row.status === "partial").length;
			const total = rows.length || 1;
			return {
				full: Math.round((supported / total) * 100),
				partial: Math.round((partial / total) * 100),
			};
		}

		renderLoading() {
			this.shadowRoot.innerHTML = `
				${this.styles()}
				<section class="compat-card">
					<p class="state">Загрузка данных MDN...</p>
				</section>
			`;
		}

		renderError(message) {
			this.shadowRoot.innerHTML = `
				${this.styles()}
				<section class="compat-card">
					<p class="state error">${message}</p>
				</section>
			`;
		}

		renderTable(rows, mdnUrl) {
			const tableRows = this.getGroupRows(rows)
				.map(
					(group) => `
					<tr class="group-row">
						<th colspan="3">${group.title}</th>
					</tr>
					${group.rows
						.map(
							(row) => `
							<tr>
								<th scope="row">${row.label}</th>
								<td>
									<span class="support-badge support-${row.status}" title="${this.escapeAttribute(this.getSupportTitle(row))}" aria-label="${this.getStatusText(row.status)}">
										${row.status === "none" ? "✕" : "✓"}
									</span>
								</td>
								<td>
									<span class="version-pill" title="${this.escapeAttribute(this.getVersionTitle(row))}">${row.cellText}</span>
								</td>
							</tr>
						`
						)
						.join("")}
				`
				)
				.join("");

			const mdnLink = mdnUrl
				? `<a href="${mdnUrl}" target="_blank" rel="noreferrer noopener">View full compatibility on MDN</a>`
				: "MDN";
			const summary = this.getSupportSummary(rows);

			this.shadowRoot.innerHTML = `
				${this.styles()}
				<section class="compat-card">
					<div class="table-wrap">
						<table>
							<thead>
								<tr>
									<th>Браузер</th>
									<th>Поддержка</th>
									<th>Версия</th>
								</tr>
							</thead>
							<tbody>
								${tableRows}
							</tbody>
						</table>
					</div>

					<div class="legend">
						<span><i class="legend-full">✓</i>Полная поддержка</span>
						<span><i class="legend-partial">✓</i>Частичная поддержка</span>
						<span><i class="legend-none">✕</i>Нет поддержки</span>
						<strong>Итого: ${summary.full}% + ${summary.partial}% частично</strong>
					</div>

					<footer>Данные совместимости: ${mdnLink}</footer>
				</section>
			`;
		}

		styles() {
			return `
				<style>
					:host {
						display: block;
						margin: 1rem 0;
						font-size: 0.82rem;
					}
					.compat-card {
						background: var(--md-default-bg-color, #fff);
						border: 1px solid var(--md-default-fg-color--lightest, #cdcdcd);
						border-radius: 0.25rem;
						color: var(--md-default-fg-color, #1b1b1b);
						font-family: var(--md-text-font-family, system-ui, sans-serif);
						overflow: hidden;
					}
					.table-wrap {
						overflow-x: auto;
					}
					table {
						border-collapse: collapse;
						width: 100%;
					}
					th,
					td {
						border-bottom: 1px solid var(--md-default-fg-color--lightest, #e3e3e3);
						padding: 0.55rem 0.75rem;
						text-align: left;
						vertical-align: middle;
					}
					thead th {
						background: var(--md-default-bg-color, #fff);
						color: var(--md-default-fg-color--light, #5e5e5e);
						font-size: 0.72rem;
						font-weight: 600;
						letter-spacing: 0.04em;
						text-transform: uppercase;
					}
					tbody th {
						font-weight: 600;
						white-space: nowrap;
					}
					tbody tr:hover td,
					tbody tr:hover th {
						background: color-mix(in srgb, var(--md-accent-fg-color, #0069c2) 7%, transparent);
					}
					.group-row th {
						background: var(--md-code-bg-color, #f6f6f6);
						color: var(--md-default-fg-color--light, #5e5e5e);
						font-size: 0.78rem;
						font-weight: 700;
						text-transform: uppercase;
					}
					.support-badge,
					.legend i {
						align-items: center;
						border-radius: 999px;
						color: #fff;
						display: inline-flex;
						font-size: 0.7rem;
						font-style: normal;
						font-weight: 700;
						height: 1.25rem;
						justify-content: center;
						line-height: 1;
						margin-right: 0.35rem;
						width: 1.25rem;
					}
					.support-full {
						background: #008a00;
					}
					.support-partial {
						background: #c19a00;
					}
					.support-none {
						background: #d30038;
					}
					.version-pill {
						background: var(--md-code-bg-color, #f6f6f6);
						border: 1px solid var(--md-default-fg-color--lightest, #cdcdcd);
						border-radius: 0.2rem;
						cursor: help;
						display: inline-block;
						font-family: var(--md-code-font-family, monospace);
						font-size: 0.78rem;
						min-width: 2.3rem;
						padding: 0.12rem 0.35rem;
						text-align: center;
					}
					.state {
						margin: 0;
						padding: 0.9rem 1rem;
					}
					.error {
						color: #d30038;
					}
					.legend {
						align-items: center;
						background: var(--md-code-bg-color, #f6f6f6);
						border-top: 1px solid var(--md-default-fg-color--lightest, #cdcdcd);
						display: flex;
						flex-wrap: wrap;
						gap: 0.5rem 0.85rem;
						justify-content: space-between;
						padding: 0.65rem 1rem;
					}
					.legend span {
						align-items: center;
						display: inline-flex;
					}
					.legend-full {
						background: #008a00;
					}
					.legend-partial {
						background: #c19a00;
					}
					.legend-none {
						background: #d30038;
					}
					.legend strong {
						margin-left: auto;
						white-space: nowrap;
					}
					footer {
						background: var(--md-default-bg-color, #fff);
						border-top: 1px solid var(--md-default-fg-color--lightest, #cdcdcd);
						color: var(--md-default-fg-color--light, #5e5e5e);
						font-size: 0.72rem;
						padding: 0.65rem 1rem;
					}
					footer a {
						color: var(--md-accent-fg-color, #0069c2);
						text-decoration: none;
					}
					footer a:hover {
						text-decoration: underline;
					}
					@media (max-width: 42rem) {
						.legend {
							justify-content: flex-start;
						}
						.legend strong {
							margin-left: 0;
							width: 100%;
						}
					}
				</style>
			`;
		}
	}

	if (!customElements.get("bndby-browser-compat")) {
		customElements.define("bndby-browser-compat", BndbyBrowserCompat);
	}
})();
