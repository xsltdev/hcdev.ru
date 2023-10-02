---
description: Фильтры в CSS позволяют применять эффекты, о которых можно было бы подумать только в графических приложениях. В этом модуле вы узнаете, какие эффекты доступны.
icon: material/filter-outline
---

# Фильтры

<big>**Фильтры** в CSS позволяют применять эффекты, о которых можно было бы подумать только в графических приложениях. В этом модуле вы узнаете, какие эффекты доступны.</big>

!!!info "CSS подкаст"

    023: Фильтры

    === "Перевод на русский"

    	<audio style="width: 100%;" controls src="/learn/css3/filters.ru.mp3"></audio>

    === "Английский оригинал"

    	<audio style="width: 100%;" controls src="/learn/css3/filters.en.ogg"></audio>

Допустим, вам необходимо создать элемент с эффектом матового стекла, слегка непрозрачный, который располагается поверх изображения. При этом текст должен быть живым текстом, а не изображением. Как это сделать?

<iframe src="https://codepen.io/web-dot-dev/embed/KKaQLoL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Сочетание CSS-фильтров и `backdrop-filter` позволяет нам применять эффекты и размывать то, что необходимо, в реальном времени. Размытие и непрозрачность — два из множества доступных фильтров, поэтому давайте вкратце рассмотрим, что они делают и как их использовать.

!!!note "Примечание"

    При размещении текста поверх изображений необходимо следить за тем, чтобы текст оставался читаемым, если эффект фильтрации не поддерживается браузером пользователя.

## Свойство `filter`

В качестве значения для свойства [`filter`](../../css/filter.md) можно применить один или несколько из перечисленных ниже фильтров. При неправильном применении фильтра остальные фильтры, определенные для `filter`, работать не будут.

### `blur`

Применяет гауссово размытие, и единственным аргументом, который можно передать, является `радиус`, который представляет собой [величину размытия](https://dbaron.org/log/20110225-blur-radius). Это должна быть единица длины, например `10px`. Проценты не принимаются.

```css
.my-element {
    filter: blur(0.2em);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/VwPQJwX?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `brightness`

Для увеличения или уменьшения яркости элемента используется функция яркости. Значение яркости выражается в процентах, при этом неизменное изображение выражается значением 100%. При значении 0% изображение становится абсолютно черным, поэтому значения от 0% до 100% делают изображение менее ярким. Для увеличения яркости используйте значения более 100%.

```css
.my-element {
    filter: brightness(80%);
}
```

!!!note ""

    В фильтрах типа `brightness` можно также использовать десятичные значения вместо процентных. Чтобы задать яркость 80% с десятичной дробью, напишите `0.8`.

<iframe src="https://codepen.io/web-dot-dev/embed/KKaQjpp?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `contrast`

Установите значение в диапазоне от 0% до 100% для уменьшения или увеличения контрастности соответственно.

```css
.my-element {
    filter: contrast(160%);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/rNjJEOW?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `grayscale`

Вы можете применить полностью полутоновый эффект, используя `1` в качестве значения для `grayscale()`, или `0` для получения полностью насыщенного элемента. Также можно использовать процентные или десятичные значения для применения только частичного эффекта оттенков серого. Если аргументы не указаны, то элемент будет полностью насыщен серым цветом. Если передать значение, превышающее 100%, то оно будет ограничено 100%.

```css
.my-element {
    filter: grayscale(80%);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/MWJQMKe?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `invert`

Как и `grayscale`, в функцию `invert()` можно передать значение `1` или `0`, чтобы включить или выключить ее. Если функция включена, то цвета элемента инвертируются полностью. Можно также использовать процентные или десятичные значения, чтобы применить только частичную инверсию цветов. Если не передавать никаких аргументов в функцию `invert()`, то элемент будет полностью инвертирован.

```css
.my-element {
    filter: invert(1);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/yLgvdOO?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `opacity`

Фильтр `opacity()` работает так же, как свойство `opacity`, в котором можно передать число или процент для увеличения или уменьшения непрозрачности. Если аргументы не переданы, то элемент полностью виден.

```css
.my-element {
    filter: opacity(0.3);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/RwKQzae?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `saturate`

Фильтр saturate очень похож на фильтр `brightness` и принимает тот же аргумент: число или процент. Вместо того чтобы увеличивать или уменьшать эффект яркости, фильтр `saturate` увеличивает или уменьшает насыщенность цвета.

```css
.my-element {
    filter: saturate(155%);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/BapYgQg?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `sepia`

С помощью этого фильтра, работающего по принципу `grayscale()`, можно добавить эффект тона сепии. Тон сепии — это техника фотопечати, при которой черные тона преобразуются в коричневые, чтобы сделать их теплее. В качестве аргумента для `sepia()` можно передать число или процент, что увеличивает или уменьшает эффект. Если не передавать никаких аргументов, то эффект сепии будет полным (эквивалентно `sepia(100%)`).

```css
.my-element {
    filter: sepia(70%);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/WNRMqpb?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `hue-rotate`

В уроке [colors](color.md) вы узнали о том, как оттенок в `hsl` ссылается на вращение цветового круга, и этот фильтр работает аналогичным образом. Если передать угол, например, градусы или обороты, то он сдвигает оттенок всех цветов элемента, изменяя ту часть цветового круга, на которую он ссылается. Если аргумент не указан, то фильтр ничего не делает.

```css
.my-element {
    filter: hue-rotate(120deg);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/ExZQBWw?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

### `drop-shadow`

Можно применить криволинейную падающую тень, как это делается в дизайнерских инструментах, например, в Photoshop, с помощью [`drop-shadow`](../../css/filter.md#drop-shadow). Эта тень применяется к альфа-маске, что делает ее очень удобной для добавления тени к вырезанному изображению. Фильтр `drop-shadow` принимает параметр `shadow`, содержащий разделенные пространством значения `offset-x`, `offset-y`, `blur` и `color`. Он практически идентичен фильтру `block-shadow`, но ключевое слово `inset` и значение `spread` не поддерживаются.

```css
.my-element {
    filter: drop-shadow(5px 5px 10px orange);
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/PoWQrJr?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Подробнее о различных типах теней можно узнать в модуле [Тени](shadows.md).

### `url`

Фильтр `url` позволяет применять SVG-фильтр из связанного SVG-элемента или файла. Вы можете [подробнее о фильтрах SVG можно прочитать здесь](https://developer.mozilla.org/docs/Web/SVG/Element/filter)

<iframe src="https://codepen.io/web-dot-dev/embed/mdRNgyp?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Фильтр фона

Свойство [`backdrop-filter`](../../css/backdrop-filter.md) принимает все те же значения функции фильтрации, что и `filter`. Разница между `backdrop-filter` и `filter` заключается в том, что свойство `backdrop-filter` применяет фильтр только к фону, в то время как свойство `filter` применяет его ко всему элементу.

Пример, приведенный в начале этого урока, является идеальным примером, поскольку вы не хотите, чтобы текст был размыт, и в идеале не хотите добавлять дополнительные HTML-элементы. Возможность применять фильтры только к фону позволяет это сделать.

<iframe src="https://codepen.io/web-dot-dev/embed/KKaQLoL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

:information_source: Источник &mdash; [Filters](https://web.dev/learn/css/filters/)
