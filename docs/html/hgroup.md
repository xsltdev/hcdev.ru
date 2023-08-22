---
description: Тег hgroup представляет заголовок раздела
---

# &lt;hgroup&gt;

Тег **`<hgroup>`** (HTML Headings Group Element - Элемент Группы Заголовков HTML) представляет заголовок раздела. Он определяет один заголовок, который участвует в схеме документа как заголовок явно или неявно заданного раздела, к которому он принадлежит.

!!! warning "Experimental: Это экспериментальная технология"

    Так как спецификация этой технологии ещё не стабилизировалась, смотрите таблицу совместимости по поводу использования в различных браузерах. Также заметьте, что синтаксис и поведение экспериментальной технологии может измениться в будущих версиях браузеров, вслед за изменениями спецификации.

!!! note "Примечание"

    Этот элемент был удалён из HTML5 (W3C) спецификации , но до сих пор остаётся в спецификации WHATWG. Он частично встроен в большинство браузеров, хотя бы поэтому вряд ли уйдёт. Поскольку схематический алгоритм не реализован ни в одном браузере, семантика тега `<hgroup>` на практике реализована только теоретически. Спецификация HTML5 (W3C) даёт совет как обозначать [подзаголовки, альтернативные заголовки и слоганы](https://www.w3.org/TR/html5/common-idioms.html#sub-head).

Этот элемент группирует несколько заголовков, внося лишь основной текст в план документа. Он позволяет связывать вторичные заголовки, такие как подзаголовки, альтернативные заголовки или даже теги, с основным заголовком, без загрязнения структуры документа.

## Демо

<iframe class="interactive is-tabbed-standard-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/hgroup.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Секции и заголовки"

    <div class="col4" markdown="1">

    - [address](address.md)
    - [article](article.md)
    - [aside](aside.md)
    - [footer](footer.md)
    - [header](header.md)
    - [h1](h1.md)
    - [h2](h2.md)
    - [h3](h3.md)
    - [h4](h4.md)
    - [h5](h5.md)
    - [h6](h6.md)
    - **hgroup**
    - [main](main.md)
    - [nav](nav.md)
    - [section](section.md)

    </div>

## Синтаксис

```html
<hgroup>
    <h1>Главный заголовок</h1>
    <h2>Вторичный заголовок</h2>
</hgroup>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

-   [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element)

## Описание и примеры

```html
<!DOCTYPE html>
<title>HTML Standard</title>
<body>
    <hgroup id="document-title">
        <h1>HTML: Living Standard</h1>
        <p>Last Updated 12 July 2022</p>
    </hgroup>
    <p>Some intro to the document.</p>
    <h2>Table of contents</h2>
    <ol id="toc">
        …
    </ol>
    <h2>First section</h2>
    <p>Some intro to the first section.</p>
</body>
```

## Ссылки

-   Тег [`<hgroup>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/hgroup) <sup><small>MDN (рус.)</small></sup>
