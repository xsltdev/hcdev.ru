---
description: Свойство CSS overscroll-behavior определяет действия браузера при достижении границы области прокрутки. Это сокращение от overscroll-behavior-x и overscroll-behavior-y.
---

# overscroll-behavior

Свойство **`overscroll-behavior`** определяет действия браузера при достижении границы области прокрутки. Это сокращение от [`overscroll-behavior-x`](overscroll-behavior-x.md) и [`overscroll-behavior-y`](overscroll-behavior-y.md).

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/overscroll-behavior.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

По умолчанию мобильные браузеры, как правило, обеспечивают эффект «отскока» или даже обновление страницы при достижении верхней или нижней части страницы (или другой области прокрутки). Вы также могли заметить, что когда у вас есть диалоговое окно с прокручиваемым содержимым поверх страницы с прокручиваемым содержимым, как только будет достигнута граница прокрутки диалогового окна, основная страница начнет прокручиваться — это называется цепочкой прокрутки.

В некоторых случаях такое поведение нежелательно. Вы можете использовать `overscroll-behavior`, чтобы избавиться от нежелательных цепочек прокрутки и поведения браузера, вдохновленного приложением Facebook/Twitter, типа «потяните, чтобы обновить».

Обратите внимание, что это свойство применяется только к контейнерам прокрутки. В частности, поскольку [`<iframe>`](../html/iframe.md) не является контейнером прокрутки, это свойство нельзя использовать для остановки цепочки прокрутки для iframe.

## Синтаксис

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Two values */
overscroll-behavior: auto contain;

/* Global values */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

Свойство `overscroll-behavior` задается одним или двумя ключевыми словами, выбранными из списка значений ниже.

Два ключевых слова определяют значение `overscroll-behavior` по осям `x` и `y` соответственно. Если указано только одно значение, предполагается, что и `x`, и `y` имеют одинаковое значение.

## Значения

`auto` : Поведение переполнения прокрутки по умолчанию происходит как обычно.

`contain` : Поведение переполнения прокрутки по умолчанию наблюдается внутри элемента, для которого установлено это значение (например, эффекты «отскока» или обновления), но цепочка прокрутки не возникает для соседних областей прокрутки, например. базовые элементы не будут прокручиваться.

`none` : Цепочка прокрутки не возникает для соседних областей прокрутки, а поведение переполнения прокрутки по умолчанию предотвращается.

## Спецификация

-   [CSS Overscroll Behavior Module Level 1](https://w3c.github.io/csswg-drafts/css-overscroll/#overscroll-behavior-properties)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__overscroll-behavior" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
