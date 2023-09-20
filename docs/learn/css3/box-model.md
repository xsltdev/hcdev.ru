---
description: Все, что отображается с помощью CSS, представляет собой коробку. Поэтому понимание того, как работает блочная модель CSS, является одной из основ CSS.
icon: material/drawing-box
---

# Блочная модель

<big>Все, что отображается с помощью CSS, представляет собой коробку. Поэтому понимание того, как работает блочная модель CSS, является одной из основ CSS.</big>

!!!info "CSS подкаст"

    001: Блочная модель

    <audio style="width: 100%;" controls src="https://traffic.libsyn.com/secure/thecsspodcast/TCP_CSS_Podcast__Episode_001_v2.0.mp3?dest-id=1891556"></audio>

Допустим, у вас есть такой фрагмент HTML:

```html
<p>I am a paragraph of text that has a few words in it.</p>
```

Затем вы пишете для него этот CSS:

```css
p {
    width: 100px;
    height: 50px;
    padding: 20px;
    border: 1px solid;
}
```

Содержимое вырвется за пределы элемента, и его ширина составит 142px, а не 100px. Почему так? Блочная модель - это основа CSS, и понимание того, как она работает, как на нее влияют другие аспекты CSS и, что очень важно, как ею можно управлять, поможет вам писать более предсказуемый CSS.

<iframe src="https://codepen.io/web-dot-dev/embed/WNRemxN?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;"  loading="lazy"></iframe>

При написании CSS и работе в Интернете в целом очень важно помнить, что все, что отображается с помощью CSS, является блоком. Будь то блок, использующий `border-radius`, чтобы выглядеть как круг, или даже просто текст: главное помнить, что все это блоки.

## Содержание и размер

Блоки ведут себя по-разному в зависимости от значения `display`, заданных размеров и содержимого, которое в них находится. Это содержимое может быть еще большим количеством блоков, созданных дочерними элементами, или обычным текстовым содержимым. В любом случае это содержимое будет влиять на размер блока по умолчанию.

Вы можете управлять этим, используя **внешний размер**, или позволить браузеру принимать решения за вас, основываясь на размере содержимого, используя **внутренний размер**.

Давайте быстро рассмотрим разницу, используя демонстрационный пример.

<iframe src="https://codepen.io/web-dot-dev/embed/abpoMBL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 700px; width: 100%; border: 0;" loading="lazy"></iframe>

<figure>
<figcaption>Обратите внимание, что когда блок использует внешние размеры, существует ограничение на количество содержимого, которое можно добавить, прежде чем оно выйдет за границы блока. В этом случае слово "awesome" переполняется.</figcaption>
</figure>

В демонстрационном примере слова "CSS - это круто" помещены в блок с фиксированными размерами и толстой рамкой. Блок имеет ширину, поэтому его размеры определяются экстернально. Он управляет размерами своего дочернего содержимого. Однако проблема заключается в том, что слово "awesome" слишком велико для этого блока, поэтому оно выходит за пределы **граничного блока** родительского блока (подробнее об этом будет рассказано далее в уроке). Один из способов предотвратить такое переполнение - позволить блоку иметь собственный размер, либо сняв значение ширины, либо, как в данном случае, установив `width` в значение `min-content`. Ключевое слово `min-content` указывает блоку ширину, равную минимальной ширине его содержимого (слова "awesome"). Это позволяет блоку идеально вписаться в текст "CSS is awesome".

Давайте рассмотрим нечто более сложное, чтобы увидеть влияние различных размеров на реальное содержимое:

<iframe src="https://codepen.io/web-dot-dev/embed/wvgwOJV?height=650&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 700px; width: 100%; border: 0;" loading="lazy"></iframe>

Включайте и выключайте функцию внутреннего размера, чтобы увидеть, как можно получить больший контроль над внешним размером и позволить содержимому иметь больший контроль над внутренним размером. Чтобы увидеть эффект от использования внутреннего и внешнего размера, добавьте на карту несколько предложений содержимого. Когда этот элемент использует экстернальный размер, существует ограничение на количество содержимого, которое можно добавить, прежде чем оно выйдет за границы элемента, но это не так, когда включен внутренний размер.

По умолчанию этот элемент имеет заданные значения `width` и `height` - оба `400px`. Эти размеры задают строгие границы для всего, что находится внутри элемента, которые будут соблюдаться, если только содержимое не слишком велико для блока, в этом случае произойдет видимое переполнение. Вы можете увидеть это в действии, изменив содержимое надписи под изображением цветка на то, которое превышает высоту блока, то есть на несколько строк.

!!!note ""

    Когда содержимое слишком велико для блока, в котором оно находится, мы называем это переполнением. Вы можете управлять тем, как элемент обрабатывает переполненное содержимое, используя свойство [`overflow`](../../css/overflow.md).

При переходе к внутреннему размеру браузер принимает решение за вас, основываясь на размере содержимого блока. При использовании внутренней настройки размера гораздо сложнее добиться переполнения, так как наш блок будет изменять размер вместе с содержимым, а не пытаться изменить размер содержимого. Важно помнить, что это стандартное, гибкое поведение браузера. Хотя внешний размер дает больше контроля, внутренний размер обеспечивает наибольшую гибкость в большинстве случаев.

## Области модели блока

Блоки состоят из отдельных областей модели блока, которые выполняют определенную работу.

<figure markdown>
![Диаграмма, показывающая четыре основные области модели блока - блок содержимого, блок отступов, блок границы и блок полей](box-model-1.svg)
<figcaption>Четыре основные области модели блока: блок содержимого, блок отступов, блок границы и блок с полями.</figcaption>
</figure>

Начнем с блока **контента**, который представляет собой область, в которой находится содержимое. Как вы уже узнали, это содержимое может управлять размерами своего родителя, поэтому обычно является областью с наиболее изменяемыми размерами.

Блок **отступов** окружает блок содержимого и представляет собой пространство, создаваемое свойством [`padding`](../../css/padding.md). Поскольку padding находится внутри блока, в образованном им пространстве будет виден фон блока. Если для нашего блока установлены правила переполнения, например `overflow: auto` или `overflow: scroll`, то полосы прокрутки также будут занимать это пространство.

<iframe src="https://codepen.io/web-dot-dev/embed/BaReoEV?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Блок **границы** окружает блок отступов, а его пространство занимает значение `border`. Граница блока - это границы вашего блока, а **граница** - это граница того, что вы можете визуально увидеть. Свойство [`border`](../../css/border.md) используется для визуального обрамления элемента.

Последняя область, **поля**, - это пространство вокруг вашего блока, определяемое правилом `margin` для вашего блока. Такие свойства, как [`outline`](../../css/outline.md) и [`box-shadow`](../../css/box-shadow.md), тоже занимают это пространство, поскольку они рисуются сверху, поэтому не влияют на размер нашего блока. Вы можете задать нашему блоку `outline-width` в `200px`, и все, что находится внутри блока, включая границы, будет иметь точно такой же размер.

<iframe src="https://codepen.io/web-dot-dev/embed/XWprGea?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Полезная аналогия

Модель блока сложна для понимания, поэтому давайте подытожим изученное с помощью аналогии.

<figure markdown>
![Три фоторамки](box-model-2.avif)
</figure>

На этой диаграмме представлены три фоторамки, установленные на стене рядом друг с другом. На диаграмме имеются метки, связывающие элементы рамки с моделью блока.

Разберем эту аналогию подробнее:

-   Блок с содержимым - это иллюстрация.
-   Блок отступов - это белое матовое покрытие между рамкой и произведением.
-   Блок границы - это рамка, обеспечивающая буквальную границу для иллюстрации.
-   Блок полей - это пространство между каждой рамкой.
-   Тень занимает то же пространство, что и блок полей.

## Debugging the box model

Browser DevTools provide a visualisation of a selected box's box model calculations, which can help you understand how the box model works and importantly, how it is affecting the website you're working on.

Go ahead and try this in your own browser:

1. [Open DevTools](https://developer.chrome.com/docs/devtools/open/)
1. [Select an element](https://developer.chrome.com/docs/devtools/css/reference/#select)
1. Show the box model debugger

<figure>
{% Video src="video/VbAJIREinuYvovrBzzvEyZOpw5w1/sKdHrAfqahgWfDVQEBBT.mp4", controls=true %}
</figure>

## Controlling the box model

To understand how to control the box model, you first need to understand what happens in your browser.

Every browser applies a user agent stylesheet to HTML documents. The CSS used varies between each browser, but they provide sensible defaults to make content easier to read. They define how elements should look and behave if there's no CSS defined. It is in the user agent styles where a box's default `display` is set, too. For example, if we are in a normal flow, a `<div>` element's default `display` value is `block`, a `<li>` has a default `display` value of `list-item`, and a `<span>` has a default `display` value of `inline`.

An `inline` element has block margin, but other elements won't respect it. Use `inline-block`, and those elements will respect the block margin, while the element maintains most of the same behaviors it had as an `inline` element. A `block` item will, by default, fill the available **inline space**, whereas a `inline` and `inline-block` elements will only be as large as their content.

Alongside an understanding of how user agent styles affect each box, you also need to understand `box-sizing`, which tells our box how to calculate its box size. By default, all elements have the following user agent style: `box-sizing: content-box;`.

Having `content-box` as the value of `box-sizing` means that when you set dimensions, such as a `width` and `height`, they will be applied to the **content box**. If you then set `padding` and `border`, these values will be added to the content box's size.

{% Assessment 'box-model' %}

The actual width of this box will be 260px. As the CSS uses the default `box-sizing: content-box`, the applied width is the width of the content, `padding` and `border` on both sides are added to that. So 200px for the content + 40px of padding + 20px of border makes a total visible width of 260px.

You _can_ control this, though, by making the following modification to use the alternative box model, `border-box`:

```css/1
.my-box {
    box-sizing: border-box;
    width: 200px;
    border: 10px solid;
    padding: 20px;
}
```

This alternative box model tells CSS to apply the `width` to the border box instead of the content box. This means that our `border` and `padding` get _pushed in_, and as a result, when you set `.my-box` to be `200px` wide: it actually renders at `200px` wide.

Check out how this works in the following interactive demo. Notice that when you toggle the `box-sizing` value it shows—via a blue background—which CSS is being applied _inside_ our box.

<figure>
{% Codepen {
  user: 'web-dot-dev',
  id: 'oNBvVpM',
  height: 650
} %}
</figure>

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

This CSS rule selects every element in the document and every `::before` and `::after` pseudo element and applies `box-sizing: border-box`. This means that every element will now have this alternative box model.

Because the alternative box model can be more predictable, developers often add this rule to resets and normalizers, [like this one](https://piccalil.li/blog/a-modern-css-reset).

## Resources

-   [Introduction to the box model](https://developer.mozilla.org/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
-   [What are browser developer tools?](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools)

### User agent stylesheets

-   [Chromium](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)
-   [Firefox](https://searchfox.org/mozilla-central/source/layout/style/res/html.css)
-   [Webkit](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
