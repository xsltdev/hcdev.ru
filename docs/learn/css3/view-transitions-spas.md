---
description: View Transitions показывают непрерывность и контекст между страницами одностраничного приложения.
icon: material/transition
---

# View Transitions для SPA

<big>**View Transitions** показывают непрерывность и контекст между страницами одностраничного приложения (SPA).</big>

Обычный прием на веб-страницах — с помощью JavaScript на лету подменять содержимое страницы, не загружая новый полный HTML-документ. Это называют одностраничным приложением, или SPA. View transitions дают способ показать непрерывность или контекст между страницами такого приложения.

<iframe src="https://web.dev/frame/learn/css/view-transitions-spas/index_a76095a01630631774cba9ec5345ab4db2a38bbb5a7239f9bae2d957bc09d861.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Переходы всей страницы

Когда пользователь переходит к новому представлению в SPA, фреймворк заменяет DOM новым содержимым. Содержимое просто появляется. А если между текущим и новым содержимым нужен переход?

Переходы часто показывают старое и новое представления одновременно, например гасят старое и проявляют новое. Поскольку существующее содержимое заменяется, до появления view transitions это было сложно.

Чтобы использовать view transitions, логику смены DOM нужно обернуть в колбэк. В этих примерах простой маршрутизатор дает веб-компонент `MyRouter`. Как именно включить view transitions, зависит от маршрутизатора и фреймворка, которыми вы пользуетесь.

```javascript
document.startViewTransition(() => updateTheDOMSomehow());
```

<iframe src="https://codepen.io/web-dot-dev/embed/emprEOW?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Так включается переход по умолчанию: старое представление затухает, новое проявляется.

Что при этом происходит? Когда вы вызываете `document.startViewTransition()`, браузер делает снимок старого представления. Затем он вызывает переданный колбэк, который обновляет DOM до нового представления, но пока его не показывает. Когда колбэк завершается, браузер начинает переход к новому содержимому.

!!!note ""

    View transitions еще не входят в Baseline как широко доступные (Widely available). Убедитесь, что браузеры без поддержки View Transitions все равно смогут перейти к новому представлению, даже без анимации перехода.

```javascript
// Запасной путь для браузеров без поддержки этого API:
if (!document.startViewTransition) {
    updateTheDOMSomehow();
    return;
} else {
    // С переходом View Transition:
    document.startViewTransition(() => updateTheDOMSomehow());
}
```

## Настройка перехода

Как вы видели в предыдущем примере, View Transition по умолчанию гасит старое представление и проявляет новое. Переход можно настроить под стиль сайта, оформляя псевдоэлементы, которые порождают view transitions.

Уходящий переход задается через `::view-transition-old()`, входящий — через `::view-transition-new()`. Значения для обоих можно задать через `::view-transition-group()`.

В этом примере старое представление уходит анимацией `slide-out-to-left`, а новое приходит анимацией `slide-in-from-right`. Длительность обоих — 200 миллисекунд.

```css
::view-transition-group(root){
    animation-duration: 200ms;
}

::view-transition-old(root) {
    animation-name: slide-out-to-left;
}

::view-transition-new(root) {
    animation-name: slide-in-from-right;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/PwPeKYr?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

!!!note ""

    Откуда берется `root`? Чтобы view transitions работали, в старом и новом представлениях нужен элемент с одним и тем же `view-transition-name`. По умолчанию браузер задает `view-transition-name` корневого элемента документа равным `root`.

## Разные переходы в зависимости от контекста

Разные переходы могут зависеть от того, что делает пользователь. Например, если переход по ссылке с главной страницы вдвигает новое представление справа, то возврат на главную логично вдвигать слева.

Разные анимации задаются псевдоклассом `:active-view-transition-type()`.

```css
html:active-view-transition-type(forwards) {
    &::view-transition-old(root) {
        animation-name: slide-out-to-left;
    }

    &::view-transition-new(root) {
        animation-name: slide-in-from-right;
    }
}
```

Какой тип view transition использовать, вы выбираете при вызове `document.startViewTransition()`.

```javascript
const direction = next === 'home' ? 'backwards' : 'forwards';

document.startViewTransition({
    update: updateTheDOMSomehow,
    types: [direction],
});
```

<iframe src="https://codepen.io/web-dot-dev/embed/JoYvyjv?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Переход отдельных элементов

До сих пор переход применялся к корневому элементу и затрагивал все представление. View transitions могут анимировать и отдельные части страниц.

Например, содержимое старого представления может совпадать с содержимым нового. Это может быть заголовок или изображение. Это может быть даже миниатюра в старом представлении и видео в новом.

Сначала нужно указать, какие элементы переходят, свойством `view-transition-name`. Чтобы переход сработал, для каждого `view-transition-name` должен быть ровно один элемент до вызова `document.startViewTransition()` и ровно один элемент после того, как колбэк в `document.startViewTransition()` завершится.

В этом примере музыкальный проигрыватель показывает обложку альбома, название и исполнителя. Другое представление показывает то же содержимое в другой раскладке и добавляет текст песни.

<iframe src="https://codepen.io/web-dot-dev/embed/bNVMrNd?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

В предыдущем примере в старом и новом представлениях каждого переходящего элемента ровно по одному, и селекторы у них даже совпадают. Переходящие элементы как будто перемещаются между своими размерами и позициями. Части представления без перехода затухают и проявляются.

Посмотрите более насыщенный пример. На главной странице блога у каждой записи есть заголовок и изображение, и они же есть на полной странице записи. При переходе с главной к конкретной записи можно сделать так, будто заголовок и изображение переезжают на новое место и тем самым дают контекст.

Для заголовка нужен `view-transition-name`, который уникален в старом представлении, совпадает с заголовком в новом и уникален уже в новом. Это непросто: на главной несколько заголовков и изображений, и заранее неизвестно, по какому щелкнет пользователь.

Решения два. Можно задать уникальный `view-transition-name` каждой записи на главной и повторить это имя на полной странице записи. Такие имена удобно собирать из идентификатора записи. Другой вариант — общее имя `view-transition-name`, которое применяется только после щелчка по записи, но до вызова `document.startViewTransition()`.

<iframe src="https://codepen.io/web-dot-dev/embed/yyNJgQV?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Проектирование переходов

View transitions — это набор инструментов, которыми можно направлять пользователей и добавлять подсказки бренда или контекста. Чтобы найти переходы, которые подходят сайту, обычно сочетают несколько приемов.

В зависимости от нужного эффекта приходится подстраивать и сами элементы, и анимации. В предыдущем примере ради плавных переходов поправили несколько стилей.

У заголовка стоит `width: fit-content`. Это полезно, когда вы анимируете текст, который не переносится (или переносится одинаково в старом и новом представлениях). Иначе переход может идти между элементами разной ширины, и он будет менее плавным.

У изображения в старом и новом представлениях разное соотношение сторон. В примере подогнаны анимация и свойство `object-fit`, чтобы переход выглядел плавно.

## Учет `prefers-reduced-motion`

Частая причина, по которой пользователи просят уменьшить движение, в том, что полноэкранные анимации, в том числе те, что дают view transitions, могут вызывать дискомфорт у людей с вестибулярными нарушениями. Анимации можно отключить медиазапросом [`prefers-reduced-motion`](animations.md#tips). Можно и дать другие, более сдержанные анимации, которые все же показывают, как элементы связаны.

```css
@media (prefers-reduced-motion) {
    ::view-transition-group(*),
    ::view-transition-old(*),
    ::view-transition-new(*) {
        animation: none !important;
    }
}
```

:material-information-outline: Источник &mdash; [View transitions for SPAs](https://web.dev/learn/css/view-transitions-spas)
