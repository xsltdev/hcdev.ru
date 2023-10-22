---
description: Свойство offset-path задает путь движения элемента и определяет положение элемента в родительском контейнере или системе координат SVG.
---

# offset-path

Свойство **`offset-path`** задает путь движения элемента и определяет положение элемента в родительском контейнере или системе координат SVG.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/offset-path.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Пути перемещения"

    <div class="col3" markdown="1">

    - [`offset`](offset.md)
    - [`offset-anchor`](offset-anchor.md)
    - [`offset-distance`](offset-distance.md)
    - **`offset-path`**
    - [`offset-position`](offset-position.md)
    - [`offset-rotate`](offset-rotate.md)

    </div>

## Синтаксис

```css
/* Default */
offset-path: none;

/* Function values */
offset-path: ray(45deg closest-side contain);

/* URL */
offset-path: url(#path);

/* Shapes */
offset-path: circle(50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(
    30% 0%,
    70% 0%,
    100% 50%,
    30% 100%,
    0% 70%,
    0% 30%
);
offset-path: path(
    'M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200'
);

/* Geometry Boxes */
offset-path: margin-box;
offset-path: stroke-box;

/* Global values */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: unset;
```

## Значения

`ray()`

: Принимая до трех значений, определяет путь, представляющий собой сегмент линии, начинающийся с позиции блока и продолжающийся в направлении, определяемом указанным углом, аналогичным углу градиента CSS, где `0deg` вверх, с положительными углами, увеличивающимися по часовой стрелке, при этом значение размера аналогично значениям размера радиального градиента CSS от `closest-side` к `farthest-corner`, а ключевое слово `contain`.

`url()`

: Ссылается на идентификатор фигуры SVG — `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline` или `rect` — используя геометрию фигуры в качестве пути.

`<basic-shape>`

: Указывает фигуру CSS, включая `circle()`, `ellipse()`, `inset()`, `polygon()` или `path()`. `path()` - строка пути, определенная с помощью синтаксиса координат SVG.

`none`

: Путь движения вообще не указывается.

## Спецификация

-   [Motion Path Module Level 1](https://drafts.fxtf.org/motion/#offset-path-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__offset-path" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
