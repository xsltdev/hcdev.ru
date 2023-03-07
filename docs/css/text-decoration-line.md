---
description: Свойство CSS text-decoration-line задает вид оформления, используемого для текста в элементе, например подчеркивание или надчеркивание.
---

# text-decoration-line

Свойство **`text-decoration-line`** задает вид оформления, используемого для текста в элементе, например подчеркивание или надчеркивание.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/text-decoration-line.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

При одновременной настройке нескольких свойств `line-decoration` может оказаться более удобным вместо этого использовать сокращенное свойство [`text-decoration`](text-decoration.md).

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
    - [text-decoration-color](text-decoration-color.md)
    - **text-decoration-line**
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
/* Single keyword */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* Multiple keywords */
text-decoration-line: underline overline; /* Two decoration lines */
text-decoration-line: overline underline line-through; /* Multiple decoration lines */

/* Global values */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

## Спецификация

- [CSS Text Decoration Module Level 3](https://w3c.github.io/csswg-drafts/css-text-decor/#text-decoration-line-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__text-decoration-line" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
