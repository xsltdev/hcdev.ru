---
description: Свойство offset-distance указывает позицию вдоль пути смещения для размещаемого элемента.
---

# offset-distance

Свойство **`offset-distance`** указывает позицию вдоль пути смещения для размещаемого элемента.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/offset-distance.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Пути перемещения"

    <div class="col3" markdown="1">

    - [`offset`](offset.md)
    - [`offset-anchor`](offset-anchor.md)
    - **`offset-distance`**
    - [`offset-path`](offset-path.md)
    - [`offset-position`](offset-position.md)
    - [`offset-rotate`](offset-rotate.md)

    </div>

## Синтаксис

```css
/* Default value */
offset-distance: 0;

/* the middle of the offset-path */
offset-distance: 50%;

/* a fixed length positioned along the path */
offset-distance: 40px;

/* Global values */
offset-distance: inherit;
offset-distance: initial;
offset-distance: revert;
offset-distance: revert-layer;
offset-distance: unset;
```

## Спецификация

- [Motion Path Module Level 1](https://drafts.fxtf.org/motion/#offset-distance-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__offset-distance" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <div id="motion-demo"></div>
    ```

=== "CSS"

    ```css
    #motion-demo {
    	offset-path: path("M20,20 C20,100 200,0 200,100");
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

=== "Результат"

    <iframe class="sample-code-frame" title="Using offset-distance in an animation sample" id="frame_using_offset-distance_in_an_animation" width="100%" height="150" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/offset-distance/_sample_.using_offset-distance_in_an_animation.html" loading="lazy"></iframe>
