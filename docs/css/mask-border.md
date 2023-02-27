---
description: Сокращенное свойство CSS mask-border позволяет создать маску по краю границы элемента.
---

# mask-border

Сокращенное свойство **`mask-border`** позволяет создать маску по краю границы элемента.

Это свойство является сокращением для следующих свойств CSS:

- [`mask-border-mode`](mask-border-mode.md)
- [`mask-border-outset`](mask-border-outset.md)
- [`mask-border-repeat`](mask-border-repeat.md)
- [`mask-border-slice`](mask-border-slice.md)
- [`mask-border-source`](mask-border-source.md)
- [`mask-border-width`](mask-border-width.md)

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [mask](mask.md)
    - **mask-border**
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
mask: none;

/* Image values */
mask: url(mask.png); /* Pixel image used as mask */
mask: url(masks.svg#star); /* Element within SVG graphic used as mask */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Element within SVG graphic used as luminance mask */
mask: url(masks.svg#star) 40px 20px; /* Element within SVG graphic used as mask positioned 40px from the top and 20px from the left */
mask: url(masks.svg#star) 0 0/50px 50px; /* Element within SVG graphic used as mask with a width and height of 50px */
mask: url(masks.svg#star) repeat-x; /* Element within SVG graphic used as horizontally repeated mask */
mask: url(masks.svg#star) stroke-box; /* Element within SVG graphic used as mask extending to the box enclosed by the stroke */
mask: url(masks.svg#star) exclude; /* Element within SVG graphic used as mask and combined with background using non-overlapping parts */

/* Global values */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;

/* Multiple masks */
mask: url(masks.svg#star) left / 16px repeat-y, /* Element within SVG graphic is used as a mask on the left-hand side with a width of 16px */
    url(masks.svg#circle) right / 16px repeat-y; /* Element within SVG graphic is used as a mask on the right-hand side with a width of 16px */
```

## Ссылки

- Свойство [`mask-border`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-border) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-border) <sup><small>Spec (англ.)</small></sup>
