let content = document.querySelector(".content");
let navSubtitle = document.querySelector(".nav-subtitle__inner");
let navTitle = document.querySelector(".nav-title");
let popupOpenMenu = document.querySelector('#menu-open__button');
let popupOpenMenuElement = document.querySelector('.nav-subtitle');
let imageNews = "source/picture/article/news/"
let image = imageNews + "metro.png"

let template = [
    {
        "title": "Главная",
        "article": [
            {
                "title": "Основная",
                "content": `
                <p class="heading">Добро пожаловать!</p>

                <p class="text">
                    <span class="text_yellow">Сурвивилав - это приватный проект,</span> связь двух серверов, для: 1.14.4 и 1.16.5. В связи с этим,
                    перед попаданием на сервера и в общую телеграмм-группу, мы проводим регистрацию (кроме
                    тех, кого пригласили другие пользователи, уже играющие).
                </p>
                <p class="text">
                    <i class="i">Данные выдаются после принятия вашей заявки.</i> 
                </p>
                `,
            },
            {
                "title": "Администрация",
                "content": `
                <p class="heading">От администрации</p>

                <p class="text">
                    <span class="text_yellow">Приветствую! Меня можешь звать Roman_Voran,</span> - главный администратор проекта, создатель этого веб-сайта,
                    создатель символики сервера, а так же его спавна. Буду очень рад видеть больше приятных людей в проекте!
                </p>
    
                <p class="text">
                    <span class="text_yellow">В состав нашей администрации, входят:</span>
                    <br> DNLL - владелец проекта
                    <br> Roman_Voran - главный администратор проекта
                    <br> Hell_Artem - главный модератор проекта
                    <br> <i class="i">По всем вопросам к Roman_Voran'у.</i>
                </p>
    
                <p class="text">
                    Последним изменением в администрацтивном составе, было снятие Mvittilalka с поста администратора.
                    Наборов в административный состав мы не проводим!
                </p>
                `,
            },
            {
                "title": "Социальные сети",
                "content": `
                <p class="heading">Социальные сети</p>
            <p class="text"><i class="i">Возможны ошибки в этой статье</i></p>

            <p class="text">
                <a href="https://t.me/+RDEAO2NJGXo2NzFi" class="link">Семья сурвивилав :D - регистрация</a> - это чат в телеграм, цель которого набрать новых людей.

                <br>Семья сурвивилав :D - это основной чат проекта, цель которого: простое общение.
                <br>

                <br>Сайт проекта [<a href="https://rakzaryt.github.io/survivilav/" class="link">https://rakzaryt.github.io/survivilav/</a>] - это место, где вы можете узнать больше информации по нашему проекту.

                <br>Survivilav News - наш тик-ток аккаунт, который на данный момент не активен.

                <br>Survivilav - наш дискорд канал, на данный момент не активен.

                <br>SURVIVILAV - наш канал на ютубе, на данный момент не активен.
                <br>

                <br>Все видеоролики, по нашему серверу, представлены ниже (видеоролики, могут не иметь отношения к авторам проекта):
                <br><a href="https://www.youtube.com/watch?v=BGi2cuHCkUw" class="link">https://www.youtube.com/watch?v=BGi2cuHCkUw</a>
                <br><a href="https://www.youtube.com/watch?v=MKi5O_23AXw" class="link">https://www.youtube.com/watch?v=MKi5O_23AXw</a>
                <br><a href="https://www.youtube.com/watch?v=imBSJjMM5tI&t" class="link">https://www.youtube.com/watch?v=imBSJjMM5tI&t</a>
                <br><a href="https://www.youtube.com/watch?v=UgxMXylgIAo" class="link">https://www.youtube.com/watch?v=UgxMXylgIAo</a>
                <br><a href="https://www.youtube.com/watch?v=YcSKPduX4iY" class="link">https://www.youtube.com/watch?v=YcSKPduX4iY</a>
                <br>Будем рады добавить, ваше видео в данный список (Добавляем/удаляем по просьбе).
            </p>
                `,
            },
            {
                "title": "Правила проекта",
                "content": `
                <p class="heading">Правила проекта</p>
            <p class="text">
                <br>ЮИграя на сервере вы автоматически соглашаетесь со всеми правилами.
                <br>На все правила есть исключения, обращайтесь к составу высшей администрации или модерации указанной ниже.
                Правила написаны: 
                <br>
                <br><span class="text_yellow">Broadcast [Bct] –</span> Запрещено рекламировать сторонние проекты. (Бан - навсегда минут)
                <br>
                <br><span class="text_yellow">ServerGay [SG] –</span> Запрещено оскорблять сервер (Бан - навсегда минут)
                <br>
                <br><span class="text_yellow">MassViolation [MV] –</span> При нарушении 2-ух, и более правил, все нарушения начинают суммироваться в бан. (Бан - 60/14400 минут)
                <br>
                <br><span class="text_yellow">Bug Abuse –</span> Запрещено использовать баги сервера в целях собственной выгоды. (Бан - 60/43200 минут)
                <br>
                <br><span class="text_yellow">Chetas –</span> Запрещено использовать стороннее П.О которое может дать преимущество перед другими игроками. (Бан - 60/43200 минут)
                Правила добросовестной игры на Survivilav
                <br>
                <br><span class="text_yellow">Toxic [Tx] –</span> Игрокам запрещено неуважительно себя вести, по отношению к остальным. (Мут/Гаг/Джаил - 4/1440 минут)
                <br>
                <br><span class="text_yellow">ChatToxic [CT] –</span> Запрещено грубить/оскорблять в чате. (Мут - 10/30 минут)
                <br>
                <br><span class="text_yellow">BadWords [BW] –</span> Запрещено писать какие-либо плохие слова в чате. (по усмотрению администратора) (Мут - 5/60 минут)
                Правила администрирования на Survivilav
                <br>
                <br><span class="text_yellow">NoGame [NG] –</span> Запрещено закрывать глаза на нарушения (искл.Высшая администрация). (Бан/Джаил - 4/1440 минут) 
                - Не юзабельно -
                <br>
                <br><span class="text_yellow">NonRP [NRP] –</span> Запрещено подталкивать игроков на нарушения действующих правил. (Бан/Джаил - 4/1440 минут)
                <br>
                <br><span class="text_yellow">Neadekvat [NT] –</span> Категорически запрещено себя неадеватно вести на посту администратора/модератора (маты, оскорбления, по усмотрению администрации). (Снятие с поста администратора)
            </p>
            <p class="text">
                <b class="b">Правила от: DNLL</b>
            </p>
                `,
            },
            {
                "title": "Обновления",
                "content": `
                <p class="heading">Последнее обновление проекта:</p>
                <p class="text"><b class="b">Был разработан новый веб-сайт.</b> - 06.11.2023</p>
                <p class="text"><b class="b">
                    У веб-сайта появился простой адаптив для телефонов. На
                    сервере 1.16.5: 1. Теперь в табе пишутся: <часы>/<минуты> наигранные, минуты
                    учитывают существование часов. Теперь выше 59 нельзя.
                    2. Убраны суффиксы у всех игроков. Только мешали.
                    3. Теперь префиксы в табе и в чате совпадают.
                    4. Добавлен плагин ImageOnMap - на картинки в майне. Пока-что только для админов, далее посмотрим.
                    5. Добавлены команды: /sit /lay, - для всех игроков.
                    6. Добавлена команда /spawn, спавн временно перемещён на РВХЛ.
                </b> - 08.11.2023</p>
                `,
            },
        ],
    },
    {
        "title": "Проекты",
        "article": [
            {
                "title": "Сервер 1.16.5",
                "content": `
                <p class="heading">Основной сервер</p>
                <p class="text">Сурвивилав 1.16.5 - это основной сервер проекта, здесь установлены плагины, на: простые команды типа /home, /warp и так далее. Помимо этого здесь, у большинства присутствуют моды: EmotiCraft, PlasmoVoice, Kotlin.</p>
                `,
            },
            {
                "title": "Сервер 1.14.4",
                "content": `
                <p class="heading">Дополнительный сервер</p>
                <p class="text">Сурвивилав 1.14.4 - это дополнительный (более старший товарищ), здесь установлены плагины, на: приваты, базовые команды, и так далее. Нет никаких модов.</p>
                `,
            },
        ],
    },
    {
        "title": "Новости",
        "article": [
            {
                "title": "Информация",
                "content": `
                <p class="heading">Новости:</p>
                <p class="text">
                    Желательно читать в этом порядке:
                    <br><span class="text_yellow">Информация</span>
                    <br><span class="text_yellow">Очередные будни</span> - 06.11.2023 - 07.11.2023
                </p>
                `,
            },
            {
                "title": "Очередные будни",
                "content": `
                <p class="heading">Очередные будни</p>
                <p class="text">
                    Недавно меня наняли, вместе с Rush_Lord'ом на строительство, нового интересного
                    сооружения. Планы были крупные, но и зарплата порадовала! Стройка происходила в прекрасном месте:
                    район станции метро Степановская. Спасибо Chepikpro за возможность заработать.
                </p>
                <p class="heading">Новая станция</p>
                <p class="text">
                    Была построена новая мини-станция и путь к ней. Станцию строил только я, -
                    название "Новейшая", здесь будут проходить ивенты, мини-игры и прочие вещи.
                    У меня есть планы на эту станцию, не переключайтесь! 
                </p>
                <p class="text">
                    Теперь карта метро выглядит как-то так:
                </p>
                <img alt="" src="${imageNews + "metro.png"}" class="picture picture_content">
                <p class="text"><i class="i">Новость от: Roman_Voran</i></p>
                `,
            },
        ],
    },
    {
        "title": "Туториалы",
        "article": [
            {
                "title": "О странице",
                "content": `
                <p class="heading">О странице</p>
                <p class="text">
                    Чуть позже здесь будут объяснения самых простых состовляющих майнкрафта: моды, плагины, лаунчеры и т.д.
                </p>
                `,
            },
            {
                "title": "Как попасть на сервере?",
                "content": `
                <p class="heading">Регистрация</p>
                <p class="text">
                    Сурвивилав - более-менее приватный так, что для попадания сюда
                    вам потребуется зарегистрироваться, через наш телеграм регистрации.
                    Потом: кто-либо[игроки, модератор, администратор] проверят вашу
                    форму и вы получите доступ или нет :P
                    <br>
                    <br><i class="i">Если вы по приглашению игрока, уже играющего на сервере, то
                    можете входить на проект, без какой-либо регистрации. Тот кто пригласил
                    должен написать администрации.</i>
                </p>
                `,
            },
        ],
    },
    {
        "title": "Галерея",
        "article": [
            {
                "title": "Скриншоты сервера",
                "content": `
                <p class="heading">Скриншоты сервера</p>
                <img alt="" src="${imageNews + "bed.png"}" class="picture picture_content">
                <img alt="" src="${imageNews + "home.png"}" class="picture picture_content">
                <img alt="" src="${imageNews + "market.png"}" class="picture picture_content">

                <img alt="" src="${imageNews + "other bed.png"}" class="picture picture_content">
                <img alt="" src="${imageNews + "ship.png"}" class="picture picture_content">
                <img alt="" src="${imageNews + "spawn.png"}" class="picture picture_content">

                <img alt="" src="${imageNews + "rainbow.png"}" class="picture picture_content">
                <img alt="" src="${imageNews + "storehose.png"}" class="picture picture_content">
                <img alt="" src="${imageNews + "title.png"}" class="picture picture_content">
                `,
            },
        ],
    },
];

// Функция вывода кнопок сверху
function viewButtonTop() {
    let viewButtonTopInner = '<img src="source/picture/icon.png" alt="логотип сайта" class="picture logo">';
    for (templateElement in template) {
        viewButtonTopInner = viewButtonTopInner + `
        <button class="button" onclick="viewButtonLeft ('${template[templateElement]["title"]}'); contentClear ();">
                <p class="text">${template[templateElement]["title"]}</p>
        </button>
        `;
    };

    navTitle.innerHTML = viewButtonTopInner;
    return viewButtonTopInner;
};

// Функция вывода кнопок слева
function viewButtonLeft(value = "Главная") {
    let viewButtonLeftInner = '';
    for (templateParentElement in template) {
        if (template[templateParentElement]["title"] === value) {
            templateArticles = template[templateParentElement]["article"];
            for (templateElement in templateArticles) {
                viewButtonLeftInner = viewButtonLeftInner + `
                <button class="button nav-subtitle__button" onclick="viewContent ('${value}', '${templateArticles[templateElement]['title']}'); hide();">
                        <p class="text">${templateArticles[templateElement]["title"]}</p>
                </button>
                `;
            };
        };
    };

    navSubtitle.innerHTML = viewButtonLeftInner;
    return viewButtonLeftInner;
};

function viewContent(valueTop = "Главная", valueLeft = "") {
    let viewContentInner = '';
    for (templateParentElement in template) {
        if (template[templateParentElement]["title"] === valueTop) {
            templateArticles = template[templateParentElement]["article"];
            for (templateElement in templateArticles) {
                if (templateArticles[templateElement]["title"] === valueLeft) {
                    viewContentInner = viewContentInner + `
                        ${templateArticles[templateElement]["content"]}
                    `;
                }
            };
        };
    };

    content.innerHTML = viewContentInner;
    return viewContentInner;
}

function contentClear() {
    content.innerHTML = "";
}

function start() {
    viewButtonTop()
    viewButtonLeft("Главная")
    viewContent("Главная", "Основная")
    console.log("Готово");
}

start();

popupOpenMenu.onclick = function (event) {
    let popupOpenMenuElement = document.querySelector('.nav-subtitle');
    if (popupOpenMenuElement.style.display === 'block') {
        popupOpenMenuElement.style.display = 'none';
    } else {
        popupOpenMenuElement.style.display = 'block';
    }
}

function hide() {
    if (document.documentElement.clientWidth <= 620) {
        popupOpenMenuElement.style.display = 'none';
    } else {
        popupOpenMenuElement.style.display = 'block';
    }
}

window.addEventListener('resize', (e) => {
    hide();
});