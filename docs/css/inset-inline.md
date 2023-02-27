---
description: CSS-свойство inset-inline определяет логическое начальное и конечное смещения элемента во встроенном направлении, которые сопоставляются с физическими смещениями в зависимости от режима записи элемента, направления и ориентации текста.
---

# inset-inline

Свойство **`inset-inline`** определяет логическое начальное и конечное смещения элемента во встроенном направлении, которые сопоставляются с физическими смещениями в зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует `top` и `bottom` или `right` и `left` свойствам в зависимости от значений, определенных для `writing-mode`, `direction` и `text-orientation`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/inset-inline.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство является сокращением для следующих свойств CSS:

- [`inset-inline-end`](inset-inline-end.md)
- [`inset-inline-start`](inset-inline-start.md)

??? info "Логическое позиционирование"

    <div class="col3" markdown="1">

    - [inset](inset.md)
    - [inset-block](inset-block.md)
    - [inset-block-end](inset-block-end.md)
    - [inset-block-start](inset-block-start.md)
    - **inset-inline**
    - [inset-inline-end](inset-inline-end.md)
    - [inset-inline-start](inset-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__inset-inline" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__inset-inline feature across the major browsers</p>
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
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

## Ссылки

- Свойство [`inset-inline`](https://developer.mozilla.org/ru/docs/Web/CSS/inset-inline) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-inset-inline) <sup><small>Spec (англ.)</small></sup>
