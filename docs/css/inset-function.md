---
description: Функция inset() определяет прямоугольник на заданных расстояниях от каждой стороны опорного поля. Это функция базовой формы, используемая для определения одного из типов данных basic-shape
---

# inset()

Функция **`inset()`** определяет прямоугольник на заданных расстояниях от каждой стороны опорного поля. Это функция базовой формы, используемая для определения одного из типов данных `<basic-shape>`.

## Демо {#demo}

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-inset.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис {#syntax}

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Значения {#values}

`<длина-процент>{1,4}`

: Если указаны все четыре аргумента, то они представляют собой смещения сверху, справа, снизу и слева от базовой области внутрь, которые определяют положение краев прямоугольника вставки. Эти аргументы соответствуют синтаксису стенограммы `margin`, которая позволяет задать все четыре вставки с одним, двумя или четырьмя значениями.

`<border-radius>`

: Необязательный аргумент(ы) `<border-radius>` задает закругленные углы для прямоугольника вставки, используя синтаксис стенограммы `border-radius`.

## Спецификации {#specifications}

-   [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/#funcdef-basic-shape-inset)

## Ссылки {#links}

-   [MDN inset()](https://developer.mozilla.org/docs/Web/CSS/basic-shape/inset)
