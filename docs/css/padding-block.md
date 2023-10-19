---
description: Сокращенное свойство CSS padding-block определяет начальное и конечное заполнение логического блока элемента, которое сопоставляется с физическими свойствами заполнения в зависимости от режима записи элемента, направления и ориентации текста.
---

# padding-block

Сокращенное свойство **`padding-block`** определяет начальное и конечное заполнение логического блока элемента, которое сопоставляется с физическими свойствами заполнения в зависимости от режима записи элемента, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/padding-block.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство является сокращением для следующих свойств CSS:

-   [`padding-block-end`](padding-block-end.md)
-   [`padding-block-start`](padding-block-start.md)

??? info "Логические блоки"

    <div class="col3" markdown="1">

    - [margin-block](margin-block.md)
    - [margin-block-end](margin-block-end.md)
    - [margin-block-start](margin-block-start.md)
    - [margin-inline](margin-inline.md)
    - [margin-inline-end](margin-inline-end.md)
    - [margin-inline-start](margin-inline-start.md)

    </div>

    <div class="col3" markdown="1">

    - [overflow-block](overflow-block.md)
    - [overflow-inline](overflow-inline.md)

    </div>

    <div class="col3" markdown="1">

    - **padding-block**
    - [padding-block-end](padding-block-end.md)
    - [padding-block-start](padding-block-start.md)
    - [padding-inline](padding-inline.md)
    - [padding-inline-end](padding-inline-end.md)
    - [padding-inline-start](padding-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
padding-block: 10px 20px; /* An absolute length */
padding-block: 1em 2em; /* relative to the text size */
padding-block: 10px; /* sets both start and end values */

/* <percentage> values */
padding-block: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__padding-block" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

-   Свойство [`padding-block`](https://developer.mozilla.org/ru/docs/Web/CSS/padding-block) <sup><small>MDN (рус.)</small></sup>
-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-padding-block) <sup><small>Spec (англ.)</small></sup>
