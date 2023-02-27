---
description: CSS-свойство mask-repeat определяет, как повторяются изображения маски. Изображение маски может повторяться по горизонтальной оси, вертикальной оси, обеим осям или вообще не повторяться.
---

# mask-repeat

Свойство **`mask-repeat`** определяет, как повторяются изображения маски. Изображение маски может повторяться по горизонтальной оси, вертикальной оси, обеим осям или вообще не повторяться.

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
    - [mask-mode](mask-mode.md)
    - [mask-origin](mask-origin.md)
    - [mask-position](mask-position.md)
    - **mask-repeat**
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
/* One-value syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Multiple values */
mask-repeat: space round, no-repeat;
mask-repeat: round repeat, space, repeat-x;

/* Global values */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__mask-repeat" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__mask-repeat feature across the major browsers</p>
</p>

## Ссылки

- Свойство [`mask-repeat`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-repeat) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-repeat) <sup><small>Spec (англ.)</small></sup>
