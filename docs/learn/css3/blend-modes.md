---
description: В этом модуле, посвященном режимам наложения, можно создавать композиционные эффекты путем смешивания двух или более слоев, а также научиться выделять изображение на белом фоне.
icon: material/blender-outline
---

# Режимы наложения

<big>В этом модуле, посвященном **режимам наложения**, можно создавать композиционные эффекты путем смешивания двух или более слоев, а также научиться выделять изображение на белом фоне.</big>

!!!info "CSS подкаст"

    024: Режимы наложения

    <audio style="width: 100%;" controls src="https://traffic.libsyn.com/secure/thecsspodcast/TCP024_TCP_CSS_Podcast_Episode_024_v1.0.mp3?dest-id=1891556"></audio>

[Duotone](https://en.wikipedia.org/wiki/Duotone) - популярная цветовая обработка фотографий, при которой изображение выглядит так, как будто оно состоит только из двух контрастных цветов: один - для бликов, другой - для низких. Однако как это сделать в CSS?

<iframe src="https://codepen.io/web-dot-dev/embed/bGgvYMG?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Используя режимы наложения и другие изученные вами приемы, такие как [фильтры](filters.md) и [псевдоэлементы](pseudo-elements.md), вы можете применить этот эффект к любому изображению.

## Что такое режим наложения?

Режимы наложения обычно используются в таких инструментах дизайна, как Photoshop, для создания композиционного эффекта путем смешивания цветов двух или более слоев. Изменяя способ смешивания цветов, можно добиться очень интересных визуальных эффектов. Режимы наложения можно использовать и в качестве вспомогательного средства, например, для выделения изображения с белым фоном, чтобы оно казалось прозрачным.

<iframe src="https://codepen.io/web-dot-dev/embed/dyNmJor?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

С помощью CSS можно использовать большинство режимов наложения, доступных в инструментах дизайна, используя свойства [`mix-blend-mode`](../../css/mix-blend-mode.md) или [`background-blend-mode`](../../css/background-blend-mode.md). Свойство `mix-blend-mode` применяет смешивание ко всему элементу, а `background-blend-mode` - к фону элемента.

Свойство `background-blend-mode` используется при наличии нескольких фонов у элемента и необходимости их взаимного смешивания.

<iframe src="https://codepen.io/web-dot-dev/embed/XWpEVGO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Режим `mix-blend-mode` влияет на весь элемент, включая его псевдоэлементы. Один из примеров использования - в исходном примере дуотонового изображения, в котором цветовые слои накладываются на элемент через его псевдоэлементы.

<iframe src="https://codepen.io/web-dot-dev/embed/bGgvYMG?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Режимы наложения делятся на две категории: разделяемые и неразделяемые. Режим наложения с разделением рассматривает каждый цветовой компонент, например RGB, в отдельности. Неразделимый режим наложения учитывает все цветовые компоненты в равной степени.

## Совместимость с браузерами

### `mix-blend-mode`

<p class="ciu_embed" data-feature="mdn-css__properties__mix-blend-mode" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

### `background-blend-mode`

<p class="ciu_embed" data-feature="mdn-css__properties__background-blend-mode" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Разделяемые режимы наложения

### Нормальный

Это режим наложения по умолчанию, который ничего не меняет в том, как элемент смешивается с другими.

### Multiply

Режим наложения `multiply` похож на наложение нескольких прозрачностей друг на друга. Белые пиксели будут выглядеть прозрачными, а черные - черными. Все, что находится между ними, будет умножать свои значения светимости (освещенности). Это означает, что светлые пикселы становятся намного светлее, а темные - темнее, что чаще всего приводит к получению более темного результата.

```css
.my-element {
    mix-blend-mode: multiply;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/vYgRdOy?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Screen

Использование `screen` умножает значения _света_ - эффект, обратный эффекту `multiply`, и чаще всего приводит к более яркому результату.

```css
.my-element {
    mix-blend-mode: screen;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/JjELpYo?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Overlay

Этот режим наложения - `overlay` - сочетает в себе `multiply` и `screen`. Базовые темные цвета становятся темнее, а базовые светлые - светлее. Средние цвета, такие как 50% серый, не затрагиваются.

```css
.my-element {
    mix-blend-mode: overlay;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/BaprYom?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Darken

Режим наложения `darken` сравнивает светимость темных цветов исходного и фонового изображений и выбирает самый темный из них. При этом для каждого цветового канала сравниваются не яркости, а значения rgb (как это делают `multiply` и `screen`). При использовании `darken` и `lighten` в результате этого сравнения часто создаются новые цветовые значения.

```css
.my-element {
    mix-blend-mode: darken;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/dyNmdGM?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Lighten

Использование `lighten` делает прямо противоположное `darken`.

```css
.my-element {
    mix-blend-mode: lighten;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/OJWvQNO?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Color dodge

При использовании режима `color-dodge` цвет фона осветляется, отражая цвет источника. На чисто черные цвета этот режим не влияет.

```css
.my-element {
    mix-blend-mode: color-dodge;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/abpYqpz?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Color burn

Режим наложения `color-burn` очень похож на режим наложения `multiply`, но увеличивает контрастность, в результате чего средние тона становятся более насыщенными, а блики уменьшаются.

```css
.my-element {
    mix-blend-mode: color-burn;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/gOgevmG?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Hard light

Использование режима `hard-light` создает яркий контраст. Этот режим наложения либо экранирует, либо умножает значения яркости. Если значение пиксела светлее 50% серого, то изображение осветляется, как бы экранируется. Если значение темнее, то оно умножается.

```css
.my-element {
    mix-blend-mode: hard-light;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/ZELxreN?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Soft light

Режим наложения `soft-light` является менее жесткой версией `overlay`. Он работает практически так же, но с меньшим контрастом.

```css
.my-element {
    mix-blend-mode: soft-light;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/OJWvQmQ?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Difference

Хорошее представление о том, как работает `difference`, напоминает работу с фотонегативом. Режим наложения `difference` берет значение разности для каждого пикселя, инвертируя светлые цвета. Если значения цветов одинаковы, они становятся черными. Различия в значениях инвертируются.

```css
.my-element {
    mix-blend-mode: difference;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/mdRxXwM?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Exclusion

Использование `exclusion` очень похоже на `difference`, но вместо возврата черного цвета для одинаковых пикселей будет возвращаться 50% серого, что приведет к более мягкому результату с меньшим контрастом.

```css
.my-element {
    mix-blend-mode: exclusion;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/JjELpmb?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Неразделимые режимы наложения

Эти режимы наложения можно представить как компоненты HSL [цвета](color.md). Каждый из них берет определенное значение компонента из активного слоя и смешивает его с другими значениями компонентов.

### Hue

Режим наложения `hue` берет оттенок исходного цвета и применяет его к насыщенности и светлоте цвета фона.

```css
.my-element {
    mix-blend-mode: hue;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/BaprYGO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Saturation

Это работает так же, как `hue`, но при использовании `Saturation` в качестве режима наложения насыщенность исходного цвета применяется к оттенку и светлоте цвета фона.

```css
.my-element {
    mix-blend-mode: saturation;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/QWdmQoP?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Color

Режим наложения `color` создаст цвет из оттенка и насыщенности исходного цвета и светлоты цвета фона.

```css
.my-element {
    mix-blend-mode: color;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/jOyzZRo?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### Luminosity

Наконец, `luminosity` является обратной характеристикой `color`. Он создает цвет с яркостью исходного цвета и оттенком и насыщенностью цвета фона.

```css
.my-element {
    mix-blend-mode: luminosity;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/zYNWWOK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Свойство `isolation`

<p class="ciu_embed" data-feature="mdn-css__properties__isolation" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

Если свойству [`isolation`](../../css/isolation.md) присвоить значение `isolate`, то будет создан новый контекст наложения, который не позволит ему смешиваться с фоновым слоем. Как вы узнали из модуля [z-index](z-index.md), при создании нового контекста наложения этот слой становится базовым. Это означает, что режимы наложения на родительском уровне больше не будут применяться, но элементы внутри элемента с установленной опцией `isolation: isolate` все равно могут смешиваться.

Обратите внимание, что это не работает с режимом наложения `background-blend-mode`, поскольку свойство фона уже изолировано.

<iframe src="https://codepen.io/web-dot-dev/embed/JjELLXy?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

:information_source: Источник &mdash; [Blend Modes](https://web.dev/learn/css/blend-modes/)
