---
description: Свойство CSS margin-inline-start определяет логическое встроенное начальное поле элемента, которое сопоставляется с физическим полем в зависимости от режима записи элемента, направления и ориентации текста.
---

# margin-inline-start

Свойство **`margin-inline-start`** определяет логическое встроенное начальное поле элемента, которое сопоставляется с физическим полем в зависимости от режима записи элемента, направления и ориентации текста.

Он соответствует свойству `margin-top`, `margin-right`, `margin-bottom` или `margin-left` в зависимости от значений, определенных для режима письма, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/margin-inline-start.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Логические блоки"

    <div class="col3" markdown="1">

    - [margin-block](margin-block.md)
    - [margin-block-end](margin-block-end.md)
    - [margin-block-start](margin-block-start.md)
    - [margin-inline](margin-inline.md)
    - [margin-inline-end](margin-inline-end.md)
    - **margin-inline-start**

    </div>

    <div class="col3" markdown="1">

    - [overflow-block](overflow-block.md)
    - [overflow-inline](overflow-inline.md)

    </div>

    <div class="col3" markdown="1">

    - [padding-block](padding-block.md)
    - [padding-block-end](padding-block-end.md)
    - [padding-block-start](padding-block-start.md)
    - [padding-inline](padding-inline.md)
    - [padding-inline-end](padding-inline-end.md)
    - [padding-inline-start](padding-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
margin-inline-start: 10px; /* An absolute length */
margin-inline-start: 1em; /* relative to the text size */
margin-inline-start: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__margin-inline-start" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`margin-inline-start`](https://developer.mozilla.org/ru/docs/Web/CSS/margin-inline-start) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#margin-properties) <sup><small>Spec (англ.)</small></sup>
