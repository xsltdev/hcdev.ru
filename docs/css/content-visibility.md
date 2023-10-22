---
description: Свойство content-visibility контролирует, отображает ли элемент вообще свое содержимое, а также принудительно устанавливает строгий набор ограничений, позволяя агентам пользователя потенциально пропускать большие участки макета и работы по рендерингу до тех пор, пока это не понадобится
---

# content-visibility

!!!info "Это экспериментальная технология"

    Внимательно проверьте таблицу совместимости браузеров, прежде чем использовать это в производстве.

Свойство **`content-visibility`** контролирует, отображает ли элемент вообще свое содержимое, а также принудительно устанавливает строгий набор ограничений, позволяя агентам пользователя потенциально пропускать большие участки макета и работы по рендерингу до тех пор, пока это не понадобится.

Это позволяет пользовательскому агенту пропускать работу по рендерингу элемента (включая layout и painting) до тех пор, пока он не понадобится, что значительно ускоряет загрузку начальной страницы.

!!!note ""

    Событие `contentvisibilityautostatechange` срабатывает для любого элемента с установленным значением `content-visibility: auto`, когда его работа по отрисовке начинается или перестает быть пропущенной. Это обеспечивает удобный способ для кода приложения запускать или останавливать процессы рендеринга (например, рисование на `<canvas>`), когда они не нужны, тем самым экономя вычислительную мощность.

??? info "Изображения, фильтры, композиция"

    <div class="col3" markdown="1">

    - [image-orientation](image-orientation.md)
    - [image-rendering](image-rendering.md)
    - [image-resolution](image-resolution.md)
    - [object-fit](object-fit.md)
    - [object-position](object-position.md)

    </div>

    <div class="col3" markdown="1">

    - [linear-gradient()](linear-gradient.md)
    - [radial-gradient()](radial-gradient.md)
    - [repeating-linear-gradient()](repeating-linear-gradient.md)
    - [repeating-radial-gradient()](repeating-radial-gradient.md)
    - [conic-gradient()](conic-gradient.md)
    - [repeating-conic-gradient()](repeating-conic-gradient.md)
    - [url()](url.md)
    - [element()](element.md)
    - [image()](image.md)
    - [cross-fade()](cross-fade.md)

    </div>

    <div class="col3" markdown="1">

    - [backdrop-filter](backdrop-filter.md)
    - [filter](filter.md)

    </div>

    <div class="col3" markdown="1">

    - [background-blend-mode](background-blend-mode.md)
    - [isolation](isolation.md)
    - [mix-blend-mode](mix-blend-mode.md)

    </div>

    <div class="col3" markdown="1">

    - [contain](contain.md)
    - [contain-intrinsic-block-size](contain-intrinsic-block-size.md)
    - [contain-intrinsic-height](contain-intrinsic-height.md)
    - [contain-intrinsic-inline-size](contain-intrinsic-inline-size.md)
    - [contain-intrinsic-size](contain-intrinsic-size.md)
    - [contain-intrinsic-width](contain-intrinsic-width.md)
    - [container](container.md)
    - [container-name](container-name.md)
    - [container-type](container-type.md)
    - [@container](container-at-rule.md)
    - **content-visibility**

    </div>

## Синтаксис

```css
/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

## Значения

`visible`

: Нет эффекта. Содержимое элемента размещается и отображается как обычно.

`hidden`

: Элемент пропускает свое содержимое. Пропущенное содержимое не должно быть доступно для функций пользовательского агента, таких как поиск на странице, навигация по порядку вкладок и т. д., а также не должно быть доступным для выбора или фокусировки. Это похоже на вывод содержимого `display: none`.

`auto`

: Элемент включает сдерживание макета, сдерживание стиля и сдерживание краски. Если элемент не имеет отношения к пользователю, он также пропускает его содержимое. В отличие от скрытого, пропущенное содержимое должно по-прежнему быть доступным, как обычно, для функций пользовательского агента, таких как поиск на странице, навигация по порядку вкладок и т. д., и должно быть доступно для фокусировки и выбора, как обычно.

## Спецификация

-   [CSS Containment Module Level 2](https://w3c.github.io/csswg-drafts/css-contain/#content-visibility)
