---
description: Псевдоэлемент - это как добавление или нацеливание дополнительного элемента без необходимости добавлять дополнительный HTML. Они выполняют различные функции, и вы можете узнать о них в этом модуле.
icon: material/select-compare
---

# Псевдоэлементы

<big>_Псевдоэлемент_ - это как добавление или нацеливание дополнительного элемента без необходимости добавлять дополнительный HTML. Они выполняют различные функции, и вы можете узнать о них в этом модуле.</big>

!!!info "CSS подкаст"

    014: Псевдоэлементы

    <audio controls src="/learn/css3/pseudo-elements-2.mp3"></audio> (Перевод на русский)

    <audio controls src="https://traffic.libsyn.com/secure/thecsspodcast/TCP_CSS_Podcast_Episode_014_v1.0.mp3?dest-id=1891556"></audio> (Английский оригинал)

Если у вас есть статья с контентом, и вы хотите, чтобы первая буква была более крупной - как этого добиться?

![Несколько абзацев текста с синей заглушкой](pseudo-elements-1.svg)

В CSS для достижения подобной детализации дизайна можно использовать псевдоэлемент `::first-letter`.

```css
p::first-letter {
    color: blue;
    float: left;
    font-size: 2.6em;
    font-weight: bold;
    line-height: 1;
    margin-inline-end: 0.2rem;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/PoWjybP?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Псевдоэлемент - это как добавление или нацеливание дополнительного элемента без необходимости добавлять дополнительный HTML. Данный пример решения, использующий `::first-letter`, является одним из многих псевдоэлементов. Они выполняют различные функции, и в этом уроке вы узнаете, какие псевдоэлементы доступны и как их можно использовать.

## `::before` и `::after`

Псевдоэлементы [`::before`](../../css/before.md) и [`::after`](../../css/after.md) создают дочерний элемент внутри элемента **только**, если вы определили свойство `content`.

```css
.my-element::before {
    content: '';
}

.my-element::after {
    content: '';
}
```

Строка `content` может быть любой, даже пустой, но следует иметь в виду, что любая строка, отличная от пустой, скорее всего, будет распознана программой чтения с экрана. Можно добавить изображение `url`, которое вставит изображение с исходными размерами, так что изменить его размер будет невозможно. Можно также вставить [`counter`](<https://developer.mozilla.org/docs/Web/CSS/counter()>).

!!!note ""

    Вы можете создать именованный счетчик и затем увеличивать его, основываясь на его положении в потоке документов. Они могут быть полезны в самых разных контекстах, например, для автоматической нумерации конспекта.

Создав элемент `::before` или `::after`, вы можете стилизовать его как угодно, без каких-либо ограничений. Вставить элемент `::before` или `::after` можно только в тот элемент, который принимает дочерние элементы ([элементы с деревом документа](https://www.w3.org/TR/CSS21/generate.html)), поэтому такие элементы, как `<img />`, `<video>` и `<input>` не будут работать.

<iframe src="https://codepen.io/web-dot-dev/embed/GRrEYrg?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

!!!note ""

    Исключением является `input[type="checkbox"]`. Ему разрешено иметь дочерние псевдоэлементы.

## `::first-letter`

С этим псевдоэлементом мы познакомились в начале урока. Следует иметь в виду, что не все CSS-свойства можно использовать при нацеливании на [`::first-letter`](../../css/first-letter.md). Доступными свойствами являются:

-   `color`
-   свойства `background` (например, `background-image`)
-   `border` (например, `border-color`)
-   `float`
-   свойства `font` (например, `font-size` и `font-weight`)
-   свойства текста (такие как `text-decoration` и `word-spacing`)

```css
p::first-letter {
    color: goldenrod;
    font-weight: bold;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/JjEJmOx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

!!!note ""

    Использовать `:first-letter` можно только в блочных контейнерах. Поэтому он не будет работать, если вы попытаетесь добавить его в элемент, имеющий `display: inline`.

## `::first-line`

Псевдоэлемент [`::first-line`](../../css/first-line.md) позволяет стилизовать первую строку текста только в том случае, если элемент, к которому применен `::first-line`, имеет значение `display` `block`, `inline-block`, `list-item`, `table-caption` или `table-cell`.

```css
p::first-line {
    color: goldenrod;
    font-weight: bold;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/vYgZVaO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Как и в случае с псевдоэлементом `::first-letter`, существует лишь подмножество CSS-свойств, которые можно использовать:

-   `color`
-   `background` свойства
-   `font` свойства
-   `text` свойства

## `::backdrop`

Если у вас есть элемент, представленный в полноэкранном режиме, например, `<dialog>` или `<video>`, вы можете стилизовать фон - пространство между элементом и остальной частью страницы - с помощью псевдоэлемента [`::backdrop`](../../css/backdrop.md):

```css
video::backdrop {
    background-color: goldenrod;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/rNjwqRQ?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Псевдоэлемент `::backdrop` поддерживается во всех основных браузерах, кроме Safari.

## `::marker`

Псевдоэлемент [`::marker`](../../css/marker.md) позволяет стилизовать пулю или номер для элемента списка или стрелку элемента `<summary>`.

```css
::marker {
    color: hotpink;
}

ul ::marker {
    font-size: 1.5em;
}

ol ::marker {
    font-size: 1.1em;
}

summary::marker {
    content: '\002B'' '; /* Plus symbol with space */
}

details[open] summary::marker {
    content: '\2212'' '; /* Minus symbol with space */
}
```

Для `::marker` поддерживается только небольшое подмножество CSS-свойств:

-   `color`
-   `content`
-   `white-space`
-   `font` свойства
-   `animation` и `transition` свойства

Вы можете изменить символ маркера, используя свойство `content`. С его помощью можно, например, установить символ плюса и минуса для закрытого и пустого состояний элемента `<summary>`.

<iframe src="https://codepen.io/web-dot-dev/embed/MWJozrR?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## `::selection`

Псевдоэлемент [`::selection`](../../css/selection.md) позволяет стилизовать вид выделенного текста.

```css
::selection {
    background: green;
    color: white;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/JjEJeZK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Этот псевдоэлемент может быть использован для стилизации всего выделенного текста, как в приведенном выше примере. Он также может быть использован в сочетании с другими селекторами для получения более специфического стиля выделения.

```css
p:nth-of-type(2)::selection {
    background: darkblue;
    color: yellow;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/MWJozXM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Как и в случае с другими псевдоэлементами, допускается использование только некоторого подмножества CSS-свойств:

-   `color`
-   `background-color` но **не** `background-image`
-   `text` свойства

## `::placeholder`

<p class="ciu_embed" data-feature="mdn-css__selectors__placeholder" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

К элементам формы, таким как `<input>`, можно добавить вспомогательную подсказку с атрибутом `placeholder`. Псевдоэлемент [`::placeholder`](../../css/placeholder.md) позволяет стилизовать этот текст.

```css
input::placeholder {
    color: darkcyan;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/KKaqrrY?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

В `::placeholder` поддерживается только подмножество CSS-правил:

-   `color`
-   свойства `background`
-   свойства `font`
-   свойства `text`

!!!note ""

    Заполнитель `placeholder` не является `<label>` и не должен использоваться вместо `<label>`. Элементы формы должны быть снабжены метками, иначе они будут недоступны.

## `::cue`

<p class="ciu_embed" data-feature="mdn-css__selectors__cue" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Последним в этой экскурсии по псевдоэлементам является псевдоэлемент [`::cue`](../../css/cue.md). Он позволяет стилизовать подсказки WebVTT, которые являются подписями к элементу `<video>`.

В псевдоэлемент `::cue` можно также передать селектор, который позволяет стилизовать определенные элементы _вне_ подписи.

```css
video::cue {
    color: yellow;
}

video::cue(b) {
    color: red;
}

video::cue(i) {
    color: lightpink;
}
```

:information_source: Источник: [Pseudo-elements](https://web.dev/learn/css/pseudo-elements/)
