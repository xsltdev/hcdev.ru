---
description: Свойство cursor устанавливает форму курсора, когда он находится в пределах элемента
---

# cursor

Свойство **`cursor`** устанавливает форму курсора, когда он находится в пределах элемента.

Вид курсора зависит от операционной системы и установленных параметров.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/cursor.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Интерфейс"

    <div class="col3" markdown="1">

    - [appearance](appearance.md)
    - [box-sizing](box-sizing.md)
    - [caret-color](caret-color.md)
    - **cursor**
    - [outline](outline.md)
    - [outline-width](outline-width.md)
    - [outline-style](outline-style.md)
    - [outline-color](outline-color.md)
    - [outline-offset](outline-offset.md)
    - [resize](resize.md)
    - [text-overflow](text-overflow.md)
    - [user-select](user-select.md)

    </div>

## Синтаксис

```css
/* Keyword value */
cursor: auto;
cursor: pointer;
/* … */
cursor: zoom-out;

/* URL with mandatory keyword fallback */
cursor: url(hand.cur), pointer;

/* URL and coordinates, with mandatory keyword fallback */
cursor:
    url(cursor_1.png) 4 12,
    auto;
cursor:
    url(cursor_2.png) 2 2,
    pointer;

/* URLs and fallback URLs (some with coordinates), with mandatory keyword fallback */
cursor:
    url(cursor_1.svg) 4 5,
    url(cursor_2.svg),
    /* … ,*/ url(cursor_n.cur) 5 5,
    progress;

/* Global values */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

## Значения

`url`

: Позволяет установить свой собственный курсор, для этого нужно указать путь к файлу с курсором.

`auto`

: Вид курсора по умолчанию для текущего элемента.

`none`

: Отключает отображение курсора.

Остальные допустимые значения приведены в табл. 1.

Табл. 1. Вид курсора

| Вид | Значение |
| --- | --- |
| ![default](default.png){: style="cursor: default"} | `default` |
| ![context-menu](context-menu.png){: style="cursor: context-menu"} | `context-menu` |
| ![help](help.png){: style="cursor: help"} | `help` |
| ![pointer](pointer.png){: style="cursor: pointer"} | `pointer` |
| ![progress](progress.png){: style="cursor: progress"} | `progress` |
| ![wait](wait.png){: style="cursor: wait"} | `wait` |
| ![cell](cell.png){: style="cursor: cell"} | `cell` |
| ![crosshair](crosshair.png){: style="cursor: crosshair"} | `crosshair` |
| ![text](text.png){: style="cursor: text"} | `text` |
| ![vertical-text](vertical-text.png){: style="cursor: vertical-text"} | `vertical-text` |
| ![alias](alias.png){: style="cursor: alias"} | `alias` |
| ![copy](copy.png){: style="cursor: copy"} | `copy` |
| ![move](move.png){: style="cursor: move"} | `move` |
| ![no-drop](no-drop.png){: style="cursor: no-drop"} | `no-drop` |
| ![not-allowed](not-allowed.png){: style="cursor: not-allowed"} | `not-allowed` |
| ![all-scroll](all-scroll.png){: style="cursor: all-scroll"} | `all-scroll` |
| ![col-resize](col-resize.png){: style="cursor: col-resize"} | `col-resize` |
| ![row-resize](row-resize.png){: style="cursor: row-resize"} | `row-resize` |
| ![n-resize](n-resize.png){: style="cursor: n-resize"} | `n-resize` |
| ![ne-resize](ne-resize.png){: style="cursor: ne-resize"} | `ne-resize` |
| ![e-resize](e-resize.png){: style="cursor: e-resize"} | `e-resize` |
| ![se-resize](se-resize.png){: style="cursor: se-resize"} | `se-resize` |
| ![s-resize](s-resize.png){: style="cursor: s-resize"} | `s-resize` |
| ![sw-resize](sw-resize.png){: style="cursor: sw-resize"} | `sw-resize` |
| ![w-resize](w-resize.png){: style="cursor: w-resize"} | `w-resize` |
| ![nw-resize](nw-resize.png){: style="cursor: nw-resize"} | `nw-resize` |
| ![nesw-resize](nesw-resize.png){: style="cursor: nesw-resize"} | `nesw-resize` |
| ![nwse-resize](nwse-resize.png){: style="cursor: nwse-resize"} | `nwse-resize` |
| ![zoom-in](zoom-in.png){: style="cursor: zoom-in"} | `zoom-in` |
| ![zoom-out](zoom-out.png){: style="cursor: zoom-out"} | `zoom-out` |
| ![grab](grab.png){: style="cursor: grab"} | `grab` |
| ![grabbing](grabbing.png){: style="cursor: grabbing"} | `grabbing` |

В зависимости от операционной системы и её настроек вид курсора может отличаться от приведённых в таблице.

При добавлении курсора из файла синтаксис несколько видоизменится.

```
cursor: url('путь к курсору1'), url('путь к курсору2'), ..., <курсор>
```

Через запятую допускается указывать несколько значений `url`, в этом случае браузер попытается открыть первый файл с курсором и если это по каким-либо причинам не получится, перейдёт к следующему файлу. Список обязательно заканчивается ключевым словом, например, `auto` или `pointer`, допустимые значения перечислены выше.

### Примечание

Internet Explorer в качестве формата файла курсора поддерживает CUR и ANI. Firefox, Chrome, Safari поддерживают форматы CUR, PNG, GIF, JPG.

Chrome до версии 36, Opera до версии 24 и Safari до версии 9 поддерживают значения `-webkit-zoom-in` и `-webkit-zoom-out`.

Firefox до версии 24 поддерживает значения `-moz-zoom-in` и `-moz-zoom-out`.

Chrome до версии 22, Opera до версии 24 и Safari до версии 9 поддерживают значения `-webkit-grab` и `-webkit-grabbing`.

Firefox до версии 27 поддерживает значения `-moz-grab` и `-moz-grabbing`.

Браузеры на мобильных устройствах не поддерживают свойство `cursor`.

Значение по-умолчанию:

```css
cursor: auto;
```

Применяется ко всем элементам

## Спецификации

-   [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui/#cursor)
-   [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#cursor)
-   [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/ui.html#cursor-propsy)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css3-cursors" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css3-cursors">Can I Use css3-cursors?</a> Data on support for the css3-cursors feature across the major browsers from caniuse.com.
</p>

`cursor: zoom-in/zoom-out`:

<p class="ciu_embed" data-feature="css3-cursors-newer" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css3-cursors-newer">Can I Use css3-cursors-newer?</a> Data on support for the css3-cursors-newer feature across the major browsers from caniuse.com.
</p>

## Примеры

### Пример 1

```css
.foo {
    cursor: crosshair;
}

.bar {
    cursor: zoom-in;
}

/* A fallback keyword value is required when using a URL */
.baz {
    cursor: url('hyper.cur'), auto;
}
```

### Пример 2

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>cursor</title>
        <style>
            .cross {
                cursor: crosshair;
            }
            .help {
                cursor: help;
            }
        </style>
    </head>
    <body>
        <p class="cross">
            На этом тексте курсор мыши примет вид
            перекрестья.
        </p>
        <p>
            <a href="page/help.html" class="help"
                >СПРАВКА 1</a
            ><br />
            <a href="page/help.html" class="help"
                >СПРАВКА 2</a
            ><br />
            <a href="page/help.html" class="help"
                >СПРАВКА 3</a
            >
        </p>
    </body>
</html>
```

### Пример 3

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>cursor</title>
        <style>
            a {
                cursor: url('cursor/sniper.cur'), pointer;
            }
        </style>
    </head>
    <body>
        <p>Обычный текст</p>
        <p>
            <a href="page/1.html">Ссылка 1</a>
            <a href="page/2.html">Ссылка 2</a>
            <a href="page/3.html">Ссылка 3</a>
        </p>
    </body>
</html>
```

## Ссылки

-   Свойство [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) на сайте MDN
