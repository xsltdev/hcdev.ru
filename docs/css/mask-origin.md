---
description: Свойство CSS mask-origin устанавливает источник маски.
---

# mask-origin

Свойство **`mask-origin`** устанавливает источник маски.

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
    - **mask-origin**
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
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: margin-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Non-standard keyword values */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__mask-origin" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<p>Data on support for the mdn-css__properties__mask-origin feature across the major browsers</p>
</p>

## Ссылки

- Свойство [`mask-origin`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-origin) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-origin) <sup><small>Spec (англ.)</small></sup>
