---
description: Свойство scale позволяет задавать преобразования масштабирования индивидуально и независимо от свойства transform
---

# scale

Свойство **`scale`** позволяет задавать преобразования масштабирования индивидуально и независимо от свойства [`transform`](transform.md).

Это лучше соответствует типичному использованию пользовательского интерфейса и избавляет от необходимости запоминать точный порядок функций преобразования для указания в значении `transform`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scale.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Трансформации"

    <div class="col3" markdown="1">

    - [backface-visibility](backface-visibility.md)
    - [perspective](perspective.md)
    - [perspective-origin](perspective-origin.md)
    - [rotate](rotate.md)
    - **scale**
    - [transform](transform.md)
    - [transform-box](transform-box.md)
    - [transform-origin](transform-origin.md)
    - [transform-style](transform-style.md)

    </div>

## Синтаксис

```css
/* Keyword values */
scale: none;

/* Single values */
/* values of more than 1 or 100% make the element grow */
scale: 2;
/* values of less than 1 or 100% make the element shrink */
scale: 50%;

/* Two values */
scale: 2 0.5;

/* Three values */
scale: 200% 50% 200%;

/* Global values */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

## Значения

`<Одно значение>`

: Параметр `<number>` или `<percentage>`, указывающий коэффициент масштабирования, чтобы затронутый элемент масштабировался с одинаковым коэффициентом по осям X и Y. Эквивалентно функции `scale()` (двумерное масштабирование) с одним указанным значением.

`<Два значения>`

: Два значения `<number>` или `<percentage>`, которые определяют значения масштабирования по осям X и Y (соответственно) для 2D-масштаба. Эквивалентно функции `scale()` (двумерное масштабирование) с двумя указанными значениями.

`<Три значения>`

: Три значения `<number>` или `<percentage>`, которые задают значения масштабирования по осям X, Y и Z (соответственно) 3D-масштаба. Эквивалент функции `scale3d()` (трехмерное масштабирование).

`none`

: Указывает, что масштабирование не должно применяться.

## Спецификация

-   [CSS Transforms Module Level 2](https://w3c.github.io/csswg-drafts/css-transforms-2/#individual-transforms)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scale" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
