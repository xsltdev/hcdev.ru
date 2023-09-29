---
description: С помощью функции CSS attr() можно извлекать значение атрибута выбранного элемента и использовать это значение в таблице стилей
---

# attr()

С помощью функции CSS **`attr()`** можно извлекать значение атрибута выбранного элемента и использовать это значение в таблице стилей. Функция работает и с псевдо-элементами. В этом случае возвращается значение атрибута элемента, для которого формируется псевдо-элемент.

Функцию `attr()` можно использовать с любым свойством CSS, но поддержка иных свойств, кроме `content`, является экспериментальной.

## Демо

<iframe class="interactive is-tabbed-shorter-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/function-attr.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
/* Пример простого использования */
attr(data-count);
attr(title);

/* С типом */
attr(src url);
attr(data-count number);
attr(data-width px);

/* с фоллбэком */
attr(data-count number, 0);
attr(src url, '');
attr(data-width px, inherit);
attr(data-something, 'default');
```

## Значения

### `attribute-name`

Название атрибута элемента HTML, на который ссылаемся в CSS.

## Совместимость с браузерами

<p class="ciu_embed" data-feature="mdn-css__types__attr" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <p data-foo="hello">world</p>
    ```

=== "CSS"

    ```css
    p::before {
    	content: attr(data-foo) ' ';
    }
    ```

=== "Результат"

    ![Результат](attr-1.png)

## Спецификации

-   [CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5/#attr-notation)

## Ссылки

-   [MDN CSS attr()](https://developer.mozilla.org/docs/Web/CSS/attr)
