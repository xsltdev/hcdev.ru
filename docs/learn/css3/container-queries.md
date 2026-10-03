---
description: В отличие от медиазапросов, контейнерные запросы позволяют точнее подстраивать элементы под размер и состояние их предков, то есть контейнеров.
icon: material/resize
---

# Контейнерные запросы

<big>В отличие от медиазапросов, **контейнерные запросы** позволяют точнее подстраивать элементы под размер и состояние их предков, то есть контейнеров.</big>

С помощью [медиазапросов](https://web.dev/learn/design/media-queries) можно подстраивать макеты под размер области просмотра или тип устройства. [Контейнерные запросы](https://developer.mozilla.org/docs/Web/CSS/CSS_containment/Container_queries) позволяют точнее подстраивать элементы под размер и состояние их предков, то есть контейнеров.

<iframe src="https://web.dev/frame/learn/css/container-queries/index_d4944f7b8a2fa9281042fbdeabb8d4d974b3486dcc2af5bd8a3d0c32d0c56356.frame" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Представьте форму подписки на рассылку, которую нужно использовать в нескольких контекстах на сайте. На странице регистрации она может занимать всю ширину страницы, а на странице с другим содержимым — вставать в колонку рядом с ним.

<iframe src="https://codepen.io/web-dot-dev/embed/VYvXOve?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Как показано в этом примере, контейнерные запросы позволяют менять такие свойства, как `font-size`, `padding` и макет элемента, опираясь на характеристики ближайшего контейнера и не завися от размера области просмотра.

## Настройка контейнерного запроса

В отличие от медиазапросов, контейнерный запрос задается из двух частей:

1. Определите контейнер.
2. Напишите стили дочернего элемента, которые применятся, когда родительский контейнер соответствует условиям запроса.

### Определение контейнера

Контейнер можно определить свойством `container-type`.

```css
.my-container-element {
  container-type: inline-size;
}
```

Значение `inline-size` у `container-type` позволяет запрашивать [inline-ось](logical-properties.md#inline_flow) контейнера.

Чтобы запрашивать обе оси, `inline` и `block`, используйте `container-type: size`.

```css
main,
.my-component {
  container-type: size;
}
```

Оба значения `container-type` включают разные виды ограничения размера. Ограничение `inline-size` не дает потомкам элемента влиять на его inline-размер.

Элемент с ограничением `size` не дает потомкам влиять на его размер ни по оси block, ни по оси inline.

В этом примере видно, что ограничение размера влияет на элемент, к которому оно применено.

<iframe src="https://codepen.io/web-dot-dev/embed/bNVvyVY?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

Размер контейнера не зависит от размера его потомков (элемента `<p>`), поэтому контейнер схлопнется, если не задать ему явный размер: указать измерения (то есть `inline-size`, `block-size`, `aspect-ratio`) или поместить его в макет с явно заданным размером.

<iframe src="https://codepen.io/web-dot-dev/embed/MYaVdaP?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

### Условия контейнерного запроса

Когда контейнер задан, можно добавить условие в круглых скобках. Стили внутри контейнерного запроса применятся, только если оно истинно. У запросов размера контейнера, которые опираются на размеры элементов-предков, условие состоит из следующего:

- признак размера: `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` или `orientation`;
- оператор сравнения (то есть `>`, `<`, `=`, `>=`);
- значение длины.

```css
.my-container-element {
  container-type: inline-size;
}

@container (inline-size > 30em) {
  .my-child-element {
    /* стили, которые применяются, когда .my-container-element шире 30em */
  }
}
```

Условия по признаку размера можно записать и через двоеточие с одним проверяемым значением.

```css
@container (orientation: landscape) {
  /*...*/
}

@container (min-width: 300px) {
  /*...*/
}
```

Несколько условий можно объединить ключевыми словами `and` и `or` или связать цепочкой операторов.

```css
@container (inline-size > 40em) and (orientation: landscape)  {
  /*...*/
}

@container (height > 25vh) or (orientation: portrait) {
  /*...*/
}

@container ( 10em <= width <= 500px) {
  /*...*/
}
```

## Именование контейнеров

Чтобы обратиться к конкретному контейнеру, даже если это не ближайший предок, дайте контейнеру имя свойством `container-name`. Затем укажите это имя перед условиями запроса.

```css
.sidebar {
  container-name: main-sidebar;
  container-type: inline-size;
}

@container main-sidebar (inline-size > 20em)  {
  .button-group {
    display: flex;
    padding-inline: 1.25em;
  }
}
```

Именованный контейнер по-прежнему должен быть предком стилизуемых элементов.

## Краткая запись со свойством `container`

Свойство `container` позволяет одной краткой записью и определить контейнер, и указать его тип.

```css
.sidebar {
  container: main-sidebar / inline-size;
}
```

Имя контейнера стоит до косой черты, тип контейнера — после.

## Единицы контейнерных запросов

Внутри контейнеров доступны также [относительные единицы длины](sizing.md#container-relative_units) контейнера. Это дает больше гибкости компонентам, которые могут оказываться в разных контейнерах: относительные длины подстраиваются под размеры контейнера.

Здесь единица длины контейнера `cqi` (1% inline-размера контейнера запроса) задает padding кнопки.

```css
.container {
  container: button-container / inline-size;
}

.one {
  inline-size: 30vw;
}

.two {
  inline-size: 50vw;
}

button {
  padding: 2cqi 5cqi;
}
```

<iframe src="https://codepen.io/web-dot-dev/embed/LEpdoNV?height=250&theme-id=light&default-tab=result&editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

У обеих кнопок одни и те же относительные единицы, но единицы считаются от размера контейнера, поэтому у второй кнопки padding больше: ее контейнер крупнее.

## Вложенность контейнерных запросов

Контейнерные запросы можно вкладывать внутрь селекторов.

```css
.my-element {
  display: grid;
  padding: 1em 2em;

  @container my-container (min-inline-size: 22em) {
    /* стили, которые применяются, когда контейнер элемента шире 22em */
  }
}

/* эквивалентно */
.my-element {
  display: grid;
  padding: 1em 2em;
}

@container my-container (min-inline-size: 22em) {
  .my-element {
     /* стили, которые применяются, когда элемент шире 22em */
  }
}
```

Их можно вкладывать и в другие контейнерные запросы, и в at-правила.

```css
@container my-container (min-inline-size: 22em) {
  .my-element {
      /* стили, которые применяются, когда элемент шире 22em */
  }
}
```

```css
@layer base {
  @container my-container (min-inline-size: 22em) {
    .my-element {
    /* стили, которые нужно применить */
    }
  }
}
```

:material-information-outline: Источник &mdash; [Container queries](https://web.dev/learn/css/container-queries)
