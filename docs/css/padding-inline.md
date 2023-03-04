---
description: Сокращенное свойство CSS padding-inline определяет логическое встроенное начальное и конечное заполнение элемента, которое сопоставляется с физическими свойствами заполнения в зависимости от режима записи элемента, направления и ориентации текста.
---

# padding-inline

Сокращенное свойство **`padding-inline`** определяет логическое встроенное начальное и конечное заполнение элемента, которое сопоставляется с физическими свойствами заполнения в зависимости от режима записи элемента, направления и ориентации текста.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/padding-inline.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство является сокращением для следующих свойств CSS:

- [`padding-inline-end`](padding-inline-end.md)
- [`padding-inline-start`](padding-inline-start.md)

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

    - [padding-block](padding-block.md)
    - [padding-block-end](padding-block-end.md)
    - [padding-block-start](padding-block-start.md)
    - **padding-inline**
    - [padding-inline-end](padding-inline-end.md)
    - [padding-inline-start](padding-inline-start.md)

    </div>

## Синтаксис

```css
/* <length> values */
padding-inline: 10px 20px; /* An absolute length */
padding-inline: 1em 2em; /* relative to the text size */
padding-inline: 10px; /* sets both start and end values */

/* <percentage> values */
padding-inline: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__padding-inline" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

- Свойство [`padding-inline`](https://developer.mozilla.org/ru/docs/Web/CSS/padding-inline) <sup><small>MDN (рус.)</small></sup>
- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#propdef-padding-inline) <sup><small>Spec (англ.)</small></sup>
