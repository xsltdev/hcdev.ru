---
description: Правило @font-palette-values ​​позволяет настроить значения по умолчанию для палитры шрифтов, созданной создателем шрифта
---

# font-palette-values

Правило **`@font-palette-values`** ​​позволяет настроить значения по умолчанию для палитры шрифтов, созданной создателем шрифта.

## Синтаксис

```css
@font-palette-values --identifier {
    font-family: Bixa;
}
.my-class {
    font-palette: --identifier;
}
```

`<dashed-ident>` — это определяемый пользователем идентификатор, который, хотя и выглядит как пользовательское свойство CSS, ведет себя по-другому и не заключен в функцию CSS [`var()`](var.md).

### Дескрипторы

`font-family`

: Задает имя семейства шрифтов, к которому можно применить эту палитру.

`base-palette`

: Задает имя или индекс базовой палитры, созданной создателем шрифта для использования.

`override-colors`

: Задает цвета в базовой палитре для переопределения.

## Спецификация

-   [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts/#at-ruledef-font-palette-values)

## Пример

В этом примере показано, как можно изменить некоторые или все цвета цветного шрифта.

HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
p {
    font-family: 'Bungee Spice';
    font-size: 2rem;
}
@font-palette-values --Alternate {
    font-family: 'Bungee Spice';
    override-colors:
        0 #00ffbb,
        1 #007744;
}
.alternate {
    font-palette: --Alternate;
}
```

Результат:

<iframe class="sample-code-frame" title="Overriding colors in an existing palette sample" id="frame_overriding_colors_in_an_existing_palette" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/@font-palette-values/_sample_.overriding_colors_in_an_existing_palette.html" loading="lazy"></iframe>
