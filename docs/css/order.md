---
description: Свойство order определяет порядок вывода флексов внутри флекс-контейнера
---

# order

Свойство **`order`** определяет порядок вывода флексов внутри флекс-контейнера.

Элементы располагаются согласно значениям свойства `order` от меньшего к большему. При равных значениях `order` элементы выводятся в том порядке, в каком они появляются в исходном коде.

Поскольку `order` предназначен только для воздействия на _визуальный порядок_ элементов, а не на их логический порядок или порядок вкладок, `order` не должен использоваться для невизуальных медиа, таких как речь.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/order.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Flexbox и выравнивание"

    <div class="col3" markdown="1">

    - [flex](flex.md)
    - [flex-basis](flex-basis.md)
    - [flex-direction](flex-direction.md)
    - [flex-flow](flex-flow.md)
    - [flex-grow](flex-grow.md)
    - [flex-shrink](flex-shrink.md)
    - [flex-wrap](flex-wrap.md)
    - **order**

    </div>

    <div class="col3" markdown="1">

    - [justify-content](justify-content.md)
    - [align-content](align-content.md)
    - [place-content](place-content.md)
    - [justify-items](justify-items.md)
    - [align-items](align-items.md)
    - [place-items](place-items.md)
    - [justify-self](justify-self.md)
    - [align-self](align-self.md)
    - [place-self](place-self.md)
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* <integer> values */
order: 5;
order: -5;

/* Global values */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

## Значения

|                       |                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| Значение по-умолчанию | `0`                                                                                                  |
| Наследуется           | нет                                                                                                  |
| Применяется           | Элементы flex, элементы grid и абсолютно позиционированные дочерние элементы контейнеров flex и grid |
| Анимируется           | да                                                                                                   |

В качестве значения принимается любое целое число, включая отрицательные числа и ноль.

## Проблемы доступности

Использование свойства `order` создаст несоответствие между визуальным представлением содержимого и порядком DOM. Это негативно скажется на пользователях со слабым зрением, осуществляющих навигацию с помощью вспомогательных технологий, таких как устройство чтения с экрана. Если визуальный (css) порядок важен, то пользователи скринридеров не будут иметь доступа к правильному порядку чтения.

## Спецификации

-   [CSS Display Module Level 3](https://drafts.csswg.org/css-display/#order-property)
-   [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-order)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__order" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

Примеры использования CSS свойства `order`:

### Пример 1

=== "HTML"

    ```html
    <header>…</header>
    <main>
    	<article>Article</article>
    	<nav>Nav</nav>
    	<aside>Aside</aside>
    </main>
    <footer>…</footer>
    ```

=== "CSS"

    ```css
    main {
    	display: flex;
    	text-align: center;
    }
    main > article {
    	flex: 1;
    	order: 2;
    }
    main > nav {
    	width: 200px;
    	order: 1;
    }
    main > aside {
    	width: 200px;
    	order: 3;
    }
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Ordering items in a flex container sample" id="frame_ordering_items_in_a_flex_container" src="https://live-samples.mdn.mozilla.net/en-US/docs/Web/CSS/order/_sample_.ordering_items_in_a_flex_container.html" loading="lazy" width="100%"></iframe>

### Пример 2

=== "HTML"

    <div markdown style="max-height: 400px; overflow-y: auto;">

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>order</title>
        <style>
          .flex-container {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-flow: row wrap;
          }
          .flex-item {
            background: #69489d;
            color: white;
            padding: 20px 30px;
            margin: 5px;
            font-size: 2em;
          }
          .flex-item:nth-of-type(1) {
            order: 5;
          }
          .flex-item:nth-of-type(2) {
            order: 4;
          }
          .flex-item:nth-of-type(3) {
            order: 3;
          }
          .flex-item:nth-of-type(4) {
            order: 2;
          }
          .flex-item:nth-of-type(5) {
            order: 1;
          }
        </style>
      </head>
      <body>
        <ul class="flex-container">
          <li class="flex-item">1</li>
          <li class="flex-item">2</li>
          <li class="flex-item">3</li>
          <li class="flex-item">4</li>
          <li class="flex-item">5</li>
        </ul>
      </body>
    </html>
    ```

    </div>

=== "Результат"

    <style>
    .flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    }
    .flex-item {
    background: #69489d;
    color: white;
    padding: 20px 30px;
    margin: 5px;
    font-size: 2em;
    }
    .flex-item:nth-of-type(1) { order: 5; }
    .flex-item:nth-of-type(2) { order: 4; }
    .flex-item:nth-of-type(3) { order: 3; }
    .flex-item:nth-of-type(4) { order: 2; }
    .flex-item:nth-of-type(5) { order: 1; }
    </style>
    <ul class="flex-container">
    <li class="flex-item">1</li>
    <li class="flex-item">2</li>
    <li class="flex-item">3</li>
    <li class="flex-item">4</li>
    <li class="flex-item">5</li>
    </ul>

## См. также

-   [Руководство по Flexbox](/flex/)
-   [Руководство по Grid Layout](/grid/)
-   [https://developer.mozilla.org/docs/Web/CSS/order](https://developer.mozilla.org/docs/Web/CSS/order)
