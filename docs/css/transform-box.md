---
description: Свойство transform-box определяет поле макета, к которому относятся свойства transform и transform-origin
---

# transform-box

Свойство **`transform-box`** определяет поле макета, к которому относятся свойства [`transform`](transform.md) и [`transform-origin`](transform-origin.md).

??? info "Трансформации"

    <div class="col3" markdown="1">

    - [backface-visibility](backface-visibility.md)
    - [perspective](perspective.md)
    - [perspective-origin](perspective-origin.md)
    - [rotate](rotate.md)
    - [scale](scale.md)
    - [transform](transform.md)
    - **transform-box**
    - [transform-origin](transform-origin.md)
    - [transform-style](transform-style.md)

    </div>

## Синтаксис

```css
/* Keyword values */
transform-box: content-box;
transform-box: border-box;
transform-box: fill-box;
transform-box: stroke-box;
transform-box: view-box;

/* Global values */
transform-box: inherit;
transform-box: initial;
transform-box: revert;
transform-box: revert-layer;
transform-box: unset;
```

## Значения

Значение по-умолчанию: `border-box`

`content-box`

: Блок содержимого используется в качестве справочного блока. Поле ссылки `<table>` — это граничное поле его обертки таблицы, а не его табличное поле.

`border-box`

: Используется border.

`fill-box`

: Ограничивающая рамка объекта используется в качестве эталонной рамки.

`stroke-box`

: Ограничивающая рамка штриха используется в качестве эталонной рамки.

`view-box`

: Используется ближайший SVG viewport.

## Спецификация

-   [CSS Transforms Module Level 1](https://w3c.github.io/csswg-drafts/css-transforms/#transform-box)

## См. также

-   [transform](transform.md)
-   [transform-origin](transform-origin.md)

## Ссылки

-   [transform-box](https://developer.mozilla.org/ru/docs/Web/CSS/transform-box) <sup><small>MDN (рус.)</small></sup>
