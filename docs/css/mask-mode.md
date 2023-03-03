---
description: CSS-свойство mask-mode устанавливает, будет ли ссылка на маску, определенная в mask-image, рассматриваться как яркостная или альфа-маска.
---

# mask-mode

Свойство **`mask-mode`** устанавливает, будет ли ссылка на маску, определенная в `mask-image`, рассматриваться как яркостная или альфа-маска.

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [mask](mask.md)
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - [mask-border-slice](mask-border-slice.md)
    - [mask-border-source](mask-border-source.md)
    - [mask-border-width](mask-border-width.md)
    - [mask-clip](mask-clip.md)
    - [mask-composite](mask-composite.md)
    - [mask-image](mask-image.md)
    - **mask-mode**
    - [mask-origin](mask-origin.md)
    - [mask-position](mask-position.md)
    - [mask-repeat](mask-repeat.md)
    - [mask-size](mask-size.md)
    - [mask-type](mask-type.md)

    </div>

    <div class="col3" markdown="1">

    - [shape-image-threshold](shape-image-threshold.md)
    - [shape-margin](shape-margin.md)
    - [shape-outside](shape-outside.md)

    </div>

## Синтаксис

```css
/* Keyword values */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Multiple values */
mask-mode: alpha, match-source;

/* Global values */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__mask-mode" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`mask-mode`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-mode) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-mode) <sup><small>Spec (англ.)</small></sup>
