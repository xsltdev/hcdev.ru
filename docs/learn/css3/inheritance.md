---
description: Некоторые свойства CSS наследуются, если для них не задано значение. В этом модуле вы узнаете, как это работает и как использовать это в своих интересах.
icon: material/content-copy
---

# Наследование

<big>Некоторые свойства CSS **наследуются**, если для них не задано значение. В этом модуле вы узнаете, как это работает и как использовать это в своих интересах.</big>

!!!info "CSS подкаст"

    005: Наследование

    === "Перевод на русский"

    	<audio style="width: 100%;" controls src="/learn/css3/inheritance.ru.mp3"></audio>

    === "Английский оригинал"

    	<audio style="width: 100%;" controls src="/learn/css3/inheritance.en.ogg"></audio>

Допустим, вы только что написали несколько CSS для придания элементам вида кнопки.

```html
<a href="http://example.com" class="my-button"
    >I am a button link</a
>
```

---

```css
.my-button {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    background: pink;
    font: inherit;
    text-align: center;
}
```

Затем вы добавляете элемент ссылки в статью контента со значением `class`, равным `.my-button`. Однако возникает проблема: текст имеет не тот цвет, на который вы рассчитывали. Как это произошло?

Некоторые CSS-свойства наследуются, если для них не задано значение. В случае с этой кнопкой она **наследовала** `color` от этого CSS:

```css
article a {
    color: maroon;
}
```

В этом уроке вы узнаете, почему так происходит и как наследование является мощной функцией, помогающей писать меньше CSS.

<iframe src="https://codepen.io/web-dot-dev/embed/zYNGEbg?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Наследование в CSS

Рассмотрим, как работает наследование, на примере этого фрагмента HTML:

```html
<html>
    <body>
        <article>
            <p>Lorem ipsum dolor sit amet.</p>
        </article>
    </body>
</html>
```

Корневой элемент (`<html>`) ничего не наследует, поскольку он является первым элементом в документе. Добавьте к элементу HTML некоторый CSS, и он начнет каскадом спускаться вниз по документу.

```css
html {
    color: lightslategray;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/JjEKgBX?height=200&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойство `color` наследуется другими элементами. Элемент `html` имеет свойство `color: lightslategray`, поэтому все элементы, которые могут наследовать цвет, теперь будут иметь цвет `lightslategray`.

```css
body {
    font-size: 1.2em;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/VwPLrLP?height=200&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

!!!note ""

    Поскольку в этом примере размер шрифта устанавливается для элемента `body`, элемент `html` по-прежнему будет иметь начальный размер шрифта, установленный браузером (таблицей стилей агента пользователя), но `article` и `p` будут наследовать размер шрифта, объявленный в `body`. Это происходит потому, что наследование распространяется только по нисходящей.

```css
p {
    font-style: italic;
}
```

Только `<p>` будет иметь курсивный текст, поскольку он является самым глубоким вложенным элементом. Наследование передается только вниз, но не обратно к родительским элементам.

<iframe src="https://codepen.io/web-dot-dev/embed/JjEKgmK?height=400&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Какие свойства наследуются?

Не все свойства CSS наследуются, но многие — да. Для справки здесь приведен полный список наследуемых свойств, взятый из справочника W3 по всем свойствам CSS:

-   [`azimuth`](https://developer.mozilla.org/docs/Web/SVG/Attribute/azimuth)
-   [`border-collapse`](../../css/border-collapse.md)
-   [`border-spacing`](../../css/border-spacing.md)
-   [`caption-side`](../../css/caption-side.md)
-   [`color`](../../css/color.md)
-   [`cursor`](../../css/cursor.md)
-   [`direction`](../../css/direction.md)
-   [`empty-cells`](../../css/empty-cells.md)
-   [`font-family`](../../css/font-family.md)
-   [`font-size`](../../css/font-size.md)
-   [`font-style`](../../css/font-style.md)
-   [`font-variant`](../../css/font-variant.md)
-   [`font-weight`](../../css/font-weight.md)
-   [`font`](../../css/font.md)
-   [`letter-spacing`](../../css/letter-spacing.md)
-   [`line-height`](../../css/line-height.md)
-   [`list-style-image`](../../css/list-style-image.md)
-   [`list-style-position`](../../css/list-style-position.md)
-   [`list-style-type`](../../css/list-style-type.md)
-   [`list-style`](../../css/list-style.md)
-   [`orphans`](../../css/orphans.md)
-   [`quotes`](../../css/quotes.md)
-   [`text-align`](../../css/text-align.md)
-   [`text-indent`](../../css/text-indent.md)
-   [`text-transform`](../../css/text-transform.md)
-   [`visibility`](../../css/visibility.md)
-   [`white-space`](../../css/white-space.md)
-   [`widows`](../../css/widows.md)
-   [`word-spacing`](../../css/word-spacing.md)

## Как работает наследование

У каждого элемента HTML каждое CSS-свойство по умолчанию имеет начальное значение. **Начальное значение** — это свойство, которое не наследуется и отображается по умолчанию, если каскаду не удается вычислить значение для данного элемента.

<video controls>
<source src="/learn/css3/inheritance-1.mp4" />
</video>

Свойства, которые могут быть унаследованы, каскадируются вниз, и дочерние элементы получают вычисляемое значение, которое представляет собой значение родительского элемента. Это означает, что если для родительского элемента `font-weight` установлено значение `bold`, то все дочерние элементы будут жирными, если только для их `font-weight` не установлено другое значение, или в таблице стилей агента пользователя не указано значение `font-weight` для этого элемента.

<iframe src="https://codepen.io/web-dot-dev/embed/xxgGPOZ?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Как явно наследовать и контролировать наследование

Наследование может повлиять на элементы неожиданным образом, поэтому в CSS есть средства, помогающие справиться с этой проблемой.

### Ключевое слово `inherit`

С помощью ключевого слова `inherit` можно заставить любое свойство наследовать вычисленное значение своего родителя. Полезным способом использования этого ключевого слова является создание исключений.

```css
strong {
    font-weight: 900;
}
```

Этот фрагмент CSS устанавливает для всех элементов `<strong>` значение `font-weight`, равное `900`, вместо значения по умолчанию `bold`, которое эквивалентно `font-weight: 700`.

```css
.my-component {
    font-weight: 500;
}
```

Класс `.my-component` вместо этого устанавливает `font-weight` на `500`. Чтобы элементы `<strong>` внутри `.my-component` также имели `font-weight: 500`, добавьте:

```css
.my-component strong {
    font-weight: inherit;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/eYgNedO?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Теперь элементы `<strong>` внутри `.my-component` будут иметь `font-weight`, равный `500`.

Вы можете явно задать это значение, но если вы используете `inherit` и в будущем CSS `.my-component` изменится, то вы можете гарантировать, что ваш `<strong>` автоматически будет соответствовать этому значению.

### Ключевое слово `initial`

Наследование может привести к проблемам с элементами, и `initial` предоставляет вам мощную возможность сброса.

Ранее вы узнали, что в CSS каждое свойство имеет значение по умолчанию. Ключевое слово `initial` возвращает свойство к исходному значению по умолчанию.

```css
aside strong {
    font-weight: initial;
}
```

Этот фрагмент снимет полужирный вес со всех элементов `<strong>` внутри элемента `<aside>` и вместо этого сделает их вес нормальным, что является исходным значением.

<iframe src="https://codepen.io/web-dot-dev/embed/OJWVORZ?height=300&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Ключевое слово `unset`

Свойство `unset` ведет себя по-разному, если свойство наследуется или нет. Если свойство наследуется, то ключевое слово `unset` будет таким же, как `inherit`. Если свойство не наследуется, то ключевое слово `unset` будет равно `initial`.

Запомнить, какие CSS-свойства наследуются, бывает непросто, поэтому `unset` может оказаться полезным в этом контексте. Например, `color` наследуется, а `margin` — нет, поэтому можно написать так:

```css
/* Global color styles for paragraph in authored CSS */
p {
    margin-top: 2em;
    color: goldenrod;
}

/* The p needs to be reset in asides, so you can use unset */
aside p {
    margin: unset;
    color: unset;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/JjEdpjw?height=400&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Теперь `margin` удаляется, а `color` возвращается к унаследованному вычисляемому значению.

Значение `unset` можно использовать и со свойством `all`. Возвращаясь к приведенному выше примеру, что произойдет, если глобальные стили `p` получат еще несколько свойств? Будет применяться только правило, установленное для `margin` и `color`.

```css
/* Global color styles for paragraph in authored CSS */
p {
    margin-top: 2em;
    color: goldenrod;
    padding: 2em;
    border: 1px solid;
}

/* Not all properties are accounted for anymore */
aside p {
    margin: unset;
    color: unset;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/bGgdLNB?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Если изменить правило `aside p` на `all: unset`, то неважно, какие глобальные стили будут применены к `p` в будущем, они всегда будут отменены.

```css
aside p {
    margin: unset;
    color: unset;
    all: unset;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/XWpbZbB?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Ресурсы

-   [Ссылка на MDN по вычисляемым значениям](https://developer.mozilla.org/docs/Web/CSS/computed_value)
-   [Статья о том, как наследование может быть полезно в модульных фронт-эндах](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)

:material-information-outline: Источник: [Inheritance](https://web.dev/learn/css/inheritance/)
