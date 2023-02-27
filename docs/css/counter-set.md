---
description: Свойство counter-set устанавливает счетчик CSS на заданное значение
---

# counter-set

Свойство **`counter-set`** устанавливает счетчик CSS на заданное значение.

Он манипулирует значением существующих счетчиков и создает новые счетчики только в том случае, если в элементе еще нет счетчика с заданным именем.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/counter-set.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

!!!note ""

    Значение счетчика может быть увеличено или уменьшено с помощью CSS-свойства [`counter-increment`](counter-increment.md).

??? info "Списки, счетчики, генерируемый контент"

    <div class="col3" markdown="1">

    - [counter-increment](counter-increment.md)
    - [counter-reset](counter-reset.md)
    - [counter-set](counter-set.md)
    - [list-style-image](list-style-image.md)
    - [list-style-type](list-style-type.md)
    - [list-style-position](list-style-position.md)
    - [list-style](list-style.md)

    </div>

    <div class="col3" markdown="1">

    - [content](content.md)
    - **quotes**

    </div>

## Синтаксис

```css
/* Set "my-counter" to 0 */
counter-set: my-counter;

/* Set "my-counter" to -1 */
counter-set: my-counter -1;

/* Set "counter1" to 1, and "counter2" to 4 */
counter-set: counter1 1 counter2 4;

/* Cancel any counter that could have been set in less specific rules */
counter-set: none;

/* Global values */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

## Спецификация

- [CSS Lists and Counters Module Level 3](https://w3c.github.io/csswg-drafts/css-lists/#propdef-counter-set)
