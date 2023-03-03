---
description: Свойство CSS offset-rotate определяет ориентацию/направление элемента, поскольку он расположен вдоль пути смещения.
---

# offset-rotate

Свойство **`offset-rotate`** определяет ориентацию/направление элемента, поскольку он расположен вдоль пути смещения.

Ранние версии спецификации называли это свойство `motion-rotation`.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/offset-rotate.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

??? info "Пути перемещения"

    <div class="col3" markdown="1">

    - [`offset`](offset.md)
    - [`offset-anchor`](offset-anchor.md)
    - [`offset-distance`](offset-distance.md)
    - [`offset-path`](offset-path.md)
    - [`offset-position`](offset-position.md)
    - **`offset-rotate`**

    </div>

## Синтаксис

```css
/* Follow the path direction, with optional additional angle */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* Follow the path direction but facing the opposite direction of `auto` */
offset-rotate: reverse;

/* Keep a constant rotation regardless the position on the path */
offset-rotate: 90deg;
offset-rotate: 0.5turn;

/* Global values */
offset-rotate: inherit;
offset-rotate: initial;
offset-rotate: revert;
offset-rotate: revert-layer;
offset-rotate: unset;
```

## Значения

`auto`
: Элемент поворачивается на угол направления `offset-path` относительно положительной оси x. Это значение по умолчанию.

`<angle>`
: К элементу применено постоянное преобразование вращения по часовой стрелке на указанный угол поворота.

`auto <angle>`
: Если за `auto` следует `<angle>`, вычисленное значение угла добавляется к вычисленному значению `auto`.

`reverse`
: Элемент поворачивается аналогично `auto`, за исключением того, что он обращен в противоположном направлении. Это то же самое, что указать значение `auto 180deg`.

## Спецификация

- [Motion Path Module Level 1](https://drafts.fxtf.org/motion/#offset-rotate-property)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__offset-rotate" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <div></div>
    <div></div>
    <div></div>
    ```

=== "CSS"

    ```css
    div {
    	width: 40px;
    	height: 40px;
    	background: #2bc4a2;
    	margin: 20px;
    	clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
    	animation: move 5000ms infinite alternate ease-in-out;

    	offset-path: path("M20,20 C20,50 180,-10 180,20");
    }
    div:nth-child(1) {
    	offset-rotate: auto;
    }
    div:nth-child(2) {
    	offset-rotate: auto 90deg;
    }
    div:nth-child(3) {
    	offset-rotate: 30deg;
    }

    @keyframes move {
    	100% {
    		offset-distance: 100%;
    	}
    }
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Setting element orientation along its offset path sample" id="frame_setting_element_orientation_along_its_offset_path" width="100%" height="200" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/offset-rotate/_sample_.setting_element_orientation_along_its_offset_path.html" loading="lazy"></iframe>
