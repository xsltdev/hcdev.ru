---
description: Свойство CSS rotate позволяет задавать преобразования поворота индивидуально и независимо от свойства преобразования
---

# rotate

Свойство **`rotate`** позволяет задавать преобразования поворота индивидуально и независимо от свойства преобразования.

Это лучше соответствует типичному использованию пользовательского интерфейса и избавляет от необходимости помнить точный порядок функций преобразования, чтобы указать в свойстве преобразования.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/rotate.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Трансформации"

    <div class="col3" markdown="1">

    - [backface-visibility](backface-visibility.md)
    - [perspective](perspective.md)
    - [perspective-origin](perspective-origin.md)
    - **rotate**
    - [scale](scale.md)
    - [transform](transform.md)
    - [transform-box](transform-box.md)
    - [transform-origin](transform-origin.md)
    - [transform-style](transform-style.md)

    </div>

## Синтаксис

```css
/* Keyword values */
rotate: none;

/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, or z axis name plus angle */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vector plus angle value */
rotate: 1 1 1 90deg;

/* Global values */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

## Значения

`<значение угла>`
: `<angle>`, определяющий угол поворота затронутого элемента вокруг оси Z. Эквивалент функции `rotate()` (2D-вращение).

`имя оси x, y или z плюс значение угла`
: Имя оси, вокруг которой вы хотите повернуть затронутый элемент ("`x`", "`y`" или "`z`"), плюс `<угол>`, указывающий угол, на который нужно повернуть элемент. Эквивалент функции `rotateX()`/`rotateY()`/`rotateZ()` (трехмерное вращение).

`вектор плюс значение угла`
: Три `<number>`, представляющие вектор с центром в начале координат, который определяет линию, вокруг которой вы хотите повернуть элемент, плюс `<angle>`, указывающий угол, на который нужно повернуть элемент. Эквивалент функции `rotate3d()` (трехмерное вращение).

`none`
: Указывает, что вращение не должно применяться.

## Спецификация

- [CSS Transforms Module Level 2](https://w3c.github.io/csswg-drafts/css-transforms-2/#individual-transforms)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__rotate" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
