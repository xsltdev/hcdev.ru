---
description: Свойство CSS container-name указывает список имен контейнеров запроса, используемых правилом @container в запросе контейнера
---

# container-name

Свойство **`container-name`** указывает список имен контейнеров запроса, используемых правилом [`@container`](container-at-rule.md) в запросе контейнера.

Запрос контейнера будет применять стили к элементам на основе размера ближайшего предка с контекстом включения. Когда вмещающему контексту дается имя, он может быть специально нацелен с помощью правила `@container` вместо ближайшего предка с вмещающим элементом.

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
    - **container-name**
    - [container-type](container-type.md)
    - [@container](container-at-rule.md)
    - [content-visibility](content-visibility.md)

    </div>

## Синтаксис

```css
container-name: <container-name>;
```

## Спецификация

- [CSS Containment Module Level 3](https://w3c.github.io/csswg-drafts/css-contain-3/#container-name)

## Примеры

### Пример 1

Учитывая следующий пример HTML, который представляет собой компонент карты с заголовком и некоторым текстом:

```html
<div class="card">
  <div class="post-meta">
    <h2>Card title</h2>
    <p>My post details.</p>
  </div>
  <div class="post-excerpt">
    <p>
      A preview of my
      <a href="https://example.com">blog post</a> about
      cats.
    </p>
  </div>
</div>
```

Чтобы создать контекст включения, добавьте свойство `container-type` к элементу в CSS. В следующем примере создаются два контекста включения: один для метаинформации карты и один для выдержки из поста:

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

При написании запроса контейнера с помощью at-правила `@container` стили будут применяться к элементам контейнера, когда запрос будет оценен как `true`. В следующем примере есть два контейнерных запроса, один из которых будет применяться только к содержимому элемента `.post-excerpt`, а другой — к содержимому как `.post-meta`, так и `.post-excerpt`:

```css
@container excerpt (min-width: 400px) {
  p {
    visibility: hidden;
  }
}

@container (min-width: 400px) {
  p {
    font-size: 2rem;
  }
}
```

### Пример 2

Вы также можете указать несколько имен для контекста контейнера, разделенных пробелом:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Это позволит вам нацеливаться на контейнер, используя любое имя в правиле `@container`. Это полезно, если вы хотите настроить таргетинг на один и тот же контейнер с несколькими запросами контейнера, где любое условие может быть истинным:

```css
@container meta (max-width: 500px) {
  p {
    visibility: hidden;
  }
}

@container nav (max-height: 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```
