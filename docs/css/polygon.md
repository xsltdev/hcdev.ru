---
description: Функция polygon() является одним из типов данных basic-shape. Она используется для рисования многоугольника с помощью одной или нескольких пар координат, каждая из которых представляет собой вершину фигуры
---

# polygon()

Функция **`polygon()`** является одним из типов данных `<basic-shape>`. Она используется для рисования многоугольника с помощью одной или нескольких пар координат, каждая из которых представляет собой вершину фигуры.

## Демо {#demo}

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-polygon.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис {#syntax}

```css
/* Specified as coordinate list */
/* polygon(<length-percentage> <length-percentage>, ... )*/
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Specified as coordinate list and fill rule*/
/* polygon(<fill-rule> <length-percentage> <length-percentage>, ... )*/
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd, 0% 0%, 50% 50%, 0% 100%)
```

### Значения {#values}

`<fill-rule>` Необязательное значение
: Необязательное значение, равное ненулю (по умолчанию, если оно опущено) или evenodd, которое задает правило заполнения.

`<Длина-процент>`
: Каждая вершина многоугольника представлена парой значений `<длина-процент>`, которые задают координаты вершины относительно базового поля фигуры.

## Спецификации {#specifications}

-   [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/#funcdef-basic-shape-polygon)

## Ссылки {#links}

-   [MDN polygon()](https://developer.mozilla.org/docs/Web/CSS/basic-shape/polygon)
