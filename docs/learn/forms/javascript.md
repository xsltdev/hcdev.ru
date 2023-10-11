---
description: Узнайте, как использовать JavaScript для улучшения форм.
icon: material/language-javascript
---

# JavaScript

<big>Узнайте, как использовать JavaScript для улучшения форм.</big>

## Реакция на события формы

С помощью JavaScript можно реагировать на действия пользователя в форме, открывать дополнительные поля формы, отправлять форму и многое другое.

### Помогите пользователям заполнить дополнительные элементы управления формой

Представьте, что вы создали форму опроса. После того как пользователь выбирает один из вариантов, вы хотите показать дополнительный `<input>`, чтобы задать конкретный вопрос, связанный с этим выбором. Как можно показать только соответствующий элемент `<input>`?

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/8e1e7a38790c75c267a978efa1d8e937?height=350&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

С помощью JavaScript можно раскрыть `<input>` только в том случае, если связанный с ним `<input type="radio">` выбран в данный момент.

```js
if (event.target.checked) {
    // show additional field
} else {
    // hide additional field
}
```

!!!warning ""

    Убедитесь, что ваша форма по-прежнему пригодна для использования [если JavaScript недоступен](https://kryogenix.org/code/browser/everyonehasjs.html). Основные возможности должны быть одинаковыми для всех пользователей, а JavaScript должен использоваться только в качестве дополнения.

Давайте посмотрим на [JavaScript-код](https://codepen.io/web-dot-dev/pen/8e1e7a38790c75c267a978efa1d8e937?editors=0010) для демонстрации. Заметили ли вы атрибуты `aria-controls` и `aria-expanded`? Используйте эти [ARIA-атрибуты](https://developer.mozilla.org/docs/Web/Accessibility/ARIA), чтобы помочь пользователям программ чтения с экрана понять, когда дополнительный элемент управления формы отображается или скрывается.

!!!warning ""

    Атрибут `aria-expanded` для `<input type="radio">` не [корректно объявляется всеми программами чтения с экрана](https://accessibility.blog.gov.uk/2021/09/21/an-update-on-the-accessibility-of-conditionally-revealed-questions/).

### Убедитесь, что пользователи могут отправить форму, не покидая страницу

Представьте, что у вас есть форма комментариев. Когда читатель добавляет комментарий и отправляет форму, было бы идеально, если бы он мог сразу увидеть комментарий, не обновляя страницу.

Для этого необходимо прослушать событие `onsubmit`, затем использовать `event.preventDefault()` для предотвращения поведения по умолчанию и отправить `FormData` с помощью [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API).

<p class="ciu_embed" data-feature="fetch" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/fetch.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/fetch.png">
<img src="https://caniuse.bitsofco.de/image/fetch.jpg" alt="Data on support for the fetch feature across the major browsers from caniuse.com">
</picture>
</p>

!!!note ""

    `FormData` - это набор пар ключ/значение, представляющих поля формы и их значения. Вы можете добавить все поля формы в объект `FormData` или передать только некоторые поля формы и их значения.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/b499a861d7b1fee74464a690cf0ff97e?height=400&amp;theme-id=light&amp;default-tab=js%2Cresult&amp;editable=true" style="height: 400px; width: 100%; border: 0;"></iframe>

Ваш сценарий бэкенда может проверить, является ли запрос `POST` запросом от браузера (используя атрибут `action` элемента формы, где `method="post"`) или от JavaScript, например, как запрос `fetch()`.

```js
if (req.xhr || req.headers.accept.indexOf('json') !== -1) {
    // return JSON
} else {
    // return HTML
}
```

Всегда уведомляйте пользователей программ чтения с экрана об изменении динамического содержимого. Добавьте в HTML элемент с атрибутом `aria-live="polite"` и обновляйте содержимое элемента после изменения. Например, обновите текст до 'Your comment was successfully posted' после того, как пользователь отправит комментарий.

Подробнее о [ARIA live regions](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

## Валидация с помощью JavaScript

### Убедитесь, что сообщения об ошибках соответствуют стилю и тону вашего сайта

Формулировки стандартных сообщений об ошибках в разных браузерах различаются. Как сделать так, чтобы всем пользователям показывалось одно и то же сообщение и чтобы оно соответствовало [стилю и тону](https://developers.google.com/style/tone) вашего сайта? Используйте метод [`setCustomValidity()`](https://developer.mozilla.org/docs/Web/API/HTMLObjectElement/setCustomValidity) из [Constraint Validation API](https://developer.mozilla.org/docs/Web/API/Constraint_validation) для определения собственных сообщений об ошибках.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/7ea31257d7cd8fc28792c7f5cdaba97b?height=300&amp;theme-id=light&amp;default-tab=js%2Cresult&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

!!!note ""

    Обязательно переведите и локализуйте сообщения об ошибках, если у вас мультиязычный сайт.

### Обеспечьте уведомление пользователей об ошибках в реальном времени

Встроенные в HTML функции проверки форм отлично подходят для уведомления пользователей о недействительных полях формы до того, как данные будут отправлены в бэкенд. Было бы здорово уведомлять пользователей сразу после того, как они покидают поле формы.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/b7ed22a0539f9beef4dc03380f51f224?height=300&amp;theme-id=light&amp;default-tab=js%2Cresult&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

Слушайте событие [`blur`](https://developer.mozilla.org/docs/Web/API/Element/blur_event), которое срабатывает, когда элемент теряет фокус, и используйте интерфейс [`ValidityState`](https://developer.mozilla.org/docs/Web/API/ValidityState), чтобы определить, является ли элемент формы недействительным.

### Убедитесь, что пользователи видят введенный ими пароль

Текст, вводимый в поле `<input type="password">`, по умолчанию скрыт, чтобы соблюсти конфиденциальность пользователей. Помогите пользователям ввести свой пароль, показав кнопку `<button>` для переключения видимости введенного текста.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/bd8577c5380c436dba2788c7a2c8652a?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

[Попробуйте демо-версию](https://codepen.io/web-dot-dev/pen/bd8577c5380c436dba2788c7a2c8652a). Переключение видимости введенного текста осуществляется с помощью **Show Password** `<button>`. Как это работает? При нажатии на кнопку **Show Password** атрибут `type` поля пароля изменяется с `type="password"` на `type="text"`, а текст `<button>` меняется на 'Hide Password'.

!!!tip ""

    [Попробуйте улучшить **Показать пароль** `<button>`](https://codepen.io/web-dot-dev/pen/bd8577c5380c436dba2788c7a2c8652a). Где бы вы разместили `<button>`? Можно ли использовать только пиктограмму и при этом обеспечить доступ к `<button>`?

Важно сделать кнопку **Показать пароль** доступной. Свяжите `<button>` с `<input type="password">` с помощью атрибута `aria-controls`.

!!!warning ""

    Атрибут `aria-controls` поддерживается не всеми программами чтения с экрана, но для тех, которые его поддерживают, он является отличным дополнением.

Чтобы уведомить пользователей, читающих с экрана, о том, показан или скрыт пароль в данный момент, используйте элемент `hidden` с параметром `aria-live="polite"` и соответствующим образом измените его текст. Важно, чтобы пользователи программ чтения с экрана знали, когда пароль отображается и виден другому человеку, смотрящему на их экран.

```html
<span class="visually-hidden" aria-live="polite">
    <!-- Dynamically change this text with JavaScript -->
</span>
```

!!!note ""

    В Microsoft Edge отображается встроенный элемент управления раскрытием пароля для `<input type="password">`. Чтобы не иметь двух кнопок раскрытия, скройте встроенный элемент управления с помощью:

    ```css
    ::-ms-reveal {
    	display: none;
    }
    ```

    Подробнее о [настройке кнопки раскрытия пароля](https://docs.microsoft.com/en-us/microsoft-edge/web-platform/password-reveal).

Подробнее о [реализации опции показа пароля](https://technology.blog.gov.uk/2021/04/19/simple-things-are-complicated-making-a-show-password-option/).

## Ресурсы

-   [FormData](https://developer.mozilla.org/docs/Web/API/FormData)
-   [API проверки ограничений](https://developer.mozilla.org/docs/Web/API/Constraint_validation)
-   [`<input type="password">`](https://developer.mozilla.org/docs/Web/HTML/Element/input/password)

:material-information-outline: Источник &mdash; [JavaScript](https://web.dev/learn/forms/javascript/)
