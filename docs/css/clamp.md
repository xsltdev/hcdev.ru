---
description: Функция clamp() задаёт значение в диапазоне между указанными нижней и верхней границами. Функция принимает три аргумента - минимальное значение, предпочитаемое значение и максимально допустимое
---

# clamp()

Функция **`clamp()`** задаёт значение в диапазоне между указанными нижней и верхней границами. Функция принимает три аргумента: минимальное значение, предпочитаемое значение и максимально допустимое.

## Демо {#demo}

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-clamp.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Обратите внимание, что использование функции `clamp()` для размеров шрифта, как в этих примерах, позволяет задать размер шрифта, который растет вместе с размером области просмотра, но не опускается ниже минимального или выше максимального размера шрифта. Это дает тот же эффект, что и код в Fluid Typography, но в одной строке и без использования медиазапросов.

## Синтаксис {#syntax}

Функция `clamp()` принимает в качестве аргументов три разделённых запятой выражения, указываемых в порядке: минимальное значение, предпочитаемое значение, максимальное значение.

Минимальное значение – наименьшее значение, являющееся нижней границей диапазона допустимых значений. Если "предпочитаемое" значение меньше "минимального", будет использоваться именно "минимальное".

Предпочитаемое значение – это выражение, чей результат будет использовать до тех пор, пока будет оставаться в пределах допустимого диапазона значений.

Максимальное значение – наибольшее значение, которое будет устанавливаться, если предпочитаемое будет превышать верхнюю границу допустимого диапазона.

## Спецификации {#specifications}

-   [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/#calc-notation)

## Поддержка браузерами {#compatibility}

<p class="ciu_embed" data-feature="css-math-functions" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-math-functions.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-math-functions.png">
<img src="https://caniuse.bitsofco.de/image/css-math-functions.jpg" alt="Data on support for the css-math-functions feature across the major browsers from caniuse.com">
</picture>
</p>

## Ссылки {#links}

-   [MDN clamp()](https://developer.mozilla.org/docs/Web/CSS/clamp)
