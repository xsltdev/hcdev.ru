---
description:
---

# contain-intrinsic-block-size

Логическое свойство **`contains-intrinsic-block-size`** определяет размер блока элемента, который браузер может использовать для макета, когда элемент подлежит ограничению размера.

Размер блока — это размер элемента в измерении, перпендикулярном потоку текста в строке. В режиме горизонтального письма, подобно стандартному английскому, размер блока равен вертикальному размеру (высоте); в вертикальном режиме записи размер блока соответствует горизонтальному измерению.

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

    - [contain](contain.md)
    - **contain-intrinsic-block-size**
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
contain-intrinsic-block-size: none;

/* <length> values */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <length> */
contain-intrinsic-block-size: auto 300px;

/* Global values */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: revert-layer;
contain-intrinsic-block-size: unset;
```

## Значения

Для внутреннего размера блока элемента могут быть указаны следующие значения:

`none`
: Элемент не имеет внутреннего размера блока.

`<length>`
: Элемент имеет указанный размер блока, выраженный с использованием типа данных (`<length>`).

`auto <length>`
: Когда элемент находится в ограничении размера и пропускает свое содержимое (например, когда он находится вне экрана и установлено значение `content-visibility: auto`), размер блока запоминается из фактического размера элемента, когда он в последний раз мог отображать свои дочерние элементы. Если элемент никогда не визуализировал свои дочерние элементы и, следовательно, не имеет запомненного значения для нормально отображаемого размера элемента или если он не пропускает свое содержимое, размер блока равен заданному `<length>`.

## Описание

Это свойство обычно применяется вместе с элементами, которые могут инициировать изолирование размера, например, `contain: size` и `content-visibility`.

Изолирование размера позволяет пользовательскому агенту размещать элемент так, как если бы он имел фиксированный размер. Это предотвращает ненужные перекомпоновки, избегая повторного рендеринга дочерних элементов для определения фактического размера (тем самым улучшая взаимодействие с пользователем). По умолчанию изолирование размера обрабатывает элементы так, как если бы у них не было содержимого, и может свернуть макет так же, как если бы содержимое не имело ни ширины, ни высоты. Свойство `contains-intrinsic-block-size` позволяет авторам указать соответствующее значение, которое будет использоваться в качестве размера блока для макета.

Значение `auto <length>` позволяет сохранить размер блока элемента, если элемент когда-либо «нормально отображается» (с его дочерними элементами), а затем используется вместо указанного значения, когда элемент не имеет содержимого. Это позволяет внеэкранным элементам с `content-visibility: auto` извлекать выгоду из изолирования размера без необходимости разработчикам быть точными в своих оценках размера элемента. Запомненное значение не используется, если отрисовываются дочерние элементы; если ограничение размера включено, будет использоваться значение `<length>`.

## Спецификации

- [CSS Box Sizing Module Level 4](https://w3c.github.io/csswg-drafts/css-sizing-4/#propdef-contain-intrinsic-block-size)

## Ссылки

- [`contain-intrinsic-block-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-block-size) на MDN
