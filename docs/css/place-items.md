---
description: Сокращенное свойство place-items устанавливает свойства align-items и justify-items соответственно
---

# place-items

Сокращенное свойство **`place-items`** устанавливает свойства [`align-items`](align-items.md) и [`justify-items`](justify-items.md) соответственно. Если второе значение не установлено, для него также используется первое значение.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/place-items.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

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
    - **place-items**
    - [justify-self](justify-self.md)
    - [align-self](align-self.md)
    - [place-self](place-self.md)
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* Keyword values */
place-items: auto center;
place-items: normal start;

/* Positional alignment */
place-items: center normal;
place-items: start auto;
place-items: end normal;
place-items: self-start auto;
place-items: self-end normal;
place-items: flex-start auto;
place-items: flex-end normal;
place-items: left auto;
place-items: right normal;

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline auto;
place-items: last baseline normal;
place-items: stretch auto;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: unset;
```

## Значения

Значение по-умолчанию: `normal legacy`

## Спецификации

- [CSS Box Alignment Module Level 3](https://w3c.github.io/csswg-drafts/css-align/#place-items-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__place-items__flex_context" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

<p class="ciu_embed" data-feature="mdn-css__properties__place-items__grid_context" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Описание и примеры

```css
#container {
  height: 200px;
  width: 240px;
  /* You can change this value by selecting another option in the list */
  place-items: center;
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}
```

## См. также

- Свойство [`align-items`](align-items.md)
- Свойство [`align-self`](align-self.md)
- Свойство [`justify-items`](justify-items.md)
- Свойство [`justify-self`](justify-self.md)
