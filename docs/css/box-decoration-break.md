---
description: CSS-свойство box-decoration-break указывает, как должны отображаться фрагменты элемента, разбитые на несколько строк, столбцов или страниц.
---

# box-decoration-break

Свойство **`box-decoration-break`** указывает, как должны отображаться фрагменты элемента, разбитые на несколько строк, столбцов или страниц.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/box-decoration-break.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Указанное значение повлияет на внешний вид следующих свойств:

- [`background`](background.md)
- [`border`](border.md)
- [`border-image`](border-image.md)
- [`box-shadow`](box-shadow.md)
- [`clip-path`](clip-path.md)
- [`margin`](margin.md)
- [`padding`](padding.md)

??? info "Фрагментация"

    <div class="col3" markdown="1">

    - **box-decoration-break**
    - [break-after](break-after.md)
    - [break-before](break-before.md)
    - [break-inside](break-inside.md)
    - [orphans](orphans.md)
    - [widows](widows.md)

    </div>

## Синтаксис

```css
/* Keyword values */
box-decoration-break: slice;
box-decoration-break: clone;

/* Global values */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

Свойство `box-decoration-break` указывается как одно из значений ключевого слова, перечисленных ниже.

## Значения

`slice`
: Первоначально элемент визуализируется так, как если бы его блок не был фрагментирован, после чего рендеринг для этого гипотетического блока разбивается на части для каждой строки/столбца/страницы. Обратите внимание, что гипотетический блок может быть разным для каждого фрагмента, поскольку он использует собственную высоту, если разрыв происходит в направлении строки, и собственную ширину, если разрыв происходит в направлении блока. Подробности смотрите в спецификации CSS.

`clone`
: Каждый фрагмент блока визуализируется независимо с указанными границей, отступами и полями, обертывающими каждый фрагмент. `border-radius`, `border-image` и `box-shadow` применяются к каждому фрагменту независимо. Фон также рисуется независимо для каждого фрагмента, что означает, что фоновое изображение с `background-repeat: no-repeat`, тем не менее, может повторяться несколько раз.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__box-decoration-break" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`box-decoration-break`](https://developer.mozilla.org/ru/docs/Web/CSS/box-decoration-break) <sup><small>MDN (рус.)</small></sup>
- [CSS Fragmentation Module Level 3](https://w3c.github.io/csswg-drafts/css-break/#break-decoration) <sup><small>Spec (англ.)</small></sup>
