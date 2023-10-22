---
description: Свойство text-align определяет горизонтальное выравнивание текста в пределах элемента
---

# text-align

Свойство **`text-align`** задает горизонтальное выравнивание содержимого встроенного уровня внутри блочного элемента или поля ячейки таблицы.

Это означает, что он работает как [`vertical-align`](vertical-align.md), но в горизонтальном направлении.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/text-align.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - [line-break](line-break.md)
    - [overflow-wrap](overflow-wrap.md)
    - [paint-order](paint-order.md)
    - [tab-size](tab-size.md)
    - **text-align**
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
/* Keyword values */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Character-based alignment in a table column */
text-align: '.';
text-align: '.' center;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

## Значения

`center`

: Выравнивание текста по центру. Текст помещается по центру горизонтали окна браузера или контейнера, где расположен текстовый блок. Строки текста словно нанизываются на невидимую ось, которая проходит по центру веб-страницы. Подобный способ выравнивания активно используется в заголовках и различных подписях, вроде подрисуночных, он придает официальный и солидный вид оформлению текста. Во всех других случаях выравнивание по центру применяется редко по той причине, что читать большой объем такого текста неудобно.

`justify`

: Выравнивание по ширине, что означает одновременное выравнивание по левому и правому краю. Чтобы произвести это действие браузер в этом случае добавляет пробелы между словами.

`left`

: Выравнивание текста по левому краю. В этом случае строки текста выравнивается по левому краю, а правый край располагается «лесенкой». Такой способ выравнивания является наиболее популярным на сайтах, поскольку позволяет пользователю легко отыскивать взглядом новую строку и комфортно читать большой текст.

`right`

: Выравнивание текста по правому краю. Этот способ выравнивания выступает в роли антагониста предыдущему типу. А именно, строки текста равняются по правому краю, а левый остается «рваным». Из-за того, что левый край не выровнен, а именно с него начинается чтение новых строк, такой текст читать труднее, чем, если бы он был выровнен по левому краю. Поэтому выравнивание по правому краю применяется обычно для коротких заголовков объемом не более трех строк. Мы не рассматриваем специфичные сайты, где текст приходится читать справа налево, там возможно подобный способ выравнивания и пригодится.

`start`

: Аналогично значению `left`, если текст идёт слева направо и `right`, когда текст идёт справа налево.

`end`

: Аналогично значению `right`, если текст идёт слева направо и `left`, когда текст идёт справа налево.

Значение по-умолчанию: `left`

Применяется к блочным контейнерам

## Спецификации

-   [CSS Logical Properties and Values Level 1](https://w3c.github.io/csswg-drafts/css-logical/#text-align)
-   [CSS Text Module Level 3](https://w3c.github.io/csswg-drafts/css-text/#text-align-property)
-   [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#alignment-prop)
-   [CSS Level 1](http://www.w3.org/TR/CSS1/#text-align)

## Поддержка браузерами

`text-align: justify`:

<p class="ciu_embed" data-feature="css-text-justify" data-periods="future_1,current,past_1,past_2"></p>

## Описание и примеры

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>text-align</title>
        <style>
            div {
                border: 1px solid black; /* Параметры рамки */
                padding: 5px; /* Поля вокруг текста */
                margin-bottom: 5px; /* Отступ снизу */
            }
            #left {
                text-align: left;
            }
            #right {
                text-align: right;
            }
            #center {
                text-align: center;
            }
            .content {
                width: 75%; /* Ширина слоя */
                background: #fc0; /* Цвет фона */
            }
        </style>
    </head>
    <body>
        <div id="left">
            <div class="content">
                Выравнивание по левому краю
            </div>
        </div>
        <div id="center">
            <div class="content">
                Выравнивание по центру
            </div>
        </div>
        <div id="right">
            <div class="content">
                Выравнивание по правому краю
            </div>
        </div>
    </body>
</html>
```
