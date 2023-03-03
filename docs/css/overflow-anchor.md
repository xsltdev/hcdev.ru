---
description: Свойство overflow-anchor позволяет отказаться от поведения привязки прокрутки браузера, которое регулирует положение прокрутки, чтобы свести к минимуму сдвиги содержимого
---

# overflow-anchor

Свойство **`overflow-anchor`** позволяет отказаться от поведения привязки прокрутки браузера, которое регулирует положение прокрутки, чтобы свести к минимуму сдвиги содержимого.

Поведение привязки прокрутки включено по умолчанию в любом браузере, который его поддерживает. Поэтому изменение значения этого свойства обычно требуется только в том случае, если у вас возникли проблемы с привязкой прокрутки в документе или части документа и вам необходимо отключить поведение.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/overflow-anchor.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
/* Keyword values */
overflow-anchor: auto;
overflow-anchor: none;

/* Global values */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

## Значения

`auto`
: Элемент становится потенциальным якорем при настройке положения прокрутки.

`none`
: Элемент не будет выбран в качестве потенциального якоря.

## Спецификация

- [CSS Scroll Anchoring Module Level 1](https://w3c.github.io/csswg-drafts/css-scroll-anchoring/#exclusion-api)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__overflow-anchor" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
