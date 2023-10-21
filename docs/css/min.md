---
description: Функция min() позволяет задать в качестве значения свойства CSS наименьшее (самое отрицательное) значение из списка выражений, разделенных запятыми
---

# min()

Функция **`min()`** позволяет задать в качестве значения свойства CSS наименьшее (самое отрицательное) значение из списка выражений, разделенных запятыми.

Функция `min()` может быть использована везде, где допускается использование длины, частоты, угла, времени, процента, числа или целого числа.

## Демо {#demo}

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-min.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

В первом примере ширина будет не более `200px`, но будет меньше, если область просмотра имеет ширину менее `400px` (в этом случае `1vw` будет равна `4px`, а `50vw` - `200px`). Эта техника использует абсолютную единицу измерения, чтобы указать фиксированное максимальное значение свойства, и относительную единицу измерения, чтобы позволить значению уменьшаться в соответствии с меньшими экранами просмотра.

## Синтаксис {#syntax}

Функция `min()` принимает в качестве параметра одно или несколько выражений, разделенных запятыми, причем в качестве значения используется наименьший (самый отрицательный) результат выражения.

Выражения могут быть математическими выражениями (с использованием арифметических операторов), литеральными значениями или другими выражениями, такими как `attr()`, которые оцениваются как допустимый тип аргумента (например, длина).

При желании можно использовать различные единицы измерения для каждого значения в выражении. При необходимости можно использовать круглые скобки для определения порядка вычислений.

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

### Установка максимального размера для метки и ввода

Еще одним вариантом использования `min()` является установка максимального размера для элементов управления отзывчивой формы: это позволяет уменьшать ширину меток и входов при уменьшении ширины формы.

Давайте рассмотрим некоторые CSS:

```css
input,
label {
	padding: 2px;
	box-sizing: border-box;
	display: inline-block;
	width: min(40%, 400px);
	background-color: pink;
}

form {
	margin: 4px;
	border: 1px solid black;
	padding: 4px;
}
```

Здесь сама форма вместе с `margin`, `border` и `padding` будет равна `100%` ширины родительской формы. Мы объявляем, что `input` и `label` будут иметь ширину, меньшую из `40%` от ширины формы до `padding` или `400px` в зависимости от того, что меньше. Другими словами, наибольшая ширина `label` и `input` может составлять `400px`. Наименьшее их сужение будет равно `40%` от ширины формы, что на экране смарт-часов очень мало.

```html
<form>
	<label for="misc">Type something:</label>
	<input type="text" id="misc" name="misc" />
</form>
```

## Ссылки {#links}

-   [MDN min()](https://developer.mozilla.org/docs/Web/CSS/min)
