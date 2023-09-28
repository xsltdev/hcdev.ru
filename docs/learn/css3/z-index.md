---
description: В этом модуле вы узнаете, как управлять порядком расположения объектов друг над другом с помощью z-index и контекста укладки.
icon: material/layers
---

# Z-индекс

<big>В этом модуле вы узнаете, как управлять порядком расположения объектов друг над другом с помощью **z-index** и контекста укладки.</big>

!!!info "CSS подкаст"

    019: Z-индекс и контексты суммирования

    <audio style="width: 100%;" controls src="/learn/css3/z-index.en.ogg"></audio>

Допустим, у вас есть несколько элементов, которые абсолютно позиционированы и должны располагаться друг над другом. Вы можете написать HTML примерно так:

```html
<div class="stacked-items">
    <div class="item-1">Item 1</div>
    <div class="item-2">Item 2</div>
</div>
```

Но какой из них по умолчанию располагается поверх другого? Чтобы понять, какой элемент это сделает, нужно разобраться с z-index и контекстом размещения.

## Z-index

Свойство [`z-index`](../../css/z-index.md) явно задает порядок слоев в HTML на основе трехмерного пространства браузера — оси Z. Именно эта ось показывает, какие слои находятся ближе, а какие дальше от вас. Вертикальная ось в Интернете — это ось Y, а горизонтальная ось — ось X.

![Каждая ось, окружающая элемент](z-index-1.svg)

Свойство `z-index` принимает числовое значение, которое может быть как положительным, так и отрицательным числом. Элементы будут располагаться выше других элементов, если они имеют большее значение `z-index`. Если для элементов не задано значение `z-index`, то по умолчанию порядок источника документа диктует ось Z. Это означает, что элементы, расположенные ниже по тексту документа, будут располагаться поверх элементов, появившихся перед ними.

<iframe src="https://codepen.io/web-dot-dev/embed/GRrMEjZ?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

В обычном потоке, если вы задали определенное значение для `z-index` и оно не работает, вам необходимо установить значение `position` элемента в любое другое значение, отличное от `static`. Это распространенное место, где люди испытывают трудности с `z-index`.

<iframe src="https://codepen.io/web-dot-dev/embed/bGgoRzv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Однако это не так, если вы находитесь в контексте flexbox или grid, поскольку вы можете изменять `z-index` элементов `flex` или `grid` без добавления `position: relative`.

<iframe src="https://codepen.io/web-dot-dev/embed/QWdqMOP?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Отрицательный z-index

Чтобы установить элемент _за_ другим элементом, добавьте отрицательное значение для `z-index`.

```css
.my-element {
    background: rgb(232 240 254 / 0.4);
}

.my-element .child {
    position: relative;
    z-index: -1;
}
```

Пока `.my-element` имеет начальное значение `z-index` равное `auto`, элемент `.child` будет располагаться за ним.

<iframe src="https://codepen.io/web-dot-dev/embed/XWpeayj?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Добавьте следующий CSS к `.my-element`, и элемент `.child` не будет располагаться за ним.

```css
.my-element {
    position: relative;
    z-index: 0;
    background: rgb(232 240 254 / 0.4);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/bGgorZy?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Поскольку `.my-element` теперь имеет значение `position`, которое не является `static`, и значение `z-index`, которое не является `auto`, он создал новый **контекст стекирования**. Это означает, что даже если задать `.child` значение `z-index` равное `-999`, он все равно не будет располагаться за `.my-parent`.

## Контекст суммирования

Контекст суммирования — это группа элементов, имеющих общего родителя и перемещающихся вверх и вниз по оси z вместе.

<iframe src="https://codepen.io/web-dot-dev/embed/JjErOXV?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

В данном примере первый родительский элемент имеет `z-index`, равный `1`, поэтому создает новый контекст суммирования. Его дочерний элемент имеет `z-index`, равный `999`. Рядом с этим родительским элементом находится еще один родительский элемент с одним дочерним элементом. Родительский элемент имеет `z-index`, равный `2`, и дочерний элемент также имеет `z-index`, равный `2`. Поскольку оба родителя создают контекст суммирования, `z-index` всех дочерних элементов основывается на индексе их родителя.

Значение `z-index` элементов внутри контекста суммирования всегда относительно текущего порядка родителя в его собственном контексте суммирования.

!!!note ""

    Элемент `<html>` сам по себе является контекстом суммирования, и за ним ничего не может находиться. За элементом `<body>` можно размещать что-либо до тех пор, пока не будет создан контекст суммирования с ним.

## Создание контекста суммирования

Для создания нового [stacking context](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) не обязательно применять `z-index` и `position`. Вы можете создать новый контекст, добавив значение для свойств, создающих новый составной слой, таких как `opacity`, `will-change` и `transform`. Полный список свойств можно посмотреть [здесь](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

Чтобы объяснить, что такое составной слой, представьте, что веб-страница — это холст. Браузер берет ваши HTML и CSS и использует их для определения размера холста. Затем он рисует страницу на этом холсте. Если элемент изменится, например, изменится его положение, браузеру придется вернуться и заново определить, что рисовать.

Для повышения производительности браузер создает новые составные слои, которые накладываются поверх холста. Эти слои похожи на записки: перемещение одного из них и его изменение не оказывают большого влияния на общую картину холста. Новый составной слой создается для элементов с `opacity`, `transform` и `will-change`, поскольку вероятность их изменения очень высока, поэтому браузер заботится о том, чтобы изменения происходили как можно быстрее, используя GPU для применения стилевых корректировок.

!!!note ""

    Также можно создать контекст суммирования, добавив `filter` и установив `backface-visibility: hidden`.

## Ресурсы

-   [Форсирование слоев](https://surma.dev/things/forcing-layers/)
-   [Руководство по анимации: принудительное создание слоев](https://web.dev/animations-guide/#force)
-   [Понимание z-index](https://ishadeed.com/article/understanding-z-index/)

:information_source: Источник &mdash; [Z-index and stacking contexts](https://web.dev/learn/css/z-index/)
