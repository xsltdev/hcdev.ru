---
description: Свойство CSS overscroll-behavior-block задает поведение браузера при достижении границы направления блока области прокрутки.
---

# overscroll-behavior-block

Свойство **`overscroll-behavior-block`** задает поведение браузера при достижении границы направления блока области прокрутки.

## Синтаксис

```css
/* Keyword values */
overscroll-behavior-block: auto; /* default */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* Global values */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

## Значения

`auto`

: Поведение переполнения прокрутки по умолчанию происходит как обычно.

`contain`

: Поведение переполнения прокрутки по умолчанию наблюдается внутри элемента, для которого установлено это значение (например, эффекты «отскока» или обновления), но цепочка прокрутки не возникает для соседних областей прокрутки, например. базовые элементы не будут прокручиваться.

`none`

: Цепочка прокрутки не возникает для соседних областей прокрутки, а поведение переполнения прокрутки по умолчанию предотвращается.

## Спецификация

-   [CSS Overscroll Behavior Module Level 1](https://w3c.github.io/csswg-drafts/css-overscroll/#overscroll-behavior-longhands-logicals)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__overscroll-behavior-block" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
