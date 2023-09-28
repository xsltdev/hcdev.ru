---
description: Граница служит обрамлением для блоков. В этом модуле вы узнаете, как изменить размер, стиль и цвет границ с помощью CSS.
icon: material/border-style
---

# Границы

<big>**Граница** служит обрамлением для блоков. В этом модуле вы узнаете, как изменить размер, стиль и цвет границ с помощью CSS.</big>

!!!info "CSS подкаст"

    016: Границы

    <audio style="width: 100%;" controls src="/learn/css3/borders.en.ogg"></audio>

В модуле [модель блока](box-model.md) мы рассмотрели аналогию с фреймом для описания каждого раздела модели блока.

![Три фоторамки, расположенные рядом друг с другом. На средней рамке сверху нарисованы секции модели блока](borders-1.avif)

**Граница блока** — это рамка ваших блоков, а свойства `border` предоставляют огромное количество возможностей для создания этой рамки практически в любом стиле, который только можно придумать.

## Свойства границы

Отдельные свойства `border` предоставляют возможность стилизовать различные части границы.

### Стиль

Для того чтобы появилась граница, необходимо определить [`border-style`](../../css/border-style.md). Есть несколько вариантов на выбор:

<iframe src="https://codepen.io/web-dot-dev/embed/GRrvyxY?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

При использовании стилей `ridge`, `inset`, `outset` и `groove` браузер затемняет цвет границы для второго показанного цвета, чтобы обеспечить контраст и глубину. Это поведение может отличаться в разных браузерах, особенно для темных цветов, таких как `black`. В Chrome эти стили границ будут выглядеть сплошными, а в Firefox они будут осветляться, чтобы затем обеспечить более темный второй цвет.

Поведение браузеров может отличаться и для других стилей границ, поэтому важно протестировать свой сайт в разных браузерах. Частым примером такого различия является то, как каждый браузер отображает стили `dotted` и `dashed`.

<figure markdown>
![Границы отображаются в браузерах Chrome, Firefox и Safari.](borders-2.avif)
<figcaption>Границы отображаются в браузерах Chrome, Firefox и Safari.</figcaption>
</figure>

Для установки стиля границ на каждой стороне блока можно использовать [`border-top-style`](../../css/border-top-style.md), [`border-right-style`](../../css/border-right-style.md), [`border-left-style`](../../css/border-left-style.md) и [`border-bottom-style`](../../css/border-bottom-style.md).

### Сокращение

Как и в случае с `margin` и `padding`, для определения всех частей границы в одном объявлении можно использовать сокращенное свойство [`border`](../../css/border.md).

```css
.my-element {
    border: 1px solid red;
}
```

Порядок значений в сокращении `border` следующий: `border-width`, `border-style` и затем `border-color`.

### Цвет

С помощью команды [`border-color`](../../css/border-color.md) можно задать цвет для всех сторон блока или для каждой отдельной стороны. По умолчанию используется текущий цвет текста блока: `currentColor`. Это означает, что если вы объявите только свойства границы, например ширину, то цветом будет это вычисленное значение, если вы не зададите его явно.

```css
.my-element {
    color: blue;
    border: solid; /* Will be a blue border */
}

.my-element {
    color: blue;
    border: solid yellow;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/yLgovoX?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Чтобы задать цвет границы на каждой стороне блока, используйте [`border-top-color`](../../css/border-top-color.md), [`border-right-color`](../../css/border-right-color.md), [`border-left-color`](../../css/border-left-color.md) и [`border-bottom-color`](../../css/border-bottom-color.md).

<iframe src="https://codepen.io/web-dot-dev/embed/MWJvQVO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Ширина

Ширина границы — это толщина линии, которая определяется параметром [`border-width`](../../css/border-width.md). По умолчанию ширина границы равна `средней`. Однако она не будет видна, пока вы не определите стиль. Можно использовать и другие именованные значения ширины, например `thin` и `thick`.

<iframe src="https://codepen.io/web-dot-dev/embed/PoWKQxN?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойства `border-width` также принимают единицы измерения длины, такие как `px`, `em`, `rem` или `%`. Чтобы задать ширину границы с каждой стороны блока, используйте свойства [`border-top-width`](../../css/border-top-width.md), [`border-right-width`](../../css/border-right-width.md), [`border-left-width`](../../css/border-left-width.md) и [`border-bottom-width`](../../css/border-bottom-width.md).

## Логические свойства

В модуле [Логические свойства](logical-properties.md) вы узнали, как ссылаться на блочный и инлайн-поток, а не на явные верхнюю, правую, нижнюю или левую стороны.

Такая возможность есть и у границ:

```css
.my-element {
    border: 2px dotted;
    border-inline-end: 2px solid red;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/poRraBp?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

В данном примере у `.my-element` все стороны имеют пунктирную границу размером `2px`, которая является цветом текущего текста. Граница `inline-end` определяется как `2px`, сплошная и красная. Это означает, что в языках с лево-правым расположением букв, например, в английском, красная граница будет находиться с правой стороны блока. В языках с переходом справа налево, например в арабском, красная граница будет располагаться слева от блока.

Браузеры поддерживают различные логические свойства границ, поэтому перед использованием обязательно проверьте их поддержку.

## Радиус границы

Чтобы придать блоку закругленные углы, используйте свойство [`border-radius`](../../css/border-radius.md).

```css
.my-element {
    border-radius: 1em;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/LYxjQoK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Это сокращение добавляет последовательную границу к каждому углу блока. Как и в случае с другими свойствами границы, радиус границы для каждой стороны можно задать с помощью [`border-top-left-radius`](../../css/border-top-left-radius.md), [`border-top-right-radius`](../../css/border-top-right-radius.md), [`border-bottom-right-radius`](../../css/border-bottom-right-radius.md) и [`border-bottom-left-radius`](../../css/border-bottom-left-radius.md).

Можно также указать радиус каждого угла в сокращенном виде в следующем порядке: верхний левый, верхний правый, нижний правый, затем нижний левый.

```css
.my-element {
    border-radius: 1em 2em 3em 4em;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/yLgovdK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Определяя одно значение для угла, вы используете еще одно сокращение, поскольку радиус границы делится на две части: вертикальную и горизонтальную. Это означает, что, задавая `border-top-left-radius: 1em`, вы задаете радиус top-left-**top** и радиус top-left-**left**.

Вы можете задать оба свойства для каждого угла следующим образом:

```css
.my-element {
    border-top-left-radius: 1em 2em;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/WNRqoPM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Это добавляет значение `border-top-left-top`, равное `1em`, и значение `border-top-left-left`, равное `2em`. Это преобразует радиус верхней левой границы в эллиптический радиус, а не в круговой по умолчанию.

Вы можете задать эти значения в сокращении `border-radius`, используя `/` для определения эллиптических значений после стандартных. Это позволяет творчески подойти к созданию сложных фигур.

```css
.my-element {
    border: 2px solid;
    border-radius: 95px 155px 148px 103px / 48px 95px 130px
        203px;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/abpyqeM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Границы изображений

В CSS можно использовать не только границы, основанные на обводке. Можно также использовать любой тип изображения, используя [`border-image`](../../css/border-image.md). Это сокращенное свойство позволяет задать исходное изображение, способ его нарезки, ширину изображения, отступ границы от края и ее повторение.

```css
.my-element {
    border-image-source: url(https://assets.codepen.io/174183/border-image-frame.jpg);
    border-image-slice: 61 58 51 48;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/zYNdWNX?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойство [`border-image-width`](../../css/border-image-width.md) аналогично свойству `border-width`: с его помощью задается ширина изображения границы. Свойство [`border-image-outset`](../../css/border-image-outset.md) позволяет задать расстояние между изображением границы и блоком, вокруг которого оно обернуто.

### `border-image-source`

Свойство [`border-image-source`](../../css/border-image-source.md) (источник изображения границы) может быть `url` для любого корректного изображения, включая CSS-градиенты.

```css
.my-element {
    border-image-source: url('path/to/image.png');
}

.my-element {
    border-image-source: linear-gradient(
        to bottom,
        #000,
        #fff
    );
}
```

### `border-image-slice`

Свойство [`border-image-slice`](../../css/border-image-slice.md) — это полезное свойство, позволяющее разрезать изображение на 9 частей, состоящих из 4 разделенных линий. Оно работает подобно сокращению `margin`, где задаются значения верхнего, правого, нижнего и левого **смещения**.

```css
.my-element {
    border-image: url('image.jpg');
    border-image-slice: 61 58 51 48;
}
```

![Изображение, используемое в демонстрационном примере, с четырьмя срезами, показанными синими линиями](borders-3.avif)

После определения значений смещения у вас теперь есть 9 участков изображения: 4 угла, 4 края и средняя секция. Углы применяются к углам элемента с изображением границы. Края применяются к краям этого элемента. Свойство [`border-image-repeat`](../../css/border-image-repeat.md) определяет, как эти края заполняют свое пространство, а свойство [`border-image-width`](../../css/border-image-width.md) управляет размером фрагментов.

Наконец, ключевое слово `fill` определяет, будет ли средняя часть, оставшаяся после нарезки, использоваться в качестве фонового изображения элемента или нет.

### `border-image-repeat`

[`border-image-repeat`](../../css/border-image-repeat.md) — это способ указать CSS, как вы хотите, чтобы изображение границы повторялось. Он работает так же, как и `background-repeat`.

-   Начальное значение — `stretch`, которое растягивает исходное изображение, чтобы заполнить свободное пространство, где это возможно.
-   Значение `repeat` повторяет края исходного изображения столько раз, сколько это возможно, и может обрезать области краев для достижения этой цели.
-   Значение `round` аналогично значению repeat, но вместо того, чтобы обрезать области краев изображения, чтобы их было как можно больше, оно растягивает изображение, а также повторяет его, чтобы добиться бесшовного повторения.
-   Значение `space` опять же аналогично значению repeat, но при этом добавляется пространство между каждой краевой областью для создания бесшовного узора.

<iframe src="https://codepen.io/web-dot-dev/embed/GRrvBYv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

:information_source: Источник: [Borders](https://web.dev/learn/css/borders/)
