---
description: Узнайте все об элементе формы, о том, когда следует использовать форму и как она работает.
icon: material/form-textbox-lock
---

# Углубленное изучение элемента формы

<big>Узнайте все об элементе формы, о том, когда следует использовать форму и как она работает.</big>

В предыдущем модуле вы узнали [как использовать элемент `form>`](form-element.md). В этом модуле вы узнаете, как работает форма и когда ее следует использовать.

## Нужно ли использовать элемент `<form>`?

Не всегда нужно помещать элементы управления формой в элемент `<form>`. Например, для выбора пользователем категории товара можно использовать элемент `<select>`. Здесь элемент `<form>` не нужен, поскольку вы не храните и не обрабатываете данные на внутреннем сервере.

Однако в большинстве случаев, когда вы храните или обрабатываете данные от пользователей, вам следует использовать элемент `<form>`. Как вы узнаете в этом модуле, использование `<form>` предоставляет вам множество встроенных функций браузеров, которые в противном случае вам пришлось бы создавать самостоятельно. Кроме того, в `<form>` по умолчанию встроено множество функций доступности. Если вы хотите избежать перезагрузки страницы при отправке пользователем формы, вы можете по-прежнему использовать элемент `<form>`, но усилить его с помощью [JavaScript](javascript.md#ensure-users-can-submit-a-form-without-leaving-a-page).

!!!note ""

    Функциональность формы можно воспроизвести с помощью JavaScript, но подход, основанный исключительно на сценариях, вряд ли будет таким же надежным, доступным и перспективным, как встроенная `<form>`.

    Узнайте [почему не у всех есть JavaScript](https://kryogenix.org/code/browser/everyonehasjs.html).

## Как работает `<form>`?

Вы узнали, что `<form>` - это лучший способ обработки пользовательских данных. Теперь вы можете задаться вопросом, как работает форма?

Форма `<form>` - это контейнер для элементов управления интерактивной формы.

```html
<form method="post">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" />
    <button formaction="/name">Save</button>
</form>
```

## Как происходит отправка формы?

При отправке `<form>` браузер проверяет атрибуты `<form>`. В соответствии с атрибутом `method` данные отправляются в виде `GET` или `POST` запроса. Если атрибут `method` отсутствует, то выполняется запрос `GET` к URL текущей страницы.

Как можно получить доступ к данным формы и обработать их? Присланные данные могут быть обработаны с помощью JavaScript на фронтенде с использованием запроса `GET` или с помощью кода на бэкенде с использованием запросов `GET` или `POST`. Подробнее о [типах запросов и передаче данных формы](form-element.md#where-is-the-data-processed).

!!!note ""

    Кнопка **Submit** может иметь атрибут `formmethod`. В этом случае используется определенное в нем значение.

При отправке формы браузер выполняет запрос на URL, являющийся значением атрибута `action`. Кроме того, браузер проверяет, есть ли у кнопки **Submit** атрибут `formaction`. Если это так, то используется определенный в нем URL.

Кроме того, браузер просматривает дополнительные атрибуты элемента `<form>`, например, чтобы решить, нужно ли проверять форму (`novalidate`), использовать автозаполнение (`autocomplete="off"`) или какую кодировку использовать (`accept-charset`).

[Попробуйте построить форму](https://codepen.io/web-dot-dev/pen/c7d89671f738240187a86cda1074d554), в которой пользователь может указать свой любимый цвет. Данные должны быть отправлены в виде запроса `POST`, а URL, по которому будут обрабатываться данные, должен быть `/color`.

???tip "Показать форму"

    Одним из возможных решений является использование данной формы:

    ```html
    <form method="post" action="/color">
    	<label for="color">What is your favorite color?</label>
    	<input type="text" name="color" id="color" />
    	<button>Save</button>
    </form>
    ```

## Убедитесь, что пользователи могут отправить вашу форму

Существует два способа отправки формы. Вы можете нажать кнопку **Submit** или клавишу `Enter` при использовании любого элемента управления формой.

!!!note ""

    Используйте для кнопки **Submit** название, способное вызвать действие, например, "Приступить к оплате" или "Сохранить изменения", а не просто "Отправить".

    Не отключайте кнопку **Submit**, пока она находится в ожидании правильного ввода данных пользователем, но рассмотрите возможность ее отключения после отправки формы, чтобы предотвратить многократные запросы к вашему серверу.

    Подробнее о [Лучших практиках использования кнопки Submit](https://web.dev/payment-and-address-form-best-practices/#html-button).

Добавить кнопку **Submit** можно различными способами. Один из вариантов - использовать элемент `<button>` внутри формы. Если не использовать `type="button"`, то он будет работать как кнопка **Submit**. Другой вариант - использовать `<input type="submit" value="Submit">`.

!!!note ""

    С помощью атрибута [`enterkeyhint`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/enterkeyhint) можно изменить обозначение клавиши `Enter` для экранных клавиатур. Это позволяет сделать более понятным для пользователей, что происходит при отправке текущей формы.

Третий вариант - использовать `<input type="image" alt="Submit" src="submit.png">` для создания графической кнопки **Submit**. Однако теперь, когда можно создавать графические кнопки с помощью CSS, не рекомендуется использовать `type="image"`.

!!!note ""

    Всегда давайте пользователям столько времени, сколько они хотят, чтобы отправить форму. Определение тайм-аута в форме приводит к потере данных и разочаровывает пользователей.

    Более подробную информацию можно найти в [W3C Form Timeout Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html).

## Разрешите пользователям отправлять файлы

Используйте `<input type="file">`, чтобы дать возможность пользователям загружать и отправлять файлы, если это необходимо.

```html
<label for="file">Choose file to upload</label>
<input type="file" id="file" name="file" multiple />
```

Во-первых, добавьте в форму элемент `<input>` с `type="file"`. Добавьте атрибут `multiple`, если пользователи должны иметь возможность загружать несколько файлов.

<iframe src="https://codepen.io/web-dot-dev/embed/6a600920c65a81e55576c6b52b4e5efa?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

Еще одно изменение, необходимое для обеспечения возможности загрузки файлов пользователями, - установка атрибута `enctype` в вашей форме. По умолчанию используется значение `application/x-www-form-urlencoded`.

```html
<form method="post" enctype="multipart/form-data">…</form>
```

Чтобы обеспечить возможность отправки файлов, измените его на `multipart/form-data`. Без этой кодировки файлы не могут быть отправлены с запросом `POST`.

## Ресурсы

-   [The form HTML element](https://developer.mozilla.org/docs/Web/HTML/Element/form)
-   [Лучшие практики использования кнопки отправки](https://web.dev/payment-and-address-form-best-practices/#html-button)

:material-information-outline: Источник &mdash; [The form element in depth](https://web.dev/learn/forms/form/)
