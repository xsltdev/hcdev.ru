---
description: Свойство overscroll-behavior-y устанавливает поведение браузера при достижении вертикальной границы области прокрутки.
---

# overscroll-behavior-y

Свойство **`overscroll-behavior-y`** устанавливает поведение браузера при достижении вертикальной границы области прокрутки.

## Синтаксис

```css
/* Keyword values */
overscroll-behavior-y: auto; /* default */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Global values */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

## Значения

`auto`
: Поведение переполнения прокрутки по умолчанию происходит как обычно.

`contain`
: Поведение переполнения прокрутки по умолчанию наблюдается внутри элемента, для которого установлено это значение (например, эффекты «отскока» или обновления), но цепочка прокрутки не возникает для соседних областей прокрутки, например. базовые элементы не будут прокручиваться.

`none`
: Цепочка прокрутки не возникает для соседних областей прокрутки, а поведение переполнения прокрутки по умолчанию предотвращается.

## Спецификация

- [CSS Overscroll Behavior Module Level 1](https://w3c.github.io/csswg-drafts/css-overscroll/#overscroll-behavior-longhands-physical)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__overscroll-behavior-y" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
