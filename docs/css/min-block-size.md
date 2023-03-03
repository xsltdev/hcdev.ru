---
description: Свойство CSS min-block-size определяет минимальный горизонтальный или вертикальный размер блока элемента в зависимости от его режима записи.
---

# min-block-size

Свойство **`min-block-size`** определяет минимальный горизонтальный или вертикальный размер блока элемента в зависимости от его режима записи. Оно соответствует либо свойству [`min-width`](min-width.md), либо свойству [`min-height`](min-height.md), в зависимости от значения режима письма.

Если режим письма ориентирован вертикально, значение `min-block-size` относится к минимальной ширине элемента; вs противном случае это относится к минимальной высоте элемента. Связанное свойство [`min-inline-size`](min-inline-size.md) определяет другое измерение элемента.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/min-block-size.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические размеры"

    <div class="col3" markdown="1">

    - [block-size](block-size.md)
    - [inline-size](inline-size.md)
    - [max-block-size](max-block-size.md)
    - [max-inline-size](max-inline-size.md)
    - **min-block-size**
    - [min-inline-size](min-inline-size.md)

    </div>

## Синтаксис

```css
/* <length> values */
min-block-size: 100px;
min-block-size: 5em;

/* <percentage> values */
min-block-size: 10%;

/* Keyword values */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content(20em);

/* Global values */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__min-block-size" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`min-block-size`](https://developer.mozilla.org/ru/docs/Web/CSS/min-block-size) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-min-block-size) <sup><small>Spec (англ.)</small></sup>
