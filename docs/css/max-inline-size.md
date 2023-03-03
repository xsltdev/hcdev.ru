---
description: Свойство CSS max-inline-size определяет максимальный размер блока элемента по горизонтали или вертикали в зависимости от его режима записи.
---

# max-inline-size

Свойство **`max-inline-size`** определяет максимальный размер блока элемента по горизонтали или вертикали в зависимости от его режима записи. Оно соответствует либо свойству [`max-width`](max-width.md), либо свойству [`max-height`](max-height.md), в зависимости от значения режима записи.

Если режим письма ориентирован вертикально, значение `max-inline-size` относится к максимальной высоте элемента; в противном случае это относится к максимальной ширине элемента. Связанное свойство [`max-block-size`](max-block-size.md) определяет другое измерение элемента.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/max-inline-size.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические размеры"

    <div class="col3" markdown="1">

    - [block-size](block-size.md)
    - [inline-size](inline-size.md)
    - [max-block-size](max-block-size.md)
    - **max-inline-size**
    - [min-block-size](min-block-size.md)
    - [min-inline-size](min-inline-size.md)

    </div>

## Синтаксис

```css
/* <length> values */
max-inline-size: 300px;
max-inline-size: 25em;

/* <percentage> values */
max-inline-size: 75%;

/* Keyword values */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content(20em);

/* Global values */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: revert;
max-inline-size: revert-layer;
max-inline-size: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__max-inline-size" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`max-inline-size`](https://developer.mozilla.org/ru/docs/Web/CSS/max-inline-size) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-max-inline-size) <sup><small>Spec (англ.)</small></sup>
