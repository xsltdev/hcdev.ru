---
description: Псевдоклассы позволяют применять CSS на основе изменения состояния. Это означает, что ваш дизайн может реагировать на вводимые пользователем данные, например, на неправильный адрес электронной почты.
icon: material/selection-multiple
---

# Псевдоклассы

<big>Псевдоклассы позволяют применять CSS на основе изменения состояния. Это означает, что ваш дизайн может реагировать на вводимые пользователем данные, например, на неправильный адрес электронной почты.</big>

!!!info "CSS подкаст"

    014: Псевдоклассы

    <audio style="width: 100%;" controls src="https://traffic.libsyn.com/secure/thecsspodcast/TCP_CSS_Podcast_Episode_015_v1.0.mp3?dest-id=1891556"></audio>

Допустим, у вас есть форма регистрации по электронной почте, и вы хотите, чтобы поле формы электронной почты имело красную рамку, если оно содержит недействительный адрес электронной почты. Как это сделать? Можно использовать CSS-псевдокласс `:invalid`, который является одним из многих псевдоклассов, предоставляемых браузерами.

<iframe src="https://codepen.io/web-dot-dev/embed/QWdMGjE?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Псевдокласс позволяет применять стили на основе изменений состояния и внешних факторов. Это означает, что ваш дизайн может реагировать на вводимые пользователем данные, например, на неправильный адрес электронной почты. Эти вопросы рассматриваются в модуле [selectors](selectors.md), а в этом модуле мы рассмотрим их более подробно.

В отличие от псевдоэлементов, о которых вы можете узнать в [предыдущем модуле](pseudo-elements.md), псевдо*классы* хук на определенные _состояния_, в которых может находиться элемент, а не на общие стилевые особенности этого элемента.

## Интерактивные состояния

Следующие псевдоклассы применяются при взаимодействии пользователя с вашей страницей.

### `:hover`

<p class="ciu_embed" data-feature="mdn-css__selectors__hover" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если у пользователя есть указательное устройство, например мышь или трекпад, и он помещает его над элементом, то к этому состоянию можно подключить хук [`:hover`](../../css/hover.md) для применения стилей. Это полезный способ намекнуть, что с элементом можно взаимодействовать.

<iframe src="https://codepen.io/web-dot-dev/embed/vYgJyNP?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:active`

<p class="ciu_embed" data-feature="mdn-css__selectors__active" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Это состояние возникает при активном взаимодействии с элементом - например, при щелчке мышью - до того, как щелчок будет отпущен. Если используется указательное устройство, например мышь, то это состояние наступает, когда щелчок начинается, но еще не отпущен.

<iframe src="https://codepen.io/web-dot-dev/embed/YzNxpam?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:focus`, `:focus-within` и `:focus-visible` {#focus,-focus-within,-and-focus-visible}

<p class="ciu_embed" data-feature="mdn-css__selectors__focus" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если элемент может получать фокус - например, `<button>` - вы можете реагировать на это состояние с помощью псевдокласса [`:focus`](../../css/focus.md).

<iframe src="https://codepen.io/web-dot-dev/embed/WNREoyj?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

<p class="ciu_embed" data-feature="mdn-css__selectors__focus-within" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Вы также можете реагировать на получение фокуса дочерним элементом вашего элемента с помощью функции [`:focus-within`](../../css/focus-within.md).

<iframe src="https://codepen.io/web-dot-dev/embed/mdRMOoV?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Фокусируемые элементы, такие как кнопки, будут показывать кольцо фокусировки, когда они находятся в фокусе - даже при щелчке. В подобной ситуации разработчик применит следующий CSS:

```css
button:focus {
    outline: none;
}
```

<p class="ciu_embed" data-feature="mdn-css__selectors__focus-visible" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Этот CSS удаляет кольцо фокуса браузера по умолчанию, когда элемент получает фокус, что создает проблему доступности для пользователей, перемещающихся по веб-странице с помощью клавиатуры. Если стиль фокуса отсутствует, то при использовании клавиши табуляции они не смогут отслеживать, где в данный момент находится фокус. С помощью [`:focus-visible`](../../css/focus-visible.md) можно представить стиль фокуса, когда элемент получает фокус с клавиатуры, и одновременно использовать правило `outline: none`, чтобы предотвратить его появление при взаимодействии с указателем.

```css
button:focus {
    outline: none;
}

button:focus-visible {
    outline: 1px solid black;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/qBRXRdW?height=350&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:target`

<p class="ciu_embed" data-feature="mdn-css__selectors__target" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Псевдокласс [`:target`](../../css/target.md) выбирает элемент, у которого `id` совпадает с фрагментом URL. Допустим, у вас есть следующий HTML:

```html
<article id="content">…</article>
```

К этому элементу можно прикрепить стили, если в url содержится `#content`.

```css
#content:target {
    background: yellow;
}
```

Это удобно для выделения областей, на которые, возможно, была сделана специальная ссылка, например, на основное содержание веб-сайта, с использованием ссылки "пропустить".

<iframe src="https://codepen.io/web-dot-dev/embed/KKavaqx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Состояния

### `:link`

<p class="ciu_embed" data-feature="mdn-css__selectors__link" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Псевдокласс [`:link`](../../css/link.md) может быть применен к любому элементу `<a>`, имеющему значение `href`, который **еще не был** посещен.

### `:visited`

С помощью псевдокласса [`:visited`](../../css/visited.md) можно придать стиль ссылке, по которой пользователь уже перешел. Это состояние противоположно состоянию `:link`, однако в целях [безопасности](https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector) можно использовать меньше CSS-свойств. Вы можете стилизовать только `color`, `background-color`, `border-color`, `outline-color` и цвет SVG `fill` и `stroke`.

<iframe src="https://codepen.io/web-dot-dev/embed/OJWjmzM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

#### Порядок имеет значение

Если вы определяете стиль `:visited`, то он может быть отменен псевдоклассом ссылки, имеющим, по крайней мере, такую же специфику. В связи с этим рекомендуется использовать правило LVHA для стилизации ссылок с псевдоклассами в определенном порядке: `:link`, `:visited`, `:hover`, `:active`.

```css
a:link {
}
a:visited {
}
a:hover {
}
a:active {
}
```

!!!note ""

    По соображениям безопасности изменять стили, заданные `:link` или состоянием без посещения, можно только с помощью псевдокласса `:visited`, поэтому важно сначала определить изменяемые стили. В этом поможет соблюдение правила LVHA.

## Состояния формы

Следующие псевдоклассы могут выбирать элементы формы в различных состояниях, в которых эти элементы могут находиться при взаимодействии с ними.

### `:disabled` и `:enabled`

<p class="ciu_embed" data-feature="mdn-css__selectors__disabled" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__selectors__enabled" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если элемент формы, например `<button>`, отключен браузером, вы можете использовать псевдокласс [`:disabled`](../../css/disabled.md) для хука этого состояния. Для противоположного состояния доступен псевдокласс [`:enabled`](../../css/enabled.md), однако элементы формы по умолчанию также `:enabled`, поэтому вы можете не найти возможности воспользоваться этим псевдоклассом.

<iframe src="https://codepen.io/web-dot-dev/embed/yLgogPG?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:checked` и `:indeterminate`

<p class="ciu_embed" data-feature="mdn-css__selectors__checked" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Псевдокласс [`:checked`](../../css/checked.md) доступен, когда вспомогательный элемент формы, такой как чекбокс или радиокнопка, находится в состоянии checked.

<iframe src="https://codepen.io/web-dot-dev/embed/GRrvrxv?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

<p class="ciu_embed" data-feature="mdn-css__selectors__indeterminate" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Состояние `:checked` является бинарным (`true` или `false`), но у флажков есть промежуточное состояние, когда они не отмечены и не сняты. Это состояние называется [`:indeterminate`](../../css/indeterminate.md).

Примером такого состояния может служить элемент управления "select all", который устанавливает флажки для всех флажков в группе. Если пользователь затем снимет флажок с одного из этих флажков, то корневой флажок больше не будет представлять "всех", поэтому его следует перевести в неопределенное состояние.

<iframe src="https://codepen.io/web-dot-dev/embed/NWdvdLB?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

Элемент `<progress>` также имеет неопределенное состояние, которое может быть стилизовано. Обычно его используют для придания ему полосатого вида, чтобы показать, что неизвестно, сколько еще нужно сделать.

### `:placeholder-shown`

<p class="ciu_embed" data-feature="mdn-css__selectors__placeholder-shown" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если поле формы имеет атрибут `placeholder` и **без значения**, то псевдокласс [`:placeholder-shown`](../../css/placeholder-shown.md) может быть использован для прикрепления стилей к этому состоянию. Как только в поле появится содержимое, независимо от того, есть ли в нем `placeholder` или нет, это состояние больше не будет применяться.

### Состояния валидации

<p class="ciu_embed" data-feature="mdn-css__selectors__valid" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__selectors__invalid" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Вы можете реагировать на проверку HTML-формы с помощью таких псевдоклассов, как [`:valid`](../../css/valid.md), [`:invalid`](../../css/invalid.md) и [`:in-range`](../../css/in-range.md). Псевдоклассы `:valid` и `:invalid` полезны в таких контекстах, как поле электронной почты, которое имеет `pattern`, которому необходимо соответствовать, чтобы оно было действительным. Это состояние допустимого значения может быть показано пользователю, помогая ему понять, что он может спокойно переходить к следующему полю.

<iframe src="https://codepen.io/web-dot-dev/embed/QWdMpaL?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

<p class="ciu_embed" data-feature="mdn-css__selectors__in-range" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Псевдокласс `:in-range` доступен, если входные данные имеют значения `min` и `max`, например, числовой вход и значение находится в этих границах.

<iframe src="https://codepen.io/web-dot-dev/embed/qBRXrpP?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

В HTML-формах можно определить, что поле является обязательным, с помощью атрибута `required`. Для обязательных полей будет доступен псевдокласс [`:required`](../../css/required.md). Поля, которые не являются обязательными, могут быть выбраны с помощью псевдокласса [`:optional`](../../css/optional.md).

!!!note ""

    Не стоит полагаться только на цвет для обозначения изменений состояния - особенно на красный и зеленый, поскольку дальтоники и слабовидящие пользователи могут с трудом заметить изменение состояния или даже полностью его пропустить. Хорошей идеей является использование цвета для поддержки изменения состояния, а также изменения текста и пиктограмм для визуального обозначения изменений

## Выбор элементов по их индексу, порядку и месту появления

Существует группа псевдоклассов, которые выбирают элементы в зависимости от их местоположения в документе.

### `:first-child` и `:last-child`

<p class="ciu_embed" data-feature="mdn-css__selectors__first-child" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__selectors__last-child" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если необходимо найти первый или последний элемент, можно использовать [`:first-child`](../../css/first-child.md) и [`:last-child`](../../css/last-child.md). Эти псевдоклассы возвращают либо первый, либо последний элемент в группе элементов-братьев.

<iframe src="https://codepen.io/web-dot-dev/embed/YzNxZRO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:only-child`

<p class="ciu_embed" data-feature="mdn-css__selectors__only-child" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Также можно выделить элементы, не имеющие братьев и сестер, с помощью псевдокласса [`:only-child`](../../css/only-child.md).

<iframe src="https://codepen.io/web-dot-dev/embed/dyNzvaj?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:first-of-type` и `:last-of-type`

<p class="ciu_embed" data-feature="mdn-css__selectors__first-of-type" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__selectors__last-of-type" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Вы можете выбрать [`:first-of-type`](../../css/first-of-type.md) и [`:last-of-type`](../../css/last-of-type.md), которые, на первый взгляд, делают то же самое, что и `:first-child` и `:last-child`, но рассмотрим этот HTML:

```html
<div class="my-parent">
    <p>A paragraph</p>
    <div>A div</div>
    <div>Another div</div>
</div>
```

И этот CSS:

```css
.my-parent div:first-child {
    color: red;
}
```

Ни один из элементов не будет окрашен в красный цвет, поскольку первым дочерним элементом является абзац, а не div. В этом контексте полезен псевдокласс `:first-of-type`.

```css
.my-parent div:first-of-type {
    color: red;
}
```

Несмотря на то, что первый `<div>` является вторым дочерним элементом, он все равно является первым по типу внутри элемента `.my-parent`, поэтому в соответствии с этим правилом он будет окрашен в красный цвет.

<iframe src="https://codepen.io/web-dot-dev/embed/poRreXE?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### `:nth-child` и `:nth-of-type`

<p class="ciu_embed" data-feature="mdn-css__selectors__nth-child" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__selectors__nth-of-type" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Вы также не ограничены первым и последним дочерними элементами и типами. Псевдоклассы [`:nth-child`](../../css/nth-child.md) и [`:nth-of-type`](../../css/nth-of-type.md) позволяют указать элемент, находящийся под определенным индексом. Индексация в селекторах CSS начинается с `1`.

<iframe src="https://codepen.io/web-dot-dev/embed/GRrvWbL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

В эти псевдоклассы можно передавать не только индекс. Если требуется выбрать все четные элементы, можно использовать `:nth-child(even)`.

<iframe src="https://codepen.io/web-dot-dev/embed/wvgqdwv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Также можно создавать более сложные селекторы, которые находят элементы с регулярными интервалами, используя [микросинтаксис An+B](https://www.w3.org/TR/css-syntax-3/#anb-microsyntax).

```css
li:nth-child(3n + 3) {
    background: yellow;
}
```

Этот селектор выбирает каждый третий элемент, начиная с элемента 3. `n` в этом выражении - это индекс, который начинается с нуля, а 3 (`3n`) - это то, на сколько вы умножаете этот индекс.

Допустим, у вас есть 7 элементов `<li>`. Первым выбирается элемент 3, поскольку `3n+3` переводится как `(3 * 0) + 3`. На следующей итерации будет выбран элемент 6, поскольку `n` теперь увеличилось до `1`, поэтому `(3 * 1) + 3)`. Это выражение работает как для `:nth-child`, так и для `:nth-of-type`.

Вы можете поиграть с подобным селектором на этом [nth-child тестере](https://css-tricks.com/examples/nth-child-tester/) или на этом [quantity selector tool](https://quantityqueries.com).

### `:only-of-type`

<p class="ciu_embed" data-feature="mdn-css__selectors__only-of-type" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Наконец, с помощью [`:only-of-type`](../../css/only-of-type.md) можно найти единственный элемент определенного типа в группе братьев и сестер. Это удобно, если необходимо выбрать списки, содержащие только один элемент, или найти единственный полужирный элемент в абзаце.

<iframe src="https://codepen.io/web-dot-dev/embed/yLgobJb?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Поиск пустых элементов

Иногда бывает полезно определить абсолютно пустые элементы, и для этого также существует псевдокласс.

### `:empty`

<p class="ciu_embed" data-feature="mdn-css__selectors__empty" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если элемент не имеет дочерних элементов, то к ним применяется псевдокласс [`:empty`](../../css/empty.md). Однако дочерними элементами могут быть не только HTML-элементы или текстовые узлы: они могут быть и пробелами, что может сбить с толку при отладке следующего HTML-файла, когда вы задаетесь вопросом, почему он не работает с `:empty`:

```html
<div></div>
```

Причина заключается в том, что между открывающим и закрывающим `<div>` есть пробельные символы, поэтому empty не будет работать.

Псевдокласс `:empty` может быть полезен, если у вас мало контроля над HTML и вы хотите скрыть пустые элементы, например, в редакторе WYSIWYG-контента. Здесь редактор добавил пустой абзац.

```html
<article class="post">
    <p>
        Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <p></p>
    <p>Curabitur blandit tempus porttitor.</p>
</article>
```

С помощью `:empty` это можно найти и скрыть.

```css
.post :empty {
    display: none;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/VwPzbKg?height=250&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Нахождение и исключение нескольких элементов

Некоторые псевдоклассы помогают писать более компактный CSS.

### `:is()`

<p class="ciu_embed" data-feature="mdn-css__selectors__is" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если вы хотите найти все дочерние элементы `h2`, `li` и `img` в элементе `.post`, вы можете написать список селекторов следующим образом:

```css
.post h2,
.post li,
.post img {
    /* … */
}
```

С помощью псевдокласса [`:is()`](../../css/is.md) можно написать более компактную версию:

```css
.post :is(h2, li, img) {
    /* … */
}
```

Псевдокласс `:is` не только более компактен, чем список селекторов, но и более щадящий. В большинстве случаев, если в списке селекторов есть ошибка или неподдерживаемый селектор, то весь список селекторов перестает работать. Если в переданных селекторах псевдокласса `:is` есть ошибка, то недействительный селектор будет проигнорирован, но будут использованы те, которые являются действительными.

### `:not()`

<p class="ciu_embed" data-feature="mdn-css__selectors__not" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Также можно исключить элементы с помощью псевдокласса [`:not()`](../../css/not.md). Например, с его помощью можно стилизовать все ссылки, не имеющие атрибута `class`.

```css
a:not([class]) {
    color: blue;
}
```

Псевдокласс `:not` также может помочь улучшить доступность. Например, `<img>` должен иметь `alt`, даже если это пустое значение, поэтому можно написать CSS-правило, добавляющее толстый красный контур к недействительным изображениям:

```css
img:not([alt]) {
    outline: 10px red;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/abpyWJK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

:information_source: Источник: [Pseudo-classes](https://web.dev/learn/css/pseudo-classes/)
