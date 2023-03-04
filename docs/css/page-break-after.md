---
description: Свойство page-break-after добавляет разрыв страницы при печати документа после заданного элемента
---

# page-break-after

!!!warning "Предупреждение"

    Это свойство было заменено свойством [`break-after`](break-after.md).

Свойство **`page-break-after`** добавляет разрыв страницы при печати документа после заданного элемента.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/page-break-after.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Страницы"

    <div class="col3" markdown="1">

    - **page-break-after**
    - [page-break-before](page-break-before.md)
    - [page-break-inside](page-break-inside.md)

    </div>

    <div class="col3" markdown="1">

    - [@page](page.md)
    - [:blank](blank.md)
    - [:first](first.md)
    - [:left](left-pseudo-class.md)
    - [:right](right-pseudo-class.md)

    </div>

## Синтаксис

```css
/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: unset;
```

## Значения

`always`
: Всегда добавляет разрыв страницы после элемента.

`auto`
: Вставляет разрыв страницы при необходимости.

`avoid`
: Запрещает разрыв страницы после элемента.

`left`
: Пропускает одну или две страницы после элемента, чтобы следующая страница при печати была четной.

`right`
: Пропускает одну или две страницы после элемента, чтобы следующая страница при печати была нечетной.

Значение по-умолчанию: `auto`

Применяется к блочным элементам

## Спецификации

- [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#page)
- [CSS Paged Media Module Level 3](http://dev.w3.org/csswg/css3-page/#page-break-after)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/page.html#propdef-page-break-after)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-page-break" data-periods="future_1,current,past_1,past_2"></p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>page-break-after</title>
    <style>
      @media print {
        .more {
          page-break-after: always;
        }
      }
    </style>
  </head>
  <body>
    <h2>Мусорные пакеты</h2>
    <p>
      История о том, как однажды мусорных пакетов оказалось
      несколько больше, чем хотелось, как и для чего их
      можно использовать, и что из этого получилось.
    </p>
    <p class="more">Читать дальше</p>
  </body>
</html>
```
