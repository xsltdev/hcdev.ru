---
description: CSS-свойство inset-block-start определяет смещение начала логического блока элемента, которое сопоставляется с физической вставкой в ​​зависимости от режима записи элемента, направления и ориентации текста.
---

# inset-block-start

Свойство **`inset-block-start`** определяет смещение начала логического блока элемента, которое сопоставляется с физической вставкой в ​​зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует `top`, `right`, `bottom` или `left` в зависимости от значений, определенных для `writing-mode`, `direction` и `text-orientation`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/inset-block-start.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логическое позиционирование"

    <div class="col3" markdown="1">

    - [inset](inset.md)
    - [inset-block](inset-block.md)
    - [inset-block-end](inset-block-end.md)
    - **inset-block-start**
    - [inset-inline](inset-inline.md)
    - [inset-inline-end](inset-inline-end.md)
    - [inset-inline-start](inset-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
inset-block-start: 3px;
inset-block-start: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-block-start: 10%;

/* Keyword value */
inset-block-start: auto;

/* Global values */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: revert-layer;
inset-block-start: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__inset-block-start" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__inset-block-start feature across the major browsers</p>
</p>

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
  position: relative;
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

## Ссылки

- Свойство [`inset-block-start`](https://developer.mozilla.org/ru/docs/Web/CSS/inset-block-start) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#position-properties) <sup><small>Spec (англ.)</small></sup>
