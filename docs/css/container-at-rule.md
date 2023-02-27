---
description: Правило @container CSS — это правило условной группы, которое применяет стили к контексту включения. Объявления стилей фильтруются по условию и применяются к контейнеру, если условие истинно. Условие оценивается, когда контейнер меняет размер.
---

# @container

Правило **`@container`** — это правило условной группы, которое применяет стили к контексту включения. Объявления стилей фильтруются по условию и применяются к контейнеру, если условие истинно. Условие оценивается, когда контейнер меняет размер.

Может быть предоставлено необязательное [`container-name`](container-name.md) с учетом регистра, которое отфильтровывает набор контейнеров запросов, рассматриваемых только как те, у которых есть совпадающее имя контейнера запросов. После того, как подходящий контейнер запроса выбран для элемента, каждая функция контейнера в `<container-condition>` оценивается по сравнению с этим контейнером запроса.

??? info "Изображения, фильтры, композиция"

    <div class="col3" markdown="1">

    - [image-orientation](image-orientation.md)
    - [image-rendering](image-rendering.md)
    - [image-resolution](image-resolution.md)
    - [object-fit](object-fit.md)
    - [object-position](object-position.md)

    </div>

    <div class="col3" markdown="1">

    - [linear-gradient()](linear-gradient.md)
    - [radial-gradient()](radial-gradient.md)
    - [repeating-linear-gradient()](repeating-linear-gradient.md)
    - [repeating-radial-gradient()](repeating-radial-gradient.md)
    - [conic-gradient()](conic-gradient.md)
    - [repeating-conic-gradient()](repeating-conic-gradient.md)
    - [url()](url.md)
    - [element()](element.md)
    - [image()](image.md)
    - [cross-fade()](cross-fade.md)

    </div>

    <div class="col3" markdown="1">

    - [backdrop-filter](backdrop-filter.md)
    - [filter](filter.md)

    </div>

    <div class="col3" markdown="1">

    - [background-blend-mode](background-blend-mode.md)
    - [isolation](isolation.md)
    - [mix-blend-mode](mix-blend-mode.md)

    </div>

    <div class="col3" markdown="1">

    - [contain](contain.md)
    - [contain-intrinsic-block-size](contain-intrinsic-block-size.md)
    - [contain-intrinsic-height](contain-intrinsic-height.md)
    - [contain-intrinsic-inline-size](contain-intrinsic-inline-size.md)
    - [contain-intrinsic-size](contain-intrinsic-size.md)
    - [contain-intrinsic-width](contain-intrinsic-width.md)
    - [container](container.md)
    - [container-name](container-name.md)
    - [container-type](container-type.md)
    - **@container**
    - [content-visibility](content-visibility.md)

    </div>

## Синтаксис

```css
@container <container-condition> {
  /* <stylesheet> */
}
```

## Значения

`<container-condition>`
: Набор функций, которые оцениваются относительно контейнера запроса при изменении размера контейнера. Стили, определенные в `<stylesheet>`, применяются, если условие истинно.

`<stylesheet>`
: Набор объявлений CSS.

### Логические ключевые слова

Логические ключевые слова можно использовать для определения состояния контейнера:

- `and` - сочетает в себе два или более условий.
- `or` - сочетает в себе два или более условий.
- `not` - отрицает условие. Для каждого запроса контейнера допускается только одно условие «не», которое нельзя использовать с ключевыми словами `and` или `or`.

```css
@container not (width < 400px) {
  /* <stylesheet> */
}

@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) not (height > 400px) {
  /* <stylesheet> */
}
```

### Именованные контексты изоляции

Контекст включения может быть назван с помощью свойства `container-name`.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

В контейнерных запросах свойство `container-name` используется для фильтрации набора контейнеров до контейнеров с совпадающим именем контейнера запроса:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

### Дескрипторы

В условии контейнера можно использовать следующие дескрипторы:

`aspect-ratio`
: Соотношение сторон контейнера, рассчитанное как отношение ширины к высоте контейнера, выраженное как значение `<ratio>`.

`block-size`
: Размер блока контейнера, выраженный в виде значения `<length>`.

`height`
: Высота контейнера, выраженная как значение `<length>`.

`inline-size`
: Инлайновый размер контейнера, выраженный в виде значения `<length>`.

`orientation`
: Ориентация контейнера: `landscape` или `portrait`.

`width`
: Ширина контейнера, выраженная в виде значения `<length>`.

## Спецификация

- [CSS Containment Module Level 3](https://w3c.github.io/csswg-drafts/css-contain-3/#container-rule)
