---
description: Свойство CSS scroll-behavior задает поведение поля прокрутки, когда прокрутка активируется API-интерфейсами навигации или прокрутки CSSOM.
---

# scroll-behavior

Свойство **`scroll-behavior`** задает поведение поля прокрутки, когда прокрутка активируется API-интерфейсами навигации или прокрутки CSSOM.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-behavior.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Обратите внимание, что на любые другие прокрутки, например, выполняемые пользователем, это свойство не влияет. Когда это свойство указано для корневого элемента, вместо этого оно применяется к области просмотра. Это свойство, указанное в элементе [`body`](../html/body.md), не будет распространяться на область просмотра.

Пользовательским агентам разрешено игнорировать это свойство.

??? info "Pointer Events / <small>События указателя</small>"

    <div class="col3" markdown="1">

    - [pointer-events](pointer-events.md)
    - [touch-action](touch-action.md)
    - **scroll-behavior**

    </div>

## Синтаксис

```css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
```

## Значения

`auto`
: Поле прокрутки прокручивается мгновенно.

`smooth`
: Поле прокрутки плавно прокручивается с использованием функции синхронизации, определяемой агентом пользователя, в течение периода времени, определяемого агентом пользователя. Пользовательские агенты должны следовать соглашениям платформы, если таковые имеются.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__scroll-behavior" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <nav>
    	<a href="#page-1">1</a>
    	<a href="#page-2">2</a>
    	<a href="#page-3">3</a>
    </nav>
    <div class="scroll-container">
    	<div class="scroll-page" id="page-1">1</div>
    	<div class="scroll-page" id="page-2">2</div>
    	<div class="scroll-page" id="page-3">3</div>
    </div>
    ```

=== "CSS"

    ```css
    a {
    	display: inline-block;
    	width: 50px;
    	text-decoration: none;
    }
    nav,
    .scroll-container {
    	display: block;
    	margin: 0 auto;
    	text-align: center;
    }
    nav {
    	width: 339px;
    	padding: 5px;
    	border: 1px solid black;
    }
    .scroll-container {
    	width: 350px;
    	height: 200px;
    	overflow-y: scroll;
    	scroll-behavior: smooth;
    }
    .scroll-page {
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	height: 100%;
    	font-size: 5em;
    }
    ```

=== "Результат"

    <iframe class="sample-code-frame" title="Setting smooth scroll behavior sample" id="frame_setting_smooth_scroll_behavior" width="100%" height="250" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/scroll-behavior/_sample_.setting_smooth_scroll_behavior.html" loading="lazy"></iframe>

## Ссылки

-   Свойство [`scroll-behavior`](https://developer.mozilla.org/ru/docs/Web/CSS/scroll-behavior) <sup><small>MDN (рус.)</small></sup>
-   [CSS Overflow Module Level 3](https://w3c.github.io/csswg-drafts/css-overflow/#smooth-scrolling) <sup><small>Spec (англ.)</small></sup>
