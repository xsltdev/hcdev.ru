---
description: Пользовательские свойства, или CSS-переменные, позволяют организовать и переиспользовать значения в CSS, чтобы стили были гибче и понятнее.
icon: material/variable
---

# Пользовательские свойства

<big>**Пользовательские свойства**, или CSS-переменные, позволяют организовать и переиспользовать значения в CSS, чтобы стили были гибче и понятнее.</big>

Допустим, вы набросали первые стили сайта и заметили, что одни и те же значения в CSS повторяются. Основной цвет — `dodgerblue`: он стоит в рамках кнопок, в тексте ссылок и в фонах заголовков, а в дизайн-инструменте вы подбираете варианты этого синего для других частей сайта. Затем приходит руководство по стилю, и основной цвет уже `oklch(70% 0.15 270)`.

## Создание свойств

Самый простой способ создать свойство — задать значение новому свойству с выбранным вами именем.

<iframe src="https://web.dev/frame/learn/css/custom-properties/index_b2a4b52c8c32d40452aeefa9e662f3f950a973ae9c6799827f206fd37928aea9.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

```css
.card {
  --base-size: 1em;
}
```

Имя любого такого свойства должно начинаться с двух дефисов. Так вы не сможете занять имя уже существующего свойства CSS под собственное значение. В спецификацию CSS никогда не добавят свойство, которое начинается с двух дефисов.

К этому свойству затем обращаются функцией `var()`. В примере размер шрифта внутри `.card-title` равен удвоенному значению `--base-size`.

```css
.card .card-title {
  font-size: calc(2 * var(--base-size));
}
```

!!!note ""

    Свойства часто инициализируют на корневом элементе селектором `:root`. Тогда значения по умолчанию доступны в любом месте страницы, но их по-прежнему можно переопределить.

## Использование пользовательского свойства

Как вы уже видели, значение пользовательского свойства подставляется функцией `var()`. Функцию `var()` можно использовать в значениях, но не в медиазапросах. Особенно она удобна как аргумент других [функций CSS](functions.md).

<iframe src="https://codepen.io/web-dot-dev/embed/MYaVdpL?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Запасные значения

Что будет, если обратиться к пользовательскому свойству, которому не задано значение? Функция `var()` принимает второй аргумент — запасное значение. Запасным значением может быть и другое пользовательское свойство со вложенным `var()`.

```css
#my-element {
  background: var(
    --alert-variant-background,
    var(--alert-primary-background)
  );
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/OPyvYmO?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Недопустимые значения

Если пользовательское свойство вычисляется в недопустимое значение, например `1em` для свойства `background-color`, другие допустимые объявления этого свойства у того же элемента использованы не будут. Браузер не может понять, что значение недопустимо, пока при вычислении не отбросит остальные объявления. Используемым значением станет унаследованное или начальное.

```css
.content {
  background-color: blue;
}

.content.invalid {
  --length: 2rem;
  background-color: var(--length);
}
```

В предыдущем примере у элемента `.invalid` не будет синего фона. Свойство `background-color` не наследуется, поэтому значением станет `transparent` — его начальное значение.

<iframe src="https://codepen.io/web-dot-dev/embed/YPywPKr?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Переопределение и наследование

Чаще всего нужно поведение пользовательских свойств по умолчанию: значения наследуются. Когда свойству задается новое значение, оно действует у этого элемента и у всех его потомков, пока его не переопределит другое значение.

<iframe src="https://codepen.io/web-dot-dev/embed/vENRwZg?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Пользовательские свойства подчиняются [каскаду](the-cascade.md), поэтому их может переопределить и более специфичный селектор.

### Больше контроля с помощью `@property`

<iframe src="https://web.dev/frame/learn/css/custom-properties/index_bf9288640d1d3bbfb2c4ec7366d0357fd2f4e5cab541aca8e31ab7421389adf4.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Пользовательское свойство, созданное присваиванием значения, может быть любого типа и наследуется. Чтобы точнее им управлять, используйте правило `@property`.

Созданное ранее свойство `--base-size` равносильно такому объявлению `@property`.

```css
@property --base-size {
  syntax: "*";
  inherits: true;
  initial-value: 18px;
}
```

Значение `syntax` задает [типы значений CSS](https://developer.mozilla.org/docs/Web/CSS/@property/syntax), допустимые для свойства. Если задать значение другого типа, оно будет недопустимым, и свойство откатится к начальному значению или к унаследованному значению, заданному выше в каскаде.

<iframe src="https://codepen.io/web-dot-dev/embed/pvjLmwQ?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Когда пользовательское свойство создается через `@property`, наследование можно отключить дескриптором `inherits: false`. Переопределение значения свойства с отключенным наследованием меняет его у выбранного элемента, но не у потомков. Это часто удобно, когда на один элемент нацелено несколько селекторов.

<iframe src="https://codepen.io/web-dot-dev/embed/empMaRa?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

`initial-value` задает значение свойства, пока его позже не изменят. Если синтаксис не равен `*` (то есть любому типу CSS), в `@property` обязательно нужно указать `initial-value`. Тогда у свойства всегда будет значение заданного синтаксиса, и оно никогда не окажется неопределенным.

## Обновление пользовательских свойств из JavaScript

Значение пользовательского свойства элемента можно обновить из JavaScript и тем самым динамически менять стили сайта.

```javascript
const element = document.getElementById("my-button");
getComputedStyle(element).setPropertyValue("--color", "orange");
```

Этот пример обновляет атрибут style элемента `#my-button`. Если посмотреть его в инструментах разработчика, вы увидите:

```html
<button id="my-button" style="--color: orange">Click me</button>
```

<iframe src="https://codepen.io/web-dot-dev/embed/EaVEzvx?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

В предыдущем примере видно, как задавать пользовательские свойства по данным из [пользовательских HTML-атрибутов](../html5/attributes.md). У каждой кнопки есть атрибут `data-color` со значением конкретного цвета. Пользовательское свойство `--background`, заданное на элементе `body`, получает значение `data-color` той кнопки, по которой щелкнули.

Значение свойства у конкретного элемента можно также получить вызовом `getComputedStyle(element).getPropertyValue("--variable")`. Это удобно, если логика должна реагировать на каскадное значение.

:material-information-outline: Источник &mdash; [Custom properties](https://web.dev/learn/css/custom-properties)
