---
description: CSS-свойство image-orientation задает независимую от макета коррекцию ориентации изображения.
---

# image-orientation

Свойство **`image-orientation`** задает независимую от макета коррекцию ориентации изображения.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/image-orientation.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Изображения, фильтры, композиция"

    <div class="col3" markdown="1">

    - **image-orientation**
    - [image-rendering](image-rendering.md)
    - [image-resolution](image-resolution.md)
    - [object-fit](object-fit.md)
    - [object-position](object-position.md)

    </div>

    <div class="col3" markdown="1">

    - [linear-gradient()](linear-gradient.md)
    - [radial-gradient()](radial-gradient.md)
    - [repeating-linear-gradient()](repeating-linear-gradient.md)
    - [repeating-radial-gradient()](repeating-radial-gradient.md)
    - [conic-gradient()](conic-gradient.md)
    - [repeating-conic-gradient()](repeating-conic-gradient.md)
    - [url()](url.md)
    - [element()](element.md)
    - [image()](image.md)
    - [cross-fade()](cross-fade.md)

    </div>

    <div class="col3" markdown="1">

    - [backdrop-filter](backdrop-filter.md)
    - [filter](filter.md)

    </div>

    <div class="col3" markdown="1">

    - [background-blend-mode](background-blend-mode.md)
    - [isolation](isolation.md)
    - [mix-blend-mode](mix-blend-mode.md)

    </div>

    <div class="col3" markdown="1">

    - [contain](contain.md)
    - [contain-intrinsic-block-size](contain-intrinsic-block-size.md)
    - [contain-intrinsic-height](contain-intrinsic-height.md)
    - [contain-intrinsic-inline-size](contain-intrinsic-inline-size.md)
    - [contain-intrinsic-size](contain-intrinsic-size.md)
    - [contain-intrinsic-width](contain-intrinsic-width.md)
    - [container](container.md)
    - [container-name](container-name.md)
    - [container-type](container-type.md)
    - [@container](container-at-rule.md)
    - [content-visibility](content-visibility.md)

    </div>

## Синтаксис

```css
/* keyword values */
image-orientation: none;
image-orientation: from-image; /* Use EXIF data from the image */

/* Global values */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

## Значения

`none`
: Не применяет никакого дополнительного поворота изображения; изображение ориентировано в соответствии с кодировкой или в соответствии с другими значениями свойств CSS.

`from-image`
: Начальное значение по умолчанию. Информация EXIF, содержащаяся в изображении, используется для соответствующего поворота изображения.

!!!warning ""

    `image-orientation: none;` не отменяет ориентацию изображений незащищенного происхождения, закодированную их информацией EXIF, из соображений безопасности.

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-image-orientation" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-image-orientation.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-image-orientation.png">
<img src="https://caniuse.bitsofco.de/image/css-image-orientation.jpg" alt="Data on support for the css-image-orientation feature across the major browsers from caniuse.com">
</picture>
</p>

## Ссылки

- Свойство [`image-orientation`](https://developer.mozilla.org/ru/docs/Web/CSS/image-orientation) <sup><small>MDN (рус.)</small></sup>
- [CSS Images Module Level 3](https://w3c.github.io/csswg-drafts/css-images/#the-image-orientation) <sup><small>Spec (англ.)</small></sup>
