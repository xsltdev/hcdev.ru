---
description: Сокращенное свойство offset задает все свойства, необходимые для анимации элемента по заданному пути
---

# offset

Сокращенное свойство **`offset`** задает все свойства, необходимые для анимации элемента по заданному пути.

Ранние версии спецификации называли это свойство `motion`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/offset.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Пути перемещения"

    <div class="col3" markdown="1">

    - **`offset`**
    - [`offset-anchor`](offset-anchor.md)
    - [`offset-distance`](offset-distance.md)
    - [`offset-path`](offset-path.md)
    - [`offset-position`](offset-position.md)
    - [`offset-rotate`](offset-rotate.md)

    </div>

Это свойство является сокращением для следующих свойств CSS:

- [`offset-anchor`](offset-anchor.md)
- [`offset-distance`](offset-distance.md)
- [`offset-path`](offset-path.md)
- [`offset-position`](offset-position.md)
- [`offset-rotate`](offset-rotate.md)

## Синтаксис

```css
/* Offset position */
offset: auto;
offset: 10px 30px;
offset: none;

/* Offset path */
offset: ray(45deg closest-side);
offset: path('M 100 100 L 300 100 L 200 300 z');
offset: url(arc.svg);

/* Offset path with distance and/or rotation */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* Including offset anchor */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;

/* Global values */
offset: inherit;
offset: initial;
offset: revert;
offset: revert-layer;
offset: unset;
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__offset" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [Motion Path Module Level 1](https://drafts.fxtf.org/motion/#offset-shorthand)

## Пример

Анимация элемента вдоль пути

=== "HTML"

    ```html
    <div id="offsetElement"></div>
    ```

=== "CSS"

    ```css
    @keyframes move {
    	from {
    		offset-distance: 0%;
    	}

    	to {
    		offset-distance: 100%;
    	}
    }

    #offsetElement {
    	width: 50px;
    	height: 50px;
    	background-color: blue;
    	offset: path('M 100 100 L 300 100 L 200 300 z') auto;
    	animation: move 3s linear infinite;
    }
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Animating an element along a path sample" id="frame_animating_an_element_along_a_path" width="350" height="350" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/offset/_sample_.animating_an_element_along_a_path.html" loading="lazy"></iframe>
