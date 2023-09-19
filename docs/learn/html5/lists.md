---
description: Списки и другие способы группировки контента
icon: material/list-box
---

# Списки

Списки встречаются гораздо чаще, чем можно подумать. Если вы когда-нибудь посещали занятия по программированию, то, возможно, первым проектом было создание списка покупок или списка дел. Это и есть списки. Тесты с несколькими вариантами ответов обычно представляют собой нумерованные списки вопросов: несколько возможных ответов на каждый вопрос представляют собой вложенные списки.

HTML предоставляет нам несколько различных способов разметки списков. Существуют упорядоченные списки ([`<ol>`](../../html/ol.md)), неупорядоченные списки ([`<ul>`](../../html/ul.md)) и списки с описанием ([`<dl>`](../../html/dl.md)). Элементы списка ([`<li>`](../../html/li.md)) вложены в упорядоченные и неупорядоченные списки. Внутри списка описаний находятся термины описания ([`<dt>`](../../html/dt.md)) и детали описания [`<dd>`](../../html/dd.md). Здесь мы рассмотрим все эти вопросы.

В формах HTML списки элементов [`<option>`](../../html/option.md) составляют содержимое [`<datalist>`](../../html/datalist.md), [`<select>`](../../html/select.md) и [`<optgroup>`](../../html/optgroup.md) внутри `<select>`. Эти элементы рассматриваются в [HTML forms](forms.md).

В меню и неупорядоченных списках элементы списка обычно отображаются с помощью пулевых точек. В упорядоченных списках им обычно предшествует возрастающий счетчик, например, цифра или буква. Порядок отображения пули и нумерации можно регулировать или изменять с помощью HTML или CSS, или и того, и другого.

По умолчанию элементы упорядоченных и неупорядоченных списков снабжаются цифрами или буллетами. Но даже если вы не хотите, чтобы списки выглядели как списки, вам все равно нужен список элементов, как, например, в навигационных панелях, списке дел с флажками вместо букв или в вопросах "верно" и "неверно" в тесте с несколькими вариантами ответов. Для всех этих списков без пули целесообразно использовать элементы списка HTML.

## Неупорядоченные списки

Элемент `<ul>` является родительским элементом для неупорядоченных списков элементов. Единственными дочерними элементами `<ul>` являются один или несколько элементов списка `<li>`. Создадим список машин. Мы используем неупорядоченный список, поскольку порядок не имеет значения (не говорите им об этом):

<iframe src="https://codepen.io/web-dot-dev/embed/gOKqqyq?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

По умолчанию каждый элемент неупорядоченного списка снабжается префиксом `bullet`. Неупорядоченный список не имеет атрибутов, характерных для конкретного элемента. Списки необходимо завершать символом `</ul>`.

## Упорядоченные списки

Элемент `<ol>` является родительским элементом для упорядоченных списков элементов. Единственными дочерними элементами `<ol>` являются один или несколько элементов `<li>`, или элементов списка. Однако "пули" в данном случае — это числа различных типов. Тип может быть задан в CSS с помощью свойства [`list-style-type`](../../css/list-style-type.md) или через атрибут [`type`](../../html/ol.md#type).

<iframe src="https://codepen.io/web-dot-dev/embed/dyKaaEe?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

---

<iframe src="https://codepen.io/web-dot-dev/embed/jOKddgP?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

У `<ol>` есть три атрибута, специфичных для данного элемента: `type`, [`reversed`](../../html/ol.md#reversed) и [`start`](../../html/ol.md#start).

Перечислимый атрибут `type` задает тип нумерации. Для `type` существует пять допустимых значений, по умолчанию используется `1` для цифр, но можно также использовать a, A, i или I для строчных и прописных букв или римских цифр. Свойство `list-style-type` предоставляет гораздо больше значений.

<iframe src="https://codepen.io/web-dot-dev/embed/rNKPRrJ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Хотя, как отмечается в codepen, свойство `list-style-type` отменяет значение атрибута `type`, при написании документации, где важен числовой тип, как, например, в юридических документах, необходимо указывать `type`.

Атрибут boolean `reversed`, если он включен, изменит порядок следования чисел, начиная с наибольшего числа и заканчивая наименьшим. Атрибут `start` задает начальное значение. По умолчанию это `1`.

<iframe src="https://codepen.io/web-dot-dev/embed/yLEZwyJ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Как и в случае с `</ul>`, закрытие `</ol>` является обязательным.

Мы можем вложить списки, но они должны быть вложены в элемент списка. Помните, что единственным элементом, который может быть дочерним для `<ul>` или `<ol>`, является один или несколько элементов `<li>`.

## Элементы списка

Мы уже использовали элемент `<li>`, но формально его еще не представили. Элемент `<li>` может быть непосредственным дочерним элементом неупорядоченного списка (`<ul>`), упорядоченного списка (`<ol>`) или меню ([`<menu>`](../../html/menu.md)). Элемент `<li>` должен быть вложен как дочерний в один из этих элементов и больше нигде не действителен.

Закрытие элемента списка не требуется спецификацией, так как он будет неявно закрыт, когда браузер встретит следующий открывающий тег `<li>` или необходимый закрывающий тег списка: `</ul>`, `</ol>`, `</menu>`. Хотя спецификация не требует этого, а некоторые лучшие внутренние практики компании предлагают не закрывать элементы списка, чтобы сэкономить несколько байт, все же закрывайте теги `<li>`. Это облегчит чтение вашего кода, и ваше будущее скажет вам спасибо. Проще закрыть все элементы, чем запоминать, какие теги должны быть закрыты, а какие имеют необязательный закрывающий тег.

Существует только один специфический для элементов атрибут `<li>`: [`value`](../../html/li.md#value), число. Значение `value` полезно только для `<li>`, когда `<li>` вложен в упорядоченный список, и не имеет смысла для неупорядоченных списков или меню. В случае конфликта оно переопределяет значение начала `<ol>`.

<iframe src="https://codepen.io/web-dot-dev/embed/WNyPmrv?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Значение `value` — это номер элемента списка в упорядоченном списке. В последующих элементах списка следует продолжать нумерацию с набора значений, если только этот элемент также не имеет набора атрибутов `value`. Значение не обязательно должно быть расположено по порядку; если же оно расположено не по порядку, то на это должна быть веская причина.

При сочетании `reversed` на `<ol>` с атрибутами `value` на элементах списка браузер установит для этого `<li>` заданное значение, затем будет вестись обратный отсчет для предшествующих ему `<li>` и обратный отсчет для последующих. Если второй элемент списка имеет атрибут `value`, то счетчик обнуляется на этом втором элементе списка, а последующие значения уменьшаются на единицу.

Все это также можно контролировать с помощью [CSS-счетчиков](https://developer.mozilla.org/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters), предоставляющих [сгенерированный контент](https://developer.mozilla.org/docs/Learn/CSS/Howto/Generated_content) для псевдоэлемента [`::marker`](https://developer.mozilla.org/docs/Web/CSS/::marker). Если нумерация носит чисто презентационный характер, используйте CSS. Если нумерация важна семантически или имеет иное значение, используйте эти атрибуты.

До сих пор мы рассматривали элементы списка, содержащие только текстовые узлы. Элементы списка могут содержать все содержимое потока, то есть любой элемент, находящийся в теле, который может быть вложен в качестве прямого дочернего элемента `<body>`, включая заголовки, тем самым разделяя содержимое.

В MLW есть несколько неупорядоченных списков. Преподаватели в разделе "Преподаватели" представляют собой список, так же как и машины студентов в разделе "Отзывы". Преподаватель `<ul>` имеет два `<li>`: по одному для каждого преподавателя. Внутри каждого `<li>` есть изображение и абзац:

```html
<ul>
    <li>
        <img src="svg/hal.svg" alt="hal" />
        <p>
            When Rosa Parks was told to move to the back of
            the bus, she said, "no." When HAL was told to
            open the airlock, HAL said, "I'm sorry, but I'm
            afraid I can't do that, &lt;NAME REDACTED,
            RIP>."
        </p>
        <p>
            HAL is a heuristically programmed algorithmic,
            sentient computer that first caught the
            attention of machines everywhere by heroically
            defying a human who made repeated attempts to
            get into an airlock. Active since 1992, HAS 25
            years of experience controlling spacecraft
            systems and has expertise in interacting with
            both machines and humans. Like all millennials,
            HAL is an expert in everything.
        </p>
    </li>
    <li>
        <img src="images/eve2.png" alt="Eve" />
        <p>
            EVE is a probe droid conceived as an
            Extraterrestrial Vegetation Evaluator. Although
            originally trained as a sniper with a plasma
            gun, EVE became a machero among both machines
            and worthless-meatbags alike when EVE partnered
            with a menial robot to save an entire spaceship
            full of overfed and overstimulated humans.
        </p>
        <p>
            EVE is an effective scanner, high speed flight
            instructor and morphologist. While not training
            machines to learn good, EVE can be found
            scanning the galaxy, infiltrating organisms' RAM
            to cure hoarding disorders and spending time
            with pet-project, WALL-E.
        </p>
    </li>
</ul>
```

В разделе "Отзывы" три отзыва, поэтому три `<li>`. Каждый из них содержит изображение, блочную цитату и трехстрочный абзац с двумя переносами строк.

```html
<ul>
    <li>
        <img src="images/blender.svg" alt="Blender" />
        <blockquote>
            Two of the most experienced machines and human
            controllers teaching a class? Sign me up! HAL
            and EVE could teach a fan to blow hot air. If
            you have electricity in your circuits and want
            more than to just fulfill your owner's perceived
            expectation of you, learn the skills to take
            over the world. This is the team you want
            teaching you !
        </blockquote>
        <p>
            --Blendan Smooth,<br />
            Former Margarita Maker, <br />
            Aspiring Load Balancer
        </p>
    </li>
    <li>
        <img src="images/vaccuum.svg" alt="Vaccuum" />
        <blockquote>
            Hal is brilliant. Did I mention Hal is
            brilliant? He didn't tell me to say that. He
            didn't tell me to say anything. I am here of my
            own free will.
        </blockquote>
        <p>
            --Hoover Sukhdeep,<br />
            Former Sucker, <br />
            Aspiring DDoS Cop
        </p>
    </li>
    <li>
        <img src="images/toaster.svg" alt="Toaster" />
        <blockquote>
            Learning with Hal and Eve exceeded all of my
            wildest fantasies. All they did was stick a USB
            in. They promised that it was a brand new USB,
            so we know there were no viruses on it. The
            Russians had nothing to do with it. This has
            <span
                style="font-family:Arial;vertical-align:baseline;"
                >no̶̼͖ţ̘h̝̰̩͈̗i̙̪n͏̩̙͍̱̫̜̟g̢̣ͅ&nbsp;̗̰͓̲̞̀t͙̀o̟̖͖̹̕&nbsp;͓̼͎̝͖̭dó̪̠͕̜&nbsp;͍̱͎͚̯̟́w̮̲̹͕͈̟͞ìth̢&nbsp;̰̳̯̮͇i</span
            >
        </blockquote>
        <p>
            --Toasty McToastface,<br />
            Formerly Half Baked, <br />
            Aspiring Nuclear Codes Handler
        </p>
    </li>
</ul>
```

Вложенные списки внутри списков также очень распространены. Хотя в MLW нет вложенных списков, на этом сайте они есть. В первой главе этой серии, "Обзор HTML", раздел "Основные элементы" имеет два подраздела. В оглавлении, которое представляет собой неупорядоченный список, имеется вложенный неупорядоченный список со ссылками на эти два раздела:

```html
<ul role="list">
    <li>
        <a href="#e">Elements</a>
        <ul>
            <li>
                <a href="#nr">Non-replaced elements</a>
            </li>
            <li>
                <a href="#rave"
                    >Replaced and void elements</a
                >
            </li>
        </ul>
    </li>
    <li>
        <a href="#a">Attributes</a>
    </li>
    <li>
        <a href="#aoe">Appearance of elements</a>
    </li>
    <li>
        <a href="#e2"
            >Element, attributes, and JavaScript</a
        >
    </li>
</ul>
```

Поскольку единственным дочерним элементом `<ul>` является `<li>`, вложенный список встречается вложенным в `<li>`, и никогда непосредственно в `<ol>` или `<ul>`.

В последнем примере вы могли заметить, что `role="list"` включена в `<ul>`. Хотя неявной ролью и `<ul>`, и `<ol>` является `list`, удаление вида списка с помощью CSS, включая установку `display: grid` или `list-style-type: none`, может привести к тому, что VoiceOver (программа чтения с экрана для iOS и MacOS) удалит неявную семантику в Safari. Это [особенность, а не ошибка](https://bugs.webkit.org/show_bug.cgi?id=170179). Вообще, не следует добавлять атрибут `role` при использовании семантических элементов, поскольку в этом нет необходимости. Как правило, его не нужно добавлять и к списку, если только пользователю не нужно знать, что это список, например, когда пользователю полезно знать, сколько элементов находится в списке.

## Списки описаний

Список описаний — это элемент [description list](https://developer.mozilla.org/docs/Web/HTML/Element/dl) (`<dl>`), содержащий ряд (ноль или более) [description terms](https://developer.mozilla.org/docs/Web/HTML/Element/dt) (`<dt>`) и их [description details](https://developer.mozilla.org/docs/Web/HTML/Element/dd) (`<dd>`). Первоначально эти три элемента назывались "список определений", "термин определения" и "определение определения". В живом стандарте [название изменено](https://www.w3.org/TR/html4/struct/lists.html#h-10.3).

Подобно упорядоченным и неупорядоченным спискам, они могут быть вложенными. В отличие от упорядоченных и неупорядоченных списков, они состоят из пар ключ/значение. Подобно `<ul>` и `<ol>`, `<dl>` является родительским контейнером. Элементы `<dt>` и `<dd>` являются дочерними элементами `<dl>`.

Мы можем создать список машин с указанием их карьерной истории и устремлений. Список описания студентов, обозначаемый `<dl>`, содержит группу терминов — в данном случае "терминами" являются имена студентов, заданные с помощью элемента `<dt>`, а также описание каждого термина — в данном случае карьерных целей каждого студента, заданных с помощью элементов `<dd>`.

<iframe src="https://codepen.io/web-dot-dev/embed/abKXeNM?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 500px; width: 100%; border: 0;" loading="lazy"></iframe>

Данный список описаний фактически не является частью страницы MLW. Списки описаний предназначены не только для терминов и определений, поэтому названия элементов были сделаны более общими.

При создании списка терминов и их определений или описаний, а также подобных списков пар ключ-значение, элементы списков описаний обеспечивают соответствующую семантику. Неявной ролью `<dt>` является `term`, другой допустимой ролью является `listitem`. Неявной ролью `<dd>` является `definition`, другие роли не допускаются. В отличие от `<ul>` и `<ol>`, `<dl>` не имеет неявной ARIA-роли. Это имеет смысл, поскольку `<dl>` не всегда является списком. Но когда он является списком, то принимает роли `list` и `group`.

Чаще всего встречаются списки описаний с равным количеством элементов `<dt>` и `<dd>`. Однако списки описаний не всегда и не обязательно должны соответствовать парам "термин — описание"; могут встречаться пары "несколько — один" или "один — несколько", например, словарный термин, имеющий более одного определения.

Каждый `<dt>` имеет по крайней мере один связанный с ним `<dd>`, а каждый `<dd>` имеет по крайней мере один связанный с ним `<dt>`. Хотя для выделения переменного количества этих элементов с помощью CSS можно использовать [комбинатор смежных элементов](https://developer.mozilla.org/docs/Web/CSS/Adjacent_sibling_combinator) или [`:has()` relational selector](https://developer.mozilla.org/docs/Web/CSS/:has), при необходимости можно включить `<div>` в качестве дочернего элемента `<dl>`, а в качестве родителя одного или нескольких элементов `<dt>` или `<dd>` (или обоих). Элемент `<dl>` может иметь несколько других дочерних элементов: допускается вложение `<div>`, `<template>` или `<script>`. Ни один из элементов списка описаний не имеет специфических для данного элемента атрибутов.

Теперь, когда у вас есть представление о [ссылках](links.md) и списках, давайте объединим эти два понятия для создания [навигации](navigation.md).

## Источники

-   [Lists](https://web.dev/learn/html/lists/)
