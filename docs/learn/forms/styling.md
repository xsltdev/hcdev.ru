---
description: Стилизовать формы с помощью CSS, обеспечивая при этом их удобство и читаемость для всех.
icon: material/border-style
---

# Стилизация форм

<big>Стилизовать формы с помощью CSS, обеспечивая при этом их удобство и читаемость для всех.</big>

## Помогите пользователям использовать вашу форму с помощью предпочитаемого браузера

Для того чтобы ваша форма была доступна как можно большему числу людей, используйте элементы, созданные для этой цели: `<input>`, `<textarea>`, `<select>` и `<button>`. Это базовые элементы для создания удобной формы.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/9d0576454b3b2d0fc001addab70d25bc?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

Стили браузера по умолчанию выглядят не лучшим образом! Давайте изменим это.

!!!note ""

    Прогрессивное улучшение - это стратегия, обеспечивающая базовый уровень необходимого контента и функций для максимально возможного числа пользователей. Она обеспечивает наилучшие возможности для пользователей современных браузеров.

    Вы начинаете с контента, используете [семантический HTML](https://developer.mozilla.org/docs/Glossary/Semantics#semantics_in_html), добавляете перспективный CSS и в качестве последнего шага добавляете надежный JavaScript. {% endAside %}

## Убедитесь, что элементы управления формами читаемы для всех

Размер шрифта по умолчанию для элементов управления формами в большинстве браузеров слишком мал. Чтобы элементы управления формы были читаемы, измените размер шрифта с помощью CSS:

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/477f5e58a406c6f86bfbfc9da1f18a69?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

Увеличьте `font-size` и `line-height` для улучшения читабельности.

```css
.form-element {
    font-size: 1.3rem;
    line-height: 1.2;
}
```

!!!note ""

    Для `font-size` используются относительные единицы измерения, такие как `em` (относительно базового размера родительского элемента) или `rem` (относительно базового размера документа), чтобы размер соответствовал предпочтениям пользователя. Пользователи могут изменять базовый `font-size`, и все элементы с относительным `font-size` будут автоматически подстраиваться под него. Для `line-height` используйте [unitless value](https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/), например `1.5`, чтобы сохранить высоту строки относительно размера шрифта.

    Подробнее о [пиксели против относительных единиц в CSS](https://www.24a11y.com/2019/pixels-vs-relative-units-in-css-why-its-still-a-big-deal/).

## Помогите пользователям ориентироваться в форме

В качестве следующего шага измените расположение формы и увеличьте расстояние между элементами формы, чтобы помочь пользователям понять, какие элементы находятся вместе.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/f2aca03916816074010e896f064f456a?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;"></iframe>

CSS-свойство `margin` увеличивает пространство между элементами, а свойство `padding` - пространство вокруг содержимого элемента.

Для общей компоновки используйте [Flexbox](../css3/flexbox.md) или [Grid](../css3/grid.md). Подробнее о [CSS методах компоновки](../css3/layout.md).

## Убедитесь, что элементы управления формой выглядят как элементы управления формой

Чтобы людям было удобно заполнять форму, используйте хорошо понятные стили для элементов управления формы. Например, для элементов `<input>` следует использовать сплошную границу.

!!!note ""

    Цвет границы `<input>`, используемый по умолчанию, во многих браузерах слишком светлый. Из-за недостаточного контраста элемент может быть плохо различим, особенно на мобильных устройствах. [Откройте эту демонстрацию](https://codepen.io/web-dot-dev/pen/9d0576454b3b2d0fc001addab70d25bc) в Chrome на Android, чтобы увидеть стили по умолчанию.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/d0740e968b5c72a0cf180359e80f5efc?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;"></iframe>

```css
input,
textarea {
    border: 1px solid;
}
```

## Помогите пользователям отправить вашу форму

Рассмотрите возможность использования `background` для `<button>` в соответствии со стилем сайта, а также переопределите или удалите стили `border`, используемые по умолчанию.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/f0052d40806fd750362fa0abaab01dcf?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;"></iframe>

!!!note ""

    В современных браузерах `<button>` можно стилизовать, как и любой другой элемент, поэтому всегда следует использовать семантический `<button>` или `<input type="submit">`. Использование элемента, созданного для этой задачи, дает множество встроенных преимуществ в плане удобства использования и доступности, которые вы не получите при использовании типового элемента, такого как `<div>`. О встроенных возможностях вы узнаете в других модулях.

    Подробнее о [изменении стиля по умолчанию для `<button>`](https://archive.hankchizljaw.com/wrote/introducing-the-button-element/#heading-oh-these-are-hard-to-style-though).

## Помочь пользователям понять текущее состояние

Браузеры применяют стиль по умолчанию для `:focus`. Вы можете переопределить стили для `:focus`, чтобы подобрать цвет в соответствии с вашим брендом.

```css
button:focus {
    outline: 4px solid green;
}
```

!!!note ""

    Удаляйте `outline` в `:focus` только в том случае, если вы также добавили другие соответствующие стили фокуса, чтобы обеспечить различимость стилей по умолчанию и фокуса.

    Подробнее о [разработке индикаторов фокуса](https://www.sarasoueidan.com/blog/focus-indicators/).

## Ресурсы

-   [Учим CSS](../css3/index.md)
-   [Методы верстки CSS](../css3/layout.md)
-   [Проектирование индикаторов фокуса](https://www.sarasoueidan.com/blog/focus-indicators/)
-   [Изменение стиля по умолчанию для `<button>`](https://archive.hankchizljaw.com/wrote/introducing-the-button-element/#heading-oh-these-are-hard-to-style-though).

:material-information-outline: Источник &mdash; [Styling forms](https://web.dev/learn/forms/styling/)
