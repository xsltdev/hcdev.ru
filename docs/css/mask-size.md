---
description: Свойство CSS mask-size указывает размеры изображений маски. Размер изображения может быть полностью или частично ограничен, чтобы сохранить его внутреннее соотношение.
---

# mask-size

Свойство **`mask-size`** указывает размеры изображений маски. Размер изображения может быть полностью или частично ограничен, чтобы сохранить его внутреннее соотношение.

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
    - [mask-repeat](mask-repeat.md)
    - **mask-size**
    - [mask-type](mask-type.md)

    </div>

    <div class="col3" markdown="1">

    - [shape-image-threshold](shape-image-threshold.md)
    - [shape-margin](shape-margin.md)
    - [shape-outside](shape-outside.md)

    </div>

## Синтаксис

```css
/* Keywords syntax */
mask-size: cover;
mask-size: contain;

/* One-value syntax */
/* the width of the image (height set to 'auto') */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
mask-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
mask-size: 50% auto;
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto auto;

/* Multiple values */
/* Do not confuse this with mask-size: auto auto */
mask-size: auto, auto;
mask-size: 50%, 25%, 25%;
mask-size: 6px, auto, contain;

/* Global values */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__mask-size" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__mask-size feature across the major browsers</p>
</p>

## Ссылки

- Свойство [`mask-size`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-size) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-size) <sup><small>Spec (англ.)</small></sup>
