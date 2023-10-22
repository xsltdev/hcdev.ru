---
description: Свойство CSS border-inline-end — это сокращенное свойство для установки значений отдельных логических свойств границы inline-end в одном месте таблицы стилей.
---

# border-inline-end

Свойство **`border-inline-end`** — это сокращенное свойство для установки значений отдельных логических свойств границы `inline-end` в одном месте таблицы стилей.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-inline-end.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство является сокращением для следующих свойств CSS:

-   `border-inline-end-color`
-   `border-inline-end-style`
-   `border-inline-end-width`

??? info "Логические границы"

    <div class="col3" markdown="1">

    - [border-block](border-block.md)
    - [border-block-color](border-block-color.md)
    - [border-block-end](border-block-end.md)
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
    - **border-inline-end**
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
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* Global values */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: revert-layer;
border-inline-end: unset;
```

Физическая граница, на которую сопоставляется `border-inline-end`, зависит от режима записи элемента, направленности и ориентации текста. Он соответствует свойству `border-top`, `border-right`, `border-bottom` или `border-left` в зависимости от значений, определенных для режима письма, направления и ориентации текста.

Связанные свойства — это `border-block-start`, `border-block-end` и `border-inline-start`, которые определяют другие границы элемента.

## Значения

`border-inline-end` задается одним или несколькими из следующих элементов в любом порядке:

`<'border-width'>`

: Ширина границы.

`<'border-style'>`

: Стиль линии границы.

`<'color'>`

: Цвет границы.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-inline-end" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

HTML

```html
<div>
    <p class="exampleText">Example text</p>
</div>
```

CSS

```css
div {
    background-color: yellow;
    width: 120px;
    height: 120px;
}

.exampleText {
    writing-mode: vertical-rl;
    border-inline-end: 5px dashed blue;
}
```

## Ссылки

-   Свойство [`border-inline-end`](https://developer.mozilla.org/ru/docs/Web/CSS/border-inline-end) <sup><small>MDN (рус.)</small></sup>
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#border-shorthands) <sup><small>Spec (англ.)</small></sup>
