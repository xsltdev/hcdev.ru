---
description: Функция CSS calc(), которая даёт возможность рассчитать значения свойств CSS во время их определения
---

# calc()

**`calc()`** - это функция CSS, которая даёт возможность рассчитать значения свойств CSS во время их определения. Она может быть использована везде, где применимы длина, частота, угол, время, число.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/function-calc.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
/* property: calc(expression) */
width: calc(100% - 80px);
```

Функция `calc()` принимает в качестве параметра математическое выражение, результат вычисления которого можно использовать как значение CSS-свойства. Выражение может включать операторы `+`, `-`, `*`, `/` с использованием стандартных правил приоритета операторов:

-   `+` &mdash; Сложение
-   `-` &mdash; Вычитание
-   `*` &mdash; Умножение. По крайней мере хоть один из сомножителей должен быть `<number>`
-   `/` &mdash; Деление. Делитель должен быть `<number>`

Операнды в expression могут быть различными выражениями `<length>`. Если пожелаете, то можете использовать разные единицы измерения для каждого из операндов. Вы также можете использовать скобки, чтобы указать порядок вычисления.

!!!warning "Примечание"

    Деление на ноль выдаст ошибку при парсинге HTML.

!!!note "Примечание"

    Операторы `+` и `-` всегда должны быть по обеим сторонам отделены пробелом. Выражение `calc(50% -8px)` будет интерпретировано как величина в процентах и следующее за ним отрицательное число в пикселях (не верное выражение), в то время как `calc(50% - 8px)` - правильное выражение, будет интерпретировано как вычитание из процентов длины в пикселях. Операторы `*` и `/` не требуют отделения от операндов знаком пробела, но это не запрещено и даже приветствуется.

## Примеры

### Вложенный `calc()` с CSS переменными

Вы также можете использовать `calc()` с CSS переменными. Рассмотрим пример кода:

```css
.foo {
    --widthA: 100px;
    --widthB: calc(var(--widthA) / 2);
    --widthC: calc(var(--widthB) / 2);
    width: var(--widthC);
}
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="calc" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/calc.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/calc.png">
<img src="https://caniuse.bitsofco.de/image/calc.jpg" alt="Data on support for the calc feature across the major browsers from caniuse.com">
</picture>
</p>

## Спецификации

-   [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/#calc-func)

## Ссылки

-   [MDN CSS calc()](https://developer.mozilla.org/docs/Web/CSS/calc)
