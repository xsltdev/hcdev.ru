---
description: Использование SVG для масштабируемой адаптивной иконографии.
---

# Иконки

Большинство изображений являются частью контента, но иконки - это часть пользовательского интерфейса. Они должны масштабироваться и адаптироваться так же, как масштабируется и адаптируется текст пользовательского интерфейса.

## Масштабируемая векторная графика

Когда речь идет о фотографических изображениях, существует множество вариантов формата изображения: JPG, WebP и AVIF. Для нефотографических изображений есть выбор между форматом Portable Network Graphics (PNG) и форматом Scalable Vector Graphics (SVG).

И PNG, и SVG хорошо справляются с плоскими цветовыми областями, а также позволяют создавать прозрачные фоны. Если вы используете PNG, то вам, вероятно, придется сделать несколько версий изображения разных размеров и использовать атрибут `srcset` в элементе `img`, чтобы [сделать изображение адаптивным](responsive-images.md). Если вы используете SVG, то оно по умолчанию является адаптивным.

PNG (а также JPG, WebP и AVIF) - это растровые изображения. В растровых изображениях информация хранится в виде пикселей. В SVG информация хранится в виде инструкций по рисованию. Когда браузер считывает SVG-файл, инструкции преобразуются в пиксели. Самое главное, что эти инструкции являются относительными. Независимо от размеров, которые вы используете для описания линий и фигур, все отображается с нужной четкостью. Вместо того чтобы создавать несколько SVG разных размеров, можно сделать один SVG, который будет работать при любых размерах. При этом нет необходимости использовать атрибут `srcset`.

```html
<img
    src="image.svg"
    alt="A description of the image."
    width="25"
    height="25"
/>
<img
    src="image.svg"
    alt="A description of the image."
    width="250"
    height="250"
/>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzrKoWY?height=360&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 360px; width: 100%; border: 0;" data-title="Pen YzrKoWY by web-dot-dev on Codepen"></iframe>

Для записи инструкций в SVG-файл используется XML. Это язык разметки, подобный HTML.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-21 -21 42 42" width="100" height="100">
  <title>Smiling face</title>
  <circle r="20" fill="yellow" stroke="black"/>
  <ellipse rx="2.5" ry="4" cx="-6" cy="-7" fill="black"/>
  <ellipse rx="2.5" ry="4" cx="6" cy="-7" fill="black"/>
  <path stroke="black" d="M -12,5 A 13.5,13.5,0 0,0 12,5 A 13,13,0 0,1 -12,5"/>
</svg>
```

![Смайлик.](icons-1.svg)

Можно даже поместить SVG внутрь HTML.

```html
<figure>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-21 -21 42 42"
        width="100"
        height="100"
    >
        <title>Smiling face</title>
        <circle r="20" fill="yellow" stroke="black" />
        <ellipse
            rx="2.5"
            ry="4"
            cx="-6"
            cy="-7"
            fill="black"
        />
        <ellipse
            rx="2.5"
            ry="4"
            cx="6"
            cy="-7"
            fill="black"
        />
        <path
            stroke="black"
            d="M -12,5 A 13.5,13.5,0 0,0 12,5 A 13,13,0 0,1 -12,5"
        />
    </svg>
    <figcaption>A description of the image.</figcaption>
</figure>
```

Если встроить SVG, то у браузера будет на один запрос меньше. Не нужно ждать загрузки изображения, поскольку оно приходит вместе с HTML ..._в_ HTML! Кроме того, как вы скоро узнаете, встраивание SVG позволяет вам получить больше контроля над их стилем.

## Иконки и текст

Изображения иконок часто представляют собой простые фигуры на прозрачном фоне. SVG идеально подходит для пиктограмм.

Если у вас есть кнопка или ссылка с текстом и значком внутри, то значок является презентативным. Важен текст. При использовании элемента `img` пустой атрибут `alt` указывает на то, что изображение является презентационным.

!!!note ""

    Пустой атрибут `alt` - это не то же самое, что отсутствие атрибута `alt`. Всегда указывайте атрибут `alt`, даже если изображение является презентационным и атрибут `alt` не имеет содержимого.

```html
<button>
    <img
        src="hamburger.svg"
        alt=""
        width="16"
        height="16"
    />
    Menu
</button>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBPWzam?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen qBPWzam by web-dot-dev on Codepen"></iframe>

Поскольку CSS предназначен для представления информации, можно поместить значок в CSS в качестве фонового изображения.

```html
<button class="menu">Menu</button>
```

---

```css
.menu {
    background-image: url(hamburger.svg);
    background-position: 0.5em;
    background-repeat: no-repeat;
    background-size: 1em;
    padding-inline-start: 2em;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gOGYNwj?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen gOGYNwj by web-dot-dev on Codepen"></iframe>

Если вы помещаете SVG внутрь HTML, используйте атрибут `aria-hidden`, чтобы скрыть его от вспомогательных технологий.

```html
<button class="menu">
    <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        width="16"
        height="16"
    >
        <rect width="100" height="20" />
        <rect y="30" width="100" height="20" />
        <rect y="60" width="100" height="20" />
    </svg>
    Menu
</button>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGobPwz?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen bGobPwz by web-dot-dev on Codepen"></iframe>

!!!note ""

    Если на одной странице несколько раз используется один и тот же значок, то повторять всю SVG-разметку каждый раз будет неэффективно. В SVG существует элемент [`use`](https://developer.mozilla.org/docs/Web/SVG/Element/use), который позволяет "клонировать" часть SVG, даже из другого SVG-элемента.

## Отдельные значки

Используйте текст внутри кнопок и ссылок, если хотите, чтобы их назначение было понятно. Можно использовать пиктограмму без текста, но не стоит полагать, что все понимают значение той или иной пиктограммы. Если есть сомнения, проведите тестирование на реальных пользователях.

Если вы решили использовать пиктограмму без сопроводительного текста, то она перестает быть презентационной. Фоновое изображение в CSS не является подходящим способом отображения пиктограммы. В HTML иконке должно быть присвоено доступное имя.

Если используется элемент `img`, то иконка получает доступное имя из атрибута `alt`.

!!!note ""

    Обычно атрибут `alt` описывает содержимое изображения ("Три горизонтальные линии."), но для самостоятельных пиктограмм атрибут `alt` описывает смысл изображения ("Меню").

```html
<button>
    <img
        src="hamburger.svg"
        alt="Menu"
        width="16"
        height="16"
    />
</button>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWEgMbY?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen MWEgMbY by web-dot-dev on Codepen"></iframe>

Другой вариант - поместить доступное имя в саму ссылку или кнопку и объявить, что изображение является презентационным. Для указания доступного имени используйте атрибут `aria-label`.

```html
<button aria-label="Menu">
    <img
        src="hamburger.svg"
        alt=""
        width="16"
        height="16"
    />
</button>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwMZJmr?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen VwMZJmr by web-dot-dev on Codepen"></iframe>

Если вы помещаете SVG внутрь HTML, используйте атрибут `aria-label` для ссылки или кнопки, чтобы дать ей доступное имя, и используйте атрибут `aria-hidden` для пиктограммы.

```html
<button aria-label="Menu">
    <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        width="16"
        height="16"
    >
        <rect width="100" height="20" />
        <rect y="30" width="100" height="20" />
        <rect y="60" width="100" height="20" />
    </svg>
</button>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJxLebB?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen OJxLebB by web-dot-dev on Codepen"></iframe>

## Стилизация иконок

Если вы вставляете SVG-иконки непосредственно в HTML, то можете стилизовать их части, как и любой другой элемент страницы. Этого нельзя сделать, если для отображения пиктограмм используется элемент `img`.

В следующем примере элементы `rect` внутри SVG имеют значение `fill`, равное `blue`, чтобы соответствовать стилям текста кнопки.

```css
button {
    color: blue;
}
button rect {
    fill: blue;
}
```

Также можно применить стили `hover` и `focus`.

```css
button:hover,
button:focus {
    color: red;
}
button:hover rect,
button:focus rect {
    fill: red;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/rNGBEje?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen rNGBEje by web-dot-dev on Codepen"></iframe>

## Ресурсы

-   Если вам нужно придать стиль SVG, являющимся фоновыми изображениями, в CSS, прочитайте статью Уны [colorizing SVG backgrounds](https://css-tricks.com/solved-with-css-colorizing-svg-backgrounds/).
-   Сара Суэйдан (Sara Soueidan) написала о [доступных кнопках-иконках](https://www.sarasoueidan.com/blog/accessible-icon-buttons/).
-   Скотт О'Хара написал о [контекстной разметке доступных изображений и SVG](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html).
-   Если вы используете инструмент графического дизайна для экспорта SVG, используйте [SVGOMG](https://jakearchibald.github.io/svgomg/) для оптимизации вывода.

Значки - важная часть брендинга вашего сайта. Далее вы узнаете, как сделать другие аспекты брендинга адаптивными с помощью [theming](theming.md).
