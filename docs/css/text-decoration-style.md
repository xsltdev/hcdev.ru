---
description: CSS-свойство text-decoration-style задает стиль линий, заданных text-decoration-line. Стиль применяется ко всем строкам, заданным с помощью text-decoration-line.
---

# text-decoration-style

Свойство **`text-decoration-style`** задает стиль линий, заданных [`text-decoration-line`](text-decoration-line.md). Стиль применяется ко всем строкам, заданным с помощью `text-decoration-line`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/text-decoration-style.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Если указанное украшение имеет определенное семантическое значение, например сквозная строка, означающая, что какой-то текст был удален, авторам рекомендуется обозначать это значение с помощью тега HTML, например [`<del>`](/html/del/) или [`<s>`](/html/s/). Поскольку в некоторых случаях браузеры могут отключать стилизацию, смысловое значение в такой ситуации не исчезнет.

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
    - [text-decoration-line](text-decoration-line.md)
    - **text-decoration-style**
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
/* Keyword values */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Global values */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: revert-layer;
text-decoration-style: unset;
```

## Спецификация

- [CSS Text Decoration Module Level 3](https://w3c.github.io/csswg-drafts/css-text-decor/#text-decoration-style-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__text-decoration-style" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
