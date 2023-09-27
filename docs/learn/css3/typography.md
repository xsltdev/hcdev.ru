---
description: В этом модуле вы узнаете, как стилизовать текст в Интернете.
icon: material/text-box-outline
---

# Текст и типографика

<big>В этом модуле вы узнаете, как стилизовать текст в Интернете.</big>

!!!info "CSS подкаст"

    036: Текст и типографика

    === "Английский оригинал"

    	<audio style="width: 100%;" controls src="https://traffic.libsyn.com/secure/thecsspodcast/TCP036_v2.mp3?dest-id=1891556"></audio>

Текст - один из основных элементов веб-страниц.

При создании сайта не обязательно придавать тексту стиль: в HTML по умолчанию заложены вполне приемлемые стили.

Однако текст, скорее всего, будет составлять большую часть сайта, поэтому стоит придать ему некоторый стиль. Изменив несколько основных свойств, можно значительно улучшить восприятие текста пользователями!

<iframe src="https://codepen.io/web-dot-dev/embed/WNEJWGy?height=590&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 600px; width: 100%; border: 0;" loading="lazy"></iframe>

В этом модуле мы сначала рассмотрим некоторые фундаментальные свойства шрифтов CSS, такие как `font-family`, `font-style`, `font-weight` и `font-size`. Затем мы рассмотрим свойства, влияющие на абзацы текста, такие как `text-indent` и `word-spacing`. В завершение модуля мы рассмотрим некоторые более сложные темы, такие как переменные шрифты и псевдоэлементы.

## Изменение шрифта {#font-family}

Используйте свойство [`font-family`](../../css/font-family.md) для изменения начертания шрифта в тексте.

Свойство `font-family` принимает список строк, разделенных запятыми, относящихся либо к _конкретным_, либо к _общим_ семействам шрифтов. Конкретные семейства шрифтов - это строки, заключенные в кавычки, такие как "Helvetica", "EB Garamond" или "Times New Roman". Общими семействами шрифтов являются ключевые слова `serif`, `sans-serif` и `monospace` ([полный список вариантов](../../css/font-family.md#значения)). Браузер отобразит первый доступный шрифт из представленного списка.

!!!note ""

    Когда браузер выбирает шрифт для отображения на основе объявления `font-family`, он не останавливается на первом доступном шрифте в списке. Вместо этого он выбирает шрифты по одному символу. Если определенный символ не доступен в первом шрифте списка, он переходит к следующему, и так далее.

При использовании `font-family` необходимо указать хотя бы одно общее семейство шрифтов на тот случай, если в браузере пользователя не установлены предпочитаемые шрифты. Как правило, резервное семейство шрифтов должно быть аналогично предпочитаемым шрифтам: если используется `font-family: "Helvetica"` (семейство шрифтов sans-serif), запасным должно быть `sans-serif`, чтобы соответствовать.

<iframe src="https://codepen.io/web-dot-dev/embed/yLojraG?height=470&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Использование курсивных и наклонных шрифтов {#font-style}

С помощью [`font-style`](../../css/font-style.md) можно установить, должен ли текст быть курсивным или нет. `font-style` принимает одно из следующих ключевых слов: `normal`, `italic` и `oblique`.

!!!tip "В чем разница между `italic` и `oblique`?"

    В шрифтах, которые их поддерживают, `font-style: italic` обычно представляет собой курсивную версию обычного шрифта. А `font-style: oblique` отображает наклонную версию обычного шрифта.

<iframe src="https://codepen.io/web-dot-dev/embed/MWvGRjx?height=280&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Сделать текст жирным {#font-weight}

Для установки "жирности" текста используйте свойство [`font-weight`](../../css/font-weight.md). Это свойство принимает значения ключевых слов (`normal`, `bold`), относительные значения ключевых слов (`lighter`, `bolder`) и числовые значения (от `100` до `900`).

Ключевые слова `normal` и `bold` эквивалентны числовым значениям `400` и `700` соответственно.

Ключевые слова `lighter` и `bolder` вычисляются относительно родительского элемента. Удобную схему, показывающую, как определяется это значение, см. в MDN [Meaning of Relative Weights](https://developer.mozilla.org/docs/Web/CSS/font-weight#meaning_of_relative_weights).

!!!note ""

    Большинство шрифтов, особенно ["web-safe"](#font-family), поддерживают только веса `400` (`normal`) и `700` (`bold`). При импорте шрифтов с помощью `@font-face` или `@import` можно выбрать конкретные веса, которые необходимо подтянуть. Однако непеременные шрифты поддерживают числовые значения `font-weight` только в сотых долях, например, `100`, `200`, `300` и т.д. Если вы хотите использовать `font-weight: 321` (например), то вам придется использовать [Переменный шрифт](#variable-fonts).

<iframe src="https://codepen.io/web-dot-dev/embed/gOxKxNz?height=580&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 600px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение размера текста {#font-size}

Для управления размером текстовых элементов используйте свойство [`font-size`](../../css/font-size.md). Это свойство принимает значения длины, процентов и несколько значений ключевых слов.

Кроме значений длины и процентов, `font-size` принимает некоторые _абсолютные_ значения ключевых слов (`xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`) и несколько _относительных_ значений ключевых слов (`smaller`, `larger`). Относительные значения относятся к размеру `font-size` родительского элемента.

!!!tip "В чем разница между `em` и `rem`?"

    В CSS `em` представляет собой `размер шрифта`, унаследованный от родительского элемента. Например, `font-size: 2em` эквивалентен `font-size` родительского элемента, умноженному на два. `rem` аналогично, но вместо этого представляет `размер шрифта`, унаследованный от _корневого элемента_, т.е. `<html>`.

<iframe src="https://codepen.io/web-dot-dev/embed/eYEroda?height=370&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

---

<iframe src="https://codepen.io/web-dot-dev/embed/vYJzYzw?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение расстояния между строками {#line-height}

Используйте свойство [`line-height`](../../css/line-height.md) для указания высоты каждой строки в элементе. Это свойство может принимать значения: число, длина, процент или ключевое слово `normal`. Обычно рекомендуется использовать число, а не длину или процент, чтобы избежать проблем с наследованием.

<iframe src="https://codepen.io/web-dot-dev/embed/XWaqQjv?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 600px; width: 100%; border: 0;" loading="lazy"></iframe>

---

<iframe src="https://codepen.io/web-dot-dev/embed/ExvLJNx?height=820&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 850px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение расстояния между символами

Используйте свойство [`letter-spacing`](../../css/letter-spacing.md) для управления величиной горизонтального пробела между символами в тексте. Это свойство принимает такие значения длины, как `em`, `px` и `rem`.

Обратите внимание, что указанное значение _увеличивает_ естественное пространство между символами. В демонстрационном примере ниже попробуйте выделить отдельную букву, чтобы увидеть размер ее поля и то, как он меняется при изменении `letter-spacing`.

<iframe src="https://codepen.io/web-dot-dev/embed/abyGxBz?height=560&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 600px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение пробела между словами

Используйте свойство [`word-spacing`](../../css/word-spacing.md) для увеличения или уменьшения длины пробела между каждым словом в тексте. Это свойство принимает такие значения длины, как `em`, `px` и `rem`. Обратите внимание, что указанная длина относится к _дополнительному_ пробелу в дополнение к обычному интервалу. Это означает, что `word-spacing: 0` эквивалентно `word-spacing: normal`.

<iframe src="https://codepen.io/web-dot-dev/embed/xxLjeRG?height=280&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Сокращенное свойство `font`

С помощью свойства [`font`](../../css/font.md) можно задать сразу несколько свойств, связанных со шрифтом. В список возможных свойств входят [`font-family`](#font-family), [`font-size`](#font-size), [`font-stretch`](../../css/font-stretch. md), [`font-style`](#font-style), [`font-variant`](#font-variant), [`font-weight`](#font-weight) и [`line-height`](#line-height).

О том, как упорядочить эти свойства, читайте в [`font`](../../css/font.md#синтаксис).

<iframe src="https://codepen.io/web-dot-dev/embed/JjyvVbY?height=270&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение регистра текста

Используйте свойство [`text-transform`](../../css/text-transform.md) для изменения заглавной буквы текста без необходимости изменения основного HTML. Это свойство принимает следующие значения ключевых слов: `uppercase`, `lowercase` и `capitalize`.

<iframe src="https://codepen.io/web-dot-dev/embed/qBXYwqb?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Добавление подчеркиваний, надстрочных и сквозных линий в текст

Используйте [`text-decoration`](../../css/text-decoration.md) для добавления линий в текст. Чаще всего используются подчеркивания, но можно добавлять линии над текстом или прямо через него!

Свойство `text-decoration` является сокращением для более специфических свойств, описанных ниже.

Свойство [`text-decoration-line`](../../css/text-decoration-line.md) принимает ключевые слова `underline`, `overline` и `line-through`. Можно также указать несколько ключевых слов для нескольких строк.

<iframe src="https://codepen.io/web-dot-dev/embed/LYjmvbN?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойство [`text-decoration-color`](../../css/text-decoration-color.md) задает цвет всех украшений из `text-decoration-line`.

<iframe src="https://codepen.io/web-dot-dev/embed/oNedOYL?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойство [`text-decoration-style`](../../css/text-decoration-style.md) принимает ключевые слова `solid`, `double`, `dotted`, `dashed` и `wavy`.

<iframe src="https://codepen.io/web-dot-dev/embed/dyzeLOp?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойство [`text-decoration-thickness`](../../css/text-decoration-thickness.md) принимает любые значения длины и устанавливает ширину обводки всех декоративных элементов из `text-decoration-line`.

<iframe src="https://codepen.io/web-dot-dev/embed/VwzxNmm?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Свойство `text-decoration` является сокращением для всех вышеперечисленных свойств.

<iframe src="https://codepen.io/web-dot-dev/embed/YzxLMpN?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

!!!note ""

    Используйте [`text-underline-position`](../../css/text-underline-position.md) для смещения подчеркивания `text-decoration: underline` на указанную величину. Это свойство не работает для `overline` или `line-through`.

## Добавление отступа к тексту

Для добавления отступа к текстовым блокам используйте свойство [`text-indent`](../../css/text-indent.md). Это свойство принимает либо длину (например, `10px`, `2em`), либо процент от ширины содержащегося блока.

<iframe src="https://codepen.io/web-dot-dev/embed/RwZyOoV?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" loading="lazy"></iframe>

## Работа с переполненным или скрытым содержимым

Используйте [`text-overflow`](../../css/text-overflow.md) для указания способа представления скрытого содержимого. Есть два варианта: `clip` (по умолчанию), который обрезает текст в месте переполнения, и `ellipsis`, который отображает многоточие (`…`) в месте переполнения.

<iframe src="https://codepen.io/web-dot-dev/embed/GRvdLNv?height=250&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Управление пробелами

Свойство [`white-space`](../../css/white-space.md) используется для указания того, как следует обрабатывать пробельные символы в элементе.

<iframe src="https://codepen.io/web-dot-dev/embed/PoKegbO?height=970&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 1000px; width: 100%; border: 0;" loading="lazy"></iframe>

`white-space: pre` может быть полезен для отображения [ASCII art](https://ru.wikipedia.org/wiki/ASCII-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0) или тщательно вырезанных блоков кода.

<iframe src="https://codepen.io/web-dot-dev/embed/OJjZGbz?height=440&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 450px; width: 100%; border: 0;" loading="lazy"></iframe>

## Управление разбиением слов

Используйте [`word-break`](../../css/word-break.md), чтобы изменить способ "разбиения" слов, когда они выходят за границы строки. По умолчанию браузер не разбивает слова. Использование значения ключевого слова `break-all` для `word-break` позволит браузеру при необходимости разбивать слова на отдельные символы.

<iframe src="https://codepen.io/web-dot-dev/embed/BadxEQY?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение выравнивания текста

Для задания горизонтального выравнивания текста в блоке или таблично-ячеистом элементе используйте свойство [`text-align`](../../css/text-align.md). Это свойство принимает значения ключевых слов `left`, `right`, `start`, `end`, `center`, `justify` и `match-parent`.

Значения `left` и `right` выравнивают текст по левой и правой сторонам блока соответственно.

Значения `start` и `end` используются для обозначения начала и конца строки текста в текущем режиме записи. Таким образом, `start` соответствует `left` в английском языке и `right` в арабской графике, которая пишется справа налево (RTL). Это логические выравнивания, подробнее об этом можно узнать в модуле [logical properties](logical-properties.md).

Используйте `center` для выравнивания текста по центру блока.

Значение `justify` упорядочивает текст и автоматически изменяет интервалы между словами таким образом, чтобы текст выравнивался как по левому, так и по правому краю блока.

<iframe src="https://codepen.io/web-dot-dev/embed/bGrMJBM?height=570&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 600px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение направления текста

Используйте [`direction`](../../css/direction.md), чтобы задать направление текста: `ltr` (слева направо, по умолчанию) или `rtl` (справа налево). Некоторые языки, такие как арабский, иврит или персидский, пишутся справа налево, поэтому следует использовать `direction: rtl`. Для английского и всех других языков, пишущих слева направо, следует использовать `direction: ltr`.

!!!warning ""

    В общем случае вместо `direction` следует использовать [HTML-атрибут `dir`](../../html/uni-attr.md#dir). Более подробную информацию можно найти в [этом обсуждении на StackOverflow](https://stackoverflow.com/a/5375907).

## Изменение обтекания текста {#writing-mode}

Используйте [`writing-mode`](../../css/writing-mode.md) для изменения способа обтекания и расположения текста. По умолчанию используется `horizontal-tb`, но можно также установить `writing-mode` в `vertical-lr` или `vertical-rl` для текста, который должен располагаться горизонтально.

<iframe src="https://codepen.io/web-dot-dev/embed/WNEJWoK?height=680&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 700px; width: 100%; border: 0;" loading="lazy"></iframe>

## Изменение ориентации текста

Используйте свойство [`text-orientation`](../../css/text-orientation.md) для указания ориентации символов в тексте. Допустимыми значениями для этого свойства являются `mixed` и `upright`. Это свойство актуально только в том случае, если для параметра [`writing-mode`](#writing-mode) установлено значение, отличное от `horizontal-tb`.

<iframe src="https://codepen.io/web-dot-dev/embed/QWMrPGV?height=660&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 600px; width: 100%; border: 0;" loading="lazy"></iframe>

## Добавление тени к тексту

Для добавления тени к тексту используйте свойство [`text-shadow`](../../css/text-shadow.md). Это свойство ожидает три длины (`x-offset`, `y-offset` и `blur-radius`) и цвет.

<iframe src="https://codepen.io/web-dot-dev/embed/jOLxRVe?height=530&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Ознакомьтесь с [разделом `text-shadow` нашего модуля по теням](shadows.md#text-shadow), чтобы узнать больше.

## Переменные шрифты

Как правило, "обычные" шрифты требуют импорта различных файлов для разных версий шрифта, например, жирного, курсивного или конденсированного. Переменные шрифты - это шрифты, которые могут содержать множество различных вариантов шрифта в одном файле.

<figure>
<video controls autoplay loop muted>
<source src="/learn/css3/typography-1.mp4" type="video/mp4" />
</video>
<figcaption>Roboto Flex в произвольных сочетаниях ширины и веса</figcaption>
</figure>

Более подробную информацию можно найти в [нашей статье о переменных шрифтах](https://web.dev/variable-fonts/).

## Псевдоэлементы

!!!note "Ключевые понятия"

    **Псевдоэлемент** - это часть элемента, на которую можно нацелиться с помощью ключевых слов CSS без необходимости добавлять дополнительный HTML. Ознакомьтесь с [нашим модулем по псевдоэлементам](pseudo-elements.md) для более глубокого изучения этой темы!

## Псевдоэлементы `::first-letter` и `::first-line`

Псевдоэлементы [`::first-letter`](../../css/first-letter.md) и [`::first-line`](../../css/first-line.md) нацелены на первую букву и первую строку текстового элемента соответственно.

<iframe src="https://codepen.io/web-dot-dev/embed/KKvRYNr?height=270&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Псевдоэлемент `::selection`

Для изменения внешнего вида выбранного пользователем текста используйте псевдоэлемент [`::selection`](../../css/selection.md).

При использовании этого псевдоэлемента можно применять только определенные CSS-свойства: `color`, `background-color`, `text-decoration`, `text-shadow`, `stroke-color`, `fill-color`, `stroke-width`.

<iframe src="https://codepen.io/web-dot-dev/embed/MWvGRbx?height=390&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 400px; width: 100%; border: 0;" loading="lazy"></iframe>

## `font-variant`

Свойство [`font-variant`](../../css/font-variant.md) - это сокращение для ряда CSS-свойств, позволяющих выбирать такие варианты шрифтов, как `small-caps` и `slashed-zero`. К таким CSS-свойствам относятся [`font-variant-alternates`](../../css/font-variant-alternates.md), [`font-variant-caps`](../../css/font-variant-caps.md), [`font-variant-east-asian`](../../css/font-variant-east-asian.md), [`font-variant-ligatures`](../../css/font-variant-ligatures.md) и [`font-variant-numeric`](../../css/font-variant-numeric.md). Более подробную информацию об использовании каждого свойства можно найти по ссылкам.

<iframe src="https://codepen.io/web-dot-dev/embed/eYEroBa?height=260&amp;theme-id=light&amp;default-tab=result&amp;editable=true" style="height: 300px; width: 100%; border: 0;" loading="lazy"></iframe>

## Ресурсы

-   [Лучшие методы работы со шрифтами](https://web.dev/font-best-practices/), где рассматриваются вопросы импорта шрифтов, рендеринга шрифтов и другие лучшие методы использования шрифтов в Интернете.
-   [MDN Основы стилизации текста и шрифтов](https://developer.mozilla.org/docs/Learn/CSS/Styling_text/Fundamentals).

:information_source: Источник &mdash; [Text and typography](https://web.dev/learn/css/typography/)
