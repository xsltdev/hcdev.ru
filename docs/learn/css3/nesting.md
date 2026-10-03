---
description: Вложенность правил CSS делает таблицы стилей более организованными, удобными для чтения и простыми в сопровождении.
icon: material/code-braces
---

# Вложенность

<big>**Вложенность** правил CSS делает таблицы стилей более организованными, удобными для чтения и простыми в сопровождении.</big>

<iframe src="https://web.dev/frame/learn/css/nesting/index_270a955afb1fd49c4a178f60ff3720951297f7df0614628d70d6946718ce5d07.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Обзор

Теперь, когда вы изучили [селекторы](selectors.md), наверняка хочется удобнее организовать их в таблицах стилей. Представьте, что стили задаются элементам внутри раздела «feature» на сайте. С помощью вложенности эти стили можно сгруппировать внутри правила `.feature`:

```css
.feature {
  button {
    color: blue;
  }

  .link {
    color: red;
  }

  .text {
    font-size: 1.3em;
  }
}
```

Это то же самое, что записать каждый стиль отдельно:

```css
.feature button {
  color: blue;
}

.feature .link {
   color: red;
}

.feature .text {
   font-size: 1.3em;
}
```

Вложенность может быть сколь угодно глубокой.

```css
.feature {
  .heading {
    color: blue;

    a {
      color: green;
    }
  }
}
```

!!!note ""

    Число уровней вложенности стилей не ограничено, но слишком глубокая вложенность считается плохой практикой и усложняет сопровождение CSS. Если вложенность уходит глубже двух-трех уровней, подумайте, можно ли перестроить стили.

## Группировка и задание связей

Вложенность позволяет компактнее группировать правила и задавать связи между ними.

По умолчанию вложенное правило связано с внешним через [комбинатор потомка](selectors.md#descendant_combinator). Чтобы изменить эту связь, добавьте селекторы к вложенным правилам.

```css
/* выбирает заголовки, которые являются соседями элемента .feature и стоят сразу после него */
.feature {
  + .heading {
    color: blue;
  }

/* выбирает все абзацы, которые являются прямыми потомками элемента .feature */
  > p {
    font-size: 1.3em;
  }
}
```

## Явные связи с селектором `&`

Селектор `&` позволяет точнее указать связь при вложенности правил. Считайте `&` обозначением родительского селектора.

```css
.feature {
 & button {
    color: blue;
  }
}
```

Это равносильно такой записи стилей:

```css
.feature button {
  color: blue;
}
```

## Когда `&` обязателен

Без `&` вложенные селекторы становятся селекторами потомков родительского селектора. Чтобы собрать [составные селекторы](selectors.md#compound_selectors), `&` **обязателен**.

```css
.feature {
  &:last-child {
    /* Выбирает элемент .feature, который является :last-child; эквивалентно .feature:last-child */
  }
   
  & :last-child {
    /* Выбирает :last-child внутри элемента .feature; эквивалентно .feature :last-child */
  }

  &.highlight {
    /* Выбирает элементы .feature, у которых также есть класс .highlight; эквивалентно .feature.highlight */
  }

  & .highlight {
     /* Выбирает элементы с классом .highlight внутри элемента .feature; эквивалентно .feature .highlight */
  }
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/ByorvWK?height=400&theme-id=light&default-tab=css%2Cresult&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Контекст можно сменить и поставить селектор `&` в конец дочернего селектора или по обе стороны от него.

```css
/* Выбирает кнопки, рядом с которыми сразу стоит соседняя кнопка */
button {
  & + & {
    /* … */
  }
}
```

```css
img {
  .my-component & {
    /* стили для изображений внутри `.my-component` ... */
  }
}
```

В последнем примере стили задаются изображениям внутри элемента с классом `.my-component`. Это удобно в проекте, где элементу нельзя добавить `class` или `id`.

## Вложенность и специфичность

Как и [`:is()`](pseudo-classes.md#is), селектор вложенности берет специфичность самого специфичного селектора из списка селекторов родителя.

```css
#main-header,
.intro {
  & a {
    color: green;
  }
}

.intro a {
  color: blue;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/MYaVZmr?height=400&theme-id=light&default-tab=css%2Cresult&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Первое правило выбирает все ссылки внутри элементов `#main-header` и `.intro` и задает им зеленый цвет.

Второе правило пытается переопределить это и сделать ссылки внутри элемента `.intro` синими.

Почему это не срабатывает, видно, если посмотреть на специфичность каждого правила.

```css
/* эквивалентно :is(#main-header, .intro) a со специфичностью (1, 0, 1) */
#main-header,
.intro {
  & a {
    color: green;
  }
}

/* более низкая специфичность (0, 1, 1) */
.intro a {
  color: blue;
}
```

Поскольку в списке селекторов первого правила есть `id`, а вложенные правила берут специфичность самого специфичного селектора, его специфичность выше, чем у второго правила. Ссылки остаются зелеными даже у элементов `a`, которые не находятся внутри элемента с селектором `#main-header`.

## Недопустимая вложенность

Как и `:is()`, селектор вложенности не может представлять псевдоэлементы.

```css
blockquote, blockquote::before, blockquote::after {
  color: navy;

  & {
    border: 1px solid navy;
  }
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/VYvXqbJ?height=400&theme-id=light&default-tab=css%2Cresult&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Казалось бы, и у `blockquote`, и у его псевдоэлементов текст и рамки должны быть цвета `navy`, но это не так. Селектор `&` не может представлять псевдоэлементы, поэтому вложенные стили рамки применятся только к самому `blockquote`.

Когда составной селектор собирается из `&` и селектора типа, селектор типа должен стоять первым, без пробела между ними.

```css
/* допустимая вложенность CSS */
.feature {
  p& {
    font-weight: bold;
  }
}

/* недопустимая вложенность CSS */
.feature {
  &p {
    font-weight: bold;
  }
}
```

Это правило позволяет вложенности CSS работать рядом с препроцессорами вроде Sass. В Sass запись `&p` дописывает родительский селектор к вложенному селектору типа, и получается `.featurep`.

<iframe src="https://codepen.io/web-dot-dev/embed/XJmEogY?height=400&theme-id=light&default-tab=css%2Cresult&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## Вложенность at-правил

Условные групповые правила CSS, такие как `@container`, `@media`, `@supports` и `@layer`, тоже можно вкладывать.

```css
.feature {
  @media (min-width: 40em) {
    /* ... */
  }

  @container (inline-size > 900px) {
    /* ... */
  }
}

.feature {
  @supports (display: grid) {
    /* ... */
  }
}

.feature {
  @layer component {
    h2 {
      /* ... */
    }
  }
}
```

:material-information-outline: Источник &mdash; [Nesting](https://web.dev/learn/css/nesting)
