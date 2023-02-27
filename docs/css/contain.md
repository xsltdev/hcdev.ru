---
description: Свойство CSS contain указывает, что элемент и его содержимое, насколько это возможно, независимы от остальной части дерева документа
---

# contain

Свойство **`contain`** указывает, что элемент и его содержимое, насколько это возможно, независимы от остальной части дерева документа.

Сдерживание позволяет изолировать подраздел DOM, обеспечивая преимущества производительности за счет ограничения вычислений макета, стиля, цвета, размера или любой комбинации поддеревом DOM, а не всей страницей. Сдерживание также можно использовать для ограничения CSS-счетчиков и кавычек.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/contain.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Существует четыре типа изоляции CSS: размер, макет, стиль и отрисовка, которые задаются для контейнера. Свойство представляет собой разделенный пробелами список подмножества пяти стандартных значений или одного из двух сокращенных значений. Изменения содержащихся в контейнере свойств не распространяются за пределы содержащегося элемента на остальную часть страницы. Основное преимущество сдерживания заключается в том, что браузеру не нужно так часто повторно отображать DOM или макет страницы, что приводит к небольшому повышению производительности при отображении статических страниц и большему повышению производительности в более динамичных приложениях.

Использование свойства `contain` полезно на страницах с группами элементов, которые должны быть независимыми, так как оно может предотвратить побочные эффекты внутренних элементов элемента за пределами его ограничивающей рамки.

!!!note ""

    Использование значений `layout`, `paint`, `strict` или `content` для этого свойства создает:

    1. Новый блок содержимого (для потомков, чье свойство `position` является `absolute` или `fixed`).
    2. Новый контекст стека.
    3. Новый контекст форматирования блока.

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
    - **mix-blend-mode**

    </div>

    <div class="col3" markdown="1">

    - **contain**
    - [contain-intrinsic-block-size](contain-intrinsic-block-size.md)
    - [contain-intrinsic-height](contain-intrinsic-height.md)
    - [contain-intrinsic-inline-size](contain-intrinsic-inline-size.md)
    - [contain-intrinsic-size](contain-intrinsic-size.md)
    - [contain-intrinsic-width](contain-intrinsic-width.md)
    - [container](container.md)
    - [container-name](container-name.md)
    - [container-type](container-type.md)
    - [@container](container-at-rule.md)
    - [content-visibility](content-visibility.md)

    </div>

## Синтаксис

```css
/* Keyword values */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* Multiple keywords */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* Global values */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

## Значения

Свойство `contain` может иметь любое из следующих значений:

- Ключевое слово `none` или
- Одно или несколько ключевых слов, разделенных пробелами: `size` (или `inline-size`), `layout`, `style` или `paint` в любом порядке или
- Одно из сокращенных значений `strict` или `content`

Ключевые слова имеют следующие значения:

`none`
: Элемент отображается как обычно, без применения изоляции.

`strict`
: К элементу применяются все правила изоляции. Это эквивалентно `contain: size layout paint style`.

`content`
: К элементу применяются все правила изоляции, кроме `size`. Это эквивалентно `contain: layout paint style`.

`size`
: Ограничение размера применяется к элементу как в линейном, так и в блочном направлении. Размер элемента можно вычислить изолированно, игнорируя дочерние элементы. Это значение нельзя комбинировать с `inline-size`.

`inline-size`
: К элементу применяется ограничение встроенного размера. Встроенный размер элемента можно вычислить изолированно, игнорируя дочерние элементы. Это значение нельзя сочетать с `size`.

`layout`
: Внутренняя компоновка элемента изолирована от остальной части страницы. Это означает, что ничто за пределами элемента не влияет на его внутреннее расположение, и наоборот.

`style`
: Для свойств, которые могут влиять не только на элемент и его потомков, эффекты не выходят за пределы содержащего его элемента. Счетчики и кавычки привязаны к элементу и его содержимому.

`paint`
: Потомки элемента не отображаются за его пределами. Если содержащий блок находится за пределами экрана, браузеру не нужно рисовать содержащиеся в нем элементы — они также должны быть за пределами экрана, поскольку они полностью содержатся в этом блоке. Если потомок выходит за границы содержащего элемента, то этот потомок будет обрезан до границы содержащего элемента.

## Спецификация

- [CSS Containment Module Level 2](https://w3c.github.io/csswg-drafts/css-contain/#contain-property)
