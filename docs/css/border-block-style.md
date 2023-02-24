---
description: Свойство CSS border-block-style определяет стиль границ логического блока элемента, который сопоставляется с физическим стилем границы в зависимости от режима письма элемента, направления и ориентации текста.
---

# border-block-style

Свойство **`border-block-style`** определяет стиль границ логического блока элемента, который сопоставляется с физическим стилем границы в зависимости от режима письма элемента, направления и ориентации текста. Он соответствует свойствам `border-top-style` и `border-bottom-style` или `border-left-style` и `border-right-style` в зависимости от значений, определенных для режима письма, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-block-style.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Стиль границы в другом измерении может быть установлен с помощью `border-inline-style`, который устанавливает `border-inline-start-style` и `border-inline-end-style`.

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
    - **border-block-style**
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
    - [border-end-end-radius](border-end-end-radius.md)

    </div>

## Синтаксис

```css
/* <'border-style'> values */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* Global values */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: revert-layer;
border-block-style: unset;
```

## Значения

`<'border-style'>`
: Стиль линии границы.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-block-style" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

=== HTML

    ```html
    <div>
    	<p class="exampleText">Example text</p>
    </div>
    ```

=== CSS

    ```css
    div {
    	background-color: yellow;
    	width: 120px;
    	height: 120px;
    }

    .exampleText {
    	writing-mode: vertical-lr;
    	border: 5px solid blue;
    	border-block-style: dashed;
    }
    ```

## Ссылки

- Свойство [`border-block-style`](https://developer.mozilla.org/ru/docs/Web/CSS/border-block-style) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-border-block-style) <sup><small>Spec (англ.)</small></sup>
