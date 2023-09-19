---
description: Узнайте, как работать с HTML-медиа, такими как аудио и видео.
---

# Аудио и Видео

As you learned in the [images](/learn/html/images/) module, HTML enables embedding media into a web page. In this section, we look at audio and video files, including how to embed them, user controls, providing a static image placeholder for your videos, and best practices, including making audio and video files accessible.

## `<audio>` и `<video>`

Элементы [`<video>`](../../html/video.md) и [`<audio>`](../../html/audio.md) могут использоваться для встраивания медиаплееров непосредственно с атрибутом `src` или использоваться в качестве элемента-контейнера для серии элементов [`<source>`](../../html/source.md), каждый из которых содержит предложение файла `src`. Хотя элемент `<video>` может быть использован для вставки аудиофайла, элемент `<audio>` предпочтительнее для вставки звуковых файлов.

Открывающие тэги `<video>` и `<audio>` могут содержать ряд других атрибутов, включая `controls`, `autoplay`, `loop`, `mute`, `preload`, а также глобальные атрибуты. Элемент `<video>` также поддерживает атрибуты `height`, `width` и `poster`.

```html
<video
    src="videos/machines.webm"
    poster="images/machine.jpg"
    controls
>
    <p>
        Watch
        <a href="https://youtube.com/link"
            >video on Youtube</a
        >
    </p>
</video>
```

Данный пример `<video>` имеет один источник с атрибутом `src`, ссылающимся на источник видео. Атрибут `poster` содержит изображение, отображаемое при загрузке видео. Наконец, атрибут `controls` предоставляет пользователю элементы управления видео.

Между открывающим и закрывающим тегами включается вспомогательное содержимое. Если агент пользователя не поддерживает `<video>` (или `<audio>`), то это содержимое будет показано. Закрывающий тег `</video>` обязателен, даже если между ними нет никакого содержимого (но ведь всегда должно быть запасное содержимое, не так ли?).

Если в открывающем теге `<video>` или `<audio>` отсутствует атрибут `src`, включите в него один или несколько элементов [`<source>`](../../html/source.md), каждый из которых содержит атрибут `src` на медиафайл. В следующем примере между открывающим и закрывающим тегами размещены три варианта медиафайлов, содержимое `fallback`, а также английские и французские субтитры.

```html
<video controls poster="images/machine.jpg">
    <source src="videos/machines.webm" type="video/webm" />
    <source src="videos/machines.mp4" type="video/mp4" />
    <source src="videos/machines.ogv" type="video/ogg" />
    <track
        label="English"
        kind="subtitles"
        srclang="en"
        src="vtt/subtitles-en.vtt"
        default
    />
    <track
        label="Francais"
        kind="subtitles"
        srclang="fr"
        src="vtt/subtitles-fr.vtt"
    />
    <p>
        Watch
        <a href="https://youtube.com/link"
            >video on Youtube</a
        >
    </p>
</video>
```

Каждый дочерний `<source>` содержит атрибут `src`, указывающий на ресурс, и атрибут `type`, сообщающий браузеру тип [медиа-тип](https://developer.mozilla.org/docs/Web/Media/Formats/Containers) связанного файла. Это позволяет предотвратить получение браузером медиафайлов, которые он не сможет декодировать.

В атрибут `type` можно включить параметр [`codecs`](https://developer.mozilla.org/docs/Web/Media/Formats/codecs_parameter), который определяет, как именно закодирован ресурс. Кодеки позволяют включить в ресурс средства оптимизации мультимедиа, которые пока поддерживаются не всеми браузерами. Кодек отделяется от типа медиафайла точкой с запятой. Например, кодек может быть записан с использованием интуитивно понятного синтаксиса, такого как `<source src="videos/machines.webm" type="video/webm;codecs=vp8,vorbis">`, что указывает на то, что файлы WebM содержат видео VP8 и аудио vorbis. Кодеки также могут быть более сложными для расшифровки, например `<source src="videos/machines.mp4" type="video/mp4; codecs=avc1.4d002a">`, что указывает на то, что кодировка MP4 - Advanced Video Coding Main Profile Level 4.2. Объяснение этого синтаксиса выходит за рамки данного урока. Джейк Арчибальд опубликовал статью [как определить параметр кодека для видео AV1](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/), если вы хотите узнать больше.

При отображении видео по умолчанию первый кадр видео показывается как стоп-кадр, когда он становится доступным. Этим можно управлять. Атрибут `poster` позволяет показывать источник изображения во время загрузки видео и до его воспроизведения. Если видео воспроизводится и впоследствии приостанавливается, плакат не показывается повторно.

Обязательно определите соотношение сторон видео, так как при загрузке видео разница в размерах плаката и видео приведет к размытию и перерисовке.

Всегда включайте атрибут [boolean](attributes.md#boolean-attributes) `controls`. Это делает видимыми элементы управления, позволяя пользователям управлять уровнем звука, полностью отключать звук и разворачивать видео в полноэкранный режим. Если опустить `controls`, то пользователь будет испытывать неприятные ощущения, особенно если включен булевский атрибут `autoplay`. Обратите внимание, что некоторые браузеры не будут следовать директиве атрибута `autoplay`, если опущен атрибут boolean `muted`, поскольку автовоспроизведение медиафайла, даже при выключенном звуке и видимых элементах управления, как правило, вызывает неприятные ощущения у пользователя.

## Треки

Между открывающими и обязательными закрывающими тегами аудио- и видеофайлов включите один или несколько элементов [`<track>`](../../html/track.md), чтобы указать текстовые дорожки с таймингом. Следующий пример включает два файла `<track>`, обеспечивающих синхронизированные текстовые субтитры на английском и французском языках.

```html
<track
    label="English"
    kind="subtitles"
    srclang="en"
    src="vtt/subtitles-en.vtt"
    default
/>
<track
    label="Français"
    kind="subtitles"
    srclang="fr"
    lang="fr-fr"
    src="vtt/subtitles-fr.vtt"
/>
```

Файлы дорожек, указанные в атрибуте `src`, должны быть в формате [WebVTT](https://developer.mozilla.org/docs/Web/API/WebVTT_API) (.vtt). Файлы должны находиться на том же домене, что и HTML-документ, если только не включен атрибут [`crossorigin`](https://developer.mozilla.org/docs/Web/HTML/Attributes/crossorigin).

Для атрибута `kind` дорожки существует пять перечисляемых значений: `subtitles`, `captions`, `descriptions`, `chapters` и другие `metadata`.

Для транскрипции и перевода диалогов включите `subtitles` вместе с атрибутом `srclang`. Значение каждого атрибута `label` отображается пользователю в виде опции. Содержимое выбранной опции VTT отображается поверх видео. Внешний вид субтитров можно стилизовать с помощью атрибутов [`::cue` / `::cue()`](https://developer.mozilla.org/docs/Web/CSS/::cue).

Значение `kind="caption"` должно быть зарезервировано для транскрипции и перевода, включающих звуковые эффекты и другую необходимую аудиоинформацию. Это касается не только глухих зрителей. Возможно, пользователь не может найти свои наушники и поэтому включает субтитры. А может быть, он не совсем точно уловил последние тезисы любимого подкаста и хочет прочитать расшифровку, чтобы убедиться в правильности своего понимания. Наличие альтернативных способов доступа к аудио- и видеоконтенту - это важно и удобно.

Параметр `kind="description"` предназначен для текстовых описаний визуального контента в видео для пользователей, которые не могут видеть видео, будь то пользователи, использующие систему без экрана, например Google Home или Alexa, или слепые.

!!!note "Дополнительная информация"

    В разделе [Аудио и видео](../accessibility/video-audio.md) раздела [Учимся доступности](../accessibility.md) более подробно рассматриваются [субтитры](../accessibility/video-audio.md#captions), [транскрипты](../accessibility/video-audio.md#transcripts) и [описания аудио](../accessibility/video-audio.md#audio-descriptions).

[Предоставление титров и субтитров](https://developer.mozilla.org/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) с использованием формата [WebVTT](https://developer.mozilla.org/docs/Web/API/WebVTT_API) делает видео доступным для людей с нарушениями слуха. Помните, что инвалидность - это несоответствие между человеком и окружающей его средой. Нарушение слуха может быть вызвано тем, что пользователь находится в шумной обстановке, у него неисправны динамики или сломаны наушники, а также тем, что он потерял слух или оглох. Обеспечение доступности вашего контента помогает гораздо большему числу людей, чем вы думаете; оно помогает всем.

## Соображения по поводу фонового видео

Специалисты по маркетингу или дизайну могут пожелать, чтобы на сайте присутствовало фоновое видео. Как правило, это означает, что им нужно приглушенное, автоматически воспроизводящееся, зацикленное видео без каких-либо элементов управления. HTML может выглядеть следующим образом:

```html
<video
    autoplay
    loop
    muted
    poster="images/machine.jpg"
    role="none"
>
    <source src="videos/machines.webm" type="video/webm" />
    <source src="videos/machines.mp4" type="video/mp4" />
    <source src="videos/machines.ogv" type="video/ogg" />
</video>
```

Фоновые видеоролики недоступны. Контент не должен передаваться с помощью фоновых видеороликов без предоставления пользователям полного контроля над воспроизведением и доступа ко всем титрам. Поскольку этот видеоролик носит чисто декоративный характер, он включает [ARIA-роль](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles) [`none`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/none_role) и не содержит никакого вспомогательного контента. Чтобы улучшить работу всегда выключенных видеороликов, [удалите звуковую дорожку](https://gist.github.com/liangfu/97f877e311210fa0ae18a31fdd92982e) из своих медиаисточников.

Если видео воспроизводится в течение пяти секунд или менее, рекомендации по обеспечению доступности не требуют наличия механизма паузы, но все, что имеет атрибут boolean `loop`, по умолчанию будет циклиться бесконечно, превышая этот пятисекундный или любой другой временной лимит. Для удобства пользователей всегда следует предусмотреть возможность приостановки видео. Это проще всего сделать с помощью `controls`.

## Пользовательские элементы управления мультимедиа

Для отображения пользовательских элементов управления видео или аудио, а не встроенных в браузер, включите атрибут `controls`. Затем с помощью JavaScript добавьте пользовательские элементы управления мультимедиа и удалите атрибут controls. Например, можно добавить `<button>`, которая переключает состояние воспроизведения аудиофайла.

```html
<button
    id="playPause"
    aria-controls="idOfAudio"
    data-pause-text="Pause audio"
    data-play-text="Play audio"
>
    Pause audio
</button>
```

Данный пример включает в себя кнопку с атрибутами `dataset`, содержащими текст, который будет обновляться при переключении посетителя между состояниями воспроизведения и паузы. Атрибут `aria-controls` включен в `id` элемента, управляемого кнопкой, в данном случае - аудио. Каждая кнопка, управляющая звуком, имеет обработчик события.

Для создания настраиваемых элементов управления используйте [`HTMLMediaElement.play()`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play) и [`HTMLMediaElement.pause()`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause). При переключении состояния воспроизведения также переключается текст кнопки:

```js
const pauseButton = document.getElementById('playPause');

pauseButton.addEventListener('click', pauseAndPlay, false);

function pauseAndPlay() {
    console.log(this);
    const media = document.getElementById(
        this.getAttribute('aria-controls')
    );

    if (media.paused) {
        media.play();
        this.innerText = this.dataset.pauseText;
    } else {
        media.pause();
        this.innerText = this.dataset.playText;
    }
}
```

Включив атрибут `controls`, пользователь получает возможность управлять звуком (или видео) даже в случае сбоя JavaScript. Удалите атрибут `controls` только после того, как будет создана кнопка-заменитель.

```js
document
    .querySelector('[aria-controls]')
    .removeAttribute('controls');
```

Всегда включайте внешние элементы управления, если пользователи не могут получить доступ к ним, например, в случае фоновых видеороликов, в которых элементы управления скрыты за содержимым сайта. Важно понимать основы [требований к доступности мультимедиа](https://www.w3.org/WAI/WCAG21/Understanding/time-based-media), чтобы учесть потребности пользователей с различными экологическими и сенсорными потребностями, включая миллионы людей с нарушениями слуха и зрения. Мы только что коснулись [`HTMLMediaElement`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement), который предоставляет несколько свойств, методов и событий, наследуемых как [HTMLVideoElement](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement), так и [HTMLAudioElement](https://developer.mozilla.org/docs/Web/API/HTMLAudioElement), причем `HTMLMediaElement` добавляет несколько собственных свойств, методов и событий. Существует еще несколько [Media API](https://developer.mozilla.org/docs/Web/Media#apis), включая [TextTrack API](https://developer.mozilla.org/docs/Web/API/TextTrack). API [Media Capture and Streams](https://developer.mozilla.org/docs/Web/API/Media_Capture_and_Streams_API) и [MediaDevices](https://developer.mozilla.org/docs/Web/API/MediaDevices) можно использовать для записи звука с микрофона пользователя или записи экрана пользователя. API [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API) позволяет манипулировать живым и предварительно записанным звуком, а также передавать, сохранять или отправлять звук в элемент `<audio>`.

## Источник

-   [Audio and Video](https://web.dev/learn/html/audio-video/)
