---
description: Существует несколько способов добавления теней к тексту и элементам в CSS. В этом модуле вы узнаете, как использовать каждый из этих способов и для каких задач они предназначены.
icon: material/box-shadow
---

# Тени

<big>Существует несколько способов добавления теней к тексту и элементам в CSS. В этом модуле вы узнаете, как использовать каждый из этих способов и для каких задач они предназначены.</big>

!!!info "CSS подкаст"

    017: Тени

    <audio style="width: 100%;" controls src="https://traffic.libsyn.com/secure/thecsspodcast/TCP_CSS_Podcast_Episode_017_v2.0.mp3?dest-id=1891556"></audio>

Допустим, вам прислали проект, который нужно создать, и в этом проекте есть изображение футболки, вырезанное, с падающей тенью. Дизайнер говорит вам, что изображение продукта является динамическим и может обновляться через систему управления контентом, поэтому и падающая тень должна быть динамической. Вместо футболки изображение может быть козырьком, шортами или любым другим предметом. Как это сделать с помощью CSS?

<iframe src="https://codepen.io/web-dot-dev/embed/wvgrMrR?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

В CSS есть свойства [`box-shadow`](../../css/box-shadow.md) и [`text-shadow`](../../css/text-shadow.md), но картинка - это не текст, поэтому использовать `text-shadow` нельзя. Если использовать `box-shadow`, то тень будет лежать на окружающем блоке, а не на футболке.

<iframe src="https://codepen.io/web-dot-dev/embed/YzNrwae?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

К счастью, есть и другой вариант: фильтр [`drop-shadow()`](../../css/filter.md#drop-shadow). Он позволяет сделать именно то, о чем просил дизайнер. Существует множество вариантов использования теней в CSS, каждый из которых предназначен для разных случаев.

## Тень блока

Свойство `box-shadow` предназначено для добавления тени к блоку HTML-элемента. Оно работает для блочных и инлайн-элементов.

```css
.my-element {
    box-shadow: 5px 5px 20px 5px #000;
}
```

Порядок значений для `box-shadow` следующий:

1.  **Горизонтальное смещение**: положительное число сдвигает его влево, а отрицательное - вправо.
2.  **Вертикальное смещение**: положительное число сдвигает его сверху вниз, а отрицательное - снизу вверх.
3.  **Радиус размытия**: при большем значении тень будет более размытой, а при меньшем - более резкой.
4.  **Радиус размытия** (необязательно): большее число увеличивает размер тени, а меньшее - уменьшает, при этом радиус размытия будет равен **радиусу размытия**, если он установлен в `0`.
5.  **Цвет**: [Любое допустимое значение цвета](color.md). Если он не задан, то будет использоваться вычисленный цвет текста.

Чтобы сделать тень блока внутренней, а не внешней по умолчанию, добавьте ключевое слово `inset` **перед** другими свойствами.

```css
/* Outer shadow */
.my-element {
    box-shadow: 5px 5px 20px 5px #000;
}

/* Inner shadow */
.my-element {
    box-shadow: inset 5px 5px 20px 5px #000;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/rNjGevp?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Множественные тени

С помощью `box-shadow` можно добавить сколько угодно теней. Для этого добавьте коллекцию наборов значений, разделенных запятыми:

```css
.my-element {
    box-shadow: 5px 5px 20px 5px darkslateblue, -5px -5px
            20px 5px dodgerblue,
        inset 0px 0px 10px 2px darkslategray, inset 0px 0px
            20px 10px steelblue;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/abpLNXR?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Свойства, влияющие на тень блока

Добавление `border-radius` к блоку также повлияет на форму его тени. Это связано с тем, что CSS создает тень на основе формы блока, как будто на него направлен свет.

```css
.my-element {
    box-shadow: 0px 0px 20px 5px darkslateblue;
    border-radius: 25px;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/RwKLaXN?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Если блок с `box-shadow` находится в контейнере, имеющем `overflow: hidden`, то тень **не** выйдет за пределы этого переполнения.

```html
<div class="my-parent">
    <div class="my-shadow">
        My shadow is hidden by my parent.
    </div>
</div>
```

---

```css
.my-parent,
.my-shadow {
    width: 250px;
    height: 250px;
}

.my-shadow {
    box-shadow: 0px 0px 20px 5px darkslateblue;
}

.my-parent {
    overflow: hidden;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/BapwzyQ?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Тень текста {#text-shadow}

Свойство `text-shadow` очень похоже на свойство `box-shadow`. Только работает оно для текстовых узлов.

```css
.my-element {
    text-shadow: 3px 3px 3px hotpink;
}
```

Значения для `text-shadow` те же, что и для `box-shadow`, и расположены в том же порядке. Единственное отличие заключается в том, что `text-shadow` не имеет значения `spread` и ключевого слова `inset`.

<iframe src="https://codepen.io/web-dot-dev/embed/vYgeKqm?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Значения для `text-shadow` те же, что и для `box-shadow`, и расположены в том же порядке. Единственное отличие заключается в том, что `text-shadow` не имеет значения `spread` и ключевого слова `inset`.

```css
.my-element {
    text-shadow: 3px 3px 3px gold;
    color: rgb(0 0 0 / 70%);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/LYxzRpb?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Множественные тени текста

С помощью `text-shadow`, как и с помощью `box-shadow`, можно добавлять сколько угодно теней. Добавьте коллекцию наборов значений, разделенных запятыми, и вы сможете создавать действительно интересные текстовые эффекты, например, 3D-текст.

```css
.my-element {
    text-shadow: 1px 1px 0px white, 2px 2px 0px firebrick;
    color: darkslategray;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/RwKLGaL?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## `drop-shadow()`

Чтобы получить падающую тень, повторяющую все возможные изгибы изображения, используйте фильтр CSS `drop-shadow`. Эта тень применяется к альфа-маске, что делает ее очень удобной для добавления тени к вырезанному изображению, как в случае, показанном во введении этого модуля.

```css
.my-image {
    filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%));
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/eYgGdvm?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

!!!note ""

    Мы рассмотрим CSS ["фильтры"](filters.md) в другом модуле, но вкратце можно сказать, что фильтры позволяют применять различные графические эффекты к пикселям элемента.

Фильтр `drop-shadow` имеет те же значения, что и `box-shadow`, **однако** ключевое слово `inset` и значение `spread` не допускаются. Вы можете добавить столько теней, сколько захотите, добавив несколько экземпляров значений `drop-shadow` к свойству `filter`. Каждая тень будет использовать предыдущую тень в качестве опорной точки позиционирования.

<iframe src="https://codepen.io/web-dot-dev/embed/vYgeXmW?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

:information_source: Источник: [Shadows](https://web.dev/learn/css/shadows/)
