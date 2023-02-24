---
description: Свойство border-image-slice разделяет изображение, указанное в border-image-source на девять регионов - четыре угла, четыре края и середину
---

# border-image-slice

Свойство **`border-image-slice`** разделяет изображение, указанное в [`border-image-source`](border-image-source.md) на девять регионов: четыре угла, четыре края и середину.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/border-image-slice.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Процесс нарезки создает всего девять областей: четыре угла, четыре края и среднюю область. Четыре линии среза, установленные на заданном расстоянии от соответствующих сторон, контролируют размер областей.

![border-image-slice](border-image-slice.png)

На приведенной выше диаграмме показано расположение каждого региона.

- Зоны 1-4 являются угловыми областями. Каждый из них используется один раз для формирования углов окончательного изображения границы.
- Зоны 5-8 являются краевыми областями. Они повторяются, масштабируются или иным образом изменяются в окончательном изображении границы, чтобы соответствовать размерам элемента.
- Зона 9 — средний регион. По умолчанию оно отбрасывается, но используется как фоновое изображение, если задано ключевым словом `fill`.

Свойства `border-image-repeat`, `border-image-width` и `border-image-outset` определяют, как эти области используются для формирования окончательного изображения границы.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - **border-image-slice**
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* All sides */
border-image-slice: 30%;

/* top and bottom | left and right */
border-image-slice: 10% 30%;

/* top | left and right | bottom */
border-image-slice: 30 30% 45;

/* top | right | bottom | left */
border-image-slice: 7 12 14 5;

/* Using the `fill` keyword */
border-image-slice: 10% fill 7 12;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: revert-layer;
border-image-slice: unset;
```

Свойство `border-image-slice` может быть указано с использованием от одного до четырех значений `<number-percentage>` для представления положения каждого фрагмента изображения. Отрицательные значения недействительны; значения, превышающие соответствующие размеры, ограничиваются `100%`.

- Когда указана одна позиция, создаются все четыре среза на одинаковом расстоянии от соответствующих сторон.
- Когда указаны две позиции, первое значение создает срезы, измеряемые сверху и снизу, а второе создает срезы, измеряемые слева и справа.
- Когда указаны три позиции, первое значение создает срез, измеряемый сверху, второе создает срезы, измеряемые слева и справа, третье создает срез, измеряемый снизу.
- Когда указаны четыре положения, они создают срезы, измеряемые сверху, справа, снизу и слева в указанном порядке (по часовой стрелке).

Необязательное значение `fill`, если оно используется, может быть размещено в любом месте объявления.

## Значения

Значение по-умолчанию:

```css
border-image-slice: 100%;
```

`<number>`
: Представляет смещение края в пикселях для растровых изображений и координаты для векторных изображений. Для векторных изображений число зависит от размера элемента, а не от размера исходного изображения, поэтому в этих случаях предпочтительнее использовать проценты.

`<percentage>`
: Представляет смещение края в процентах от размера исходного изображения: ширина изображения для смещения по горизонтали, высота для смещения по вертикали.

`fill`
: Сохраняет среднюю область изображения и отображает ее как фоновое изображение, но размещает над фактическим фоном. Его ширина и высота соответствуют верхней и левой областям изображения соответственно.

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](https://w3c.github.io/csswg-drafts/css-backgrounds/#the-border-image-slice)

## Поддержка браузерами

<p class="ciu_embed" data-feature="border-image" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=border-image">Can I Use border-image?</a> Data on support for the border-image feature across the major browsers from caniuse.com.
</p>

## Пример

В следующем примере показан простой `<div>` с установленным на нем изображением границы. Исходное изображение для границ выглядит следующим образом:

![border-diamonds](border-diamonds.png)

=== HTML

    ```html
    <div class="wrapper">
    	<div></div>
    </div>

    <ul>
    	<li>
    		<label for="width"
    		>slide to adjust <code>border-width</code></label
    		>
    		<input type="range" min="10" max="45" id="width" />
    		<output id="width-output">30px</output>
    	</li>
    	<li>
    		<label for="slice"
    		>slide to adjust
    		<code>border-image-slice</code></label
    		>
    		<input type="range" min="10" max="45" id="slice" />
    		<output id="slice-output">30</output>
    	</li>
    </ul>
    ```

=== CSS

    ```css
    .wrapper {
    	width: 400px;
    	height: 300px;
    }

    div > div {
    	width: 300px;
    	height: 200px;
    	border-width: 30px;
    	border-style: solid;
    	border-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png);
    	border-image-slice: 30;
    	border-image-repeat: round;
    }

    li {
    	display: flex;
    	place-content: center;
    }
    ```

=== JavaScript

    ```js
    const widthSlider = document.getElementById('width');
    const sliceSlider = document.getElementById('slice');
    const widthOutput = document.getElementById('width-output');
    const sliceOutput = document.getElementById('slice-output');
    const divElem = document.querySelector('div > div');

    widthSlider.addEventListener('input', () => {
    	const newValue = `${widthSlider.value}px`;
    	divElem.style.borderWidth = newValue;
    	widthOutput.textContent = newValue;
    });

    sliceSlider.addEventListener('input', () => {
    	const newValue = sliceSlider.value;
    	divElem.style.borderImageSlice = newValue;
    	sliceOutput.textContent = newValue;
    });
    ```

Результат:

<iframe class="sample-code-frame" title="Adjustable border width and slice sample" id="frame_adjustable_border_width_and_slice" width="100%" height="400" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/border-image-slice/_sample_.adjustable_border_width_and_slice.html" loading="lazy"></iframe>
