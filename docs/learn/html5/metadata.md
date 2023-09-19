---
description: Как использовать метатеги для предоставления информации о документах
icon: material/information-outline
---

# Метаданные

<big>Как использовать метатеги для предоставления информации о документах.</big>

В разделе "Структура документа" вы узнали о компонентах, которые (почти) всегда находятся в [`<head>`](../../html/head.md) HTML-документа. Хотя все, что находится в `<head>`, включая [`<title>`](../../html/title.md), [`<link>`](../../html/link.md), [`<script>`](../../html/script.md), [`<style>`](../../html/style.md) и менее используемый [`<base>`](../../html/base.md), фактически является "метаданными", для метаданных, которые не могут быть представлены этими другими элементами, существует тег [`<meta>`](../../html/meta.md).

Спецификация включает в себя несколько метатипов, и существует много, много других метатипов, поддерживаемых приложениями и не включенных ни в одну официальную спецификацию. В этом разделе мы обсудим атрибуты и значения, включенные в спецификации, некоторые распространенные имена метаданных и значения содержимого, а также несколько метатипов, невероятно полезных для поисковой оптимизации, размещения в социальных сетях и удобства пользователей, которые официально не определены [WHATWG](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element) или [W3C](https://www.w3.org/MarkUp/html-spec/Elements/META.html).

## Обязательные теги `<meta>`, повторное рассмотрение

Давайте вернемся к двум уже рассмотренным необходимым тегам `<meta>` — объявлению [character set](document-structure.md#character-set) и метатегу [viewport](document-structure.md#viewport-metadata) — и в процессе разберемся с тегом `<meta>`.

Атрибут [`charset`](../../html/meta.md#charset) элемента `<meta>` появился уникальным образом. Первоначально метаданные о наборе символов записывались в виде `<meta http-equiv="Content-Type" content="text/html; charset=<characterset>" />`, но многие разработчики ошибочно указывали атрибут `content` как `content="text/html" charset="<characterset>"`, поэтому браузеры стали поддерживать `charset` как атрибут. В настоящее время он стандартизован в живом стандарте HTML как `<meta charset=<charset>" />`, где для HTML `<charset>` — это нечувствительная к регистру строка `"utf-8"`.

Возможно, вы заметили, что в оригинальном объявлении мета-набора символов использовался атрибут [`http-equiv`](../../html/meta.md#http-equiv). Это сокращение от "http-эквивалент", поскольку метатег, по сути, повторяет то, что может быть задано в HTTP-заголовке. Кроме исключения `charset`, все остальные метатеги, определенные в спецификации WHATWG HTML, содержат либо атрибут `http-equiv`, либо [`name`](../../html/meta.md#name).

## Официально определенные метатеги

Существует два основных типа метатегов: директивы `pragma` с атрибутом `http-equiv`, как это было в метатеге `charset`, и именованные метатеги, как метатег `viewport` с атрибутом `name`, о котором мы говорили в разделе [Структура документа](document-structure.md). Оба метатипа — `name` и `http-equiv` — должны включать атрибут `content`, определяющий содержание перечисленного типа метаданных.

### Директивы Pragma

Атрибут `http-equiv` имеет в качестве своего значения директиву `pragma`. Эти директивы описывают, как должна быть разобрана страница. Поддерживаемые значения `http-equiv` позволяют задавать директивы, когда нет возможности задать HTTP-заголовки напрямую.

В спецификации определено семь [директив pragma](https://html.spec.whatwg.org/multipage/semantics.html#pragma-directives), большинство из которых имеют другие способы задания. Например, хотя вы можете включить директиву языка с помощью `<meta http-equiv="content-language" content="en-us" />`, мы уже обсуждали использование атрибута [`lang` на элементе HTML](document-structure.md#content-language), который и следует использовать вместо этого.

Наиболее распространенной директивой `pragma` является директива `refresh`.

```html
<meta
    http-equiv="refresh"
    content="60; https://machinelearningworkshop.com/regTimeout"
/>
```

Хотя вы можете установить директиву на обновление с интервалом в несколько секунд, заданным в атрибуте `content`, и даже перенаправить на другой URL, пожалуйста, не делайте этого. Обновление и перенаправление содержимого без явного запроса пользователя является плохим юзабилити и негативно влияет на доступность. Разве вам не неприятно, когда вы находитесь на середине абзаца, а страница сбрасывается? Представьте себе, что у вас проблемы с когнитивными способностями или зрением, а тут такое. Если вы собираетесь установить обновление с переадресацией, убедитесь, что у пользователя есть достаточно времени для прочтения страницы, ссылка для ускорения процесса и, если необходимо, кнопка для "остановки часов" и предотвращения переадресации.

Мы не будем включать эту директиву в наш сайт, поскольку нет никаких причин для тайм-аута пользовательской сессии, кроме раздражения наших посетителей.

Наиболее полезной директивой `pragma` является `content-security-policy`, которая позволяет определить политику содержимого для текущего документа. В основном в политиках содержимого указываются разрешенные источники сервера и конечные точки сценариев, что позволяет защититься от межсайтовых скриптовых атак.

```html
<meta
    http-equiv="content-security-policy"
    content="default-src https:"
/>
```

Если у вас нет доступа к изменению HTTP-заголовков (или если он есть), то вот список [разделенных пробелами значений содержимого для директив `content-security-policy`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Security-Policy).

### Именованные метатеги

Чаще всего вы включаете именованные метаданные. Включите атрибут `name`, а значение атрибута — это имя метаданных. Как и в случае с директивами `pragma`, атрибут `content` является обязательным.

Атрибут `name` является именем метаданных. В дополнение к `viewport` вы, вероятно, захотите включить `description` и `theme-color`, но не `keywords`.

#### Ключевые слова

Продавцы "змеиного масла" поисковой оптимизации злоупотребляют метатегом `keywords`, заполняя его списками спамных слов, разделенных запятыми, вместо списков релевантных ключевых терминов, поэтому поисковые системы больше не считают эти метаданные полезными. Не стоит тратить время, силы и байты на его добавление.

#### Описание

Значение `description`, однако, очень важно для SEO: помимо того, что оно помогает сайтам ранжироваться на основе контента, значение `description` часто является тем, что поисковые системы отображают под заголовком страницы в результатах поиска. Некоторые браузеры, например Firefox и Opera, используют это значение в качестве описания по умолчанию для страниц, занесенных в закладки. Описание должно представлять собой краткое и точное изложение содержания страницы.

```html
<meta
    name="description"
    content="Register for a machine learning workshop at our school for machines who can't learn good and want to do other stuff good too"
/>
```

Если вторая половина нашего описания не имеет для вас смысла, то вы, вероятно, не смотрели фильм [Zoolander](https://www.youtube.com/watch?v=NQ-8IuUkJJc).

#### Роботы

Если вы не хотите, чтобы ваш сайт индексировался поисковыми системами, вы можете сообщить им об этом. `<meta name="robots" content="noindex, nofollow" />` указывает ботам не индексировать сайт и не переходить по ссылкам. Боты должны прислушаться к этому запросу, но нет закона, требующего, чтобы они его выполняли. Не нужно включать `<meta name="robots" content="index, follow" />` для запроса индексации сайта и перехода по ссылкам, так как это делается по умолчанию, если в HTTP-заголовках не указано иное.

```html
<meta name="robots" content="index, follow" />
```

#### Цвет темы

Значение [`theme-color`](../design/theming.md#customize-the-browser-interface) позволяет задать цвет для настройки интерфейса браузера. Значение `color` в атрибуте `content` будет использоваться поддерживающими браузерами и операционными системами, позволяя задать предлагаемый цвет для пользовательских агентов, поддерживающих окрашивание строки заголовка, панели вкладок или других компонентов Chrome. Этот метатег особенно полезен для [прогрессивных веб-приложений](../pwa/index.md). Но если вы включаете файл манифеста, который требуется для PWA, то можете включить цвет темы в него. Однако определение его в HTML гарантирует, что цвет будет найден сразу, до рендеринга, что может быть быстрее при первой загрузке, чем ожидание манифеста.

Чтобы задать цвет темы, соответствующий синему тону фона нашего сайта, включите:

```html
<meta name="theme-color" content="#226DAA" />
```

Метатег "Цвет темы" может включать атрибут `media`, позволяющий устанавливать различные цвета темы на основе медиазапросов. Атрибут `media` может быть включен только в этот метатег и игнорируется во всех остальных метатегах.

Существует несколько [других мета-значений `name`](https://developer.mozilla.org/docs/Web/HTML/Element/meta/name), но рассмотренные нами являются наиболее распространенными. За исключением объявления разных значений `theme-color` для разных медиазапросов, включайте только по одному из каждого метатега. Если для поддержки старых браузеров необходимо включить несколько типов метатегов, то старые значения должны располагаться после новых, поскольку пользовательские агенты считывают последовательные правила, пока не найдут подходящее.

## Open Graph

[Open Graph](https://ogp.me/) и аналогичные протоколы метатегов могут использоваться для управления отображением ссылок на ваш контент в социальных сетях, таких как Twitter, LinkedIn и Facebook. Если протокол не включен, сайты социальных сетей будут правильно воспринимать заголовок вашей страницы и описание из метатега `description` — ту же информацию, что и поисковые системы, но вы можете намеренно задать то, что вы хотите, чтобы пользователи видели при размещении ссылки на ваш сайт.

При размещении ссылки на [hcdev.ru](https://hcdev.ru) в Facebook или Twitter появляется карточка с изображением, названием сайта и его описанием. Вся карточка представляет собой гиперссылку на указанный вами URL.

Метатеги Open Graph имеют по два атрибута: атрибут `property` вместо атрибута `name` и содержимое или значение этого свойства. Атрибут `property` не определен в официальных спецификациях, но широко поддерживается приложениями, поддерживающими протокол Open Graph. Создание "новых" атрибутов типа `property` гарантирует, что значения атрибутов, созданные для атрибута протокола, не будут конфликтовать с будущими значениями атрибутов `name` или `http-equiv`.

Давайте создадим медиакарту Facebook:

```html
<meta
    property="og:title"
    content="Machine Learning Workshop"
/>
<meta
    property="og:description"
    content="School for Machines Who Can't Learn Good and Want to Do Other Stuff Good Too"
/>
<meta
    property="og:image"
    content="http://www.machinelearningworkshop.com/image/all.png"
/>
<meta
    property="og:image:alt"
    content="Black and white line drawing of refrigerator, french door refrigerator, range, washer, fan, microwave, vaccuum, space heater and air conditioner"
/>
```

Включите заголовок поста для отображения. Заголовок обычно отображается под изображением и над описанием. Описание должно состоять не более чем из трех предложений, в которых кратко излагается суть вашего сообщения. Оно будет отображаться после заголовка, заданного в `og:title`. Укажите абсолютный URL-адрес изображения баннера, которое вы хотите отобразить, включая протокол `https://`. При включении изображения в HTML всегда включайте альтернативное текстовое описание изображения, даже если оно будет отображаться в другом месте. Для карточек социальных сетей Open Graph определите `alt` в качестве значения содержимого для свойства `og:image:alt`. Вы также можете включить канонический URL с помощью свойства `og:url`.

![Карточка Facebook для семинара по машинному обучению.](metadata-1.avif)

Все эти метатеги определены в [Open Graph protocol](https://ogp.me/). Значения должны соответствовать содержимому, которое вы хотели бы отобразить в стороннем веб-приложении.

Другие социальные сети имеют свои собственные синтаксисы, например [Twitter card markup](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup). Это позволяет предоставлять различные возможности в зависимости от того, где появляется ссылка, или обеспечивать отслеживание ссылок путем добавления параметра в конце URL.

```html
<meta
    name="twitter:title"
    content="Machine Learning Workshop"
/>
<meta
    name="twitter:description"
    content="School for machines who can't learn good and want to do other stuff good too"
/>
<meta
    name="twitter:url"
    content="https://www.machinelearningworkshop.com/?src=twitter"
/>
<meta
    name="twitter:image:src"
    content="http://www.machinelearningworkshop.com/image/all.png"
/>
<meta
    name="twitter:image:alt"
    content="27 different home appliances"
/>
<meta name="twitter:creator" content="@estellevw" />
<meta name="twitter:site" content="@perfmattersconf" />
```

В случае с Twitter, чтобы значение атрибута `name` не противоречило будущим спецификациям, вместо использования нового атрибута, такого как атрибут `property` в Open Graph, для данных карты Twitter все значения name имеют префикс `twitter:`.

Посмотреть, как будет выглядеть ваша карточка социальной сети, можно на сайтах [Twitter](https://cards-dev.twitter.com/validator) и [Facebook](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fmachinelearningworkshop.com).

![Twitter-карта для семинара по машинному обучению](metadata-2.avif)

Для разных социальных сетей или для разных параметров ссылки можно использовать разные изображения, заголовки и описания карточки. Например, [https://perfmattersconf.com](https://perfmattersconf.com) устанавливает различные значения для `og:image`, `og:title` и `og:description` в зависимости от параметра URL.

![Карточка с изображением докладчика конференции.](metadata-3.avif)

_Карточка с изображением докладчика конференции._

![Та же карта с реквизитами для другого докладчика.](metadata-4.avif)

_Та же карта с реквизитами для другого докладчика._

Если ввести [https://perfmattersconf.com?name=erica](https://perfmattersconf.com?name=erica) и [https://perfmattersconf.com?name=melanie](https://perfmattersconf.com?name=melanie) в [Twitter's Card Validator](https://cards-dev.twitter.com/validator), то вы увидите две разные карточки; мы предоставили разное содержание, хотя обе они ссылаются на одну и ту же главную страницу конференции.

## Другая полезная метаинформация

Если кто-то добавляет ваш сайт в закладки, добавляя его на домашний экран, или если ваш сайт является прогрессивным веб-приложением или работает в автономном режиме или без отображения функций браузера chrome, вы можете предоставить иконки приложений для домашнего экрана мобильного устройства.

Для ссылки на используемые изображения запуска можно использовать тег `<link>`. Вот пример включения нескольких изображений с помощью медиазапросов:

```html
<link
    rel="apple-touch-startup-image"
    href="icons/ios-portrait.png"
    media="orientation: portrait"
/>
<link
    rel="apple-touch-startup-image"
    href="icons/ios-landscape.png"
    media="orientation: landscape"
/>
```

Если ваш сайт или приложение поддерживает работу с веб-приложениями, то есть может работать самостоятельно с минимальным пользовательским интерфейсом, например, без кнопки "Назад", вы можете использовать метатеги, чтобы сообщить об этом браузеру:

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="mobile-web-app-capable" content="yes" />
```

Включайте их только в том случае, если ваше приложение действительно поддерживает приложения. В противном случае вы подставите своих самых ярых сторонников, тех, кто добавил ваш сайт на домашний экран, под неприятные впечатления. Вы потеряете их любовь!

Если кто-то собирается сохранить ваш значок на домашнем экране своего миниатюрного устройства, необходимо предоставить операционной системе короткое имя, которое не займет много места на домашнем экране маленького устройства. Для этого можно включить метатег или использовать файл webmanifest. Ниже показан метод использования метатега:

```html
<meta name="apple-mobile-web-app-title" content="MLW" />
<meta name="application-name" content="MLW" />
```

Вы рассмотрели несколько метатегов, каждый из которых сделает ваш заголовок длиннее. Если вы действительно создаете прогрессивное веб-приложение, способное работать в автономном режиме, то вместо включения этих двух дополнительных метатегов можно более просто и лаконично включить `short_name: MLW` в файл webmanifest.

Файл манифеста может предотвратить появление громоздкого заголовка, заполненного тегами `<link>` и `<meta>`. Мы можем создать файл манифеста, обычно называемый `manifest.webmanifest` или `manifest.json`. Затем мы используем удобный тег `<link>` с атрибутом `rel`, установленным на `manifest`, и атрибутом `href`, установленным на URL файла манифеста:

```html
<link rel="manifest" href="/mlw.webmanifest" />
```

Эта серия посвящена HTML, но вы можете ознакомиться с курсом [по прогрессивным веб-приложениям](../pwa/web-app-manifest.md) или [MDN's web app manifest documentation](https://developer.mozilla.org/docs/Web/Manifest).

Теперь ваш HTML выглядит примерно так:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Machine Learning Workshop</title>
        <meta
            name="viewport"
            content="width=device-width"
        />
        <meta
            name="description"
            content="Register for a machine learning workshop at our school for machines who can't learn good and want to do other stuff good too"
        />
        <meta
            property="og:title"
            content="Machine Learning Workshop"
        />
        <meta
            property="og:description"
            content="School for Machines Who Can't Learn Good and Want to Do Other Stuff Good Too"
        />
        <meta
            property="og:image"
            content="http://www.machinelearningworkshop.com/image/all.png"
        />
        <meta
            property="og:image:alt"
            content="Black and white line drawing of refrigerator, french door refrigerator, range, washer, fan, microwave, vaccuum, space heater and air conditioner"
        />
        <meta
            name="twitter:title"
            content="Machine Learning Workshop"
        />
        <meta
            name="twitter:description"
            content="School for machines who can't learn good and want to do other stuff good too"
        />
        <meta
            name="twitter:url"
            content="https://www.machinelearningworkshop.com/?src=twitter"
        />
        <meta
            name="twitter:image:src"
            content="http://www.machinelearningworkshop.com/image/all.png"
        />
        <meta
            name="twitter:image:alt"
            content="27 different home appliances"
        />
        <meta name="twitter:creator" content="@estellevw" />
        <meta
            name="twitter:site"
            content="@perfmattersconf"
        />
        <link rel="stylesheet" src="css/styles.css" />
        <link
            rel="icon"
            type="image/png"
            href="/images/favicon.png"
        />
        <link
            rel="alternate"
            href="https://www.machinelearningworkshop.com/fr/"
            hreflang="fr-FR"
        />
        <link
            rel="alternate"
            href="https://www.machinelearningworkshop.com/pt/"
            hreflang="pt-BR"
        />
        <link
            rel="canonical"
            href="https://www.machinelearning.com"
        />
        <link rel="manifest" href="/mlwmanifest.json" />
    </head>
    <body>
        <!-- <script defer src="scripts/lightswitch.js"></script>-->
    </body>
</html>
```

Получилось довольно длинно, но дело сделано. Он был бы гораздо длиннее, но вы обобщили все иконки, краткие названия и т.д. в файле manifest, что позволило вам опустить многие теги `<meta>` и `<link>`,

Теперь, когда ваш `<head>` в основном готов, вы можете погрузиться в [семантический HTML](semantic-html.md).

# Источник

-   [Metadata](https://web.dev/learn/html/metadata/)
