---
description: Свойство CSS border-end-end-radius определяет логический радиус границы элемента, который сопоставляется с физическим радиусом границы, зависящим от режима письма, направления и ориентации текста элемента.
---

# border-end-end-radius

Свойство **`border-end-end-radius`** определяет логический радиус границы элемента, который сопоставляется с физическим радиусом границы, зависящим от режима письма, направления и ориентации текста элемента. Это полезно при создании стилей для работы независимо от ориентации текста и режима письма.

Это свойство влияет на угол между блочной и встроенной сторонами элемента. Например, в режиме записи `horizontal-tb` с направлением `ltr` это соответствует свойству [`border-bottom-right-radius`](border-bottom-right-radius.md).

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-end-end-radius.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство влияет на угол между блочной и встроенной сторонами элемента. Например, в режиме записи `horizontal-tb` с направлением `ltr` это соответствует свойству `border-bottom-right-radius`.

??? info "Логические границы"

    <div class="col3" markdown="1">

    - [border-block](border-block.md)
    - [border-block-color](border-block-color.md)
    - [border-block-end](border-block-end.md)
    - [border-block-end-color](border-block-end-color.md)
    - [border-block-end-style](border-block-end-style.md)
    - [border-block-end-width](border-block-end-width.md)
    - [border-block-start](border-block-start.md)
    - [border-block-start-color](border-block-start-color.md)
    - [border-block-start-style](border-block-start-style.md)
    - [border-block-start-width](border-block-start-width.md)
    - [border-block-style](border-block-style.md)
    - [border-block-width](border-block-width.md)
    - [border-inline](border-inline.md)
    - [border-inline-color](border-inline-color.md)
    - [border-inline-end](border-inline-end.md)
    - [border-inline-end-color](border-inline-end-color.md)
    - [border-inline-end-style](border-inline-end-style.md)
    - [border-inline-end-width](border-inline-end-width.md)
    - [border-inline-start](border-inline-start.md)
    - [border-inline-start-color](border-inline-start-color.md)
    - [border-inline-start-style](border-inline-start-style.md)
    - [border-inline-start-width](border-inline-start-width.md)
    - [border-inline-style](border-inline-style.md)
    - [border-inline-width](border-inline-width.md)
    - [border-start-start-radius](border-start-start-radius.md)
    - [border-start-end-radius](border-start-end-radius.md)
    - [border-end-start-radius](border-end-start-radius.md)
    - **border-end-end-radius**

    </div>

## Синтаксис

```css
/* <length> values */
/* С одним значением угол будет кружок */
border-end-end-radius: 10px;
border-end-end-radius: 1em;

/* С двумя значениями в углу будет эллипс */
border-end-end-radius: 1em 2em;

/* Глобальные значения */
border-end-end-radius: inherit;
border-end-end-radius: initial;
border-end-end-radius: revert;
border-end-end-radius: revert-layer;
border-end-end-radius: unset;
```

## Значения

`<length>`
: Обозначает размер радиуса окружности или большой и малой полуосей эллипса. Абсолютная длина может быть выражена в любых единицах, разрешенных типом данных CSS `<length>`. Проценты по горизонтальной оси относятся к ширине блока, проценты по вертикальной оси относятся к высоте блока. Отрицательные значения недействительны.

## Определение

|                      |                                                       |
| -------------------- | ----------------------------------------------------- |
| Начальное значение   | `0`                                                   |
| Применяется ко       | всем элементам                                        |
| Наследуется          | нет                                                   |
| Вычисленное значение | два абсолютных значения `<length>` или `<percentage>` |
| Тип анимации         | длина, процент или `calc();`                          |

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-end-end-radius" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

=== HTML

    ```html
    <div>
    	<p class="exampleText">Example</p>
    </div>
    ```

=== CSS Content

    ```css
    div {
    	background-color: rebeccapurple;
    	width: 120px;
    	height: 120px;
    	border-end-end-radius: 10px;
    }

    .exampleText {
    	writing-mode: vertical-rl;
    	padding: 10px;
    	background-color: #fff;
    	border-end-end-radius: 10px;
    }
    ```

## Ссылки

- Свойство [`border-end-end-radius`](https://developer.mozilla.org/ru/docs/Web/CSS/border-end-end-radius) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#border-radius-properties) <sup><small>Spec (англ.)</small></sup>
