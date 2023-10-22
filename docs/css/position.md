---
description: Свойство position устанавливает способ позиционирования элемента относительно окна браузера или других объектов на веб-странице
---

# position

Свойство **`position`** устанавливает способ позиционирования элемента относительно окна браузера или других объектов на веб-странице.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/position.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Позиционирование"

    <div class="col3" markdown="1">

    - [bottom](bottom.md)
    - [clear](clear.md)
    - [display](display.md)
    - [float](float.md)
    - [left](left.md)
    - **position**
    - [right](right.md)
    - [top](top.md)
    - [z-index](z-index.md)

    </div>

## Синтаксис

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Global values */
position: inherit;
position: initial;
position: revert;
position: revert-layer;
position: unset;
```

## Значения

`absolute`

: Абсолютное позиционирование. Указывает, что элемент абсолютно позиционирован, при этом другие элементы отображаются на веб-странице словно абсолютно позиционированного элемента нет. Положение элемента задаётся свойствами [`left`](left.md), [`top`](top.md), [`right`](right.md) и [`bottom`](bottom.md), также на положение влияет значение свойства `position` родительского элемента. Так, если у родителя значение `position` установлено как `static` или родителя нет, то отсчёт координат ведётся от края окна браузера. Если у родителя значение `position` задано как `relative`, то отсчёт координат ведётся от края родительского элемента.

`fixed`

: Фиксированное позиционирование. По своему действию это значение близко к `absolute`, но в отличие от него привязывается к указанной свойствами `left`, `top`, `right` и `bottom` точке на экране и не меняет своего положения при прокрутке веб-страницы.

`relative`

: Относительное позиционирование. Положение элемента устанавливается относительно его исходного места. Добавление свойств `left`, `top`, `right` и `bottom` изменяет позицию элемента и сдвигает его в ту или иную сторону от первоначального расположения.

`static`

: Статичное позиционирование. Элементы отображаются как обычно. Использование свойств `left`, `top`, `right` и `bottom` не приводит к каким-либо результатам.

`sticky`

: Это сочетание относительного и фиксированного позиционирования. Элемент рассматривается как позиционированный относительно, пока он не пересекает определённый порог, после чего рассматривается как фиксированный. Обычно применяется для фиксации заголовка на одном месте, пока содержимое, к которому относится заголовок, прокручивается на странице.

### Примечание

Браузер Safari поддерживает значение `-webkit-sticky`.

Значение по-умолчанию: `static`

Применяется ко всем элементам

## Спецификации

-   [CSS Positioned Layout Module Level 3](https://w3c.github.io/csswg-drafts/css-position/#position-property)
-   [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visuren.html#propdef-position)

## Поддержка браузерами

`position: fixed`:

<p class="ciu_embed" data-feature="css-fixed" data-periods="future_1,current,past_1,past_2"></p>

`position: sticky`:

<p class="ciu_embed" data-feature="css-sticky" data-periods="future_1,current,past_1,past_2"></p>

## Описание и примеры

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>position</title>
        <style>
            .layer1 {
                position: relative; /* Относительное позиционирование */
                background: #f0f0f0; /* Цвет фона */
                height: 200px; /* Высота блока */
            }
            .layer2 {
                position: absolute; /* Абсолютное позиционирование */
                bottom: 15px; /* Положение от нижнего края */
                right: 15px; /* Положение от правого края */
                line-height: 1px;
            }
        </style>
    </head>
    <body>
        <div class="layer1">
            <div class="layer2">
                <img src="image/girl.jpg" alt="Девочка" />
            </div>
        </div>
    </body>
</html>
```

## Ссылки

-   [Как на самом деле работает position: sticky в CSS](https://medium.com/web-standards/sticky-bc7ff7088693)
