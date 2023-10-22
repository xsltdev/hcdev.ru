---
description: Псевдокласс autofill используется в тех случаях, когда значение элемента input автоматически заполняется браузером. Класс перестает соответствовать, если пользователь редактирует поле.
---

# :autofill

Псевдокласс **`:autofill`** используется в тех случаях, когда значение элемента [`<input>`](../html/input.md) автоматически заполняется браузером. Класс перестает соответствовать, если пользователь редактирует поле.

!!!warning "Примечание"

    В таблицах стилей пользовательского агента многих браузеров в объявлениях стилей `:-webkit-autofill` используется [`!important`](./important.md), что делает их непереопределяемыми на веб-страницах без использования хаков JavaScript. Например, в Chrome во внутренней таблице стилей используется следующее:

    ```css
    background-color: rgb(232, 240, 254) !important;
    background-image: none !important;
    color: -internal-light-dark(black, white) !important;
    ```

    Это означает, что в собственных правилах нельзя задать `background-color`, `background-image` или `color`.

## Демо {#demo}

<iframe class="interactive is-tabbed-shorter-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/pseudo-class-autofill.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис {#syntax}

```css
:autofill {
    /* ... */
}
```

## Спецификации {#specifications}

-   [HTML Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-autofill)

## Ссылки {#links}

-   [MDN :autofill](https://developer.mozilla.org/docs/Web/CSS/:autofill)
