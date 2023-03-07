---
description: Свойство CSS shape-outside определяет форму, которая может быть непрямоугольной, вокруг которой должно оборачиваться соседнее встроенное содержимое.
---

# shape-outside

Свойство **`shape-outside`** определяет форму, которая может быть непрямоугольной, вокруг которой должно оборачиваться соседнее встроенное содержимое.

По умолчанию встроенный контент обтекает поле поля; `shape-outside` предоставляет способ настройки этого обтекания, что позволяет обтекать текст вокруг сложных объектов, а не простых блоков.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/shape-outside.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

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
    - [mask-size](mask-size.md)
    - [mask-type](mask-type.md)

    </div>

    <div class="col3" markdown="1">

    - [shape-image-threshold](shape-image-threshold.md)
    - [shape-margin](shape-margin.md)
    - **shape-outside**

    </div>

## Синтаксис

```css
/* Keyword values */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Function values */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
shape-outside: path(
  'M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z'
);

/* <url> value */
shape-outside: url(image.png);

/* <gradient> value */
shape-outside: linear-gradient(
  45deg,
  rgba(255, 255, 255, 0) 150px,
  red 150px
);

/* Global values */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__shape-outside" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`shape-outside`](https://developer.mozilla.org/ru/docs/Web/CSS/shape-outside) <sup><small>MDN (рус.)</small></sup>
- [CSS Shapes Module Level 1](https://w3c.github.io/csswg-drafts/css-shapes/#shape-outside-property) <sup><small>Spec (англ.)</small></sup>
