---
description: Сокращенное свойство scroll-margin задает сразу все поля прокрутки элемента, присваивая значения так же, как свойство margin делает для полей элемента.
---

# scroll-margin

Сокращенное свойство **`scroll-margin`** задает сразу все поля прокрутки элемента, присваивая значения так же, как свойство `margin` делает для полей элемента.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-margin.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Это свойство является сокращением для следующих свойств CSS:

- [`scroll-margin-bottom`](scroll-margin-bottom.md)
- [`scroll-margin-left`](scroll-margin-left.md)
- [`scroll-margin-right`](scroll-margin-right.md)
- [`scroll-margin-top`](scroll-margin-top.md)

## Синтаксис

```css
/* <length> values */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Global values */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

## Спецификация

- [CSS Scroll Snap Module Level 1](https://w3c.github.io/csswg-drafts/css-scroll-snap/#scroll-margin)

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scroll-margin" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <div class="scroller">
    	<div>1</div>
    	<div>2</div>
    	<div>3</div>
    	<div>4</div>
    </div>
    ```

=== "CSS"

    ```css
    .scroller {
    	text-align: left;
    	width: 250px;
    	height: 250px;
    	overflow-x: scroll;
    	display: flex;
    	box-sizing: border-box;
    	border: 1px solid #000;
    	scroll-snap-type: x mandatory;
    }

    .scroller > div {
    	flex: 0 0 250px;
    	width: 250px;
    	background-color: #663399;
    	color: #fff;
    	font-size: 30px;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	scroll-snap-align: start;
    }

    .scroller > div:nth-child(2n) {
    	background-color: #fff;
    	color: #663399;
    }

    .scroller > div:nth-child(2) {
    	scroll-margin: 1rem;
    }

    .scroller > div:nth-child(3) {
    	scroll-margin: 2rem;
    }
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Simple demonstration sample" id="frame_simple_demonstration" width="100%" height="300" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/scroll-margin/_sample_.simple_demonstration.html" loading="lazy"></iframe>
