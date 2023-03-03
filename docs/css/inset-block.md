---
description: CSS-свойство inset-block определяет начальное и конечное смещения логического блока элемента, которые сопоставляются с физическими смещениями в зависимости от режима записи элемента, направления и ориентации текста.
---

# inset-block

Свойство **`inset-block`** определяет начальное и конечное смещения логического блока элемента, которые сопоставляются с физическими смещениями в зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует верхним и нижним или правым и левым свойствам в зависимости от значений, определенных для режима письма, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/inset-block.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство является сокращением для следующих свойств CSS:

- [`inset-block-end`](inset-block-end.md)
- [`inset-block-start`](inset-block-start.md)

??? info "Логическое позиционирование"

    <div class="col3" markdown="1">

    - [inset](inset.md)
    - **inset-block**
    - [inset-block-end](inset-block-end.md)
    - [inset-block-start](inset-block-start.md)
    - [inset-inline](inset-inline.md)
    - [inset-inline-end](inset-inline-end.md)
    - [inset-inline-start](inset-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* value applied to start and end */

/* <percentage>s of the width or height of the containing block */
inset-block: 10% 5%;

/* Keyword value */
inset-block: auto;

/* Global values */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__inset-block" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

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
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

## Ссылки

- Свойство [`inset-block`](https://developer.mozilla.org/ru/docs/Web/CSS/inset-block) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-inset-block) <sup><small>Spec (англ.)</small></sup>
