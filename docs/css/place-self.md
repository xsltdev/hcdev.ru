---
description: Свойство place-self - это сокращенное свойство, устанавливающее свойства align-self и justify-self
---

# place-self

Свойство **`place-self`** - это сокращенное свойство, устанавливающее свойства [`align-self`](align-self.md) и [`justify-self`](justify-self.md). Если второе значение отсутствует, для него используется первое значение.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/place-self.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Flexbox и выравнивание"

    <div class="col3" markdown="1">

    - [flex](flex.md)
    - [flex-basis](flex-basis.md)
    - [flex-direction](flex-direction.md)
    - [flex-flow](flex-flow.md)
    - [flex-grow](flex-grow.md)
    - [flex-shrink](flex-shrink.md)
    - [flex-wrap](flex-wrap.md)
    - [order](order.md)

    </div>

    <div class="col3" markdown="1">

    - [justify-content](justify-content.md)
    - [align-content](align-content.md)
    - [place-content](place-content.md)
    - [justify-items](justify-items.md)
    - [align-items](align-items.md)
    - [place-items](place-items.md)
    - [justify-self](justify-self.md)
    - [align-self](align-self.md)
    - **place-self**
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* Keyword values */
place-self: auto center;
place-self: normal start;

/* Positional alignment */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: left auto;
place-self: right normal;

/* Baseline alignment */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Global values */
place-self: inherit;
place-self: initial;
place-self: unset;
```

## Значения

Значение по-умолчанию: `auto auto`

Применяется к гридам

## Спецификации

- [CSS Box Alignment Module Level 3](https://w3c.github.io/csswg-drafts/css-align/#place-self-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__place-self__flex_context" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__properties__place-self__grid_context" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## См. также

- Свойство [`align-self`](align-self.md)
- Свойство [`justify-self`](justify-self.md)
