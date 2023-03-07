---
description: Сокращенное свойство scroll-padding устанавливает отступы прокрутки со всех сторон элемента одновременно, так же, как свойство padding задает отступы элемента.
---

# scroll-padding

Сокращенное свойство **`scroll-padding`** устанавливает отступы прокрутки со всех сторон элемента одновременно, так же, как свойство [`padding`](padding.md) задает отступы элемента.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-padding.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Свойства `scroll-padding-*` определяют смещения для оптимальной области просмотра окна прокрутки: области, используемой в качестве целевой области для размещения вещей в поле зрения пользователя. Это позволяет автору исключить части области прокрутки, закрытые другим содержимым (например, фиксированными панелями инструментов или боковыми панелями), или оставить больше свободного места между целевым элементом и краями области прокрутки.

Это свойство является сокращением для следующих свойств CSS:

- [`scroll-padding-bottom`](scroll-padding-bottom.md)
- [`scroll-padding-left`](scroll-padding-left.md)
- [`scroll-padding-right`](scroll-padding-right.md)
- [`scroll-padding-top`](scroll-padding-top.md)

## Синтаксис

```css
/* Keyword values */
scroll-padding: auto;

/* <length> values */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Global values */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

## Спецификация

- [CSS Scroll Snap Module Level 1](https://w3c.github.io/csswg-drafts/css-scroll-snap/#scroll-padding)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scroll-padding" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
