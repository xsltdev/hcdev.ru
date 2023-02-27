---
description: Свойство CSS mask-border-slice делит изображение, заданное источником mask-border-source, на области. Эти области используются для формирования компонентов границы маски элемента.
---

# mask-border-slice

Свойство **`mask-border-slice`** делит изображение, заданное источником [`mask-border-source`](mask-border-source.md), на области. Эти области используются для формирования компонентов границы маски элемента.

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [mask](mask.md)
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - **mask-border-slice**
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
/* All sides */
mask-border-slice: 30%;

/* top and bottom | left and right */
mask-border-slice: 10% 30%;

/* top | left and right | bottom */
mask-border-slice: 30 30% 45;

/* top | right | bottom | left */
mask-border-slice: 7 12 14 5;

/* Using the `fill` keyword */
mask-border-slice: 10% fill 7 12;

/* Global values */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: revert;
mask-border-slice: revert-layer;
mask-border-slice: unset;
```

## Ссылки

- Свойство [`mask-border-slice`](https://developer.mozilla.org/ru/docs/Web/CSS/mask-border-slice) <sup><small>MDN (рус.)</small></sup>
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking/#the-mask-border-slice) <sup><small>Spec (англ.)</small></sup>
