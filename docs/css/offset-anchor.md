---
description: Свойство offset-anchor указывает точку внутри блока элемента, перемещающегося по пути смещения, который фактически движется по пути
---

# offset-anchor

Свойство **`offset-anchor`** указывает точку внутри блока элемента, перемещающегося по пути смещения, который фактически движется по пути.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/offset-anchor.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Пути перемещения"

    <div class="col3" markdown="1">

    - [`offset`](offset.md)
    - **`offset-anchor`**
    - [`offset-distance`](offset-distance.md)
    - [`offset-path`](offset-path.md)
    - [`offset-position`](offset-position.md)
    - [`offset-rotate`](offset-rotate.md)

    </div>

## Синтаксис

```css
/* Keyword values */
offset-anchor: top;
offset-anchor: bottom;
offset-anchor: left;
offset-anchor: right;
offset-anchor: center;
offset-anchor: auto;

/* <percentage> values */
offset-anchor: 25% 75%;

/* <length> values */
offset-anchor: 0 0;
offset-anchor: 1cm 2cm;
offset-anchor: 10ch 8em;

/* Edge offsets values */
offset-anchor: bottom 10px right 20px;
offset-anchor: right 3em bottom 10px;

/* Global values */
offset-anchor: inherit;
offset-anchor: initial;
offset-anchor: revert;
offset-anchor: unset;
```

## Спецификация

- [Motion Path Module Level 1](https://drafts.fxtf.org/motion/#offset-anchor-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__offset-anchor" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <section>
    	<div class="offset-anchor1"></div>
    </section>
    <section>
    	<div class="offset-anchor2"></div>
    </section>
    <section>
    	<div class="offset-anchor3"></div>
    </section>
    ```

=== "CSS"

    ```css
    div {
    	offset-path: path("M 0,20 L 200,20");
    	animation: move 3000ms infinite alternate ease-in-out;
    	width: 40px;
    	height: 40px;
    }

    section {
    	background-image: linear-gradient(
    		to bottom,
    		transparent,
    		transparent 49%,
    		#000 50%,
    		#000 51%,
    		transparent 52%
    	);
    	border: 1px solid #ccc;
    	margin-bottom: 10px;
    }

    .offset-anchor1 {
    	offset-anchor: auto;
    	background: cyan;
    }

    .offset-anchor2 {
    	offset-anchor: right top;
    	background: purple;
    }

    .offset-anchor3 {
    	offset-anchor: left bottom;
    	background: magenta;
    }

    @keyframes move {
    	0% {
    		offset-distance: 0%;
    	}
    	100% {
    		offset-distance: 100%;
    	}
    }
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Setting various offset-anchor values sample" id="frame_setting_various_offset-anchor_values" width="100%" height="300" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/offset-anchor/_sample_.setting_various_offset-anchor_values.html" loading="lazy"></iframe>
