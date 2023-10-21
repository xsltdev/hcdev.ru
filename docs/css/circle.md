---
description: Функция circle() является одним из типов данных basic-shape
---

# circle()

Функция **`circle()`** является одним из типов данных `<basic-shape>`.

## Демо {#demo}

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-circle.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис {#syntax}

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### Значения {#values}

`<радиус формы>`
: Это может быть `<длина>`, или `<процент>`, или значения ближайшей и дальней сторон.

: - `closest-side` - Используется длина от центра фигуры до ближайшей стороны контрольного поля. Для окружностей это ближайшая сторона в любом измерении.
: - `farthest-side` - Используется длина от центра фигуры до самой дальней стороны базовой области. Для окружностей это ближайшая сторона в любом измерении.

`<позиция>`
: Перемещает центр окружности. Может быть <длиной>, или <процентом>, или значением, например, left. Если значение <position> опущено, то по умолчанию используется значение center.

## Спецификации {#specifications}

-   [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/#funcdef-basic-shape-circle)

## Ссылки {#links}

-   [MDN circle()](https://developer.mozilla.org/docs/Web/CSS/basic-shape/circle)
