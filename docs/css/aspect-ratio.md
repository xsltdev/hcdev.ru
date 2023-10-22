---
description: Свойство CSS aspect-ratio задает предпочтительное соотношение сторон для блока, которое будет использоваться при расчете автоматических размеров и некоторых других функциях макета.
---

# aspect-ratio

Свойство **`aspect-ratio`** задает предпочтительное соотношение сторон для блока, которое будет использоваться при расчете автоматических размеров и некоторых других функциях макета.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/aspect-ratio.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

## Значения

`auto`

: Заменяемые элементы с внутренним соотношением сторон используют это соотношение сторон, в противном случае у блока нет предпочтительного соотношения сторон. Вычисления размера с учетом внутреннего соотношения сторон всегда работают с размерами блока содержимого.

`<ratio>`

: Предпочтительным соотношением сторон блока является заданное соотношение ширины и высоты. Если высота и предшествующий символ косой черты опущены, высота по умолчанию равна `1`. Расчеты размера с учетом предпочтительного соотношения сторон работают с размерами блока, заданными параметром [`box-sizing`](box-sizing.md).

## Спецификация

-   [CSS Box Sizing Module Level 4](https://w3c.github.io/csswg-drafts/css-sizing-4/#aspect-ratio)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__aspect-ratio" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

-   [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) <sup><small>MDN (англ.)</small></sup>
