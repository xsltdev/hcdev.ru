---
description: Свойство CSS offset-position определяет начальную позицию offset-path.
---

# offset-position

Свойство **`offset-position`** определяет начальную позицию [`offset-path`](offset-path.md).

??? info "Пути перемещения"

    <div class="col3" markdown="1">

    - [`offset`](offset.md)
    - [`offset-anchor`](offset-anchor.md)
    - [`offset-distance`](offset-distance.md)
    - [`offset-path`](offset-path.md)
    - **`offset-position`**
    - [`offset-rotate`](offset-rotate.md)

    </div>

## Синтаксис

```css
/* Keyword values */
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* <percentage> values */
offset-position: 25% 75%;

/* <length> values */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* Edge offsets values */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* Global values */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: revert-layer;
offset-position: unset;
```

## Спецификация

- [Motion Path Module Level 1](https://drafts.fxtf.org/motion/#offset-position-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__offset-position" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <div id="motion-demo"></div>
    ```

=== "CSS"

    ```css
    #motion-demo {
    	offset-path: path('M20,20 C20,100 200,0 200,100');
    	offset-position: left top;
    	animation: move 3000ms infinite alternate ease-in-out;
    	width: 40px;
    	height: 40px;
    	background: cyan;
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
