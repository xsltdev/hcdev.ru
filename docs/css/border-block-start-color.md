---
description: Свойство CSS border-block-start-color определяет цвет логической границы начала блока элемента, который сопоставляется с цветом физической границы в зависимости от режима письма элемента, направления и ориентации текста.
---

# border-block-start-color

Свойство **`border-block-start-color`** определяет цвет логической границы начала блока элемента, который сопоставляется с цветом физической границы в зависимости от режима письма элемента, направления и ориентации текста. Он соответствует свойству `border-top-color`, `border-right-color`, `border-bottom-color` или `border-left-color` в зависимости от значений, определенных `writing-mode`, `direction` и `text-orientation`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-block-start-color.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические границы"

    <div class="col3" markdown="1">

    - [border-block](border-block.md)
    - [border-block-color](border-block-color.md)
    - [border-block-end](border-block-end.md)
    - [border-block-end-color](border-block-end-color.md)
    - [border-block-end-style](border-block-end-style.md)
    - [border-block-end-width](border-block-end-width.md)
    - [border-block-start](border-block-start.md)
    - **border-block-start-color**
    - [border-block-start-style](border-block-start-style.md)
    - [border-block-start-width](border-block-start-width.md)
    - [border-block-style](border-block-style.md)
    - [border-block-width](border-block-width.md)
    - [border-inline](border-inline.md)
    - [border-inline-color](border-inline-color.md)
    - [border-inline-end](border-inline-end.md)
    - [border-inline-end-color](border-inline-end-color.md)
    - [border-inline-end-style](border-inline-end-style.md)
    - [border-inline-end-width](border-inline-end-width.md)
    - [border-inline-start](border-inline-start.md)
    - [border-inline-start-color](border-inline-start-color.md)
    - [border-inline-start-style](border-inline-start-style.md)
    - [border-inline-start-width](border-inline-start-width.md)
    - [border-inline-style](border-inline-style.md)
    - [border-inline-width](border-inline-width.md)
    - [border-start-start-radius](border-start-start-radius.md)
    - [border-start-end-radius](border-start-end-radius.md)
    - [border-end-start-radius](border-end-start-radius.md)
    - [border-end-end-radius](border-end-end-radius.md)

    </div>

## Синтаксис

```css
border-block-start-color: blue;
border-block-start-color: #4c5d21;

/* Global values */
border-block-start-color: inherit;
border-block-start-color: initial;
border-block-start-color: revert;
border-block-start-color: revert-layer;
border-block-start-color: unset;
```

Связанные свойства — это `border-block-end-color`, `border-inline-start-color` и `border-inline-end-color`, которые определяют другие цвета границы элемента.

## Значения

`<цвет>`

: Цвет границы

## Определение

|                      |                  |
| -------------------- | ---------------- |
| Начальное значение   | `currentcolor`   |
| Применяется ко       | всем элементам   |
| Наследуется          | нет              |
| Вычисленное значение | вычисленный цвет |
| Тип анимации         | как цвет         |

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-block-start-color" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

```css
div {
    background-color: yellow;
    width: 120px;
    height: 120px;
}

.exampleText {
    writing-mode: vertical-lr;
    border: 10px solid blue;
    border-block-start-color: red;
}
```

## Ссылки

-   Свойство [`border-block-start-color`](https://developer.mozilla.org/ru/docs/Web/CSS/border-block-start-color) <sup><small>MDN (рус.)</small></sup>
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#border-color) <sup><small>Spec (англ.)</small></sup>
