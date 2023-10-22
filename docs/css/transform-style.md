---
description: Свойство transform-style определяет, как дочерние элементы будут отображаться в 3D-пространстве
---

# transform-style

Свойство **`transform-style`** определяет, как дочерние элементы будут отображаться в 3D-пространстве. Это свойство должно использоваться совместно с [`transform`](transform.md).

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/transform-style.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Трансформации"

    <div class="col3" markdown="1">

    - [backface-visibility](backface-visibility.md)
    - [perspective](perspective.md)
    - [perspective-origin](perspective-origin.md)
    - [rotate](rotate.md)
    - [scale](scale.md)
    - [transform](transform.md)
    - [transform-box](transform-box.md)
    - [transform-origin](transform-origin.md)
    - **transform-style**

    </div>

## Синтаксис

```css
/* Keyword values */
transform-style: preserve-3d;
transform-style: flat;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: revert-layer;
transform-style: unset;
```

## Значения

`flat`

: Дочерние элементы лежат в той же плоскости, что и их родитель.

`preserve-3d`

: Дочерние элементы будут отображаться в 3D-пространстве.

### Примечание

-   Chrome до версии 36, Safari, Opera, Android и iOS поддерживают свойство `-webkit-transform-style`.
-   Firefox до версии 16 поддерживает свойство `-moz-transform-style`.

Значение по-умолчанию: `flat`

Применяется к трансформируемым элементам

## Спецификации

-   [CSS Transforms Level 1](http://dev.w3.org/csswg/css-transforms/#transform-style)

## Поддержка браузерами

CSS Transform 2D:

<p class="ciu_embed" data-feature="transforms2d" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=transforms2d">Can I Use transforms2d?</a> Data on support for the transforms2d feature across the major browsers from caniuse.com.
</p>

CSS Transform 3D:

<p class="ciu_embed" data-feature="transforms3d" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=transforms3d">Can I Use transforms3d?</a> Data on support for the transforms3d feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

Пример 1:

=== "HTML"

    ```html
    <section id="example-element">
    	<div class="face front">1</div>
    	<div class="face back">2</div>
    	<div class="face right">3</div>
    	<div class="face left">4</div>
    	<div class="face top">5</div>
    	<div class="face bottom">6</div>
    </section>

    <div class="checkbox">
    	<label for="preserve"><code>preserve-3d</code></label>
    	<input type="checkbox" id="preserve" checked />
    </div>
    ```

=== "CSS"

    ```css
    #example-element {
    	margin: 50px;
    	width: 100px;
    	height: 100px;
    	transform-style: preserve-3d;
    	transform: rotate3d(1, 1, 1, 30deg);
    }

    .face {
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	width: 100%;
    	height: 100%;
    	position: absolute;
    	backface-visibility: inherit;
    	font-size: 60px;
    	color: #fff;
    }

    .front {
    	background: rgba(90, 90, 90, 0.7);
    	transform: translateZ(50px);
    }

    .back {
    	background: rgba(0, 210, 0, 0.7);
    	transform: rotateY(180deg) translateZ(50px);
    }

    .right {
    	background: rgba(210, 0, 0, 0.7);
    	transform: rotateY(90deg) translateZ(50px);
    }

    .left {
    	background: rgba(0, 0, 210, 0.7);
    	transform: rotateY(-90deg) translateZ(50px);
    }

    .top {
    	background: rgba(210, 210, 0, 0.7);
    	transform: rotateX(90deg) translateZ(50px);
    }

    .bottom {
    	background: rgba(210, 0, 210, 0.7);
    	transform: rotateX(-90deg) translateZ(50px);
    }
    ```

=== "JS"

    ```js
    const cube = document.getElementById('example-element');
    const checkbox = document.getElementById('preserve');

    checkbox.addEventListener('change', () => {
    	cube.style.transformStyle = checkbox.checked
    		? 'preserve-3d'
    		: 'flat';
    });
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Transform style demonstration sample" id="frame_transform_style_demonstration" width="100%" height="260" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/transform-style/_sample_.transform_style_demonstration.html" loading="lazy"></iframe>

Пример 2:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>transform-style</title>
        <style>
            .turn {
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
            }
            .turn:hover {
                -webkit-transform: rotateY(45deg);
                transform: rotateY(45deg);
            }
        </style>
    </head>
    <body>
        <p>
            <img
                src="image/igels.png"
                alt="Ёжик"
                class="turn"
            />
            <img
                src="image/igels.png"
                alt="Ёжик"
                class="turn"
            />
        </p>
    </body>
</html>
```
