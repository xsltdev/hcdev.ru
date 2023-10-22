---
description: Сокращённое свойство CSS all сбрасывает все свойства, кроме unicode-bidi и direction, до их начального или унаследованного значения
---

# all

Сокращённое свойство **`all`** сбрасывает все свойства, кроме [`unicode-bidi`](unicode-bidi.md) и [`direction`](direction.md), до их начального или унаследованного значения.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/all.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
all: initial;
all: inherit;
all: unset;

/* CSS Cascading and Inheritance Level 4 */
all: revert;
```

## Значения

`initial`

: Это ключевое слово указывает на изменение всех свойств, применяемых к элементу или родительскому элементу. Значения [`unicode-bidi`](unicode-bidi.md) и [`direction`](direction.md) не затрагиваются.

`inherit`

: Это ключевое слово указывает на изменение всех свойств, применяемых к элементу или родительскому элементу, на значение их родителя. Значения [`unicode-bidi`](unicode-bidi.md) и [`direction`](direction.md) не затрагиваются.

`unset`

: Это ключевое слово указывает на изменение всех свойств, применимых к элементу или родительскому элементу, на значение их родителя, если они наследуются или на их начальное значение, если нет. Значения [`unicode-bidi`](unicode-bidi.md) и [`direction`](direction.md) не затрагиваются.

`revert`

: Если каскадным значением свойства является ключевое слово `revert`, поведение зависит от источника, которому принадлежит объявление:

-   `user-agent origin`: Эквивалент `unset`.
-   `user origin`: Откатывает каскад до уровня пользовательского агента, так что указанное значение вычисляется так, как если бы для этого свойства не были заданы правила уровня автора или уровня пользователя.
-   `author origin`: Откатывает каскад до уровня пользователя, так что указанное значение вычисляется так, как если бы для этого свойства не было задано никаких правил уровня автора. В целях возврата этот источник включает в себя источники переопределения и анимации.

## Примеры

=== "HTML"

    ```html
    <blockquote id="quote">
    	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </blockquote>
    Phasellus eget velit sagittis.
    ```

=== "CSS"

    ```css
    html {
    	font-size: small;
    	background-color: #f0f0f0;
    	color: blue;
    }

    blockquote {
    	background-color: skyblue;
    	color: red;
    }
    ```

## Спецификации

-   [CSS Cascading and Inheritance Level 4](https://w3c.github.io/csswg-drafts/css-cascade/#all-shorthand)

## Ссылки

-   Свойство [`all`](https://developer.mozilla.org/ru/docs/Web/CSS/all) <sup><small>MDN (рус.)</small></sup>
