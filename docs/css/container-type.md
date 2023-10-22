---
description: Свойство container-type используется для определения типа включения, используемого в запросе контейнера
---

# container-type

Свойство **`container-type`** используется для определения типа включения, используемого в запросе контейнера.

??? info "Изображения, фильтры, композиция"

    <div class="col3" markdown="1">

    - [image-orientation](image-orientation.md)
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
    - **container-type**
    - [@container](container-at-rule.md)
    - [content-visibility](content-visibility.md)

    </div>

## Синтаксис

```css
container-type: <type>;
```

## Значения

`size`

: Устанавливает контейнер запросов для запросов размера контейнера как на встроенной, так и на блочной оси как во встроенном, так и в блочном измерениях. Применяет ограничение макета, ограничение стиля и ограничение размера к контейнеру.

`inline-size`

: Устанавливает контейнер запросов для многомерных запросов на встроенной оси контейнера. Применяет макет, стиль и встроенный размер к элементу.

`normal`

: Элемент не является контейнером запросов для любых запросов размера контейнера, но остается контейнером запросов для запросов в стиле контейнера.

## Спецификация

-   [CSS Containment Module Level 3](https://w3c.github.io/csswg-drafts/css-contain-3/#container-type)

## Пример

Учитывая следующий пример HTML, который представляет собой компонент карты с изображением, заголовком и некоторым текстом:

```html
<div class="container">
    <div class="card">
        <img
            src="image.png"
            alt="Cat with two different color eyes"
        />
        <h2>Card title</h2>
        <p>Card content</p>
    </div>
</div>
```

Чтобы создать контекст контейнера, добавьте к элементу свойство `container-type`. В следующем примере значение `inline-size` используется для создания контекста включения для встроенной оси контейнера:

```css
.container {
    container-type: inline-size;
}
```

Написание запроса к контейнеру с помощью at-правила `@container` применит стили к элементам контейнера, если он шире 400 пикселей:

```css
@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
```
