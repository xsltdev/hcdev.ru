---
description: Свойство border-image-width управляет шириной видимой части рамки, масштабирует ее
---

# border-image-width

Свойство **`border-image-width`** управляет шириной видимой части рамки, масштабирует ее.

Если это значение больше ширины [`border-width`](border-width.md), картинка рамки заползет под содержимое.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-image-width.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Если значение этого свойства больше, чем ширина границы элемента, изображение границы будет выходить за пределы края заполнения (и/или содержимого).

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
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - **border-image-width**
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
/* Keyword value */
border-image-width: auto;

/* <length> value */
border-image-width: 1rem;

/* <percentage> value */
border-image-width: 25%;

/* <number> value */
border-image-width: 3;

/* top and bottom | left and right */
border-image-width: 2em 3em;

/* top | left and right | bottom */
border-image-width: 5% 15% 10%;

/* top | right | bottom | left */
border-image-width: 5% 2em 10% auto;

/* Global values */
border-image-width: inherit;
border-image-width: initial;
border-image-width: revert;
border-image-width: revert-layer;
border-image-width: unset;
```

Свойство `border-image-width` может быть указано с использованием одного, двух, трех или четырех значений, выбранных из списка значений ниже.

-   Когда указано одно значение, оно применяет одинаковую ширину ко всем четырем сторонам.
-   Когда указаны два значения, первое значение ширины применяется к верху и низу, второе — к левому и правому краю.
-   Когда указаны три значения, первое значение ширины применяется к верху, второе — к левому и правому краю, третье — к низу.
-   Если указано четыре значения, ширина применяется к верхнему, правому, нижнему и левому краю в указанном порядке (по часовой стрелке).

## Значения

`<length-percentage>`

: Ширина границы в виде `<length>` или `<percentage>`. Проценты относятся к ширине области изображения границы для горизонтальных смещений и высоте области изображения рамки для смещений по вертикали. Не должен быть отрицательным.

`<number>`

: Ширина границы в виде кратного соответствующей ширины границы. Не должен быть отрицательным.

`auto`

: Ширина границы делается равной внутренней ширине или высоте (в зависимости от того, что применимо) соответствующего фрагмента изображения границы. Если изображение не имеет требуемого внутреннего размера, вместо него используется соответствующая ширина границы.

Значение по-умолчанию:

```css
border-image-width: 1;
```

## Спецификации

-   [CSS Backgrounds and Borders Module Level 3](https://w3c.github.io/csswg-drafts/css-backgrounds/#the-border-image-width)

## Поддержка браузерами

<p class="ciu_embed" data-feature="border-image" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=border-image">Can I Use border-image?</a> Data on support for the border-image feature across the major browsers from caniuse.com.
</p>
