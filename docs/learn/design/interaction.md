---
description: Подготовьте страницы для различных механизмов ввода - мыши, клавиатуры и сенсорного ввода
---

# Взаимодействие

Устройства с небольшим экраном, такие как мобильные телефоны, часто оснащаются сенсорными экранами. Устройства с большим экраном, такие как ноутбуки и настольные компьютеры, часто оснащаются аппаратными средствами, такими как мышь или трекпад. Заманчиво приравнять маленькие экраны к сенсорным, а большие - к указательным.

Однако на самом деле все гораздо сложнее. Некоторые ноутбуки оснащены сенсорными экранами. Пользователи могут работать как с сенсорным экраном, так и с трекпадом или с обоими устройствами. Аналогичным образом можно использовать внешнюю клавиатуру или мышь с устройством с сенсорным экраном, например с планшетом.

Вместо того чтобы пытаться определить механизм ввода по размеру экрана, используйте медиафункции в CSS.

## Указатель

С помощью медиафункции `pointer` можно проверить три возможных значения: `none`, `coarse` и `fine`.

Если браузер выдает значение `pointer`, равное `none`, то, возможно, пользователь использует клавиатуру для взаимодействия с вашим сайтом.

Если браузер сообщает значение `pointer`, равное `coarse`, это означает, что основной механизм ввода не очень точен. Палец на сенсорном экране - это грубый указатель.

Если браузер сообщает о значении `pointer`, равном `fine`, это означает, что основной механизм ввода способен к тонкому управлению. Мышь или стилус - это тонкий указатель.

Вы можете изменять размер элементов интерфейса в соответствии со значением `pointer`. Попробуйте зайти на [этот сайт](https://gui-challenges.web.app/settings/dist/) с разных устройств, чтобы увидеть, как адаптируется интерфейс.

В данном примере кнопки сделаны более крупными для грубых указателей:

```css
button {
    padding: 0.5em 1em;
}
@media (pointer: coarse) {
    button {
        padding: 1em 2em;
    }
}
```

Можно также сделать элементы меньше для тонких указок, но делать это следует с осторожностью:

:material-thumb-down:{: style="color: red"} Плохо

```css
@media (pointer: fine) {
    button {
        padding: 0.25em 0.5em;
    }
}
```

Даже если у кого-то есть основной механизм ввода, способный к тонкому управлению, подумайте дважды, прежде чем уменьшать размер интерактивных элементов. [Закон Фиттса](https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%A4%D0%B8%D1%82%D1%82%D1%81%D0%B0) по-прежнему действует. Меньшая цель требует большей концентрации даже при использовании тонкого указателя. Увеличение площади цели выгодно всем, независимо от устройства наведения.

## Любой указатель

Мультимедийная функция `pointer` сообщает о тонкости _основного_ механизма ввода. Но многие устройства имеют более одного механизма ввода. Вполне возможно, что кто-то взаимодействует с вашим сайтом одновременно с помощью сенсорного экрана и мыши.

Функция `any-pointer` отличается от мультимедийной функции `pointer` тем, что она сообщает о том, что любое указывающее устройство проходит тест.

Значение `any-pointer`, равное `none`, означает, что ни одно указывающее устройство не доступно.

Значение `any-pointer`, равное `coarse`, означает, что по крайней мере одно устройство наведения не очень точное. Но оно может не быть основным механизмом ввода.

Значение `any-pointer`, равное `fine`, означает, что хотя бы одно устройство наведения способно к тонкому управлению. Но, опять же, это может быть не основным механизмом ввода.

Поскольку медиазапрос `any-pointer` выдает положительный результат, если _любой_ из механизмов ввода прошел тест, браузер может выдать результат для `any-pointer: fine` и одновременно результат для `any-pointer: coarse`. В этом случае порядок медиазапросов имеет значение. Последний из них будет иметь приоритет.

В данном примере, если устройство имеет как тонкий, так и грубый механизм ввода, будут применены грубые стили.

```css
@media (any-pointer: fine) {
    button {
        padding: 0.5em 1em;
    }
}
@media (any-pointer: coarse) {
    button {
        padding: 1em 2em;
    }
}
```

## Hover

Медиафункция `hover` сообщает о том, может ли основной механизм ввода наводить курсор на элементы. Обычно это означает, что на экране имеется курсор, управляемый мышью или трекпадом.

В отличие от медиафункции `pointer`, которая различает тонкие и грубые указатели, медиафункция `hover` является бинарной. Если основное устройство ввода способно наводить курсор на элементы, то оно сообщает значение `hover`. В противном случае значение будет `none`.

В данном примере при наведении на элемент доступен некоторый дополнительный значок, но только в том случае, если первичное устройство ввода способно навестись на элемент.

```css
button .extra {
    visibility: visible;
}
@media (hover: hover) {
    button .extra {
        visibility: hidden;
    }
    button:hover .extra {
        visibility: visible;
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwMrYav?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen VwMrYav by web-dot-dev on Codepen"></iframe>

При наведении мыши на эту кнопку появляется значок. Но если использовать клавиатуру для табуляции на кнопку, значок останется невидимым. При использовании клавиатуры происходит фокусировка, а не наведение. Настольное устройство с подключенной мышью сообщит, что основной механизм ввода способен навестись, что соответствует действительности. Но тот, кто использует клавиатуру при подключенной мыши, не получит преимущества стилей `:hover`. Поэтому целесообразно комбинировать стили `:hover` и `:focus`, чтобы охватить оба вида взаимодействия.

```css
button .extra {
    visibility: visible;
}
@media (hover: hover) {
    button .extra {
        visibility: hidden;
    }
    button:is(:hover, :focus) .extra {
        visibility: visible;
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/LYzOEZE?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen LYzOEZE by web-dot-dev on Codepen"></iframe>

Даже если основное устройство ввода позволяет наводить курсор на элементы, будьте осторожны, скрывая информацию за наведением курсора. Информация становится менее доступной. Не используйте hover для скрытия важной информации или важного элемента интерфейса.

## Любой hover

Медиазапрос `hover` сообщает только о _основном_ механизме ввода. Некоторые устройства имеют несколько механизмов ввода: сенсорный экран, мышь, клавиатура, трекпад.

Так же как `any-pointer` сообщает о любом из механизмов ввода, `any-hover` будет истинным, если любой из доступных механизмов ввода способен наводить курсор на элементы.

Если бы вы решили изменить логику предыдущего примера, вы могли бы сделать стили наведения по умолчанию, а затем удалить их, если `any-hover` будет иметь значение `none`.

```css
button .extra {
    visibility: hidden;
}
button:hover .extra,
button:focus .extra {
    visibility: visible;
}
@media (any-hover: none) {
    button .extra {
        visibility: visible;
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/Bawmyzd?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 200px; width: 100%; border: 0;" data-title="Pen Bawmyzd by web-dot-dev on Codepen"></iframe>

На устройстве, не имеющем механизма ввода с возможностью наведения, дополнительный значок виден всегда.

## Виртуальные клавиатуры

Люди используют курсоры и пальцы для изучения интерфейсов, но когда приходит время вводить информацию, им требуется клавиатура. Это хорошо, если к устройству прилагается физическая клавиатура, но в случае использования устройства с сенсорным экраном все несколько сложнее. Такие устройства предоставляют экранные виртуальные клавиатуры.

### Типы ввода

В отличие от физической клавиатуры, виртуальные клавиатуры могут быть настроены в соответствии с ожидаемым вводом. Если предоставить информацию о предполагаемом вводе, устройства могут предложить наиболее подходящую виртуальную клавиатуру.

[HTML5 input types](https://developer.mozilla.org/docs/Learn/Forms/HTML5_input_types) - это отличный способ описания элементов `input`. Атрибут `type` принимает такие значения, как `email`, `number`, `tel`, `url` и др.

```html
<label for="email">Email</label>
<input type="email" id="email" />
```

---

```html
<label for="number">Number</label>
<input type="number" id="number" />
```

---

```html
<label for="tel">Tel</label> <input type="tel" id="tel" />
```

---

```html
<label for="url">URL</label> <input type="url" id="url" />
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/zYEPxBX?height=400&amp;theme-id=dark&amp;default-tab=html%2C%20result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" data-title="Pen zYEPxBX by web-dot-dev on Codepen"></iframe>

<video controls loop>
<source src="/learn/design/interaction-1.mp4" />
</video>

### Режимы ввода

[Атрибут `inputmode`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode) позволяет осуществлять тонкий контроль над виртуальными клавиатурами. Например, в то время как существует один `input` `type` со значением `number`, вы можете использовать атрибут `inputmode` для различения между целыми и десятичными числами.

Если вы запрашиваете целое число, например, возраст человека, используйте `inputmode="numeric"`.

```html
<label for="age">Age</label>
<input type="number" id="age" inputmode="numeric" />
```

Если вы запрашиваете число, содержащее десятичные знаки, например, цену, используйте `inputmode="decimal"`.

```html
<label for="price">Price</label>
<input type="number" id="price" inputmode="decimal" />
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/mdBqyrO?height=300&amp;theme-id=dark&amp;default-tab=html%2C%20result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" data-title="Pen mdBqyrO by web-dot-dev on Codepen"></iframe>

<video controls loop>
<source src="/learn/design/interaction-2.mp4" />
</video>

### Автозаполнение

Никто не любит заполнять формы. Как дизайнер, вы можете улучшить впечатления пользователей, предоставив им возможность автоматически заполнять поля формы. [Атрибут `autocomplete`](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete) предоставляет множество возможностей для улучшения контактных форм, форм входа в систему и форм оформления заказа.

```html
<label for="name">Name</label>
<input type="text" id="name" autocomplete="name" />
```

---

```html
<label for="country">Country</label>
<input type="text" id="country" autocomplete="country" />
```

---

```html
<label for="email">Email</label>
<input type="email" id="email" autocomplete="email" />
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/oNGogYX?height=400&amp;theme-id=dark&amp;default-tab=html%2C%20result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" data-title="Pen oNGogYX by web-dot-dev on Codepen"></iframe>

<video controls loop>
<source src="/learn/design/interaction-3.mp4" />
</video>

Эти HTML-атрибуты - `type`, `inputmode` и `autocomplete` - являются небольшими дополнениями к полям формы, но они могут существенно повлиять на работу пользователя. Предвидя возможности устройств пользователя и реагируя на них, вы расширяете возможности своих пользователей. Для получения более подробной информации существует курс, посвященный [изучению форм](../forms/index.md).

Далее в этом курсе мы рассмотрим некоторые [общие шаблоны интерфейса](ui-patterns.md).
