---
description: CSS предоставляет несколько способов управлять счётчиками списка под разные задачи.
icon: material/counter
---

# Счётчики

<big>CSS предоставляет несколько способов управлять **счётчиками** списка под разные задачи.</big>

Многие виды содержимого лучше всего представлять HTML-[списком](../html5/lists.md). В упорядоченном содержимом, например в шагах рецепта или сносках к статье, маркер часто тоже несет информацию. CSS дает несколько способов управлять счётчиками списка.

## Стили списка

Есть широкий набор готовых типов стиля списка: числа, алфавит, римские цифры и многие международные системы счета.

<iframe src="https://codepen.io/web-dot-dev/embed/rNKPRrJ?height=500&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Помимо стилей, которые поддерживают браузеры, W3C опубликовал [готовые стили счётчиков](https://w3c.github.io/predefined-counter-styles): еще 181 стиль для 45 систем письменности.

Если этих вариантов недостаточно, можно определить собственный [`@counter-style`](https://developer.mozilla.org/docs/Web/CSS/@counter-style). Он позволяет задать свои символы, префикс, суффикс и другое.

<iframe src="https://codepen.io/web-dot-dev/embed/azvYeOG?height=500&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

По умолчанию маркер пункта имеет значение `outside`: он стоит перед списком и выровнен по правому краю. Маркер можно поместить и внутрь списка с помощью `list-style-position: inside`.

## Счётчики

Стили списка управляют тем, как отображаются маркеры пунктов, а счётчики — тем, какие значения показываются. Для элементов списка `<li>` браузер создает счётчик `list-item`, который увеличивается на 1 для каждого встреченного пункта.

Счётчики CSS ведут нарастающий подсчет того, сколько раз отрисован элемент, у которого задано соответствующее значение `counter-increment`.

Чтобы создать новый счётчик, используйте `counter-reset` с именем счётчика и, при необходимости, начальным значением. Часто это свойство задают родительскому элементу, внутри которого лежат все подсчитываемые элементы.

!!!note ""

    `counter-reset`, который инициализирует счётчик начальным значением и направлением, не следует путать с `counter-set`, который только задает значение уже существующего счётчика.

Затем добавьте свойство `counter-increment` каждому элементу, который нужно посчитать.

Наконец, выведите значение счётчика функцией `counter()`.

В этом примере нарастающий номер сноски нужно показать как текст ссылки на каждую сноску. Поскольку для всего документа нужен один счётчик, на `body` задается `counter-reset: note`, а у каждой ссылки-сноски счётчик увеличивается.

<iframe src="https://codepen.io/web-dot-dev/embed/wBKmVKK?height=500&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Можно вести и несколько счётчиков для разных элементов. Что, если в примере со сносками нужно показать номер раздела и абзаца, в которых находится сноска?

Счётчик разделов можно создать на `body` с помощью `counter-reset`, а затем увеличивать его на каждом элементе `<h2>`. Счётчик абзацев должен сбрасываться в каждом разделе, поэтому `counter-reset` задается элементам `<h2>`, а увеличение — элементам `<p>`.

Наконец, значения счётчиков объединяются в свойстве `content`.

```css
a:after {
  content: "(S" counter(section) "P" counter(paragraph) "N" counter(note) ")";
  font-size: small;
  vertical-align: super;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/VYLNybr?height=500&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Вложенные счётчики

Что происходит, когда список вложен в другой список? Счётчик `list-item` инициализируется для каждого элемента `<ul>` или `<ol>`, а `counter()` возвращает только номер самого внутреннего счётчика. Чтобы показать значение каждого из вложенных счётчиков, используйте функцию `counters()`: ей передают имя счётчика и разделитель.

```css
li::marker {
  content: counters(list-item, ".")
  }
```

<iframe src="https://codepen.io/web-dot-dev/embed/azvYevG?height=500&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Обратный отсчет

По умолчанию счётчики (включая неявный счётчик `list-item` у элементов `<ol>`) начинаются с 0 и увеличиваются на единицу для каждого элемента, то есть первый получит номер 1. Что, если нужен обратный отсчет до 1?

Для этого добавьте элементу `<ol>` атрибут `reversed`. При стандартном стиле списка маркеры сработают как ожидается. Если же используется собственный счётчик, задайте `counter-increment` отрицательное значение и вручную вычислите начальное значение счётчика.

<iframe src="https://codepen.io/web-dot-dev/embed/RNWMXWm?height=500&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

:material-information-outline: Источник &mdash; [Counters](https://web.dev/learn/css/counters)
