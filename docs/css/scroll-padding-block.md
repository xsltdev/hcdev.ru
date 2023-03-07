---
description: Сокращенное свойство scroll-padding-block задает заполнение прокрутки элемента в блочном измерении.
---

# scroll-padding-block

Сокращенное свойство **`scroll-padding-block`** задает заполнение прокрутки элемента в блочном измерении.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-padding-block.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Свойства прокрутки определяют смещения для оптимальной области просмотра области прокрутки: область, используемая в качестве целевой области для размещения вещей в поле зрения пользователя. Это позволяет автору исключить части области прокрутки, закрытые другим содержимым (например, фиксированными панелями инструментов или боковыми панелями), или оставить больше свободного места между целевым элементом и краями области прокрутки.

Это свойство является сокращением для следующих свойств CSS:

- [`scroll-padding-block-end`](scroll-padding-block-end.md)
- [`scroll-padding-block-start`](scroll-padding-block-start.md)

## Синтаксис

```css
/* Keyword values */
scroll-padding-block: auto;

/* <length> values */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Global values */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

## Спецификация

- [CSS Scroll Snap Module Level 1](https://w3c.github.io/csswg-drafts/css-scroll-snap/#propdef-scroll-padding-block)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scroll-padding-block" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
