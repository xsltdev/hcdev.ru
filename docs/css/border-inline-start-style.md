---
description: Свойство CSS border-inline-start-style определяет стиль логической встроенной начальной границы элемента, который сопоставляется с физическим стилем границы в зависимости от режима письма элемента, направления и ориентации текста.
---

# border-inline-start-style

Свойство **`border-inline-start-style`** определяет стиль логической встроенной начальной границы элемента, который сопоставляется с физическим стилем границы в зависимости от режима письма элемента, направления и ориентации текста.

Он соответствует свойству `border-top-style`, `border-right-style`, `border-bottom-style` или `border-left-style` в зависимости от значений, определенных для режима письма, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-inline-start-style.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

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
    - **border-inline-start-style**
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
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: groove;

/* Global values */
border-inline-start-style: inherit;
border-inline-start-style: initial;
border-inline-start-style: revert;
border-inline-start-style: revert-layer;
border-inline-start-style: unset;
```

Связанными свойствами являются `border-block-start-style`, `border-block-end-style` и `border-inline-end-style`, которые определяют другие стили границы элемента.

## Значения

`<'border-style'>`
: Стиль линии границы.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__border-inline-start-style" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-inline-start-style: dashed;
}
```

## Ссылки

- Свойство [`border-inline-start-style`](https://developer.mozilla.org/ru/docs/Web/CSS/border-inline-start-style) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#border-style) <sup><small>Spec (англ.)</small></sup>
