---
description: Свойство CSS mask-border-source устанавливает исходное изображение, используемое для создания границы маски элемента.
---

# mask-border-source

Свойство **`mask-border-source`** устанавливает исходное изображение, используемое для создания границы маски элемента.

Свойство `mask-border-slice` используется для разделения исходного изображения на области, которые затем динамически применяются к конечной границе маски.

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [mask](mask.md)
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - [mask-border-slice](mask-border-slice.md)
    - **mask-border-source**
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
/* Keyword value */
mask-border-source: none;

/* <image> values */
mask-border-source: url(image.jpg);
mask-border-source: linear-gradient(to top, red, yellow);

/* Global values */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: revert;
mask-border-source: revert-layer;
mask-border-source: unset;
```

## Ссылки

- Свойство [`mask-border-source`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-border-source) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-border-source) <sup><small>Spec (англ.)</small></sup>
