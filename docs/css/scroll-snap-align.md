---
description: Свойство scroll-snap-align указывает положение привязки блока как выравнивание его области привязки (в качестве субъекта выравнивания) в пределах Snapport его контейнера привязки (в качестве контейнера выравнивания)
---

# scroll-snap-align

Свойство **`scroll-snap-align`** указывает положение привязки блока как выравнивание его области привязки (в качестве субъекта выравнивания) в пределах Snapport его контейнера привязки (в качестве контейнера выравнивания).

Эти два значения определяют выравнивание привязки по оси блока и встроенной оси соответственно. Если указано только одно значение, второе значение по умолчанию равно тому же значению.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-snap-align.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

## Синтаксис

```css
/* Keyword values */
scroll-snap-align: none;
scroll-snap-align: start end; /* when two values set first is block, second inline */
scroll-snap-align: center;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

## Спецификация

- [CSS Scroll Snap Module Level 1](https://w3c.github.io/csswg-drafts/css-scroll-snap/#scroll-snap-align)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scroll-snap-align" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
