---
description: CSS-свойство text-combine-upright устанавливает комбинацию символов в пробел одного символа.
---

# text-combine-upright

Свойство **`text-combine-upright`** задает комбинацию символов в пространстве одного символа.

Если объединенный текст шире `1em`, пользовательский агент должен уместить содержимое в пределах `1em`. Полученная композиция рассматривается как единый вертикальный глиф для макета и оформления. Это свойство действует только в режимах вертикального письма.

Это используется для создания эффекта, известного как татэ-тю-ёко "縦中横" на японском языке или как "橫向文字" на китайском языке.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/text-combine-upright.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Режимы письма"

    <div class="col3" markdown="1">

    - [direction](direction.md)
    - **text-combine-upright**
    - [text-orientation](text-orientation.md)
    - [unicode-bidi](unicode-bidi.md)
    - [writing-mode](writing-mode.md)

    </div>

## Синтаксис

```css
/* Keyword values */
text-combine-upright: none;
text-combine-upright: all;

/* Digits values */
text-combine-upright: digits; /* fits 2 consecutive digits horizontally inside vertical text */
text-combine-upright: digits 4; /* fits up to 4 consecutive digits horizontally inside vertical text */

/* Global values */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: revert-layer;
text-combine-upright: unset;
```

## Спецификация

- [CSS Writing Modes Level 4](https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__text-combine-upright" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>
