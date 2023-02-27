---
description: CSS-свойство inset-block-end определяет смещение конца логического блока элемента, которое сопоставляется с физической вставкой в ​​зависимости от режима записи элемента, направления и ориентации текста.
---

# inset-block-end

Свойство **`inset-block-end`** определяет смещение конца логического блока элемента, которое сопоставляется с физической вставкой в ​​зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует `top`, `right`, `bottom` или `left` свойству в зависимости от значений, определенных для `writing-mode`, `direction` и `text-orientation`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/inset-block-end.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логическое позиционирование"

    <div class="col3" markdown="1">

    - [inset](inset.md)
    - [inset-block](inset-block.md)
    - **inset-block-end**
    - [inset-block-start](inset-block-start.md)
    - [inset-inline](inset-inline.md)
    - [inset-inline-end](inset-inline-end.md)
    - [inset-inline-start](inset-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
inset-block-end: 3px;
inset-block-end: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-block-end: 10%;

/* Keyword value */
inset-block-end: auto;

/* Global values */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: revert;
inset-block-end: revert-layer;
inset-block-end: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__inset-block-end" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__inset-block-end feature across the major browsers</p>
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
  writing-mode: vertical-rl;
  position: relative;
  inset-block-end: 20px;
  background-color: #c8c800;
}
```

## Ссылки

- Свойство [`inset-block-end`](https://developer.mozilla.org/ru/docs/Web/CSS/inset-block-end) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#position-properties) <sup><small>Spec (англ.)</small></sup>
