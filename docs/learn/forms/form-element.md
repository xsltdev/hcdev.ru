---
description: Изучите основы использования формы в Интернете с помощью этого введения в элемент формы.
icon: material/form-select
---

# Использование форм для получения данных

<big>Изучите основы использования формы в Интернете с помощью этого введения в элемент формы.</big>

Представьте, что вы хотите спросить людей на своем сайте об их любимом животном. В качестве первого шага вам нужен способ сбора данных.

Как это сделать с помощью HTML?

<iframe style="width: 100%; height: 300px;" sandbox="allow-scripts allow-modals allow-forms allow-same-origin allow-top-navigation-by-user-activation allow-downloads" data-testid="app-preview-iframe" title="Preview of learn-forms-get-started" src="https://learn-forms-get-started.glitch.me/"></iframe>

В HTML для этого можно использовать элемент формы (`<form>`), `<input>` с `<label>` и submit `<button>`.

!!!note ""

    Вы можете задаться вопросом, откуда берутся стили для этого примера. Они взяты из общей таблицы стилей [включенной во все демонстрационные версии](../forms/index.md#demos).

    Вас интересует стилизация форм? Вы можете узнать об этом в следующем [модуле](styling.md).

## Что такое элемент формы?

```html
<form>
    <label for="animal"
        >What is your favorite animal?</label
    >
    <input type="text" id="animal" name="animal" />
    <button>Save</button>
</form>
```

Элемент формы состоит из начального тега `<form>`, необязательных атрибутов, определенных в начальном теге, и конечного тега `</form>`.

Между начальным и конечным тегами можно включить такие элементы формы, как `<input>` и `<textarea>` для различных типов пользовательского ввода. Более подробно об [элементах формы](form-fields.md) вы узнаете в следующем модуле.

!!!note ""

    Используйте HTTPS для защиты всех веб-сайтов и форм, а не только тех, которые работают с конфиденциальными данными. Таким образом, все данные будут зашифрованы.

    Подробнее: [Защищенные соединения с HTTPS](https://web.dev/secure/#secure-connections-with-https).

## Где обрабатываются данные? {#where-is-the-data-processed}

При отправке формы (например, когда пользователь нажимает кнопку **Submit**) браузер делает запрос. Сценарий может ответить на этот запрос и обработать данные.

!!!note ""

    Для обработки формы необходим скрипт (выполняемый на сервере или клиенте). Он может [валидировать](validation.md) данные, сохранять их в базе данных или выполнять другие операции с данными формы.

По умолчанию запрос выполняется к странице, на которой отображается форма.

Допустим, вы хотите, чтобы скрипт, запущенный по адресу `https://web.dev`, обрабатывал данные формы - как вы это сделаете? [Попробуйте](https://codepen.io/web-dot-dev/pen/fbf90faccc7a22e208c2a507f33be598?editors=1100)!

???tip "Показать ответ"

    Выбрать местоположение скрипта можно с помощью атрибута `action`.

    ```html
    <form action="https://example.com/animals">...</form>
    ```

В предыдущем примере выполняется запрос к `https://example.com/animals`. Скрипт на бэкенде `example.com` может обрабатывать запросы к `/animals` и обрабатывать данные из формы.

## Как передаются данные?

По умолчанию данные из формы передаются в виде запроса `GET`, при этом отправленные данные добавляются к URL. Если в приведенном выше примере пользователь отправляет команду `'frog'`, браузер делает запрос к следующему URL:

```html
https://example.com/animals?animal=frog
```

В этом случае вы можете получить доступ к данным на фронтенде или бэкенде, получив их из URL.

При желании можно указать форме использовать `POST`-запрос, изменив атрибут method.

```html
<form method="post">...</form>
```

При использовании `POST` данные включаются в [тело запроса](https://developer.mozilla.org/docs/Web/HTTP/Methods/POST#example).

Данные не будут видны в URL и могут быть доступны только из скрипта фронтенда или бэкенда.

### Какой метод следует использовать?

Для обоих методов есть свои варианты использования.

Для форм, обрабатывающих конфиденциальные данные, используйте метод `POST`. Данные шифруются (если используется HTTPS) и доступны только бэкенд-скрипту, обрабатывающему запрос. Данные не видны в URL. Распространенным примером является форма входа в систему.

Если данные могут быть переданы, можно использовать метод `GET`. В этом случае данные будут добавлены в историю браузера, поскольку они включены в URL. В поисковых формах часто используется этот метод. Таким образом можно сделать закладку на страницу с результатами поиска.

Теперь, когда вы узнали о самом элементе формы, пришло время познакомиться с [полями формы](form-fields.md), чтобы сделать ваши формы интерактивными.

## Ресурсы

-   [Элемент `<form>`](https://developer.mozilla.org/docs/Web/HTML/Element/form).

:material-information-outline: Источник &mdash; [Use forms to get data from users](https://web.dev/learn/forms/form-element/)
