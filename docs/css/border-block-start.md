---
description: Свойство CSS border-block-start — это сокращенное свойство для установки значений отдельных свойств границы логического начала блока в одном месте таблицы стилей.
---

# border-block-start

Свойство **`border-block-start`** — это сокращенное свойство для установки значений отдельных свойств границы логического начала блока в одном месте таблицы стилей.

Это свойство является сокращением для следующих свойств CSS:

-   [`border-block-start-color`](border-block-start-color.md)
-   [`border-block-start-style`](border-block-start-style.md)
-   [`border-block-start-width`](border-block-start-width.md)

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-block-start.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические границы"

    <div class="col3" markdown="1">

    - [border-block](border-block.md)
    - [border-block-color](border-block-color.md)
    - [border-block-end](border-block-end.md)
    - [border-block-end-color](border-block-end-color.md)
    - [border-block-end-style](border-block-end-style.md)
    - [border-block-end-width](border-block-end-width.md)
    - **border-block-start**
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
border-block-start: 1px;
border-block-start: 2px dotted;
border-block-start: medium dashed blue;

/* Global values */
border-block-start: inherit;
border-block-start: initial;
border-block-start: revert;
border-block-start: revert-layer;
border-block-start: unset;
```

`border-block-start` можно использовать для установки значений для одного или нескольких параметров: `border-block-start-width`, `border-block-start-style` и `border-block-start-color`. Физическая граница, на которую он сопоставляется, зависит от режима записи элемента, его направления и ориентации текста. Он соответствует свойству `border-top`, `border-right`, `border-bottom` или `border-left` в зависимости от значений, определенных для `writing-mode`, `direction` или `text-orientation`.

Связанные свойства — это `border-block-end`, `border-inline-start` и `border-inline-end`, которые определяют другие границы элемента.

## Значения

`border-block-start` указывается одним или несколькими из следующих элементов в любом порядке:

`<'border-width'>`

: Ширина границы.

`<'border-style'>`

: Стиль линии границы.

`<'color'>`

: Цвет границы.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-block-start" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

=== HTML

    ```html
    <div>
    	<p class="exampleText">Example text</p>
    </div>
    ```

=== CSS

    ```css
    div {
    	background-color: yellow;
    	width: 120px;
    	height: 120px;
    }

    .exampleText {
    	writing-mode: vertical-rl;
    	border-block-start: 5px dashed blue;
    }
    ```

## Ссылки

-   Свойство [`border-block-start`](https://developer.mozilla.org/ru/docs/Web/CSS/border-block-start) <sup><small>MDN (рус.)</small></sup>
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#border-shorthands) <sup><small>Spec (англ.)</small></sup>
