---
description: PWA привязаны не только к экрану. В этой главе речь пойдет о возможностях, которыми PWA обладают сегодня с точки зрения аппаратного обеспечения, сенсоров и использования платформы.
icon: material/feature-search-outline
---

# Возможности

<big>PWA привязаны не только к экрану. В этой главе речь пойдет о возможностях, которыми PWA обладают сегодня с точки зрения аппаратного обеспечения, сенсоров и использования платформы.</big>

Прогрессивные веб-приложения могут делать больше, чем просто выводить содержимое на экран или подключаться к веб-сервисам. PWA могут работать с файлами из файловой системы, взаимодействовать с системным буфером обмена, получать доступ к аппаратным средствам, подключенным к устройству, и многое другое. Каждый Web API доступен для вашего PWA, а некоторые дополнительные API доступны при установке приложения.

Вы можете использовать [What Web Can Do Today](https://whatwebcando.today/), чтобы узнать, что возможно на каждой платформе. Для получения информации об отдельных API или возможностях можно использовать [Can I Use](https://caniuse.com) или таблицы совместимости браузеров на [MDN](https://developer.mozilla.org/).

## Всегда проверяйте поддержку функций

Первая буква в слове PWA означает progressive (прогрессивный), и это происходит от идеи [progressive enhancement](https://developer.mozilla.org/docs/Glossary/Progressive_Enhancement) и [feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection). Не стоит ожидать, что ваше приложение будет работать одинаково на всех устройствах. Разнообразие контекстов и возможностей на миллиардах устройств в разных странах делает PWA отличной платформой, благодаря их прогрессивности.

Это означает, что необходимо разрабатывать приложение в слоях, которые могут быть доступны не на всех устройствах, и проверять их доступность перед использованием.

Перед использованием необходимо проверить с помощью JavaScript, существует ли API, или запросить API, доступен ли сервис на данном устройстве.

## Мощный веб

Веб сегодня очень мощный. Например:

-   Вы можете создать [гиперлокальное](https://en.wikipedia.org/wiki/Hyperlocal) приложение для видеочата с WebRTC, геолокацией и push-сообщениями.
-   Можно сделать приложение устанавливаемым.
-   Можно добавить видеоэффекты с помощью WebAssembly.
-   Можно даже перенести его в виртуальную реальность с помощью WebGL и WebXR.

!!!warning ""

    Несмотря на то, что в Интернете существует множество возможностей, в них все еще есть пробелы, и именно здесь на помощь приходит проект [web capabilities project](https://www.chromium.org/teams/web-capabilities-fugu/). Проект описывает группу API-интерфейсов для расширения возможностей Интернета. Мы обсудили этот проект и то, как вы можете принять в нем участие, в главе [Experimental chapter](experimental.md).

## Расширение возможностей PWA

Разделим API-интерфейсы возможностей PWA на четыре группы:

-   Зеленая: API, доступные в каждом браузере на любой платформе, если это технически возможно. Большинство из них поставляется уже много лет, они считаются зрелыми, и их можно смело использовать. Примером API из этой группы является API геолокации.
-   Светло-зеленый: API доступны только в некоторых браузерах. Учитывая отсутствие поддержки на некоторых платформах, они созрели в поддерживаемой подгруппе браузеров, поэтому можно уверенно использовать возможности на них. Примером API из этой группы является WebUSB.
-   Желтый: экспериментальные API. Эти API еще не созрели, они доступны только в некоторых браузерах, а также в рамках тестов или испытаний. Мы немного рассказали об этих возможностях в главе [Experimental](experimental.md).
-   Красная: группа API, которые нельзя использовать в PWA и добавление которых планируется в долгосрочной перспективе. Примером API из этой группы является геозона.

!!!note ""

    Некоторые возможности требуют разрешения пользователя: в большинстве случаев диалог разрешения появляется при первом использовании. Сегодня можно запросить одно разрешение за раз, но в будущем на некоторых платформах можно будет запрашивать множество разрешений в одном диалоге, используя [Permissions API](https://w3c.github.io/permissions/).

### Зеленые возможности

Ниже приведен список наиболее важных возможностей, которые вы можете использовать в своем PWA.

**Основы**

-   _Кэширование файлов локально_ с помощью Cache API, как мы видели в главе [Кеширование](caching.md).
-   _Выполнение задач в потоках_ с помощью веб-рабочих, как мы видели в главе [Управление сложностью](complexity.md).
-   _Управление сетевыми запросами_ с помощью различных стратегий в сервис-воркере, как мы видели в главе [Сервис-воркеры](service-workers.md).
-   _2D Canvas_ для вывода двухмерной графики на экран с помощью [Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API).
-   _2D и 3D высокопроизводительный Canvas_, или [WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API), для рендеринга трехмерной графики.
-   _WebAssembly_, или [WASM](https://developer.mozilla.org/docs/WebAssembly), для выполнения низкоуровневого компилированного кода с целью повышения производительности.
-   _Обмен данными в реальном времени_, использующий [WebRTC API](https://developer.mozilla.org/docs/Web/API/WebRTC_API).
-   API-интерфейсы _Web Performance_ для измерения и повышения производительности. Дополнительную информацию см. в [руководстве по Performance API](https://developer.mozilla.org/docs/Web/API/Performance_API).
-   _Хранение данных локально_ с помощью IndexedDB и управления хранилищем для запроса квоты и запроса постоянного хранилища, как показано в главе [Offline data chapter](offline-data.md).
-   _Низкоуровневое аудио_ благодаря [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API).
-   _Определение переднего плана_ с помощью [Page Visibility API](https://developer.mozilla.org/docs/Web/API/Page_Visibility_API).
-   _Сетевое взаимодействие_ с помощью [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) и [WebSocket API](https://developer.mozilla.org/docs/Web/API/WebSockets_API).

**Оборудование и датчики**

-   _Геолокация_ получает данные о местоположении пользователя через различных провайдеров, таких как спутник или Wi-Fi, через интерфейс [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API).
-   _Камера и микрофон_ получают медиапотоки от камер и микрофонов с помощью интерфейса [Media devices](https://developer.mozilla.org/docs/Web/API/MediaDevices).
-   _Датчики_ собирают информацию в реальном времени с акселерометра, гироскопа, магнитометра и других устройств с помощью [Sensors API](https://developer.mozilla.org/docs/Web/API/Sensor_APIs) или более старых интерфейсов, таких как [DeviceMotionEvent](https://developer.mozilla.org/docs/Web/API/DeviceMotionEvent) и [DeviceOrientationEvent](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent). В Safari для их использования необходимо использовать [запрос диалога нестандартных разрешений](https://medium.com/flawless-app-stories/how-to-request-device-motion-and-orientation-permission-in-ios-13-74fc9d6cd140).
-   _Тач и указатель_ получают доступ к информации обо всех касаниях и нажатиях на указатель пальцем, мышью, трекпадом или пером, благодаря событиям [Pointer events](https://developer.mozilla.org/docs/Web/API/Pointer_events) и [Touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).

!!!note ""

    Safari также поддерживает [Gesture events](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW23), нестандартный API для обнаружения жестов вращения и щипка, который следует использовать с осторожностью.

-   _Геймпады_ для считывания информации, поступающей от стандартных геймпадов и джойстиков, подключенных к устройству, с помощью [Gamepad API](https://developer.mozilla.org/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).
-   _Биометрическая аутентификация_ (например, распознавание лица или отпечатков пальцев) с помощью [Web Authentication или WebAuthn](https://webauthn.guide/).

**Интеграция с операционной системой**

-   _Синтез речи и распознавание голоса_ используют установленные в платформе голоса для общения с пользователем и распознавания его слов, благодаря [Web Speech API](https://developer.mozilla.org/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).
-   _Обмен содержимым_ из вашего PWA на другие приложения и места на устройстве благодаря [Web Share API](https://developer.mozilla.org/docs/Web/API/Web_Share_API), как мы увидим в главе [Интеграция с ОС](os-integration.md).
-   _Доступ к буферу обмена_ для сохранения и извлечения содержимого из буфера обмена в различных форматах благодаря [Clipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard_API), как я показал в главе [Интеграция с ОС](os-integration.md).
-   _Управлять учетными данными и паролями пользователей_ с помощью [Credential Management API](https://developer.mozilla.org/docs/Web/API/Credential_Management_API).
-   _Включение воспроизведения видео "картинка в картинке"_ в ОС с помощью [picture-in-picture API](https://developer.mozilla.org/docs/Web/API/Picture-in-Picture_API).
-   _Рендеринг содержимого в полноэкранном режиме_ с помощью [Fullscreen API](https://developer.mozilla.org/docs/Web/API/Fullscreen_API), как я показывал в главе [Windows](windows.md).

!!!note ""

    Вы можете интегрировать свой PWA со многими приложениями для конкретной платформы, используя схемы URI и универсальные URL, как я показал в главе [Интеграция с ОС](os-integration.md).

### Светло-зеленые возможности

Здесь приведен список наиболее важных возможностей, которые можно использовать в PWA, с оговоркой, что они могут быть доступны не во всех браузерах.

**Основы**

-   _WebGL 2.0_, [новая версия спецификации WebGL](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext), соответствующая OpenGL 3.0.
-   _Кодеки_, низкоуровневый доступ к отдельным кадрам видеопотока и фрагментам звука; полезен для веб-приложений, которым требуется полный контроль над обработкой мультимедиа с помощью [Web Codecs API](https://developer.mozilla.org/docs/Web/API/WebCodecs_API).

**Оборудование и датчики**

-   _Дополнительные средства управления камерой_ для доступа к [средствам управления панорамированием, наклоном и зумом](https://web.dev/articles/camera-pan-tilt-zoom), в дополнение к API Media.
-   _Bluetooth LE_ для связи с устройствами Bluetooth с низким энергопотреблением вблизи пользователя с помощью [Web Bluetooth API](https://developer.mozilla.org/docs/Web/API/Web_Bluetooth_API). Дополнительную информацию можно найти в разделе [Общение с Bluetooth-устройствами через JavaScript](https://developer.chrome.com/articles/bluetooth/).
-   _Связь ближнего поля_ для обмена данными через NFC посредством легких сообщений формата обмена данными NFC (NDEF), например, с NFC-меткой или картой, с помощью [WebNFC API](https://developer.mozilla.org/docs/Web/API/Web_NFC_API). Для получения более подробной информации можно также прочитать [Взаимодействие с NFC-устройствами в Chrome для Android](https://web.dev/articles/nfc).
-   _Последовательная периферия_ для низкоуровневого доступа к устройствам, подключенным к устройству через последовательный порт, USB или последовательный порт по Bluetooth с помощью [Web Serial WPI](https://developer.mozilla.org/docs/Web/API/Web_Serial_API). По следующей ссылке вы можете узнать, как [читать из последовательного порта и записывать в него](https://web.dev/articles/serial).
-   Доступ к _USB-устройствам_ для взаимодействия с устройствами, подключенными по USB [WebUSB API](https://developer.mozilla.org/docs/Web/API/WebUSB_API). Более подробную информацию можно найти в разделе [доступ к USB-устройствам через Интернет](https://developer.chrome.com/articles/usb/).
-   _Устройства человеческого интерфейса_ позволяют вашему PWA взаимодействовать с любыми устройствами, подготовленными для взаимодействия с человеком, которые являются [необычными](https://developer.chrome.com/articles/hid/), используя [WebHID API](https://developer.mozilla.org/docs/Web/API/WebHID_API). Ознакомьтесь с этим руководством по [подключению к необычным HID-устройствам](https://developer.chrome.com/articles/hid/).

!!!note ""

    [Доступ к аппаратным устройствам через Интернет](https://web.dev/articles/devices-introduction) предлагает полное руководство по пониманию того, как различные аппаратные API взаимодействуют друг с другом.

-   _Ambient Light_ считывает текущий уровень освещенности или освещенность окружающего пространства вокруг устройства, в дополнение к [Sensors API](https://developer.mozilla.org/docs/Web/API/AmbientLightSensor).
-   _Вибрация_ обеспечивает тактильную обратную связь с пользователем, если устройство ее поддерживает, через [Vibration API](https://developer.mozilla.org/docs/Web/API/Vibration_API).
-   _Запись медиафайлов_ фиксирует данные, генерируемые объектом MediaStream или HTMLMediaElement (например, тегом `<video>`), для анализа, обработки или сохранения на диск благодаря [MediaRecorder API](https://developer.mozilla.org/docs/Web/API/MediaRecorder).
-   _Наложение блокировки пробуждения экрана_ позволяет предотвратить затемнение или блокировку экрана устройства, когда PWA необходимо продолжить работу, с помощью API [Screen Wake Lock API](https://developer.mozilla.org/docs/Web/API/Screen_Wake_Lock_API).
-   _Виртуальная реальность_ позволяет использовать гарнитуру и другие устройства в PWA благодаря [WebXR Device API](https://developer.mozilla.org/docs/Web/API/WebXR_Device_API).
-   _Дополненная реальность_ может быть реализована в PWA различными ресурсами, например, с помощью [WebXR Device API](https://developer.mozilla.org/docs/Web/API/WebXR_Device_API) или приложения [Safari Quick Look для AR-контента](https://webkit.org/blog/8421/viewing-augmented-reality-assets-in-safari-for-ios/).
-   _Выявление неактивных пользователей_ с помощью [Idle Detection API](https://developer.chrome.com/articles/idle-detection/).
-   _Блокировка ориентации_ фиксирует книжную или альбомную ориентацию, пока PWA находится на экране, благодаря [Screen Orientation API](https://developer.mozilla.org/docs/Web/API/Screen_Orientation_API) или свойству `orientation` в [Web App Manifest](web-app-manifest.md) для установленных приложений.
-   _Представление содержимого_ на проекторах и дополнительных дисплеях благодаря [Presentation API](https://developer.mozilla.org/docs/Web/API/Presentation_API).
-   _Блокировать указатель_ для получения дельта-информации о перемещении от указателей (мыши, трекпада и указателей) вместо значений позиции - полезно для некоторых игр - благодаря [Pointer Lock API](https://developer.mozilla.org/docs/Web/API/Pointer_Lock_API).

**Интеграция операционной системы**

-   _Чтение и запись файлов_ на устройстве благодаря [File System Access API](https://developer.mozilla.org/docs/Web/API/File_System_Access_API), как вы видели в главе [Интеграция ОС](os-integration.md).
-   _Получать содержимое из других приложений_ благодаря [Web Share Target](https://developer.chrome.com/articles/web-share-target/), как было показано в главе [Интеграция ОС](os-integration.md).
-   _Получение контактных данных_ с помощью [Contact Picker API](https://developer.mozilla.org/docs/Web/API/Contact_Picker_API), как показано в главе [Интеграция с ОС](os-integration.md).
-   _Синхронизация в фоновом режиме_, пока PWA не используется, благодаря [Background Synchronization API](https://developer.mozilla.org/docs/Web/API/Background_Synchronization_API).
-   _Планирование задач_ в то время, когда PWA не используется, благодаря [Web Periodic Background Synchronization API](https://developer.mozilla.org/docs/Web/API/Web_Periodic_Background_Synchronization_API).
-   _Отправка уведомлений_ с помощью [Web Push](https://developer.mozilla.org/docs/Web/API/Push_API) и [Web Notifications API](https://developer.mozilla.org/docs/Web/API/Notifications_API).
-   Передавать файлы в фоновом режиме, пока пользователь не использует PWA, благодаря [Background Fetch API](https://developer.mozilla.org/docs/Web/API/Background_Fetch_API).
-   _Интегрируйте воспроизведение мультимедиа_ с операционной системой с помощью [Media Session API](https://developer.mozilla.org/docs/Web/API/Media_Session_API).
-   _Управление платежами в PWA_ благодаря [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API). Apple также предлагает библиотеку [Apple Pay JS](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api) поверх Payment Request API.
-   _Запрашивать состояние сети_, например тип соединения (4G, WiFi) и флаг экономии данных, можно с помощью [Network Information API](https://developer.mozilla.org/docs/Web/API/Network_Information_API).
-   _Захват экрана пользователя_ для создания скринкастов или общего доступа к экрану с помощью [Screen Capture API](https://developer.mozilla.org/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).
-   _Обнаружение фигур_ с помощью аппаратно-ускоренных детекторов на устройстве, включая штрихкоды (человеческие лица и текстовый OCR пока находятся в разработке) с помощью [Shape Detection API](https://developer.chrome.com/articles/shape-detection/).
-   _Запрос памяти устройства_ с помощью интерфейса [Device Memory interface](https://developer.mozilla.org/docs/Web/API/Device_Memory_API).
-   _Одноразовые пароли через SMS_ позволяют автоматически получать код через SMS, отправленный с вашего сервера, используя [WebOTP API](https://developer.mozilla.org/docs/Web/API/WebOTP_API). В Safari реализовано подмножество решений на основе элемента `<input>`. Подробнее об этом можно прочитать в [WebKit's blog](https://developer.apple.com/news/?id=z0i801mg).
-   _Управление виртуальной клавиатурой_, отображаемой на экранах мобильных устройств, осуществляется с помощью [Virtual Keyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/).

!!!note ""

    Если вы публикуете PWA в некоторых каталогах и магазинах приложений, то можете получить доступ к дополнительным API. Например, если опубликовать PWA в Google Play с помощью [Trusted Web Activity](https://developer.chrome.com/docs/android/trusted-web-activity/), то можно использовать [Digital Goods API](https://github.com/WICG/digital-goods/blob/main/explainer.md) для взимания платы с пользователей за подписку и премиум-контент.

!!!tip ""

    Если у вас есть законный сценарий использования, который невозможно реализовать с помощью существующего набора API, вы можете отправить запрос на анализ сценария использования для возможного будущего веб-интерфейса, как мы увидим в главе [Experimental chapter](experimental.md).

## Ресурсы

-   [MDN: Web APIs](https://developer.mozilla.org/docs/Web/API)
-   [What Web Can Do Today](https://whatwebcando.today/)
-   [What PWA Can Do Today](https://whatpwacando.today/)
-   [Can I Use](https://caniuse.com/)
-   [iOS/iPadOS Примерное местоположение](https://firt.dev/ios-14/#geolocation-changes)
-   [Знакомство с Face ID и Touch ID для Web](https://webkit.org/blog/11312/meet-face-id-and-touch-id-for-the-web/)

:material-information-outline: Источник &mdash; [Capabilities](https://web.dev/learn/pwa/capabilities)
