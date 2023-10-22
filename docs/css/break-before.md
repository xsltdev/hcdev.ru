---
description: CSS-свойство break-before определяет, как должны вести себя разрывы страницы, столбца или области перед сгенерированным полем. Если сгенерированного поля нет, свойство игнорируется.
---

# break-before

Свойство **`break-before`** определяет, как должны вести себя разрывы страницы, столбца или области перед сгенерированным полем. Если сгенерированного поля нет, свойство игнорируется.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/break-before.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Фрагментация"

    <div class="col3" markdown="1">

    - [box-decoration-break](box-decoration-break.md)
    - [break-after](break-after.md)
    - **break-before**
    - [break-inside](break-inside.md)
    - [orphans](orphans.md)
    - [widows](widows.md)

    </div>

## Синтаксис

```css
/* Generic break values */
break-before: auto;
break-before: avoid;
break-before: always;
break-before: all;

/* Page break values */
break-before: avoid-page;
break-before: page;
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* Column break values */
break-before: avoid-column;
break-before: column;

/* Region break values */
break-before: avoid-region;
break-before: region;

/* Global values */
break-before: inherit;
break-before: initial;
break-before: revert;
break-before: revert-layer;
break-before: unset;
```

На каждую возможную точку разрыва (другими словами, на каждую границу элемента) влияют три свойства: значение `break-after` предыдущего элемента, значение `break-before` следующим элементом и значение `break-inside` содержащего элемента.

Чтобы определить, нужно ли делать перерыв, применяются следующие правила:

1.  Если какое-либо из трех соответствующих значений является значением принудительного разрыва (`always`, `left`, `right`, `page`, `column` или `region`), оно имеет приоритет. Если таким разрывом является более одного из них, берется тот из элементов, который появляется последним в потоке (т. е. значение `break-before` имеет приоритет над значением `break-after`, которое само имеет приоритет перед `break-inside` значением).
2.  Если какое-либо из трех рассматриваемых значений является значением предотвращения разрыва (`avoid`, `avoid-page`, `avoid-region` или `avoid-column`), такое прерывание не будет применяться в этой точке.

После того, как были применены принудительные разрывы, при необходимости можно добавить мягкие разрывы, но не на границах элементов, которые разрешаются в соответствующем значении `avoid`.

## Значения

Значение по-умолчанию: `auto`

Применяется к блочным элементам.

### Общие значения разрыва

`auto`

: Позволяет, но не заставляет, любой разрыв (страница, столбец или область) вставляться сразу после основного блока.

`avoid`

: Предотвращает вставку любого разрыва (страницы, столбца или региона) сразу после основного блока.

`always`

: Принудительно разрывает страницу сразу после основного окна.

`all`

: Принудительно разрывает страницу сразу после основного окна.

### Значения разрыва страницы

`avoid-page`

: Предотвращает разрыв страницы сразу после основного окна.

`page`

: Принудительно разрывает страницу сразу после основного окна.

`left`

: Принудительно разрывает одну или две страницы сразу после основного окна, в зависимости от того, какая из страниц перейдет на левую страницу.

`right`

: Принудительно разрывает одну или две страницы сразу после основного окна, в зависимости от того, какая из страниц перейдет на нужную страницу.

`recto`

: Принудительно разрывает одну или две страницы сразу после основного окна, в зависимости от того, какая из страниц перейдет на страницу с ректо. (Страница recto - это правая страница в развороте слева направо или левая страница в развороте справа налево.)

`verso`

: Принудительно разрывает одну или две страницы сразу после основного блока, в зависимости от того, какая из страниц превратится в настоящую страницу. (Страница verso - это левая страница в развороте слева направо или слева направо в развороте справа налево.)

### Значения разрыва столбца

`avoid-column`

: Предотвращает разрыв столбца сразу после основного окна.

`column`

: Принудительно разрывает столбец сразу после основного блока.

### Значения границ региона

`avoid-region`

: Позволяет избежать любого разрыва региона сразу после основного блока.

`region`

: Заставляет регион разрываться сразу после основного блока.

### Page break псевдонимы

По причинам совместимости устаревшее свойство [`page-break-before`](page-break-before.md) должно рассматриваться браузерами как псевдоним `break-before`. Это гарантирует, что сайты, использующие разрыв страницы, продолжают работать, как задумано. Подмножество значений должно быть псевдонимом следующим образом:

| `page-break-before` | `break-before` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `left`              | `left`         |
| `right`             | `right`        |
| `avoid`             | `avoid`        |
| `always`            | `page`         |

## Поддержка браузерами

Для страниц:

<p class="ciu_embed" data-feature="mdn-css__properties__break-before__paged_context" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Для колонок:

<p class="ciu_embed" data-feature="mdn-css__properties__break-before__multicol_context" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Ссылки

-   Свойство [`break-before`](https://developer.mozilla.org/ru/docs/Web/CSS/break-before) <sup><small>MDN (рус.)</small></sup>
-   [CSS Fragmentation Module Level 3](https://w3c.github.io/csswg-drafts/css-break/#break-between) <sup><small>Spec (англ.)</small></sup>
-   [CSS Regions Module Level 1](https://w3c.github.io/csswg-drafts/css-regions/#region-flow-break) <sup><small>Spec (англ.)</small></sup>
-   [CSS Multi-column Layout Module Level 1](https://w3c.github.io/csswg-drafts/css-multicol/#break-before-break-after-break-inside) <sup><small>Spec (англ.)</small></sup>
