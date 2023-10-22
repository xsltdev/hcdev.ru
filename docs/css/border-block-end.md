---
description: Свойство CSS border-block-end — это сокращенное свойство для установки отдельных значений свойства границы логического конца блока в одном месте таблицы стилей.
---

# border-block-end

Свойство `border-block-end` — это сокращенное свойство для установки отдельных значений свойства границы логического конца блока в одном месте таблицы стилей.

Это свойство является сокращением для следующих свойств CSS:

-   `border-block-end-color`
-   `border-block-end-style`
-   `border-block-end-width`

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-block-end.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические границы"

    <div class="col3" markdown="1">

    - [border-block](border-block.md)
    - [border-block-color](border-block-color.md)
    - **border-block-end**
    - [border-block-end-color](border-block-end-color.md)
    - [border-block-end-style](border-block-end-style.md)
    - [border-block-end-width](border-block-end-width.md)
    - [border-block-start](border-block-start.md)
    - [border-block-start-color](border-block-start-color.md)
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
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* Global values */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` можно использовать для установки значений для одного или нескольких из `border-block-end-width`, `border-block-end-style` и `border-block-end-color`. Физическая граница, на которую он сопоставляется, зависит от режима записи элемента, его направления и ориентации текста. Он соответствует свойству `border-top`, `border-right`, `border-bottom` или `border-left` в зависимости от значений, определенных для режима письма, направления и ориентации текста.

Связанные свойства — это `border-block-start`, `border-inline-start` и `border-inline-end`, которые определяют другие границы элемента.

## Значения

`border-block-end` определяется одним или несколькими из следующих элементов в любом порядке:

`<ширин границ>`

: Ширина границы.

`<стиль границы>`

: Стиль линии границы.

`<цвет>`

: Цвет границы.

## Определение

|  |  |
| --- | --- |
| Начальное значение | `border-top-width: medium`<br />`border-top-style: none`<br />`border-top-color: currentcolor` |
| Применяется ко | всем элементам |
| Наследуется | нет |

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-block-end" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

```css
div {
    background-color: yellow;
    width: 120px;
    height: 120px;
}

.exampleText {
    writing-mode: vertical-rl;
    border-block-end: 5px dashed blue;
}
```

## Ссылки

-   Свойство [`border-block-end`](https://developer.mozilla.org/ru/docs/Web/CSS/border-block-end) <sup><small>MDN (рус.)</small></sup>
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#border-shorthands) <sup><small>Spec (англ.)</small></sup>
