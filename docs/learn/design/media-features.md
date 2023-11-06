---
description: Обзор всех способов, с помощью которых мультимедийные функции позволяют реагировать на устройства и предпочтения.
---

# Мультимедийные возможности

Адаптивный дизайн был бы невозможен без медиазапросов. До появления медиазапросов не было возможности узнать, с какого устройства люди посещают ваш сайт. Дизайнерам приходилось делать предположения. Эти предположения кодировались в дизайне с фиксированной шириной или в резиновой верстке.

Все изменилось с появлением [media queries](media-queries.md). Впервые дизайнеры смогли пойти навстречу людям. Дизайнеры могли корректировать свои макеты в зависимости от устройств пользователей.

Помните, что медиазапрос состоит из необязательного медиатипа и обязательной медиафункции. За прошедшие годы медиатипы не претерпели особых изменений. По-прежнему существует всего четыре возможных значения:

```css
@media all @media screen @media print @media speech;
```

С другой стороны, значительно расширились возможности [Media features](https://developer.mozilla.org/docs/Web/CSS/@media#media_features). Теперь дизайнеры могут идти навстречу пользователям, адаптируя дизайн не только под размер экрана.

## Размеры области просмотра

Самыми популярными медиазапросами в Интернете являются запросы, связанные с шириной области просмотра. Но даже здесь у вас есть выбор. Можно использовать медиафункцию `max-width` для применения стилей ниже определенной ширины, а можно использовать медиафункцию `min-width` для применения стилей выше определенной ширины.

```css
main {
    display: grid;
    grid-template-columns: 2fr 1fr;
}
@media (max-width: 45em) {
    main {
        display: block;
    }
}
```

---

```css
@media (min-width: 45em) {
    main {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
```

Лично я предпочитаю использовать `min-width`. Я применяю стили разметки аддитивным способом. Я ввожу новые правила компоновки в каждой точке останова, а не отменяю предыдущие правила.

Этот аддитивный подход работает и для высоты. Используя `min-height`, можно вводить больше правил по мере увеличения высоты области просмотра. Например, у вас может быть элемент заголовка, который вы хотите привязать к верхней части окна браузера, если есть достаточно места по вертикали.

```css
@media (min-height: 30em) {
    header {
        position: fixed;
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PoJbdaN?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen PoJbdaN by web-dot-dev on Codepen"></iframe>

Но при желании можно воспользоваться медиафункцией `max-height`. Здесь заголовок по умолчанию закреплен, но при недостатке вертикального пространства закрепление удаляется.

```css
header {
    position: fixed;
}
@media (max-height: 30em) {
    header {
        position: static;
    }
}
```

Выбор между префиксами `min-` и `max-` применим не только к префиксам [`width`](https://developer.mozilla.org/docs/Web/CSS/@media/width) и [`height`](https://developer.mozilla.org/docs/Web/CSS/@media/height). Аналогичный выбор предлагает и медиафункция [`aspect-ratio`](https://developer.mozilla.org/docs/Web/CSS/@media/aspect-ratio). Она также предлагает нефиксированную версию, если необходимо применить стили с точным соотношением ширины и высоты.

```css
@media (min-aspect-ratio: 16/9) {
    /* The ratio of width to height is at least 16 by 9. */
}
@media (max-aspect-ratio: 16/9) {
    /* The ratio of width to height is less than 16 by 9. */
}
@media (aspect-ratio: 16/9) {
    /* The ratio of width to height is exactly 16 by 9. */
}
```

Предоставление различных стилей для разных соотношений сторон может быстро выйти из-под контроля. Если вам не нужен такой тонкий контроль, то лучше воспользоваться медиафункцией [`orientation`](https://developer.mozilla.org/docs/Web/CSS/@media/orientation). Она имеет два возможных значения: `portrait` или `landscape`.

```css
@media (orientation: portrait) {
    /* The width is less than the height. */
}
@media (orientation: landscape) {
    /* The width is greater than the height. */
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBXVowV?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen qBXVowV by web-dot-dev on Codepen"></iframe>

<video controls loop>
<source src="/learn/design/media-features-1.mp4" />
</video>

Несмотря на то, что термины "портретная" и "ландшафтная" чаще всего используются для обозначения ориентации мобильных устройств, мультимедийная функция `orientation` не зависит от конкретного устройства. Полноэкранное окно браузера на обычном ноутбуке будет иметь значение `orientation` `landscape`.

## Дисплеи

Различные дисплеи имеют разную плотность пикселей, измеряемую в `dpi`, точках на дюйм. Настроить стили для разных плотностей пикселей можно с помощью медиафункции [`resolution`](https://developer.mozilla.org/docs/Web/CSS/@media/resolution). Как и `aspect-ratio`, `resolution` бывает трех видов: минимальное, максимальное и точное.

```css
@media (min-resolution: 300dpi) {
    /* The display has a pixel density of at least 300 dots per inch. */
}
@media (max-resolution: 300dpi) {
    /* The display has a pixel density less than 300 dots per inch. */
}
@media (resolution: 300dpi) {
    /* The display has a pixel density of exactly 300 dots per inch. */
}
```

Возможно, вам никогда не понадобится использовать медиазапросы `resolution`. Плотность пикселей обычно важна только для изображений, и [адаптивные изображения](responsive-images.md) позволяют работать с плотностью пикселей непосредственно в HTML.

С другой стороны, CSS - это место, где задаются анимации и переходы. Настроить анимацию и переходы в зависимости от частоты обновления можно с помощью медиафункции [`update`](https://developer.mozilla.org/docs/Web/CSS/@media/update-frequency). Эта медиафункция сообщает одно из трех значений: `none`, `low` и `fast`.

Значение `update`, равное `none`, означает отсутствие частоты обновления. Печатная страница, например, не может быть обновлена.

Значение `update`, равное `low`, означает, что дисплей не может обновляться быстро. Одним из примеров экрана с медленной частотой обновления является e-ink дисплей.

Значение `update`, равное `fast`, означает, что экран обновляется достаточно быстро для обработки анимации и переходов.

```css
@media (update: fast) {
    a {
        transition-duration: 0.4s;
        transition-property: transform;
    }
    a:hover {
        transform: scale(150%);
    }
}
```

Не все аспекты отображения связаны с аппаратными возможностями. В [модуле по тематизации](theming.md) вы видели, как определять свойства в файле [web app manifest](https://web.dev/articles/add-manifest). Одно из этих свойств называется `display`, и ему можно придать значение `fullscreen`, `standalone`, `minimum-ui` или `browser`. Соответствующая медиафункция [`display-mode`](https://developer.mozilla.org/docs/Web/CSS/@media/display-mode) позволяет настраивать стили для этих различных опций.

Допустим, вы указали в манифесте веб-приложения значение `display`, равное `standalone`. Если кто-то добавит ваш сайт на домашний экран, то он запустится без какого-либо интерфейса браузера. Возможно, вы решите отобразить для таких пользователей кнопку "Назад".

```css
button.back {
    display: none;
}
@media (display-mode: standalone) {
    button.back {
        display: inline;
    }
}
```

## Цвет

Существует множество медиафункций для запроса цветовых возможностей устройства. Если вы хотите настроить стили для любого дисплея, который выводит только оттенки серого, вы можете использовать медиафункцию [`monochrome`](https://developer.mozilla.org/docs/Web/CSS/@media/monochrome) без какого-либо значения.

```css
@media (monochrome) {
    body {
        color: black;
        background-color: white;
    }
}
```

Имеется соответствующая [`color`](https://developer.mozilla.org/docs/Web/CSS/@media/color) медиафункция.

```css
@media (color) {
    body {
        color: maroon;
        background-color: linen;
    }
}
```

Для цветных экранов можно написать запросы с медиафункциями [`color-gamut`](https://developer.mozilla.org/docs/Web/CSS/@media/color-gamut), [`color-index`](https://developer.mozilla.org/docs/Web/CSS/@media/color-index) или [`dynamic-range`](https://www.w3.org/TR/mediaqueries-5/#dynamic-range). Все они сообщают конкретные сведения о цветовых возможностях экрана.

В данном примере значения цветов обновляются адаптивно к медиафункции `dynamic-range`, которая сообщает о сочетании максимальной яркости, глубины цвета и коэффициента контрастности дисплея. Возможные значения - `standard` или `high`. Экрану высокой четкости, для которого значение `dynamic-range` равно `high`, присваивается другое цветовое пространство с помощью новой функции CSS `color()`.

```css
.neon-red {
    color: hsl(355 100% 95%);
}
@media (dynamic-range: high) {
    .neon-red {
        color: color(display-p3 1 0 0);
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BawQOPQ?height=400&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" data-title="Pen BawQOPQ by web-dot-dev on Codepen"></iframe>

## Взаимодействие

Медиафункции также могут сообщать о том, какой механизм ввода используется для взаимодействия с сайтом: `hover`, `any-hover`, `pointer` и `any-pointer`. Более подробная информация приведена в [модуле по взаимодействию](interaction.md).

## Предпочтения

Существует ряд медиазапросов, позволяющих реагировать на предпочтения пользователя: `prefers-color-scheme`, `prefers-contrast` и `prefers-reduced-motion`. Более подробную информацию см. в модулях [theming](theming.md) и [accessibility](accessibility.md).

В одном медиазапросе можно комбинировать медиафункции. Можно настроить стили анимации таким образом, чтобы они применялись только в том случае, если устройство имеет высокую частоту обновления и пользователь не выразил предпочтение уменьшенному движению.

```css
@media (update: fast) and (prefers-reduced-motion: no-preference) {
    a {
        transition-duration: 0.4s;
        transition-property: transform;
    }
    a:hover {
        transform: scale(150%);
    }
}
```

## Другие медиа-функции

В ближайшее время появятся новые медиа-функции.

Функции [`forced-colors`](https://developer.mozilla.org/docs/Web/CSS/@media/forced-colors) и [`inverted-colors`](https://developer.mozilla.org/docs/Web/CSS/@media/inverted-colors) будут сообщать, используется ли на устройстве ограниченная или инвертированная цветовая палитра.

Медиафункция [`scripting`](https://developer.mozilla.org/docs/Web/CSS/@media/scripting) позволяет корректировать CSS в зависимости от наличия JavaScript.

Медиафункция [`prefers-reduced-data`](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-data) позволит пользователям указывать, что они находятся на дозированном соединении, и отправлять меньший объем ресурсов.

Другие предложения пока находятся в стадии разработки. В следующем, заключительном модуле вы узнаете о предложении по созданию функции мультимедиа для работы с различными конфигурациями экранов.
