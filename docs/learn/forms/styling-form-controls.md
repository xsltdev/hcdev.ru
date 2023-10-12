---
description: Узнайте, как реализовать элементы управления формами с помощью CSS.
icon: material/border-style
---

# Стилизация элементов формы

<big>Узнайте, как реализовать элементы управления формами с помощью CSS.</big>

В этом модуле вы узнаете, как придать стиль элементам управления формы и как совместить их со стилями других сайтов.

!!!warning ""

    Стилизация HTML элементов управления формами может быть непростой задачей, но все же по возможности следует использовать встроенные элементы. Такие элементы, как `<input>` и `<button>`, широко поддерживаются всеми браузерами и платформами и имеют встроенные функции, повышающие удобство использования и доступность, которые не нужно реализовывать самостоятельно. Использование вместо них `<div>` не дает таких преимуществ.

## Помогите пользователям выбрать вариант

### Элемент `<select>`

Стили элемента `<select>`, используемые по умолчанию, выглядят не лучшим образом, и в разных браузерах они несовместимы.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/eea33ada7ec976aa5791a5cd14756c34?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

!!!note ""

    Можно также использовать `<input>` в сочетании с элементом [`<datalist>`](../../html/datalist.md). Это позволяет получить комбинацию текстового поля и списка элементов `<option>`. Примеры использования элемента [`<datalist>`](http://simpl.info/datalist) можно посмотреть здесь.

Для начала изменим стрелки.

```css
select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url(arrow.png);
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto;
}
```

Чтобы убрать стрелки, установленные по умолчанию в элементе `<select>`, используйте свойство CSS [`appearance`](../../css/appearance.md). Чтобы показать стрелку по своему выбору, определите ее как `background`.

!!!note ""

    Для обеспечения наилучшей кроссбраузерной совместимости необходимо также включить версии `appearance` с префиксами: `-moz-appearance` и `-webkit-appearance`.

    [Подробнее о префиксах производителей](https://developer.mozilla.org/docs/Glossary/Vendor_Prefix#css_prefixes).

Для элемента `<select>` также следует изменить `font-size` на значение не менее `1rem` (которое для большинства браузеров по умолчанию равно `16px`). Это позволит предотвратить масштабирование страницы в iOS Safari при фокусировке элемента управления формой.

Разумеется, можно также изменить цвета элементов в соответствии с фирменными цветами. После добавления еще нескольких стилей для интервалов, `:hover` и `:focus` внешний вид элемента `<select>` стал единообразным в разных браузерах.

В этом можно убедиться на примере следующей демонстрации из [Styling a Select Like It's 2019](https://www.filamentgroup.com/lab/select-css.html)

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/2f6101907a292463bccd8d7a72d09554?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;"></iframe>

Что касается элемента `<option>`? Элемент `<option>` - это так называемый [замененный элемент](https://developer.mozilla.org/docs/Web/CSS/Replaced_element), представление которого находится за пределами CSS. На данный момент стилизация элемента `<option>` невозможна.

!!!note ""

    В настоящее время существует предложение разрешить веб-разработчикам стилизовать и расширять встроенные элементы управления веб-интерфейсом, включая элементы `<select>` и `<option>`. Это позволит в будущем упростить стилизацию элементов управления формами.

    Подробнее о [Open UI](https://open-ui.org).

### Чекбоксы и радиокнопки

Внешний вид кнопок `<input type="checkbox">` и `<input type="radio">` различается в разных браузерах.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/74d28931d0c0e9aacc89f62380f365e4?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;"></iframe>

Откройте [demo](https://codepen.io/web-dot-dev/pen/74d28931d0c0e9aacc89f62380f365e4) в разных браузерах, чтобы увидеть разницу. Давайте посмотрим, как сделать так, чтобы флажки и радиокнопки соответствовали вашему бренду и выглядели одинаково в разных браузерах.

Раньше разработчики не могли напрямую стилизовать элементы управления `<input type="checkbox">` и `<input type="radio">`. Теперь же [Checkbox'ы и радиокнопки можно стилизовать через их псевдоэлементы](https://www.scottohara.me/blog/2021/09/24/custom-radio-checkbox-again.html). Или же для создания пользовательских стилей для этих элементов можно использовать следующую технику замены.

Сначала визуально скройте стандартные флажок и радиокнопку.

```css
input[type='radio'],
input[type='checkbox'] {
    position: absolute;
    opacity: 0;
}
```

Важно использовать `position: absolute` в сочетании с `opacity: 0` вместо `display: none` или `visibility: hidden`, чтобы элементы управления были скрыты только визуально. Это обеспечит их отображение в дереве доступности браузера. Обратите внимание, что может потребоваться дополнительная стилизация для того, чтобы визуально скрытые элементы управления формой оставались расположенными "поверх" элементов-заменителей. Это поможет обеспечить наведение курсора на один из этих элементов при включенном устройстве чтения с экрана или при использовании сенсорных устройств с включенными устройствами чтения с экрана, при этом визуально скрытые элементы управления можно будет обнаружить при исследовании с помощью прикосновения, а видимый индикатор фокуса устройства чтения с экрана, как правило, будет отображаться в том месте, где элементы управления отображаются на экране.

Для отображения пользовательских флажков и радиокнопок существуют различные варианты. Можно использовать псевдоэлемент CSS `::before` и свойство CSS `background`, а также использовать встроенные SVG-изображения.

```css
input[type='radio'] + label::before {
    content: '';
    width: 1em;
    height: 1em;
    border: 1px solid black;
    display: inline-block;
    border-radius: 50%;
    margin-inline-end: 0.5em;
}

input[type='radio']:checked + label::before {
    background: black;
}
```

!!!note ""

    Стилизованные элементы управления формой должны быть просты для понимания и использования. Люди привыкли к флажку, который выглядит как флажок, поэтому при стилизации элемента управления формы убедитесь, что пользователи все равно понимают, как им пользоваться.

С помощью CSS существует множество возможностей для обеспечения соответствия флажков и радиокнопок фирменному стилю.

<iframe loading="lazy" src="https://codepen.io/web-dot-dev/embed/433b6d50b9d7d706e31ee5a638790c3d?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;"></iframe>

Подробнее о [стилях `<input type="checkbox">` и `<input type="radio">`](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/) и [пользовательских стилях чекбоксов](https://moderncss.dev/pure-css-custom-checkbox-style/).

## Как использовать цвета сайта для элементов управления формы

Хотите привнести стили сайта в элементы управления формы с помощью одной строки кода? Для этого можно использовать CSS-свойство `accent-color`.

```css
checkbox {
    accent-color: orange;
}
```

!!!note ""

    На данный момент только Chrome, Firefox и Edge поддерживают `accent-color`. Чтобы обеспечить кроссбраузерную совместимость, до тех пор, пока `accent-color` не будет поддерживаться на всех платформах, лучше использовать обходные пути.

## Ресурсы

-   [Accent color](https://web.dev/articles/accent-color)
-   [Стилизация элемента `<select>`](https://www.filamentgroup.com/lab/select-css.html)
-   [Доступность элементов управления стилизованных форм](https://scottaohara.github.io/a11y_styled_form_controls/)
-   [Open UI](https://open-ui.org)

:material-information-outline: Источник &mdash; [Styling form controls](https://web.dev/learn/forms/styling-form-controls/)
