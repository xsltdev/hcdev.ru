---
description: Свойство accent-color устанавливает акцентный цвет для некоторых элементов управления пользовательским интерфейсом.
---

# accent-color

Свойство **`accent-color`** устанавливает акцентный цвет для некоторых элементов управления пользовательским интерфейсом.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/accent-color.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Браузеры, которые поддерживают `accent-color`, в настоящее время применяют его к следующим HTML элементам:

-   [`<input type="checkbox">`](../html/input.md)
-   [`<input type="radio">`](../html/input.md)
-   [`<input type="range">`](../html/input.md)
-   [`<progress>`](../html/progress.md)

## Синтаксис

```css
/* Специальные значения */
accent-color: auto;

/* <color> значения */
accent-color: red;
accent-color: #5729e9;
accent-color: rgb(0, 200, 0);
accent-color: hsl(228, 4%, 24%);

/* Общие значения */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### Значения

`auto`

: Браузер сам определяет цвет в зависимости от платформы.

`<цвет>`

: Задает цвет, который будет использован в качестве акцентного.

## Спецификации

-   [CSS Basic User Interface Module Level 4](https://w3c.github.io/csswg-drafts/css-ui/#widget-accent)

## Пример

=== "HTML"

    ```html
    <input type="checkbox" checked />
    <input type="checkbox" class="custom" checked />
    ```

=== "CSS"

    ```css
    input {
    	accent-color: auto;
    	display: block;
    	width: 30px;
    	height: 30px;
    }

    input.custom {
    	accent-color: rebeccapurple;
    }
    ```

## Ссылки

-   Свойство [`accent-color`](https://developer.mozilla.org/ru/docs/Web/CSS/accent-color) <sup><small>MDN (рус.)</small></sup>
