---
description: Осуществляйте более творческий контроль над своими изображениями.
---

# Элемент picture

[В предыдущем модуле](responsive-images.md) было показано, как атрибут `srcset` позволяет предоставлять разные по размеру версии одного и того же изображения. Браузер может сам решить, какую версию использовать. Если вы хотите полностью изменить изображение, то вам понадобится элемент [`picture`](../../html/picture.md).

Подобно тому, как `srcset` строится на основе атрибута `src`, элемент `picture` строится на основе элемента `img`. Элемент `picture` оборачивается вокруг элемента `img`.

```html
<picture>
    <img
        src="image.jpg"
        alt="A description of the image."
    />
</picture>
```

Если внутри элемента `picture` нет вложенного элемента `img`, то элемент `picture` не будет работать.

Как и атрибут `srcset`, элемент `picture` будет обновлять значение атрибута `src` в этом элементе `img`. Разница заключается в том, что если атрибут `srcset` выдает браузеру предложения, то элемент `picture` отдает команды. Это дает вам возможность управлять.

## `source`

Внутри элемента `picture` можно указать несколько элементов `source`, каждый из которых имеет свой атрибут `srcset`. Браузер выполняет первый из них.

## Форматы изображений

В данном примере имеется три различных изображения в трех различных форматах:

```html
<picture>
    <source srcset="image.avif" type="image/avif" />
    <source srcset="image.webp" type="image/webp" />
    <img
        src="image.jpg"
        alt="A description of the image."
        width="300"
        height="200"
        loading="lazy"
        decoding="async"
    />
</picture>
```

Первый элемент `source` указывает на изображение в [новом формате AVIF](https://web.dev/articles/compress-images-avif). Если браузер способен воспроизводить изображения в формате AVIF, то он выбирает именно этот файл. В противном случае он переходит к следующему элементу `source`.

Второй элемент `source` указывает на изображение в [формате WebP](https://web.dev/articles/serve-images-webp). Если браузер способен отображать WebP-изображения, то он использует этот файл.

В противном случае браузер вернется к файлу изображения, указанному в атрибуте `src` элемента `img`. Это изображение представляет собой JPEG.

Это означает, что вы можете начать использовать новые форматы изображений без ущерба для обратной совместимости.

В этом примере атрибут `type` сообщает браузеру, какой формат изображения указан.

## Размеры изображения

Помимо переключения между форматами изображений, можно переключаться между их размерами. С помощью атрибута `media` можно указать браузеру, какой ширины изображение будет отображаться. Поместите медиазапрос внутрь атрибута `media`.

```html
<picture>
    <source srcset="large.png" media="(min-width: 75em)" />
    <source srcset="medium.png" media="(min-width: 40em)" />
    <img
        src="small.png"
        alt="A description of the image."
        width="300"
        height="200"
        loading="lazy"
        decoding="async"
    />
</picture>
```

Здесь вы указываете браузеру, что если ширина области просмотра больше `75em`, то он должен использовать большое изображение. В диапазоне от `40em` до `75em` браузер должен использовать среднее изображение. Ниже `40em` браузер должен использовать маленькое изображение.

<video controls loop>
<source src="/learn/design/picture-element-1.mp4" />
</video>

Это отличается от использования атрибутов `srcset` и `sizes` на элементе `img`. В этом случае вы предоставляете браузеру предложения. Элемент `source` больше похож на команду, чем на предложение.

Дескриптор плотности пикселей можно также использовать внутри атрибута `srcset` элемента `source`.

```html
<picture>
    <source
        srcset="large.png 1x"
        media="(min-width: 75em)"
    />
    <source
        srcset="medium.png 1x, large.png 2x"
        media="(min-width: 40em)"
    />
    <img
        src="small.png"
        alt="A description of the image."
        width="300"
        height="200"
        loading="lazy"
        decoding="async"
        srcset="small.png 1x, medium.png 2x, large.png 3x"
    />
</picture>
```

В этом примере вы по-прежнему указываете браузеру, что делать в разных точках останова, но теперь у браузера есть возможность выбрать наиболее подходящее изображение с учетом плотности пикселей устройства.

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PoJYrNB?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen PoJYrNB by web-dot-dev on Codepen"></iframe>

## Обрезка

Если вам нужно только предоставить разные по размеру версии одного и того же изображения, то лучшим вариантом будет `srcset`. Но если изображение не очень хорошо смотрится при меньших размерах, можно попробовать сделать его обрезанную версию.

Различные изображения могут иметь разное соотношение ширины и высоты, чтобы лучше соответствовать контексту. Например, для мобильного браузера лучше использовать узкую и высокую обрезку, а для настольного браузера - широкую и короткую.

Вот пример изображения-героя, которое меняет свое содержимое и форму в зависимости от ширины области просмотра. Добавьте атрибуты `width` и `height` к каждому элементу `source`.

```html
<picture>
    <source
        srcset="full.jpg"
        media="(min-width: 75em)"
        width="1200"
        height="500"
    />
    <source
        srcset="regular.jpg"
        media="(min-width: 50em)"
        width="800"
        height="400"
    />
    <img
        src="cropped.jpg"
        alt="A description of the image."
        width="400"
        height="400"
        loading="eager"
        decoding="sync"
    />
</picture>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/eYGOwzp?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" data-title="Pen eYGOwzp by web-dot-dev on Codepen"></iframe>

<video controls loop>
<source src="/learn/design/picture-element-2.mp4" />
</video>

Помните, что нельзя изменять атрибут `alt` в зависимости от источника изображения. Необходимо написать атрибут `alt`, описывающий как полноразмерное, так и обрезанное изображение.

Скорее всего, для большинства адаптивных изображений вам не понадобится использовать элемент `picture` - атрибуты `srcset` и `sizes` элемента `img` покрывают многие случаи использования. Но в тех случаях, когда требуется более тонкий контроль, элемент `picture` является мощным инструментом.

Есть один вид изображений, для которого может не понадобиться ни одно из решений: [иконки](icons.md).
