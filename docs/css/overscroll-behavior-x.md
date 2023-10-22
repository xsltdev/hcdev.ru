---
description: Свойство CSS overscroll-behavior-x задает поведение браузера при достижении горизонтальной границы области прокрутки.
---

# overscroll-behavior-x

Свойство **`overscroll-behavior-x`** задает поведение браузера при достижении горизонтальной границы области прокрутки.

## Синтаксис

```css
/* Keyword values */
overscroll-behavior-x: auto; /* default */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Global values */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

## Значения

`auto`

: Поведение переполнения прокрутки по умолчанию происходит как обычно.

`contain`

: Поведение переполнения прокрутки по умолчанию наблюдается внутри элемента, для которого установлено это значение (например, эффекты «отскока» или обновления), но цепочка прокрутки не возникает для соседних областей прокрутки, например. базовые элементы не будут прокручиваться.

`none`

: Цепочка прокрутки не возникает для соседних областей прокрутки, а поведение переполнения прокрутки по умолчанию предотвращается.

## Спецификация

-   [CSS Overscroll Behavior Module Level 1](https://w3c.github.io/csswg-drafts/css-overscroll/#overscroll-behavior-longhands-physical)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__overscroll-behavior-x" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
