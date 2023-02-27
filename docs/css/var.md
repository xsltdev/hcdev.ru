---
description: Функцию var() можно использовать для вставки значения пользовательского свойства (иногда называемого «переменной CSS») вместо любой части значения другого свойства
---

# var()

Функцию **`var()`** можно использовать для вставки значения пользовательского свойства (иногда называемого «переменной CSS») вместо любой части значения другого свойства.

## Демо

<iframe class="interactive is-default-height" height="200" src="https://interactive-examples.mdn.mozilla.net/pages/css/var.html" title="MDN Web Docs Interactive Example" loading="lazy" data-readystate="complete"></iframe>

Функцию `var()` нельзя использовать в именах свойств, селекторах или где-либо еще, кроме значений свойств. Это обычно приводит к недопустимому синтаксису или значению, значение которого не связано с переменной.

## Спецификация

- [CSS Custom Properties for Cascading Variables Module Level 1](https://w3c.github.io/csswg-drafts/css-variables/#using-variables)

## Пример

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```
