---
description: Свойство CSS text-decoration-color задает цвет украшений, добавляемых к тексту строкой text-decoration.
---

# text-decoration-color

Свойство **`text-decoration-color`** задает цвет украшений, добавляемых к тексту строкой [`text-decoration`](text-decoration.md).

Цвет применяется к украшениям, таким как подчеркивание, надчеркивание, зачеркивание и волнистые линии, подобные тем, которые используются для обозначения орфографических ошибок, в пределах значения свойства.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/text-decoration-color.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

CSS не предоставляет прямого механизма для указания уникального цвета для каждого типа линии. Тем не менее, этого эффекта можно добиться путем вложения элементов, применения к каждому элементу разного типа линии (с помощью свойства [`text-decoration-line`](text-decoration-line.md)) и указания цвета линии (с помощью `text-decoration-color`) для каждого элемента.

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - [line-break](line-break.md)
    - [overflow-wrap](overflow-wrap.md)
    - [paint-order](paint-order.md)
    - [tab-size](tab-size.md)
    - [text-align](text-align.md)
    - [text-align-last](text-align-last.md)
    - [text-indent](text-indent.md)
    - [text-justify](text-justify.md)
    - [text-size-adjust](text-size-adjust.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-break](word-break.md)
    - [word-spacing](word-spacing.md)

    </div>

    <div class="col3" markdown="1">

    - [letter-spacing](letter-spacing.md)
    - [text-decoration](text-decoration.md)
    - **text-decoration-color**
    - [text-decoration-line](text-decoration-line.md)
    - [text-decoration-style](text-decoration-style.md)
    - [text-decoration-thickness](text-decoration-thickness.md)
    - [text-decoration-skip](text-decoration-skip.md)
    - [text-decoration-skip-ink](text-decoration-skip-ink.md)
    - [text-emphasis](text-emphasis.md)
    - [text-emphasis-color](text-emphasis-color.md)
    - [text-emphasis-position](text-emphasis-position.md)
    - [text-emphasis-style](text-emphasis-style.md)
    - [text-indent](text-indent.md)
    - [text-rendering](text-rendering.md)
    - [text-shadow](text-shadow.md)
    - [text-underline-position](text-underline-position.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* <color> values */
text-decoration-color: currentcolor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgba(255, 128, 128, 0.5);
text-decoration-color: transparent;

/* Global values */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: revert;
text-decoration-color: revert-layer;
text-decoration-color: unset;
```

## Спецификация

- [CSS Text Decoration Module Level 3](https://w3c.github.io/csswg-drafts/css-text-decor/#text-decoration-color-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__text-decoration-color" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
