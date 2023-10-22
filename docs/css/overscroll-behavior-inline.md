---
description: Свойство CSS overscroll-behavior-inline задает поведение браузера при достижении внутренней границы области прокрутки.
---

# overscroll-behavior-inlines

Свойство **`overscroll-behavior-inline`** задает поведение браузера при достижении внутренней границы области прокрутки.

## Синтаксис

```css
/* Keyword values */
overscroll-behavior-inline: auto; /* default */
overscroll-behavior-inline: contain;
overscroll-behavior-inline: none;

/* Global values */
overscroll-behavior-inline: inherit;
overscroll-behavior-inline: initial;
overscroll-behavior-inline: revert;
overscroll-behavior-inline: revert-layer;
overscroll-behavior-inline: unset;
```

## Значения

`auto`

: Поведение переполнения прокрутки по умолчанию происходит как обычно.

`contain`

: Поведение переполнения прокрутки по умолчанию наблюдается внутри элемента, для которого установлено это значение (например, эффекты «отскока» или обновления), но цепочка прокрутки не возникает для соседних областей прокрутки, например. базовые элементы не будут прокручиваться.

`none`

: Цепочка прокрутки не возникает для соседних областей прокрутки, а поведение переполнения прокрутки по умолчанию предотвращается.

## Спецификация

-   [CSS Overscroll Behavior Module Level 1](https://w3c.github.io/csswg-drafts/css-overscroll/#overscroll-behavior-longhands-logical)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__overscroll-behavior-inline" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
