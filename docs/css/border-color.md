---
description: Свойство border-color устанавливает цвет границы на разных сторонах элемента
---

# border-color

Свойство **`border-color`** устанавливает цвет границы на разных сторонах элемента.

Свойство позволяет задать цвет границы сразу для всех сторон элемента или только для указанных.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-color.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Каждую сторону можно установить по отдельности, используя `border-top-color`, `border-right-color`, `border-bottom-color` и `border-left-color`; или с использованием режима записи `border-block-start-color`, `border-block-end-color`, `border-inline-start-color` и `border-inline-end-color`.

Это свойство является сокращением для следующих свойств CSS:

-   `border-bottom-color`
-   `border-left-color`
-   `border-right-color`
-   `border-top-color`

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - **border-color**
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* <color> values */
border-color: red;

/* top and bottom | left and right */
border-color: red #f015ca;

/* top | left and right | bottom */
border-color: red rgb(240, 30, 50, 0.7) green;

/* top | right | bottom | left */
border-color: red yellow green blue;

/* Global values */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

## Значения

`<цвет>`

: Цвет

`transparent`

: Устанавливает прозрачный цвет.

Разрешается использовать одно, два, три или четыре значения, разделяя их между собой пробелом. Результат зависит от количества и указан в табл. 1.

<table>
<caption> Табл. 1. Изменение цвета в зависимости от числа значений</caption>
<thead>
<tr><th>Число значений</th><th>Результат</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Цвет границы будет установлен для всех сторон элемента.</td></tr>
<tr><td>2</td><td>Первое значение устанавливает цвет верхней и нижней границы, второе — левой и правой.</td></tr>
<tr><td>3</td><td>Первое значение задаёт цвет верхней границы, второе — одновременно левой и правой границы, а третье — нижней границы.</td></tr>
<tr><td>4</td><td>Поочередно устанавливается цвет верхней, правой, нижней и левой границы.</td></tr>
</tbody>
</table>

Значение по-умолчанию: Значение свойства [`color`](color.md)

Применяется ко всем элементам

## Спецификации

-   [CSS Backgrounds and Borders Module Level 3](https://w3c.github.io/csswg-drafts/css-backgrounds/#border-color)
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#logical-shorthand-keyword)
-   [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-color-properties)
-   [CSS Level 1](http://www.w3.org/TR/CSS1/#border-color)

## Описание и примеры

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>border-color</title>
        <style>
            h1 {
                border-color: red white; /* Цвет границы */
                border-style: solid; /* Стиль границы */
            }
            p {
                border-color: #008a77; /* Цвет границы */
                border-style: solid; /* Стиль границы */
                padding: 5px; /* Поля вокруг текста */
            }
        </style>
    </head>
    <body>
        <h1>Шоу-бизнес как внутридискретное арпеджио</h1>
        <p>
            Септаккорд, согласно традиционным
            представлениям, иллюстрирует однокомпонентный
            шоу-бизнес.
        </p>
    </body>
</html>
```
