---
description: Функция max() позволяет задать в качестве значения свойства CSS наибольшее (самое положительное) значение из списка выражений, разделенных запятыми
---

# max()

Функция **`max()`** позволяет задать в качестве значения свойства CSS наибольшее (самое положительное) значение из списка выражений, разделенных запятыми.

Функция `max()` может быть использована везде, где допускается использование длины, частоты, угла, времени, процента, числа или целого числа.

## Демо {#demo}

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-max.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

В первом примере ширина будет не менее `400px`, но будет больше, если область просмотра имеет ширину более `2000px` (в этом случае `1vw` будет равна `20px`, а `20vw` - `400px`). Эта техника использует абсолютную единицу измерения, чтобы задать фиксированное минимальное значение свойства, и относительную единицу измерения, чтобы позволить значению увеличиваться для больших экранов просмотра.

## Синтаксис {#syntax}

Функция `max()` принимает в качестве параметра одно или несколько выражений, разделенных запятыми, причем наибольшее (самое положительное) значение выражения используется в качестве значения свойства, которому оно присваивается.

Выражения могут быть математическими выражениями (с использованием арифметических операторов), литеральными значениями или другими выражениями, такими как `attr()`, которые оцениваются как допустимый тип аргумента (например, `<length>`), или вложенными функциями `min()` и `max()`.

Для каждого значения в выражении можно использовать разные единицы измерения. При необходимости можно использовать круглые скобки для определения порядка вычислений.

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

## Пример {#example}

Установка минимального размера шрифта

Еще один вариант использования функции `max()` - позволить увеличить размер шрифта, обеспечив при этом его минимальный размер, что позволяет использовать шрифты с учетом требований пользователей, обеспечивая при этом разборчивость.

Давайте рассмотрим некоторые CSS:

```css
h1 {
	font-size: 2rem;
}
h1.responsive {
	font-size: max(4vw, 2em, 2rem);
}
```

Размер шрифта должен быть не менее `2rem`, или в два раза больше размера шрифта, установленного по умолчанию для данной страницы. Это обеспечивает разборчивость и доступность текста.

```html
<h1>
	This text is always legible, but doesn't change size
</h1>
<h1 class="responsive">
	This text is always legible, and is responsive, to a
	point
</h1>
```

Рассматривайте функцию `max()` как поиск минимально допустимого значения свойства.

## Ссылки {#links}

-   [MDN max()](https://developer.mozilla.org/docs/Web/CSS/max)
