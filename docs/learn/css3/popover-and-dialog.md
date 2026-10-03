---
description: Popover — это любой элемент с атрибутом popover, удобный для подсказок, оповещений, тостов и других интерактивных паттернов.
icon: material/message-outline
---

# Popover и dialog

<big>**Popover** — это любой элемент с атрибутом `popover`. Он удобен для самых разных интерактивных паттернов: всплывающих подсказок, оповещений, тостов и не только.</big>

<iframe src="https://web.dev/frame/learn/css/popover-and-dialog/index_76d3d94ec159048016d62789a639cca432cc7f10dc84f5e68e01d2f0b49280a9.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

```html
<div id="my-popover" popover>My popover content</div>
```

Атрибут `popover` по умолчанию скрывает элемент, и вам нужно дать пользователям способ его открыть. Popover попадает в верхний слой, поверх остального содержимого, но он не модальный. С содержимым за пределами popover по-прежнему можно взаимодействовать.

!!!note ""

    Атрибут `popover` можно поставить и на элемент `<dialog>`. Так вы получите семантику и доступность немодального dialog и поведение popover.

## Управление popover

Прежде чем разбирать виды popover и их поведение, посмотрите, как popover открывают и закрывают.

### Декларативно

Popover можно полностью управлять из HTML, без JavaScript: кнопками (и полями `input` с типом `button`) и атрибутом `popovertarget`.

У popover в предыдущем фрагменте `id` равен `my-popover`, и по этому идентификатору на него можно сослаться.

```html
<button popovertarget="my-popover">Toggle</button>
```

Можно также указать, должна ли кнопка открывать или закрывать popover: `popovertargetaction="show"` и `popovertargetaction="hide"`.

<iframe src="https://codepen.io/web-dot-dev/embed/OPyZpJL?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### С помощью JavaScript

Popover можно управлять и из JavaScript. Это удобно, когда popover нужно показать в ответ на что-то кроме щелчка по кнопке. Получите элемент popover и вызовите `showPopover()`, `hidePopover()` или `togglePopover()`.

<iframe src="https://codepen.io/web-dot-dev/embed/KwdRWKg?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Типы popover

Когда вы добавляете popover на сайт, приходится продумать много взаимодействий. Как он открывается? Как пользователь его закрывает? Что происходит с другими открытыми popover? Типов три, и вы выбираете тот, чье поведение и взаимодействия нужны вашему сценарию.

### Автоматические popover

У автоматических popover больше всего встроенного поведения. Это тип по умолчанию, если вы его не указали.

```html
<div id="popover" popover>My popover</div>
```

Часто не нужно держать открытыми несколько popover сразу, поэтому автоматический popover при открытии закрывает другие автоматические popover. Они также поддерживают легкое закрытие (light dismiss): щелчок снаружи popover закрывает его сам. Закрыть его можно и клавишей Esc.

<iframe src="https://codepen.io/web-dot-dev/embed/MYaGpwp?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Ручные popover

Поведение автоматического popover покрывает много сценариев, но иногда над popover нужен больший контроль. С ручными popover контроля больше, и за большую часть поведения отвечаете вы.

```html
<div id="popover" popover="manual">My popover</div>
```

Такой popover закроется только когда вы закроете его явно. Легкое закрытие и клавиша `Esc` его не закрывают. Зато можно открыть несколько popover одновременно.

<iframe src="https://codepen.io/web-dot-dev/embed/wBKjJKa?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Popover `hint`

<iframe src="https://web.dev/frame/learn/css/popover-and-dialog/index_64ce07e6aa9daf7bf04f4145e9b30e5bc603989a2070a5e510735e8e7e91ec1a.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Popover удобно использовать и для подсказок на странице. В этом паттерне пользователь наводит указатель на элемент и видит описание. Открыта должна быть только одна подсказка. Если взять автоматические popover, открытие одного закроет остальные открытые автоматические popover. Если взять ручные, большую часть поведения, включая закрытие других popover, придется реализовать самим. Popover `hint` дает третий вариант с поведением, похожим на автоматические popover. При этом открытие hint не закрывает автоматические popover.

```html
<div id="popover" popover="hint">My popover</div>
```

Popover `hint` полезны для дополнительной информации, которая вторична по отношению к основному содержимому. Их часто открывают событиями без щелчка: наведением или фокусом.

<iframe src="https://codepen.io/web-dot-dev/embed/dPYevYQ?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Позиционирование popover

По умолчанию popover открывается в центре экрана. Он попадает в верхний слой, поверх остального содержимого, и его можно позиционировать относительно области просмотра.

Это не всегда то, что нужно: чаще popover ставят рядом с элементом, который его открывает. Для этого есть [якорное позиционирование](anchor-positioning.md).

<iframe src="https://web.dev/frame/learn/css/popover-and-dialog/index_15b73af344fdb5ea97398e4d70a442c08d2b13e6f49fccb1ae778d294f096665.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

У якорного позиционирования два шага: объявить элемент-якорь и разместить свой элемент относительно этого якоря. Первый шаг popover может сделать за вас, задав неявный якорь. Когда вы открываете popover через `<button popovertarget>`, неявным якорем становится кнопка. Если popover открывается из JavaScript, неявный якорь задается параметром `source`.

<iframe src="https://codepen.io/web-dot-dev/embed/XJmqMXz?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

По умолчанию popover центрируется через `margin: auto`. Чтобы использовать якорное позиционирование, это обычно нужно переопределить: задайте `margin: unset`.

## Стили и анимация

### Псевдоэлемент `::backdrop`

Popover открывается в верхнем слое, поверх остального содержимого страницы. Под popover лежит псевдоэлемент `::backdrop`, которому можно задать стили.

Содержимое за пределами popover при этом не инертно: кнопки по-прежнему нажимаются, а по странице можно ходить с клавиатуры. Не стоит заслонять содержимое страницы, например сильным размытием или непрозрачным фоном.

### Псевдокласс `:popover-open`

Допустим, содержимое popover нужно разложить с помощью CSS Grid. Вы добавляете `[popover]{ display: grid }`, и внезапно все popover становятся видимыми. Так происходит потому, что popover скрываются через `display: none`. Псевдокласс `:popover-open` применяет стили только к открытому popover.

```css
[popover]{
    /* Так делать не стоит! Все popover станут видимыми.  */
    display: grid;
}

[popover]:popover-open {
    /*  Это затронет только открытые popover. */
    display: grid;
}
```

`:popover-open` также полезен, когда вы анимируете popover.

### Анимация popover

В анимации popover три шага:

1. `@starting-style {popover:popover-open { } }` — начальные стили popover в момент, когда он становится видимым. Это правило нужно объявить в таблице стилей после пункта 2.
2. `popover:popover-open { }` — стили popover, пока он открыт.
3. `popover { }` — стили, к которым popover приходит при закрытии.

Закрытый popover скрыт через `display: none`. Чтобы это анимировать, задайте `transition-behavior: allow-discrete` и добавьте `display` в список свойств `transition`.

Если popover позиционируется неявным якорем, в список свойств `transition` нужно добавить и `overlay`. Связь с неявным якорем снимается, как только popover уходит из верхнего слоя, поэтому переход для свойства `overlay` откладывает это до конца анимации закрытия.

<iframe src="https://codepen.io/web-dot-dev/embed/XJmqMdV?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Взаимодействие popover

На странице, скорее всего, будет несколько popover, и то, как они влияют друг на друга, зависит от типа и от того, как вы их используете.

### Вложенные popover

Иногда popover нужно открыть изнутри другого popover. Например, есть меню-popover, и один из пунктов открывает подменю. Когда пользователь закрывает главное меню, подменю не должно оставаться открытым. Popover могут обработать это автоматически.

Если вы открываете hint из hint или автоматический popover из автоматического, они складываются в стек. Закрытие popover закрывает и все popover, которые идут в стеке после него. То же самое работает с легким закрытием: если щелкнуть popover, все popover после него в стеке закроются, а более ранние останутся открытыми.

<iframe src="https://codepen.io/web-dot-dev/embed/raOvyLY?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Popover попадает в стек, если его исходный элемент находится внутри popover. Исходный элемент задается автоматически, когда на кнопке стоит `popovertarget`, либо из JavaScript: параметром `source` при вызове `.showPopover({source})` или `.togglePopover({source})`.

У автоматических popover свой стек, у hint — отдельный. Если же hint открывается изнутри автоматического popover, он добавляется в стек автоматических popover.

Popover `hint` рассчитаны на простую краткую информацию, поэтому из hint нельзя открыть автоматический popover.

Если вы используете ручные popover, всем этим нужно управлять вручную.

### Закрытие popover других типов

Вы уже знаете, что открытие автоматического popover закрывает другие автоматические popover. А как взаимодействуют разные типы? Это удобно разобрать на странице, где используются все три. В меню навигации кнопки открывают и закрывают автоматические popover. Текст на странице показывает контекстные подсказки через hint. И есть тост на ручном popover: он сообщает, что фоновая задача завершилась.

<iframe src="https://codepen.io/web-dot-dev/embed/OPyZpRP?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Подсказки недолговечны и появляются при наведении на текст. Одновременно должна быть видна только одна, и открытие второго hint закрывает первый.

Когда вы открываете меню щелчком по кнопке, hint закрывается по двум причинам. Во-первых, щелчок вне hint запускает легкое закрытие. Во-вторых, открытие автоматического popover закрывает все открытые hint. Пользователь сменил то, на чем сосредоточен, и краткое содержимое hint больше не актуально. Поэтому вызов `showPopover()` у автоматического popover закроет любой открытый hint.

Раскрывающиеся меню — это автоматические popover. У таких меню открыто должно быть только одно, и открытие одного закрывает другое. Как вы уже видели, открытие автоматического popover закрывает и открытые hint.

При этом, пока раскрывающееся меню открыто, содержимое несвязанной подсказки все еще может понадобиться. Показ подсказки hint не закрывает автоматические popover.

На ручной popover автоматические и hint не влияют, и когда он открывается, не закрывает ни hint, ни автоматические popover. Если же ручной popover открывается щелчком по кнопке, этот щелчок запускает легкое закрытие hint и автоматических popover.

Взаимодействие типов может показаться сложным, но оно как раз поддерживает обычные сценарии, если типы выбраны по ситуации. Если popover ведут себя не так, как вы ожидали, еще раз проверьте, какие типы вы используете.

:material-information-outline: Источник &mdash; [Popover and dialog](https://web.dev/learn/css/popover-and-dialog)
