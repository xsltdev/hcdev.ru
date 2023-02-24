---
description: Свойство CSS border-inline-width определяет ширину логических встроенных границ элемента, которая сопоставляется с шириной физической границы в зависимости от режима записи элемента, направления и ориентации текста.
---

# border-inline-width

Свойство **`border-inline-width`** определяет ширину логических встроенных границ элемента, которая сопоставляется с шириной физической границы в зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует свойствам `border-top-width` и `border-bottom-width` или `border-left-width` и `border-right-width` в зависимости от значений, определенных для режима письма, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-inline-width.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Ширина границы в другом измерении может быть установлена ​​с помощью `border-block-width`, которая устанавливает `border-block-start-width` и `border-block-end-width`.

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
    - [border-inline-end](border-inline-end.md)
    - [border-inline-end-color](border-inline-end-color.md)
    - [border-inline-end-style](border-inline-end-style.md)
    - [border-inline-end-width](border-inline-end-width.md)
    - [border-inline-start](border-inline-start.md)
    - [border-inline-start-color](border-inline-start-color.md)
    - [border-inline-start-style](border-inline-start-style.md)
    - [border-inline-start-width](border-inline-start-width.md)
    - [border-inline-style](border-inline-style.md)
    - **border-inline-width**
    - [border-start-start-radius](border-start-start-radius.md)
    - [border-start-end-radius](border-start-end-radius.md)
    - [border-end-start-radius](border-end-start-radius.md)
    - [border-end-end-radius](border-end-end-radius.md)

    </div>

## Синтаксис

```css
/* <'border-width'> values */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;

/* Global values */
border-inline-width: inherit;
border-inline-width: initial;
border-inline-width: revert;
border-inline-width: revert-layer;
border-inline-width: unset;
```

## Значения

`<'border-width'>`
: Ширина границы.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-inline-width" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

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
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-width: 5px 10px;
}
```

## Ссылки

- Свойство [`border-inline-width`](https://developer.mozilla.org/ru/docs/Web/CSS/border-inline-width) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-border-inline-width) <sup><small>Spec (англ.)</small></sup>
