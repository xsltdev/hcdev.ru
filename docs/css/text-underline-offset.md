---
description: Свойство text-underline-offset задает расстояние смещения линии оформления подчеркивания текста (применяемого с помощью text-decoration) от исходного положения
---

# text-underline-offset

Свойство **`text-underline-offset`** задает расстояние смещения линии оформления подчеркивания текста (применяемого с помощью [`text-decoration`](text-decoration.md)) от исходного положения.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/text-underline-offset.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

`text-underline-offset` не является частью сокращения `text-decoration`. Хотя элемент может иметь несколько строк `text-decoration`, смещение `text-underline-offset` влияет только на подчеркивание, а не на другие возможные варианты оформления строки, такие как `overline` или `line-through`.

## Синтаксис

```css
/* Single keyword */
text-underline-offset: auto;

/* length */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* percentage */
text-underline-offset: 20%;

/* Global values */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: revert-layer;
text-underline-offset: unset;
```

## Спецификация

- [CSS Text Decoration Module Level 4](https://w3c.github.io/csswg-drafts/css-text-decor-4/#underline-offset)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__text-underline-offset" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
