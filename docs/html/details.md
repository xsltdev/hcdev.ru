---
description: Тег details (от англ. details - детали) используется для хранения информации, которую можно скрыть или показать по требованию пользователя
---

# &lt;details&gt;

Тег **`<details>`** _(от англ. **details** - детали)_ используется для хранения информации, которую можно скрыть или показать по требованию пользователя. По умолчанию содержимое элемента не отображается, для изменения статуса применяется атрибут `open`.

Исходно содержимое `<details>` скрыто, вместо него выводится текст «Подробнее», щелчок по которому прячет или показывает содержимое элемента.

## Демо

<iframe class="interactive is-tabbed-shorter-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/details.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Интерактивные элементы"

    <div class="col4" markdown="1">

    - **details**
    - [dialog](dialog.md)
    - [summary](summary.md)

    </div>

## Поддержка браузерами

<p class="ciu_embed" data-feature="details" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=details">Can I Use details?</a> Data on support for the details feature across the major browsers from caniuse.com.
</p>

Полифилы для включения поддержки:

-   [`<details>` and `<summary>` polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#details-and-summary)

## Синтаксис

```html
<details>Текст</details>
```

Закрывающий тег обязателен.

## Атрибуты

[`open`](#open)

: Показывает информацию внутри элемента.

### `open`

Показывает информацию внутри элемента.

## Описание и примеры

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>details</title>
    </head>
    <body>
        <details>
            <summary>Спойлер</summary>
            <p>Убийца — дворецкий!</p>
        </details>
    </body>
</html>
```

<div class="grid cards" style="margin-top: 1.6em" markdown>

-   :simple-html5:{ .lg .middle } **Спецификации**

    ***

    [:octicons-arrow-right-24: WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html#the-details-element)

    [:octicons-arrow-right-24: HTML 5.1](https://www.w3.org/TR/2016/REC-html51-20161101/semantics.html#the-details-element)

</div>
<div class="grid cards" markdown>

-   :material-link:{ .lg .middle } **Ссылки**

    ***

    :simple-mdnwebdocs: [`<details>`: The Details disclosure element](https://developer.mozilla.org/docs/Web/HTML/Element/details)

</div>
