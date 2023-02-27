---
description: CSS-свойство inset-inline-end определяет логическую встроенную конечную вставку элемента, которая сопоставляется с физическим смещением в зависимости от режима записи элемента, направления и ориентации текста.
---

# inset-inline-end

Свойство **`inset-inline-end`** определяет логическую встроенную конечную вставку элемента, которая сопоставляется с физическим смещением в зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует `top`, `right`, `bottom` или `left` свойству в зависимости от значений, определенных для `writing-mode`, `direction` и `text-orientation`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/inset-inline-end.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логическое позиционирование"

    <div class="col3" markdown="1">

    - [inset](inset.md)
    - [inset-block](inset-block.md)
    - [inset-block-end](inset-block-end.md)
    - [inset-block-start](inset-block-start.md)
    - [inset-inline](inset-inline.md)
    - **inset-inline-end**
    - [inset-inline-start](inset-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
inset-inline-end: 3px;
inset-inline-end: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-inline-end: 10%;

/* Keyword value */
inset-inline-end: auto;

/* Global values */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: revert;
inset-inline-end: revert-layer;
inset-inline-end: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__inset-inline-end" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__inset-inline-end feature across the major browsers</p>
</p>

## Ссылки

- Свойство [`inset-inline-end`](https://developer.mozilla.org/ru/docs/Web/CSS/inset-inline-end) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#position-properties) <sup><small>Spec (англ.)</small></sup>
