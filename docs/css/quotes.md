---
description: Свойство quotes устанавливает тип кавычек, который применяется в тексте документа
---

# quotes

Свойство **`quotes`** устанавливает тип кавычек, который применяется в тексте документа.

В каждом языке существуют свои традиции для обозначения кавычек, свойство `quotes` позволяет задать вид их отображения по всему тексту и установить, таким образом, его единообразное оформление. Добавление кавычек происходит автоматически для содержимого контейнера [`<q>`](../html/q.md), а также для текста, к которому применяется стилевое свойство [`content`](content.md) со значением `open-quote` (открывающая кавычка) или `close-quote` (закрывающая кавычка).

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/quotes.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Списки, счетчики, генерируемый контент"

    <div class="col3" markdown="1">

    - [counter-increment](counter-increment.md)
    - [counter-reset](counter-reset.md)
    - [counter-set](counter-set.md)
    - [list-style-image](list-style-image.md)
    - [list-style-type](list-style-type.md)
    - [list-style-position](list-style-position.md)
    - [list-style](list-style.md)

    </div>

    <div class="col3" markdown="1">

    - [content](content.md)
    - **quotes**

    </div>

## Синтаксис

```css
/* Keyword value */
quotes: none;
quotes: auto;

/* <string> values */
quotes: '«' '»'; /* Set open-quote and close-quote to the French quotation marks */
quotes: '«' '»' '‹' '›'; /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: revert-layer;
quotes: unset;
```

## Значения

-   В качестве значения используется символ текста (например, `quotes: "«" "»"`) или символ юникода.
-   `none` — Кавычки не добавляются.

Значение по-умолчанию зависит от браузера, его настроек и операционной системы

Применяется ко всем элементам

## Спецификации

-   [CSS Generated Content Module Level 3](https://w3c.github.io/csswg-drafts/css-content/#quotes)
-   [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/generate.html#quotes)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__quotes" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>quotes</title>
        <style>
            q {
                font-family: Times, serif; /* Шрифт с засечками */
                font-style: italic; /* Курсивное начертание текста */
                color: navy; /* Синий цвет текста */
                quotes: '«' '»'; /* Кавычки в виде двойных угловых скобок */
            }
        </style>
    </head>
    <body>
        <p>
            Станислав Лец утверждал:
            <q>Чаще всего выход там, где был вход</q>.
        </p>
    </body>
</html>
```
