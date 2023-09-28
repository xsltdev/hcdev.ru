---
description: В этом модуле вы узнаете, как определить переходы между состояниями элемента. Использование переходов позволяет повысить удобство работы пользователя, обеспечивая визуальную обратную связь при взаимодействии с ним.
icon: material/transition
---

# Переходы

<big>В этом модуле вы узнаете, как определить **переходы** между состояниями элемента. Использование переходов позволяет повысить удобство работы пользователя, обеспечивая визуальную обратную связь при взаимодействии с ним.</big>

!!!info "CSS подкаст"

    044: Переходы

    === "Английский оригинал"

    	<audio style="width: 100%;" controls src="/learn/css3/transitions.en.mp3"></audio>

При взаимодействии с веб-сайтом можно заметить, что многие элементы имеют _состояние_. Например, выпадающие окна могут находиться в открытом или закрытом состоянии. Кнопки могут менять цвет при фокусировке или наведении. Модальные окна появляются и исчезают.

По умолчанию CSS переключает стиль этих состояний мгновенно.

Используя переходы CSS, мы можем интерполировать между начальным и целевым состоянием элемента. Переход от одного состояния к другому улучшает впечатления пользователя, обеспечивая визуальное направление, поддержку и подсказки о причине и следствии взаимодействия.

!!!tip "Ключевые понятия"

    **Интерполяция** — это процесс создания "промежуточных" шагов, плавно переходящих из одного состояния в другое.

<iframe src="https://codepen.io/web-dot-dev/embed/zYzNrJV?height=320&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Свойства переходов

Для использования переходов в CSS можно использовать различные свойства переходов или сокращенное свойство `transition`.

### `transition-property`

Свойство [`transition-property`](../../css/transition-property.md) определяет, к какому стилю (стилям) следует перейти.

```css
.my-element {
    transition-property: background-color;
}
```

Свойство `transition-property` принимает одно или несколько имен CSS-свойств в виде списка, разделенного запятыми.

Опционально можно использовать `transition-property: all`, чтобы указать, что переход должен осуществляться для каждого свойства.

<iframe src="https://codepen.io/web-dot-dev/embed/VwWPeEj?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `transition-duration`

Свойство [`transition-duration`](.../.../css/transition-duration.md) используется для определения времени, в течение которого будет завершен переход.

<iframe src="https://codepen.io/web-dot-dev/embed/wvegMYp?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

`transition-duration` принимает единицы времени, либо секунды (`s`), либо миллисекунды (`ms`) и по умолчанию принимает значение `0s`.

### `transition-timing-function`

Используйте свойство [`transition-timing-function`](../../css/transition-timing-function.md) для изменения скорости CSS-перехода в течение `transition-duration`.

По умолчанию CSS переводит элементы с постоянной скоростью (`transition-timing-function: linear`). Однако линейные переходы могут выглядеть несколько искусственно: в реальной жизни объекты имеют вес и не могут мгновенно останавливаться и стартовать. Облегчение перехода может сделать его более живым и естественным.

<iframe src="https://codepen.io/web-dot-dev/embed/QWgdyZx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

В нашем [модуле по CSS-анимации](animations.md#animation-timing-function) есть хороший обзор функций синхронизации.

Вы можете использовать [DevTools](https://developer.chrome.com/docs/devtools/css/animations/) для экспериментов с различными функциями синхронизации в режиме реального времени.

![Визуальный редактор тайминга переходов Chrome DevTools](transitions-1.avif)

### `transition-delay`

Свойство [`transition-delay`](../../css/transition-delay.md) используется для указания времени, через которое начнется переход. Если `transition-duration` не указано, то переходы будут начинаться мгновенно, так как значение по умолчанию равно `0s`. Это свойство принимает единицу времени, например, секунды (`s`) или миллисекунды (`ms`).

<iframe src="https://codepen.io/web-dot-dev/embed/jOwyWep?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Это свойство полезно для ступенчатых переходов, достигаемых путем установки большей `transition-delay` для каждого последующего элемента в группе.

<iframe src="https://codepen.io/web-dot-dev/embed/yLXgeRQ?height=410&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Функция `transition-delay` также полезна для отладки. Установив отрицательное значение задержки, можно запустить переход дальше по временной шкале.

### Сокращенное свойство `transition`

Как и для большинства CSS-свойств, существует сокращенный вариант. [`transition`](../../css/transition.md) объединяет `transition-property`, `transition-duration`, `transition-timing-function` и `transition-delay`.

```css
.longhand {
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
}

.shorthand {
    transition: transform 300ms ease-in-out 0s;
}
```

## Что может и что не может быть переходом?

При написании CSS можно указать, какие свойства должны иметь анимированные переходы. См. [этот MDN-список анимируемых CSS-свойств](https://developer.mozilla.org/docs/Web/CSS/CSS_animated_properties).

В общем случае переход возможен только для тех элементов, которые могут иметь "среднее состояние" между начальным и конечным состояниями. Например, невозможно добавить переходы для `font-family`, поскольку неясно, как должно выглядеть "среднее состояние" между `serif` и `monospace`. С другой стороны, можно добавить переходы для `font-size`, поскольку его единицей является длина, которая может быть интерполирована между.

![Диаграмма фигур, плавно переходящих из одного состояния в другое, и две строки текста с разными шрифтами, которые не могут плавно переходить](transitions-2.avif)

Вот некоторые общие свойства, по которым можно осуществлять переход.

### Трансформация

CSS-свойство [`transform`](../../css/transform.md) часто используется для перехода, поскольку это свойство ускоряется на GPU и обеспечивает более плавную анимацию, а также потребляет меньше энергии. Это свойство позволяет произвольно масштабировать, поворачивать, переводить или перекашивать элемент.

<iframe src="https://codepen.io/web-dot-dev/embed/GRErowE?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Ознакомьтесь с [разделом о трансформациях](functions.md#transforms) в [нашем модуле Функции](functions.md).

### Цвет

До, во время и после взаимодействия цвет может быть отличным индикатором состояния. Например, кнопка может менять цвет при наведении на нее курсора. Это изменение цвета может служить сигналом для пользователя о том, что на кнопку можно нажать.

Свойства `color`, `background-color` и `border-color` — это лишь несколько мест, где цвет может быть изменен при взаимодействии.

!!!note ""

    Цветовые переходы, как правило, не обязательно должны находиться за [уменьшенным движением](#accessibility-considerations). Используйте свое лучшее суждение.

Ознакомьтесь с [нашим модулем по цвету](color.md).

### Тени

Тени часто переходят для обозначения изменения высоты, например, от фокуса пользователя.

<iframe src="https://codepen.io/web-dot-dev/embed/gORgPQx?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Ознакомьтесь с [нашим модулем по теням](shadows.md).

### Фильтры

[`filter`](../../css/filter.md) — это мощное CSS-свойство, позволяющее добавлять графические эффекты "на лету". Переход между различными состояниями `filter` может дать весьма впечатляющие результаты.

<iframe src="https://codepen.io/web-dot-dev/embed/PojWZxJ?height=350&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Ознакомьтесь с [нашим модулем по фильтрам](filters.md).

## Триггеры переходов

Для активации CSS-переходов необходимо, чтобы в CSS присутствовало изменение состояния _и_ событие, вызывающее это изменение. Типичным примером такого триггера является [псевдокласс `:hover`](pseudo-classes.md). Этот псевдокласс срабатывает, когда пользователь наводит курсор на элемент.

Ниже приведен список некоторых псевдоклассов и событий, которые могут вызывать изменение состояния элементов.

-   [`:hover`](pseudo-classes.md#hover): совпадает, если курсор находится над элементом.
-   [`:focus`](pseudo-classes.md#focus,-focus-within,-and-focus-visible): соответствует, если элемент сфокусирован.
-   [`:focus-within`](pseudo-classes.md#focus,-focus-within,-and-focus-visible) : соответствует, если элемент или любой из его потомков сфокусирован.
-   [`:target`](pseudo-classes.md#target) : совпадает, если [фрагмент](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment) текущего URL совпадает с `id` элемента.
-   [`:active`](pseudo-classes.md#active): совпадает, когда элемент активизируется (обычно при нажатии на него мышью).
-   Изменение `class` с помощью JavaScript: когда CSS `class` элемента изменяется с помощью JavaScript, CSS будет переходить к соответствующим свойствам, которые изменились.

## Различные переходы для входа или выхода

Устанавливая различные свойства `transition` при наведении/фокусировке, можно создать несколько интересных эффектов.

```css
.my-element {
    background: red;

    /* This transition is applied on the "exit" transition */
    transition: background 2000ms ease-in;
}

.my-element:hover {
    background: blue;

    /* This transition is applied on the "enter" transition */
    transition: background 150ms ease;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/OJgWMaO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Вопросы доступности {#accessibility-considerations}

Переходы CSS подходят не всем. У некоторых людей переходы и анимация могут вызывать укачивание или дискомфорт. К счастью, в CSS есть медиафункция [`prefers-reduced-motion`](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion), которая определяет, что пользователь указал, что предпочитает меньше двигаться на своем устройстве.

```css
/*
Если пользователь высказался за уменьшение
количества движений, то не используйте переходы.
*/
@media (prefers-reduced-motion: reduce) {
    .my-element {
        transition: none;
    }
}

/*
Если браузер понимает медиазапрос и пользователь
явно не задал предпочтение, то используйте переходы.
*/
@media (prefers-reduced-motion: no-preference) {
    .my-element {
        transition: transform 250ms ease;
    }
}
```

Более подробную информацию об этой медиафункции см. в нашем блоге [prefers-reduced-motion: Иногда меньше движения — лучше](https://web.dev/prefers-reduced-motion/).

!!!note ""

    В модуле [Изучаем доступность](../accessibility/index.md), посвященном [анимации и движению](../accessibility/motion.md), вы узнаете, как добавить на свой сайт восхищения, не создавая проблем для некоторых пользователей.

## Вопросы производительности

При работе с переходами CSS могут возникнуть проблемы с производительностью, если добавить переходы для некоторых свойств CSS. Например, при изменении таких свойств, как `width` или `height`, происходит смещение содержимого на остальной части страницы. Это заставляет CSS рассчитывать новые позиции для каждого затронутого элемента для каждого кадра перехода. По возможности мы рекомендуем использовать такие свойства, как `transform` и `opacity`.

Ознакомьтесь с нашим [руководством по высокопроизводительной CSS-анимации](https://web.dev/animations-guide/) для более глубокого изучения этой темы.

:information_source: Источник: [Transitions](https://web.dev/learn/css/transitions/)
