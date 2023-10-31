---
description: Адаптация дизайна к различным размерам экрана с помощью медиазапросов CSS.
---

# Медиа-запросы

Дизайнеры могут корректировать свои проекты в соответствии с пожеланиями пользователей. Наиболее ярким примером этого является форм-фактор устройства пользователя: его ширина, соотношение сторон устройства и т.д. Используя медиазапросы, дизайнеры могут реагировать на эти различные форм-факторы.

Медиазапросы инициируются ключевым словом `@media` (at-правило CSS) и могут использоваться в различных случаях.

## Ориентация на различные типы вывода

Веб-сайты часто отображаются на экранах, но CSS можно использовать и для стилизации сайтов под другие виды вывода. Вы можете захотеть, чтобы ваши веб-страницы выглядели на экране одним образом, а при распечатке - другим. Запрос типов носителей позволяет это сделать.

В данном примере цвет фона установлен серым. Но если страница будет распечатана, то цвет фона должен быть прозрачным. Это позволяет сэкономить чернила для принтера пользователя.

```css
body {
    color: black;
    background-color: grey;
}

@media print {
    body {
        background-color: transparent;
    }
}
```

Вы можете использовать правило `@media` в своей таблице стилей таким образом, либо сделать отдельную таблицу стилей и использовать атрибут `media` на элементе `link`:

```html
<link rel="stylesheet" href="global.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Если вы не укажете ни одного медиатипа для вашего CSS, то он автоматически будет иметь значение медиатипа `all`. Эти два блока CSS эквивалентны:

```css
body {
    color: black;
    background-color: white;
}
```

---

```css
@media all {
    body {
        color: black;
        background-color: white;
    }
}
```

Эти две строки HTML также эквивалентны:

```html
<link rel="stylesheet" href="global.css" />
```

---

```html
<link rel="stylesheet" href="global.css" media="all" />
```

### Условия запроса

К медиатипам можно добавлять условия. Такие условия называются медиазапросами. CSS применяется только в том случае, если медиатип соответствует условию и условие также истинно. Такие условия называются _медиафункциями_.

Вот синтаксис медиазапросов:

```css
@media type and (feature);
```

Вы можете использовать медиазапросы для элемента `link`, если ваши стили находятся в отдельной таблице стилей:

```html
<link
    rel="stylesheet"
    href="specific.css"
    media="type and (feature)"
/>
```

Допустим, необходимо применять различные стили в зависимости от того, в каком режиме находится окно браузера: альбомном (ширина области просмотра больше высоты) или портретном (высота области просмотра больше ширины). Для проверки этого существует медиафункция `orientation`, которую можно использовать:

```css
@media all and (orientation: landscape) {
   // Styles for landscape mode.
}
@media all and (orientation: portrait) {
   // Styles for portrait mode.
}
```

Или если вы предпочитаете иметь отдельные таблицы стилей:

```html
<link
    rel="stylesheet"
    href="landscape.css"
    media="all and (orientation: landscape)"
/>
<link
    rel="stylesheet"
    href="portrait.css"
    media="all and (orientation: portrait)"
/>
```

В данном случае медиатипом является `all`. Поскольку это значение по умолчанию, при желании его можно не указывать:

```css
@media (orientation: landscape) {
   // Styles for landscape mode.
}
@media (orientation: portrait) {
   // Styles for portrait mode.
}
```

Или использовать отдельные таблицы стилей:

```html
<link
    rel="stylesheet"
    href="landscape.css"
    media="(orientation: landscape)"
/>
<link
    rel="stylesheet"
    href="portrait.css"
    media="(orientation: portrait)"
/>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBXVowV?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen qBXVowV by web-dot-dev on Codepen"></iframe>

---

<video controls autoplay loop>
<source src="/learn/design/media-queries-1.mp4" />
</video>

Хотя использование отдельных таблиц стилей для различных типов медиафайлов, например `print`, может быть нормальным, не стоит использовать отдельную таблицу стилей для каждого медиазапроса. Вместо этого используйте at-правила `@media`.

## Настройка стилей в зависимости от размера области просмотра

Для адаптивного дизайна одна из наиболее полезных медиа-функций связана с размерами области просмотра браузера. Чтобы применять стили при ширине окна браузера, превышающей определенное значение, используйте `min-width`.

```css
@media (min-width: 400px) {
  // Styles for viewports wider than 400 pixels.
}
```

Используйте медиафункцию `max-width` для применения стилей шириной менее определенного значения:

```css
@media (max-width: 400px) {
  // Styles for viewports narrower than 400 pixels.
}
```

В медиазапросах можно использовать любые CSS [единицы длины](https://developer.mozilla.org/docs/Web/CSS/length). Если содержимое сайта состоит в основном из изображений, то наиболее целесообразно использовать пиксели. Если содержимое в основном текстовое, то, вероятно, имеет смысл использовать [относительную единицу](../css3/sizing.md#relative-lengths), основанную на размере текста, например `em` или `ch`:

```css
@media (min-width: 25em) {
  // Styles for viewports wider than 25em.
}
```

Можно также комбинировать медиазапросы для применения более одного условия. Для объединения медиазапросов используйте слово `and`:

```css
@media (min-width: 50em) and (max-width: 60em) {
  // Styles for viewports wider than 50em and narrower than 60em.
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRvOxaw?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen GRvOxaw by web-dot-dev on Codepen"></iframe>

---

<video controls autoplay loop>
<source src="/learn/design/media-queries-2.mp4" />
</video>

## Выбор точек останова в зависимости от содержания

Точка, в которой условие медиафункции становится истинным, называется точкой останова. Точки останова лучше всего выбирать на основе содержимого, а не популярных размеров устройств, поскольку они могут меняться с каждым циклом выпуска технологий.

В данном примере `50em` - это точка, в которой строки текста становятся неудобно длинными. Поэтому создается точка останова, чтобы сделать интерфейс более разборчивым. С помощью свойства `column-count` текст с этого момента делится на две колонки.

```css
@media (min-width: 50em) {
    article {
        column-count: 2;
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/oNeodgd?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen oNeodgd by web-dot-dev on Codepen"></iframe>

---

<video controls autoplay loop>
<source src="/learn/design/media-queries-3.mp4" />
</video>

## Комбинации

Можно использовать медиазапросы, основанные не только на ширине, но и на высоте области просмотра. Это может быть полезно для оптимизации содержимого интерфейса "над сгибом". В предыдущем примере, если читатель использует широкое, но короткое окно браузера, ему придется прокрутить вниз одну колонку, а затем снова прокрутить вверх, чтобы добраться до верхней части второй колонки. Безопаснее было бы применять колонки только тогда, когда область просмотра достаточно широка и высока.

Можно комбинировать медиазапросы таким образом, чтобы стили применялись только при выполнении всех условий. В данном примере область просмотра должна быть не менее `50em` в ширину и `60em` в высоту, чтобы стили колонок были применены. Эти точки разрыва были выбраны исходя из объема содержимого.

```css
@media (min-width: 50em) and (min-height: 60em) {
    article {
        column-count: 2;
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjyOvdM?height=1000&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 1000px; width: 100%; border: 0;" data-title="Pen JjyOvdM by web-dot-dev on Codepen"></iframe>

---

<video controls autoplay loop>
<source src="/learn/design/media-queries-4.mp4" />
</video>

Эти примеры показывают, как медиазапросы могут быть использованы для адаптации дизайна к форм-фактору устройства пользователя, но это лишь малая часть возможностей. Медиазапросы могут выходить далеко за рамки ширины и высоты, позволяя получить доступ к пользовательским предпочтениям в отношении функций доступности и цветов темы. Использование медиазапросов для корректировки макета - это отличное начало адаптивного дизайна, который опирается на эти и другие возможности.
