---
description: CSS-свойство image-resolution указывает внутреннее разрешение всех растровых изображений, используемых в элементе или на нем. Он влияет на изображения содержимого, такие как замененные элементы и сгенерированное содержимое, а также на декоративные изображения, такие как изображения фонового изображения.
---

# image-resolution

Свойство **`image-resolution`** указывает внутреннее разрешение всех растровых изображений, используемых в элементе или на нем.

Он влияет на изображения содержимого, такие как замененные элементы и сгенерированное содержимое, а также на декоративные изображения, такие как `background-image` изображения.

Разрешение изображения определяется как количество пикселей изображения на единицу длины, например, пикселей на дюйм. По умолчанию CSS предполагает разрешение одного пикселя изображения на единицу CSS `px`; однако свойство `image-resolution` позволяет указать другое разрешение.

??? info "Изображения, фильтры, композиция"

    <div class="col3" markdown="1">

    - [image-orientation](image-orientation.md)
    - [image-rendering](image-rendering.md)
    - **image-resolution**
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
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;

/* Global values */
image-resolution: inherit;
image-resolution: initial;
image-resolution: revert;
image-resolution: revert-layer;
image-resolution: unset;
```

## Значения

`<resolution>`
: Явно задает внутреннее разрешение.

`from-image`
: Использует собственное разрешение, указанное в формате изображения. Если для изображения не указано собственное разрешение, используется явно указанное разрешение (если оно задано), в противном случае по умолчанию используется `1 dppx` (1 пиксель изображения на единицу CSS `px`).

`snap`
: Если предоставлено ключевое слово `snap`, вычисленное разрешение представляет собой указанное разрешение, округленное до ближайшего значения, которое сопоставляет один пиксель изображения с целым числом пикселей устройства. Если разрешение берется из изображения, то используемое внутреннее разрешение является исходным разрешением изображения, настроенным аналогичным образом.

## Ссылки

- Свойство [`image-resolution`](https://developer.mozilla.org/ru/docs/Web/CSS/image-resolution) <sup><small>MDN (рус.)</small></sup>
- [CSS Images Module Level 4](https://drafts.csswg.org/css-images-4/#the-image-resolution) <sup><small>Spec (англ.)</small></sup>
