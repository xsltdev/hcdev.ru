---
description: Свойство tab-size используется для настройки ширины символа табуляции (U+0009).
---

# tab-size

Свойство **`tab-size`** используется для настройки ширины символа табуляции (`U+0009`).

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/tab-size.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - [line-break](line-break.md)
    - [overflow-wrap](overflow-wrap.md)
    - [paint-order](paint-order.md)
    - **tab-size**
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
    - [text-decoration-style](text-decoration-style.md)
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
/* <integer> значения */
tab-size: 4;
tab-size: 0;

/* <length> значения */
tab-size: 10px;
tab-size: 2em;

/* Глобальные значения */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: revert-layer;
tab-size: unset;
```

## Значения

`<integer>`

: Количество пробелов в табе. Должно быть неотрицательным.

`<length>`

: Ширина таба. Должно быть неотрицательным.

## Спецификация

-   [CSS Text Module Level 3](https://w3c.github.io/csswg-drafts/css-text/#tab-size-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__tab-size" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

```css
pre {
    tab-size: 4; /* Установит размер таба в 4 пробела */
}
pre {
    tab-size: 0; /* Удалит отступ */
}
pre {
    tab-size: 2; /* Установит размер таба в 2 пробела */
}
```

## Ссылки

-   [tab-size](https://developer.mozilla.org/ru/docs/Web/CSS/tab-size) <sup><small>MDN (рус.)</small></sup>
