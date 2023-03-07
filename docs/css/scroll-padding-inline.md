---
description: Сокращенное свойство scroll-padding-inline задает заполнение прокрутки элемента во встроенном измерении.
---

# scroll-padding-inline

Сокращенное свойство **`scroll-padding-inline`** задает заполнение прокрутки элемента во встроенном измерении.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-padding-inline.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Свойства прокрутки определяют смещения для оптимальной области просмотра области прокрутки: область, используемая в качестве целевой области для размещения вещей в поле зрения пользователя. Это позволяет автору исключить области области прокрутки, закрытые другим содержимым (например, фиксированными панелями инструментов или боковыми панелями), или оставить больше свободного места между целевым элементом и краями области прокрутки.

Это свойство является сокращением для следующих свойств CSS:

- [`scroll-padding-inline-end`](scroll-padding-inline-end.md)
- [`scroll-padding-inline-start`](scroll-padding-inline-start.md)

## Синтаксис

```css
/* Keyword values */
scroll-padding-inline: auto;

/* <length> values */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* Global values */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

## Спецификация

- [CSS Scroll Snap Module Level 1](https://w3c.github.io/csswg-drafts/css-scroll-snap/#propdef-scroll-padding-inline)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scroll-padding-inline" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
