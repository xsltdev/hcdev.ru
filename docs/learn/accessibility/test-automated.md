---
description: Как проводить автоматизированное тестирование доступности.
---

# Автоматизированное тестирование доступности

До этого момента в курсе речь шла об индивидуальных, деловых и правовых сторонах цифровой доступности и об основах соответствия требованиям. Вы разобрали отдельные темы инклюзивного дизайна и кода: когда использовать ARIA, а когда HTML, как измерять контраст цвета, когда необходим JavaScript и другие вопросы.

В оставшихся модулях мы переходим от проектирования и разработки к тестированию доступности. Мы будем использовать процесс из трёх шагов: автоматизированные проверки, ручные проверки и проверки вспомогательными технологиями. Во всех модулях о тестировании одна и та же демонстрация: страница постепенно становится из недоступной доступной.

Каждая проверка — автоматизированная, ручная и с вспомогательными технологиями — нужна, чтобы получить максимально доступный продукт.

За эталон мы берём [уровни соответствия A и AA](https://www.w3.org/TR/WCAG21/#cc1) Web Content Accessibility Guidelines (WCAG) 2.1. Отрасль, тип продукта, местные и национальные законы и политики, а также общие цели по доступности определяют, каким рекомендациям следовать и какой уровень закрывать. Если для проекта не задан конкретный стандарт, рекомендуется последняя версия WCAG. Общие сведения об аудите доступности, типах и уровнях соответствия, [WCAG](glossary.md#wcag) и [POUR](glossary.md#pour) — в модуле «[Как измеряют цифровую доступность?](measure.md)».

Соответствие требованиям доступности — ещё не вся поддержка людей с инвалидностью. Но это хорошая отправная точка: появляется метрика, по которой можно проверять продукт. Помимо тестов на соответствие, стоит проводить юзабилити-тесты с людьми с инвалидностью, нанимать таких людей в команду или консультироваться с человеком либо компанией, которые разбираются в цифровой доступности, чтобы продукты становились инклюзивнее.

## Основы автоматизированного тестирования

Автоматизированное тестирование доступности — это проверка цифрового продукта программой на заранее заданные стандарты соответствия.

Плюсы автоматизированных тестов доступности:

-   Тесты легко повторять на разных этапах жизненного цикла продукта
-   Запуск занимает несколько шагов, а результат приходит быстро
-   Чтобы запустить тесты и понять отчёт, нужно немного знаний о доступности

Минусы автоматизированных тестов доступности:

-   Автоматические инструменты не находят все ошибки доступности в продукте
-   Бывают ложные срабатывания: инструмент сообщает о проблеме, которая не является нарушением WCAG
-   Для разных типов продуктов и ролей могут понадобиться разные инструменты

Автоматизированная проверка — хороший первый шаг для сайта или приложения, но автоматизировать можно не всё. Как проверять то, что не покрывают автотесты, разобрано в модуле [ручного тестирования доступности](test-manual.md).

## Виды автоматических инструментов

Один из первых онлайн-инструментов автоматизированного тестирования доступности появился в 1996 году в Center for Applied Special Technology (CAST) и назывался «[The Bobby Report](https://jimthatcher.com/bobbyeval.htm)». Сегодня на выбор есть [больше 100 автоматических инструментов](https://www.w3.org/WAI/ER/tools/).

Реализация бывает разной: расширения браузера, линтеры кода, настольные и мобильные приложения, онлайн-панели и даже открытые API, на которых можно собрать собственный инструмент.

Какой инструмент выбрать, зависит от многих факторов:

-   По каким стандартам и уровням соответствия вы проверяете? Это могут быть WCAG 2.1, WCAG 2.0, [U.S. Section 508](https://www.section508.gov/) или изменённый список правил доступности.
-   Какой цифровой продукт вы проверяете? Сайт, веб-приложение, нативное мобильное приложение, PDF, киоск или что-то ещё.
-   На каком этапе жизненного цикла разработки вы тестируете продукт?
-   Сколько времени уходит на настройку и использование инструмента? Для одного человека, команды или компании?
-   Кто проводит тест: дизайнеры, разработчики, QA и так далее?
-   Как часто нужно проверять доступность? Какие подробности должны быть в отчёте? Нужно ли сразу связывать проблемы с системой задач?
-   Какие инструменты лучше работают в вашей среде и у вашей команды?

Есть и другие соображения. Подробнее о выборе — в статье WAI «[Selecting Web Accessibility Evaluation Tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/)».

## Демонстрация: автоматизированный тест

Для демонстрации автоматизированного тестирования доступности мы используем [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) в Chrome. Lighthouse — открытый автоматический инструмент. Он помогает улучшать качество веб-страниц аудитами разных типов: производительность, SEO и доступность.

Демонстрация — сайт вымышленной организации Medical Mysteries Club. Страница намеренно сделана недоступной. Часть проблем видна сразу, часть (но не все) поймает автоматический тест.

### Шаг 1

В браузере Chrome установите [расширение Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk).

[Встроить Lighthouse в процесс тестирования](https://github.com/GoogleChrome/lighthouse) можно по-разному. В этой демонстрации мы используем расширение Chrome.

### Шаг 2

<figure class="screenshot" data-float="right">
{% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/amnpKDgfwnlIa02HYMU1.png", alt="Сайт Medical Mysteries Club вне iframe.", width="400", height="283" %}
</figure>

Мы собрали [демонстрацию в CodePen](https://codepen.io/web-dot-dev/pen/yLqOaEP). Откройте её в [режиме отладки](https://cdpn.io/pen/debug/yLqOaEP), чтобы перейти к следующим тестам. Это важно: так убирается `<iframe>`, который окружает демо-страницу и может мешать некоторым инструментам. Подробнее — в описании [режима отладки CodePen](https://blog.codepen.io/documentation/debug-view/#getting-to-debug-view-3).

### Шаг 3

[Откройте Chrome DevTools](https://developer.chrome.com/docs/devtools/open/) и перейдите на вкладку Lighthouse. Снимите все категории, кроме «Accessibility». Режим оставьте по умолчанию и выберите тип устройства, на котором запускаете тесты.

<figure class="screenshot">
  {% Img
    src="image/VbsHyyQopiec0718rMq2kTE1hke2/yv8fIyUnFaW0yPGJgohj.png",
    alt="Сайт Medical Mysteries Club с открытой панелью отчёта Lighthouse в DevTools.", width="800", height="421"
  %}
</figure>

### Шаг 4

Нажмите кнопку «Analyze page load» и дайте Lighthouse время выполнить проверки.

Когда тесты закончатся, Lighthouse покажет оценку того, насколько доступен проверяемый продукт. [Оценка Lighthouse](https://developer.chrome.com/docs/lighthouse/accessibility/scoring) считается по числу проблем, их типам и влиянию найденных проблем на пользователей.

Кроме оценки, отчёт Lighthouse подробно описывает найденные проблемы и даёт ссылки, где узнать, как их исправить. В отчёте также есть пройденные и неприменимые проверки и список пунктов, которые нужно проверить вручную.

!!!note ""

    Автоматические тесты Lighthouse запускались в декабре 2022 года. Из-за изменений в коде, браузерах, вспомогательных технологиях, стандартах доступности и наборах правил ваши результаты могут отличаться.

<figure class="screenshot">
  {% Img
    src="image/VbsHyyQopiec0718rMq2kTE1hke2/5SUhDMXiDYw43kt5ss3J.png",
    alt="В тесте декабря 2022 года сайт Medical Mysteries Club получил оценку Lighthouse 62.", width="800", height="421"
  %}
</figure>

### Шаг 5

Разберём по одному примеру каждой найденной автоматической проблемы доступности и исправим соответствующие стили и разметку.

#### Проблема 1: роли ARIA {#aria-roles}

Первая проблема звучит так: «У элементов с ролью ARIA [role], которым нужны дочерние элементы с определённой ролью [role], нет части или всех таких дочерних элементов. Некоторым родительским ролям ARIA нужны конкретные дочерние роли, чтобы выполнять задуманную функцию доступности». [Подробнее о правилах ролей ARIA](https://dequeuniversity.com/rules/axe/4.4/aria-required-children).

В демонстрации не проходит кнопка подписки на рассылку:

```html
<button role="list" type="submit" tabindex="1">
    Subscribe
</button>
```

<span class="solution" id="issue-1-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

У кнопки «Subscribe» рядом с полем ввода задана неверная роль ARIA. В этом случае роль можно убрать полностью.

```html
<button type="submit" tabindex="1">Subscribe</button>
```

#### Проблема 2: `aria-hidden` {#aria-hidden}

Элементы `[aria-hidden="true"]` содержат фокусируемых потомков. Фокусируемые потомки внутри элемента с `[aria-hidden="true"]` делают эти интерактивные элементы недоступными для пользователей вспомогательных технологий, например программ чтения с экрана. [Подробнее о правилах `aria-hidden`](https://dequeuniversity.com/rules/axe/4.4/aria-hidden-focus).

```html
<input
    type="email"
    placeholder="Enter your e-mail address"
    aria-hidden="true"
    tabindex="-1"
    required
/>
```

<span class="solution" id="issue-2-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

У поля ввода стоял атрибут `aria-hidden="true"`. Он скрывает элемент и всё, что в него вложено, от вспомогательных технологий.

```html
<input
    type="email"
    placeholder="Enter your e-mail address"
    tabindex="-1"
    required
/>
```

В этом случае атрибут нужно убрать с поля, чтобы люди со вспомогательными технологиями могли попасть в поле и ввести данные.

#### Проблема 3: имя кнопки {#button-name}

У кнопок нет доступного имени. Если у кнопки нет доступного имени, программа чтения с экрана объявляет её просто как «button», и пользоваться ею нельзя. [Подробнее о правилах имени кнопки](https://dequeuniversity.com/rules/axe/4.4/button-name).

```html
<button role="list" type="submit" tabindex="1">
    Subscribe
</button>
```

<span class="solution" id="issue-3-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

Когда в [проблеме 1](#aria-roles) с кнопки снимают неверную роль ARIA, слово «Subscribe» становится доступным именем кнопки. Так устроен семантический HTML-элемент кнопки. Для более сложных случаев есть и другие шаблоны.

```html
<button type="submit" tabindex="1">Subscribe</button>
```

#### Проблема 4: атрибуты `alt` у изображений {#image-alt-attributes}

У элементов изображений нет атрибутов `[alt]`. У информативных элементов должен быть короткий описательный альтернативный текст. Декоративные элементы можно пропустить пустым атрибутом alt. [Подробнее о правилах альтернативного текста изображений](https://dequeuniversity.com/rules/axe/4.4/image-alt).

```html
<a href="index.html">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/….png"
    />
</a>
```

<span class="solution" id="issue-4-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

Логотип одновременно является ссылкой. Из [модуля об изображениях](images.md) известно, что это действенное изображение, и альтернативный текст должен сообщать о назначении изображения. Обычно первое изображение на странице — логотип, поэтому можно разумно предположить, что пользователи AT это поймут, и не добавлять этот контекст в описание.

```html
<a href="index.html">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/….png"
        alt="Go to the home page."
    />
</a>
```

#### Проблема 5: текст ссылки {#link-text}

У ссылок нет различимого имени. Различимый, уникальный и доступный для фокуса текст ссылки (и альтернативный текст изображений, если они используются как ссылки) улучшает навигацию для пользователей программ чтения с экрана. [Подробнее о правилах текста ссылки](https://dequeuniversity.com/rules/axe/4.4/link-name).

```html
<a href="#!"
    ><svg><path>...</path></svg></a
>
```

<span class="solution" id="issue-5-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

Все действенные изображения на странице должны сообщать, куда ссылка отправит пользователя. Один способ — добавить к изображению альтернативный текст о назначении, как у логотипа в примере выше. Для тега `<img>` это работает хорошо, а для тегов `<svg>` — нет.

Для значков социальных сетей на `<svg>` можно взять [другой шаблон альтернативного описания](https://codepen.io/web-dot-dev/pen/poZyEZd) для SVG: поместить сведения между тегами `<a>` и `<svg>` и визуально скрыть их, добавить поддерживаемую ARIA или выбрать другой вариант. В зависимости от среды и ограничений кода один способ может быть удобнее другого. Возьмём самый простой шаблон с наилучшим покрытием вспомогательных технологий: `role="img"` на теге `<svg>` и элемент `<title>`.

```html
<a href="#!">
    <svg role="img">
        <title>Connect on our Twitter page.</title>
        <path>...</path>
    </svg>
</a>
```

#### Проблема 6: контраст цвета {#color-contrast}

У цветов фона и переднего плана недостаточный коэффициент контраста. Текст с низким контрастом многим пользователям трудно или невозможно прочитать. [Подробнее о правилах контраста цвета](https://dequeuniversity.com/rules/axe/4.4/color-contrast).

Сообщено о двух примерах.

<div class="switcher">
  <figure class="screenshot">
    <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/3Aeg1osulNGB1EVtGu8r.png" alt="Открыть скриншот в полном размере.">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/3Aeg1osulNGB1EVtGu8r.png", alt="Оценка Lighthouse для названия клуба. Контраст бирюзового значения слишком низкий.", width="320", height="228" %}
  </a>

  <figcaption>
   Название клуба, <code><div class="club-name">Medical Mysteries Club</div></code>, имеет шестнадцатеричный цвет <code>#01aa9d</code>, а фон — <code>#ffffff</code>. Коэффициент контраста цвета — 2.9:1.

<a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/3Aeg1osulNGB1EVtGu8r.png">Открыть скриншот в полном размере</a>.

  </figcaption>
  </figure>

  <figure class="screenshot">
    <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/86Iongt2UcohbzEar4Pm.png" alt="Открыть скриншот в полном размере.">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/86Iongt2UcohbzEar4Pm.png", alt="Оценка Lighthouse для текста о синдроме русалки. Контраст серого значения слишком низкий.", width="320", height="228" %}
    </a>
    <figcaption>
      У <code><b>Mermaid syndrome</b></code> шестнадцатеричный цвет текста <code>#7c7c7c</code>, а у фона — <code>#ffffff</code>. Коэффициент контраста цвета — 4.2:1.
      <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/86Iongt2UcohbzEar4Pm.png">Открыть скриншот в полном размере</a>.
    </figcaption>
  </figure>
</div>

<span class="solution" id="issue-6-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

На странице много проблем с контрастом цвета. Как сказано в модуле [цвета и контраста](color-contrast.md), обычный текст (меньше 18pt / 24px) должен иметь контраст 4.5:1, а крупный текст (не меньше 18pt / 24px или 14pt / 18.5px полужирного) и важные значки — 3:1.

Заголовок страницы набран бирюзовым цветом размером 24px, это крупный текст, поэтому ему достаточно контраста 3:1. Бирюзовые кнопки — обычный текст 16px полужирного начертания, поэтому им нужен контраст 4.5:1.

Можно найти достаточно тёмный бирюзовый цвет под 4.5:1 или увеличить текст кнопки до 18.5px полужирного и слегка изменить бирюзовый. Оба способа остаются в рамках эстетики макета.

Весь серый текст на белом фоне тоже не проходит по контрасту, кроме двух самых крупных заголовков страницы. Этот текст нужно затемнить до контраста 4.5:1.

<div class="switcher">
  <figure class="screenshot">
    <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/2JyEvvfRBNFr7YdPipLf.png" alt="Открыть скриншот в полном размере.">
      {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/2JyEvvfRBNFr7YdPipLf.png", alt="Бирюзовый цвет исправлен и больше не проваливает проверку.", width="320", height="228" %}
  </a>
  <figcaption>
    Названию клуба, <code><div class="club-name">Medical Mysteries Club</div></code>, задан цвет <code>#008576</code>, фон по-прежнему <code>#ffffff</code>. Обновлённый коэффициент контраста — 4.5:1.
    <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/2JyEvvfRBNFr7YdPipLf.png">Открыть скриншот в полном размере</a>.
  </figcaption>
  </figure>
  <figure class="screenshot">
    <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/3DgVWG6oIRRVTGYmZP3c.png" alt="Открыть скриншот в полном размере.">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/3DgVWG6oIRRVTGYmZP3c.png", alt="Серый цвет исправлен и больше не проваливает проверку.", width="320", height="228" %}
    </a>
    <figcaption>
      У <code><b>Mermaid syndrome</b></code> теперь цвет <code>#767676</code>, фон по-прежнему <code>#ffffff</code>. Коэффициент контраста цвета — 4.5:1.
      <a href="https://web-dev.imgix.net/image/VbsHyyQopiec0718rMq2kTE1hke2/3DgVWG6oIRRVTGYmZP3c.png">Открыть скриншот в полном размере</a>.
    </figcaption>
  </figure>
</div>

#### Проблема 7: структура списка {#list-structure}

Элементы списка (`<li>`) не вложены в родительские элементы `<ul>` или `<ol>`. Программам чтения с экрана нужно, чтобы элементы списка (`<li>`) находились внутри родительского `<ul>` или `<ol>`, иначе они объявляются неправильно.

[Подробнее о правилах списков](https://dequeuniversity.com/rules/axe/4.4/listitem).

```html
<div class="ul">
    <li><a href="#">About</a></li>
    <li><a href="#">Community</a></li>
    <li><a href="#">Donate</a></li>
    <li><a href="#">Q&A</a></li>
    <li><a href="#">Subscribe</a></li>
</div>
```

<span class="solution" id="issue-7-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

В демонстрации неупорядоченный список имитировали классом CSS, а не тегом `<ul>`. Из-за такой разметки пропали встроенные семантические возможности HTML этого тега. Замена класса настоящим тегом `<ul>` и правка связанного CSS устраняют проблему доступности.

```html
<ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Community</a></li>
    <li><a href="#">Donate</a></li>
    <li><a href="#">Q&A</a></li>
    <li><a href="#">Subscribe</a></li>
</ul>
```

#### Проблема 8: `tabindex` {#tabindex}

У некоторых элементов значение [tabindex] больше 0. Значение больше 0 задаёт явный порядок навигации. Формально это допустимо, но часто создаёт неудобный опыт для людей, которые пользуются вспомогательными технологиями. [Подробнее о правилах tabindex](https://dequeuniversity.com/rules/axe/4.4/tabindex).

```html
<button type="submit" tabindex="1">Subscribe</button>
```

<span class="solution" id="issue-8-solution" style="display:block;font-weight:strong; margin-top: var(--flow-space, 1em);">
  <figure data-float="left">
    {% Img src="image/VbsHyyQopiec0718rMq2kTE1hke2/dNzbda0Lx1XUeCadVLMH.svg", alt="", width="28", height="28" %}
  </figure> <strong>Исправим это.</strong>
</span>

Если нет особой причины ломать естественный порядок Tab на странице, положительное целое у атрибута tabindex не нужно. Чтобы сохранить естественный порядок, можно задать tabindex `0` или убрать атрибут совсем.

```html
<button type="submit">Subscribe</button>
```

### Шаг 6

Когда все автоматические проблемы доступности исправлены, откройте новую страницу в режиме отладки. Запустите аудит доступности Lighthouse ещё раз. Оценка должна быть заметно выше, чем при первом запуске.

<figure class="screenshot">
{% Img
  src="image/VbsHyyQopiec0718rMq2kTE1hke2/gcjuv10swXP62s1oT37d.png", alt="Оценка Lighthouse теперь 100: все проблемы Lighthouse устранены.", width="800", height="421"
%}
</figure>

Все эти автоматические исправления доступности собраны в новом [CodePen](https://codepen.io/web-dot-dev/pen/PoBZgrW).

## Следующий шаг

Вы уже многое сделали, но это ещё не конец. Дальше — ручные проверки, как описано в модуле [ручного тестирования доступности](test-manual.md).

:material-information-outline: Источник &mdash; [Automated accessibility testing](https://web.dev/learn/accessibility/test-automated)
