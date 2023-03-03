---
description: Свойство CSS min-inline-size определяет минимальный горизонтальный или вертикальный размер блока элемента в зависимости от его режима записи.
---

# min-inline-size

Свойство **`min-inline-size`** определяет минимальный горизонтальный или вертикальный размер блока элемента в зависимости от его режима записи. Оно соответствует либо свойству `min-width`, либо свойству `min-height`, в зависимости от значения режима письма.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/min-inline-size.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические размеры"

    <div class="col3" markdown="1">

    - [block-size](block-size.md)
    - [inline-size](inline-size.md)
    - [max-block-size](max-block-size.md)
    - [max-inline-size](max-inline-size.md)
    - [min-block-size](min-block-size.md)
    - **min-inline-size**

    </div>

## Синтаксис

```css
/* <length> values */
min-inline-size: 100px;
min-inline-size: 5em;

/* <percentage> values */
min-inline-size: 10%;

/* Keyword values */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content(20em);

/* Global values */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__min-inline-size" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`min-inline-size`](https://developer.mozilla.org/ru/docs/Web/CSS/min-inline-size) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-min-inline-size) <sup><small>Spec (англ.)</small></sup>
