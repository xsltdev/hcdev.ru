---
description: Свойство color-scheme позволяет элементу указать, в каких цветовых схемах он может удобно отображаться
---

# color-scheme

Свойство **`color-scheme`** позволяет элементу указать, в каких цветовых схемах он может удобно отображаться.

Обычный выбор цветовых схем операционной системы: «светлый» и «темный» или «дневной режим» и «ночной режим». Когда пользователь выбирает одну из этих цветовых схем, операционная система вносит коррективы в пользовательский интерфейс. Сюда входят элементы управления формы, полосы прокрутки и используемые значения системных цветов CSS.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/color-scheme.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* Global values */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

Значение свойства цветовой схемы должно быть одним из следующих ключевых слов.

## Значения

`normal`
: Указывает, что элементу не известны какие-либо цветовые схемы, поэтому он должен отображаться с использованием цветовой схемы браузера по умолчанию.

`light`
: Указывает, что элемент может отображаться с использованием схемы светлых цветов операционной системы.

`dark`
: Указывает, что элемент может отображаться с использованием темной цветовой схемы операционной системы.

`only`
: Запрещает пользовательскому агенту переопределять цветовую схему элемента. Может использоваться для отключения переопределения цвета, вызванного автоматической темной темой Chrome, путем применения `color-scheme: only light;` для определенного элемента или `:root`.

## Спецификация

- [CSS Color Adjustment Module Level 1](https://w3c.github.io/csswg-drafts/css-color-adjust/#color-scheme-prop)
