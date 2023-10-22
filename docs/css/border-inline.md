---
description: CSS-свойство border-inline — это сокращенное свойство для установки значений отдельных логических встроенных свойств границы в одном месте таблицы стилей.
---

# border-inline

Свойство **`border-inline`** — это сокращенное свойство для установки значений отдельных логических встроенных свойств границы в одном месте таблицы стилей.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-inline.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Физические границы, на которые сопоставляется встроенная граница, зависят от режима записи элемента, его направления и ориентации текста. Он соответствует свойствам `border-top` и `border-bottom` или `border-right` и `border-left`, в зависимости от значений, определенных для режима письма, направления и ориентации текста.

Границы в другом измерении могут быть установлены с помощью блока границы, который устанавливает начало блока границы и конец блока границы.

Это свойство является сокращением для следующих свойств CSS:

-   `border-inline-color`
-   `border-inline-style`
-   `border-inline-width`

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
    - **border-inline**
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
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Global values */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

## Значения

`border-inline` указывается одним или несколькими из следующих элементов в любом порядке:

`<'border-width'>`

: Ширина границы.

`<'border-style'>`

: Стиль линии границы.

`<'color'>`

: Цвет границы.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-inline" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

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
    border-inline: 5px dashed blue;
}
```

## Ссылки

-   Свойство [`border-inline`](https://developer.mozilla.org/ru/docs/Web/CSS/border-inline) <sup><small>MDN (рус.)</small></sup>
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-border-inline) <sup><small>Spec (англ.)</small></sup>
