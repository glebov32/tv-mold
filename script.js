// =========================================================================
// 1. НАСТРОЙКИ И ПОЛНЫЙ КАТАЛОГ КАНАЛОВ STARNET / MOLDTELECOM
// =========================================================================

// Открытые интернет-базы плейлистов (основные + резервные)
const PLAYLIST_SOURCES = {
    md: [
        'https://iptv-org.github.io/iptv/countries/md.m3u',
        'https://iptv-org.github.io/iptv/languages/ron.m3u'
    ],
    ru: [
        'https://iptv-org.github.io/iptv/countries/ru.m3u',
        'https://iptv-org.github.io/iptv/languages/rus.m3u'
    ],
    all: [
        'https://iptv-org.github.io/iptv/countries/md.m3u',
        'https://iptv-org.github.io/iptv/countries/ru.m3u',
        'https://iptv-org.github.io/iptv/languages/ron.m3u',
        'https://iptv-org.github.io/iptv/languages/rus.m3u',
        'https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8'
    ]
};

// ПОЛНЫЙ СПИСОК КАНАЛОВ СЕТКИ MOLDTELECOM TV И STARNET TV
const PROVIDER_FULL_CATALOG = [
    // --- НАЦИОНАЛЬНЫЕ И ИНФОРМАЦИОННЫЕ КАНАЛЫ МОЛДОВЫ ---
    { id: 'md1', title: 'Moldova 1 HD', group: 'Молдова • Общие', keywords: ['moldova 1', 'moldova1'] },
    { id: 'md2', title: 'Moldova 2', group: 'Молдова • Общие', keywords: ['moldova 2', 'moldova2'] },
    { id: 'jurnaltv', title: 'Jurnal TV HD', group: 'Молдова • Общие', keywords: ['jurnal tv', 'jurnaltv'] },
    { id: 'tv8', title: 'TV8 HD', group: 'Молдова • Новости', keywords: ['tv8'] },
    { id: 'protv_md', title: 'PRO TV Chișinău', group: 'Молдова • Общие', keywords: ['pro tv chisinau', 'protv chisinau', 'pro tv md'] },
    { id: 'tvr_md', title: 'TVR Moldova', group: 'Молдова • Общие', keywords: ['tvr moldova', 'tvrmoldova'] },
    { id: 'prime_md', title: 'Prime HD', group: 'Молдова • Общие', keywords: ['prime md', 'prime moldova'] },
    { id: 'publika', title: 'Publika TV', group: 'Молдова • Новости', keywords: ['publika'] },
    { id: 'canal2', title: 'Canal 2', group: 'Молдова • Общие', keywords: ['canal 2', 'canal2'] },
    { id: 'canal3', title: 'Canal 3', group: 'Молдова • Общие', keywords: ['canal 3', 'canal3'] },
    { id: 'rlive', title: 'R Live TV HD', group: 'Молдова • Новости', keywords: ['rlive', 'r live'] },
    { id: 'tvc21', title: 'TVC 21', group: 'Молдова • Общие', keywords: ['tvc 21', 'tvc21'] },
    { id: 'n4', title: 'N4', group: 'Молдова • Общие', keywords: ['n4'] },
    { id: 'rtr_md', title: 'RTR Moldova', group: 'Молдова • Общие', keywords: ['rtr moldova'] },
    { id: 'ntv_md', title: 'NTV Moldova', group: 'Молдова • Общие', keywords: ['ntv moldova'] },
    { id: 'exclusiv', title: 'Exclusiv TV', group: 'Молдова • Развлечения', keywords: ['exclusiv tv'] },
    { id: 'cinema1', title: 'Cinema 1', group: 'Молдова • Кино', keywords: ['cinema 1', 'cinema1'] },
    { id: 'we_sport', title: 'We Sport TV HD', group: 'Молдова • Спорт', keywords: ['we sport'] },
    { id: 'agro_md', title: 'Agro TV Moldova', group: 'Молдова • Тематические', keywords: ['agro tv', 'agrotv'] },
    { id: 'privesc', title: 'Privesc.Eu TV', group: 'Молдова • Новости', keywords: ['privesc'] },
    { id: 'busuioc', title: 'Busuioc TV', group: 'Молдова • Музыка', keywords: ['busuioc'] },
    { id: 'noroc', title: 'Noroc TV', group: 'Молдова • Музыка', keywords: ['noroc'] },
    { id: 'tezaur', title: 'Tezaur Folcloric', group: 'Молдова • Музыка', keywords: ['tezaur'] },
    { id: 'gurinel', title: 'Gurinel TV', group: 'Молдова • Детские', keywords: ['gurinel'] },

    // --- ПОПУЛЯРНЫЕ РУМЫНСКИЕ И ЕВРОПЕЙСКИЕ КАНАЛЫ ПАКЕТА ---
    { id: 'tvr1', title: 'TVR 1 HD', group: 'Румыния • Общие', keywords: ['tvr 1', 'tvr1'] },
    { id: 'antena1', title: 'Antena 1', group: 'Румыния • Общие', keywords: ['antena 1', 'antena1'] },
    { id: 'kanald_ro', title: 'Kanal D Romania', group: 'Румыния • Общие', keywords: ['kanal d'] },
    { id: 'digi24', title: 'Digi 24 HD', group: 'Румыния • Новости', keywords: ['digi 24', 'digi24'] },
    { id: 'b1tv', title: 'B1 TV', group: 'Румыния • Новости', keywords: ['b1 tv', 'b1tv'] },
    { id: 'realitatea', title: 'Realitatea Plus', group: 'Румыния • Новости', keywords: ['realitatea'] },
    { id: 'kiss_tv', title: 'Kiss TV', group: 'Румыния • Музыка', keywords: ['kiss tv'] },
    { id: 'utv', title: 'U TV', group: 'Румыния • Музыка', keywords: ['u tv', 'utv'] },
    { id: 'euronews', title: 'Euronews', group: 'Международные • Новости', keywords: ['euronews'] },

    // --- РОССИЙСКИЕ И СНГ КАНАЛЫ ПАКЕТА ---
    { id: '1tv_ru', title: 'Первый канал HD', group: 'Россия • Федеральные', keywords: ['первый канал', '1tv', 'perviy'] },
    { id: 'rossiya1', title: 'Россия 1 / РТР-Планета', group: 'Россия • Федеральные', keywords: ['россия 1', 'россия-1', 'ртр', 'rossiya 1'] },
    { id: 'rossiya24', title: 'Россия 24', group: 'Россия • Новости', keywords: ['россия 24', 'россия-24', 'rossiya 24'] },
    { id: 'ntv_ru', title: 'НТВ / НТВ-Мир', group: 'Россия • Федеральные', keywords: ['нтв', 'ntv'] },
    { id: 'tnt', title: 'ТНТ HD', group: 'Россия • Развлечения', keywords: ['тнт', 'tnt'] },
    { id: 'sts', title: 'СТС HD', group: 'Россия • Развлечения', keywords: ['стс', 'sts'] },
    { id: 'rentv', title: 'РЕН ТВ', group: 'Россия • Развлечения', keywords: ['рен тв', 'рен-тв', 'ren tv'] },
    { id: 'friday', title: 'Пятница!', group: 'Россия • Развлечения', keywords: ['пятница', 'pyatnitsa'] },
    { id: 'tv3_ru', title: 'ТВ-3', group: 'Россия • Кино и Мистика', keywords: ['тв-3', 'тв 3', 'tv3'] },
    { id: 'tvc_ru', title: 'ТВ Центр (ТВЦ)', group: 'Россия • Федеральные', keywords: ['тв центр', 'твц'] },
    { id: '5kanal', title: 'Пятый канал', group: 'Россия • Федеральные', keywords: ['пятый канал', '5 канал'] },
    { id: 'domashniy', title: 'Домашний', group: 'Россия • Развлечения', keywords: ['домашний', 'domashniy'] },
    { id: 'zvezda', title: 'Звезда', group: 'Россия • Патриотические', keywords: ['звезда', 'zvezda'] },
    { id: 'mir24', title: 'Мир / Мир 24', group: 'СНГ • Новости', keywords: ['мир 24', 'телеканал мир', 'mir 24'] },
    { id: 'kultura', title: 'Россия К (Культура)', group: 'Россия • Культура', keywords: ['россия к', 'культура'] },
    { id: 'otr', title: 'ОТР', group: 'Россия • Общественные', keywords: ['отр'] },
    { id: 'spas', title: 'Спас', group: 'Россия • Тематические', keywords: ['спас', 'spas'] },

    // --- КИНО, СПОРТ, ПОЗНАВАТЕЛЬНЫЕ, ДЕТСКИЕ И МУЗЫКА ---
    { id: 'match_tv', title: 'Матч! ТВ HD', group: 'Спорт', keywords: ['матч тв', 'матч!', 'match tv'] },
    { id: 'eurosport1', title: 'Eurosport 1 HD', group: 'Спорт', keywords: ['eurosport 1', 'евроспорт'] },
    { id: 'setanta', title: 'Setanta Sports', group: 'Спорт', keywords: ['setanta'] },
    { id: 'kinopremiere', title: 'Кинопремьера / Наше Кино', group: 'Кино', keywords: ['кино', 'дом кино', 'мофильм', 'кинозал'] },
    { id: 'tv1000', title: 'Viju TV1000 / Русское Кино', group: 'Кино', keywords: ['tv1000', 'viju'] },
    { id: 'discovery', title: 'Discovery / Познавательный HD', group: 'Познавательные', keywords: ['discovery', 'наука', 'rtg', 'моя планета', 'тайна'] },
    { id: 'natgeo', title: 'National Geographic / Природа', group: 'Познавательные', keywords: ['national geographic', 'nat geo', 'живая природа'] },
    { id: 'karusel', title: 'Карусель', group: 'Детские', keywords: ['карусель', 'karusel'] },
    { id: 'mult', title: 'Мульт / СТС Kids', group: 'Детские', keywords: ['мульт', 'детский', 'ani'] },
    { id: 'muztv', title: 'Муз-ТВ', group: 'Музыка', keywords: ['муз-тв', 'муз тв', 'muz tv'] },
    { id: 'rutv', title: 'RU.TV', group: 'Музыка', keywords: ['ru.tv', 'ru tv', 'ру тв'] },
    { id: 'bridgetv', title: 'Bridge TV', group: 'Музыка', keywords: ['bridge tv', 'бридж'] },
    { id: 'shanson', title: 'Шансон ТВ', group: 'Музыка', keywords: ['шансон', 'shanson'] }
];

// Цепочка CORS-прокси для загрузки сторонних .m3u ссылок
const CORS_PROXIES = [
    (url) => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
    (url) => 'https://corsproxy.io/?url=' + encodeURIComponent(url),
    (url) => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url)
];

// Запасная иконка для каналов без логотипа
const DEFAULT_LOGO = 'icons/icon-192.png';

// Ключи для сохранения данных в памяти браузера (localStorage)
const STORAGE_FAV_KEY = 'online_tv_favorites_v1';
const STORAGE_BROKEN_KEY = 'online_tv_broken_urls_v1';
const STORAGE_PROVIDER_LINKS_KEY = 'online_tv_provider_custom_links_v1';

// Глобальные переменные состояния
let allChannels = [];
let favoriteChannels = [];
let brokenUrls = new Set();
let customProviderLinks = {};
let currentCategory = 'provider';
let activeChannel = null;
let hls = null;
let deferredInstallPrompt = null;
let isTelegramMiniApp = false;

// Элементы управления на странице
const channelListElement = document.getElementById('channelList');
const videoPlayer = document.getElementById('videoPlayer');
const statusText = document.getElementById('statusText');
const searchInput = document.getElementById('searchInput');
const hideBrokenCheckbox = document.getElementById('hideBrokenCheckbox');
const favCountElement = document.getElementById('favCount');
const installPwaBtn = document.getElementById('btn-install-pwa');
const iosInstallModal = document.getElementById('iosInstallModal');

// =========================================================================
// 2. TELEGRAM MINI APP + PWA (ANDROID / IOS)
// =========================================================================

function initTelegramMiniApp() {
    const tg = window.Telegram && window.Telegram.WebApp;
    if (!tg || !tg.platform || tg.platform === 'unknown') {
        return;
    }

    isTelegramMiniApp = true;
    document.body.classList.add('tg-mini-app');

    // Внутри Telegram кнопка установки PWA не нужна
    if (installPwaBtn) {
        installPwaBtn.style.display = 'none';
    }

    try {
        tg.ready();
        tg.expand();
        if (typeof tg.setHeaderColor === 'function') tg.setHeaderColor('#1f1f1f');
        if (typeof tg.setBackgroundColor === 'function') tg.setBackgroundColor('#121212');
        if (typeof tg.disableVerticalSwipes === 'function') tg.disableVerticalSwipes();
    } catch (e) {
        console.warn('Telegram WebApp init warning:', e);
    }
}

function initPwa() {
    // Регистрация Service Worker (работает на HTTPS и localhost)
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(err => {
                console.warn('Service Worker не зарегистрирован:', err);
            });
        });
    }

    if (isTelegramMiniApp) return;

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);

    // На iOS показываем кнопку с инструкцией «На экран Домой», если приложение ещё не установлено
    if (isIos && !isStandalone && installPwaBtn) {
        installPwaBtn.style.display = 'inline-block';
    }

    // На Android / Chrome перехватываем нативный диалог установки
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        if (!isStandalone && !isTelegramMiniApp && installPwaBtn) {
            installPwaBtn.style.display = 'inline-block';
        }
    });

    window.addEventListener('appinstalled', () => {
        deferredInstallPrompt = null;
        if (installPwaBtn) installPwaBtn.style.display = 'none';
    });
}

async function handleInstallClick() {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        if (installPwaBtn) installPwaBtn.style.display = 'none';
        return;
    }

    if (iosInstallModal) {
        iosInstallModal.classList.add('open');
    }
}

function closeIosInstallModal() {
    if (iosInstallModal) {
        iosInstallModal.classList.remove('open');
    }
}

// =========================================================================
// 3. ИНИЦИАЛИЗАЦИЯ И РАБОТА С ПАМЯТЬЮ БРАУЗЕРА (LOCALSTORAGE)
// =========================================================================

function initStorage() {
    try {
        const savedFavs = localStorage.getItem(STORAGE_FAV_KEY);
        if (savedFavs) favoriteChannels = JSON.parse(savedFavs);

        const savedBroken = localStorage.getItem(STORAGE_BROKEN_KEY);
        if (savedBroken) brokenUrls = new Set(JSON.parse(savedBroken));

        const savedLinks = localStorage.getItem(STORAGE_PROVIDER_LINKS_KEY);
        if (savedLinks) customProviderLinks = JSON.parse(savedLinks);
    } catch (e) {
        console.warn('Не удалось прочитать память браузера:', e);
    }
    updateFavCounter();
}

function updateFavCounter() {
    favCountElement.innerText = favoriteChannels.length;
}

function isFavorite(channelUrl) {
    if (!channelUrl) return false;
    return favoriteChannels.some(ch => ch.url === channelUrl);
}

function toggleFavorite(channel, event) {
    event.stopPropagation();

    if (!channel.url) {
        alert('Сначала привяжите рабочую ссылку (кнопка 🔗) к этому каналу, чтобы добавить его в Избранное!');
        return;
    }

    const index = favoriteChannels.findIndex(ch => ch.url === channel.url);
    if (index === -1) {
        favoriteChannels.push({
            providerId: channel.providerId || '',
            name: channel.name,
            logo: channel.logo,
            url: channel.url,
            group: channel.group || ''
        });
    } else {
        favoriteChannels.splice(index, 1);
    }

    localStorage.setItem(STORAGE_FAV_KEY, JSON.stringify(favoriteChannels));
    updateFavCounter();
    renderCurrentList();
}

function markChannelAsBroken(channelUrl) {
    if (!channelUrl) return;
    brokenUrls.add(channelUrl);
    try {
        localStorage.setItem(STORAGE_BROKEN_KEY, JSON.stringify(Array.from(brokenUrls)));
    } catch (e) {}
    renderCurrentList();
}

// =========================================================================
// 4. ФОРМИРОВАНИЕ ПОЛНОГО СПИСКА ПРОВАЙДЕРОВ (STARNET / MOLDTELECOM)
// =========================================================================

function buildFullProviderList(openChannelsList) {
    const fullList = [];

    PROVIDER_FULL_CATALOG.forEach(item => {
        const userCustomUrl = customProviderLinks[item.id];

        const matchedStream = openChannelsList.find(openCh => {
            if (brokenUrls.has(openCh.url)) return false;
            const textToSearch = openCh.name.toLowerCase();
            return item.keywords.some(kw => textToSearch.includes(kw.toLowerCase()));
        });

        const finalUrl = userCustomUrl || (matchedStream ? matchedStream.url : '');
        const finalLogo = matchedStream ? matchedStream.logo : DEFAULT_LOGO;

        fullList.push({
            providerId: item.id,
            name: item.title,
            group: item.group,
            logo: finalLogo,
            url: finalUrl,
            locked: !finalUrl
        });
    });

    fullList.sort((a, b) => Number(a.locked) - Number(b.locked));
    return fullList;
}

function promptCustomStreamForChannel(channel, event) {
    if (event) event.stopPropagation();

    const currentUrl = channel.url || '';
    const inputUrl = prompt(
        `Канал «${channel.name}» (${channel.group || 'Общие'})\n\n` +
        `Вставьте прямую ссылку на видеопоток (.m3u8) для этого канала (или оставьте поле пустым для сброса):`,
        currentUrl
    );

    if (inputUrl === null) return;

    const trimmed = inputUrl.trim();
    const key = channel.providerId || channel.name;

    if (trimmed) {
        customProviderLinks[key] = trimmed;
        channel.url = trimmed;
        channel.locked = false;
        brokenUrls.delete(trimmed);
    } else {
        delete customProviderLinks[key];
        channel.url = '';
        channel.locked = true;
    }

    localStorage.setItem(STORAGE_PROVIDER_LINKS_KEY, JSON.stringify(customProviderLinks));
    renderCurrentList();

    if (channel.url) {
        playChannel(channel);
    }
}

// =========================================================================
// 5. ЗАГРУЗКА ПЛЕЙЛИСТОВ (ПО КАТЕГОРИЯМ И СЕТКЕ ПРОВАЙДЕРА)
// =========================================================================

async function selectCategory(category) {
    currentCategory = category;

    document.querySelectorAll('header .controls button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + category);
    if (activeBtn) activeBtn.classList.add('active');

    searchInput.value = '';

    if (category === 'fav') {
        allChannels = [...favoriteChannels];
        renderCurrentList();
        statusText.innerText = `⭐ В избранном каналов: ${allChannels.length}`;
        return;
    }

    if (category === 'provider') {
        statusText.innerText = '⏳ Загружаем каталог StarNet / Moldtelecom и ищем открытые потоки...';
        channelListElement.innerHTML = '';

        try {
            const urls = PLAYLIST_SOURCES.all;
            const results = await Promise.allSettled(urls.map(url => fetchText(url)));
            let combinedText = '';
            results.forEach(res => {
                if (res.status === 'fulfilled') combinedText += res.value + '\n';
            });

            const openChannels = parseM3U(combinedText);
            allChannels = buildFullProviderList(openChannels);
            renderCurrentList();

            const onlineCount = allChannels.filter(ch => !ch.locked).length;
            statusText.innerText = `📡 StarNet/Moldtelecom: всего ${allChannels.length} (🟢 Онлайн: ${onlineCount}, 🔒 Закрыто: ${allChannels.length - onlineCount})`;
        } catch (err) {
            allChannels = buildFullProviderList([]);
            renderCurrentList();
            statusText.innerText = '⚠️ Открытые базы временно недоступны, показан каталог провайдера.';
        }
        return;
    }

    statusText.innerText = '⏳ Загружаем плейлисты...';
    channelListElement.innerHTML = '';

    const urls = PLAYLIST_SOURCES[category] || [];

    try {
        const results = await Promise.allSettled(urls.map(url => fetchText(url)));
        let combinedText = '';
        let loadedCount = 0;

        results.forEach(res => {
            if (res.status === 'fulfilled') {
                combinedText += res.value + '\n';
                loadedCount++;
            }
        });

        allChannels = parseM3U(combinedText);
        renderCurrentList();
        statusText.innerText = `✅ Загружено баз: ${loadedCount}/${urls.length}. Доступно каналов: ${allChannels.length}`;
    } catch (error) {
        statusText.innerText = '❌ Ошибка загрузки плейлистов.';
    }
}

async function fetchWithTimeout(url, timeoutMs = 8000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return await response.text();
    } catch (err) {
        clearTimeout(timer);
        throw err;
    }
}

async function fetchViaCorsProxy(url, timeoutMs = 9000) {
    let lastError = null;
    for (let i = 0; i < CORS_PROXIES.length; i++) {
        try {
            const text = await fetchWithTimeout(CORS_PROXIES[i](url), timeoutMs);
            if (text && text.length > 20) return text;
        } catch (err) {
            lastError = err;
        }
    }
    throw lastError || new Error('Прокси недоступны');
}

async function fetchText(url, useProxyFallback = false) {
    try {
        return await fetchWithTimeout(url, 8000);
    } catch (err) {
        if (useProxyFallback) {
            return await fetchViaCorsProxy(url, 9000);
        }
        throw err;
    }
}

async function loadCustomUrl() {
    const customUrl = document.getElementById('customUrl').value.trim();
    if (!customUrl) {
        alert('Вставьте прямую ссылку на .m3u или .m3u8 файл');
        return;
    }
    statusText.innerText = '⏳ Загружаем пользовательский плейлист...';
    try {
        const text = await fetchText(customUrl, true);
        allChannels = parseM3U(text);
        renderCurrentList();
        statusText.innerText = `✅ Загружено каналов: ${allChannels.length}`;
    } catch (e) {
        statusText.innerText = '❌ Не удалось загрузить ссылку.';
    }
}

function loadLocalFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        allChannels = parseM3U(e.target.result);
        renderCurrentList();
        statusText.innerText = `✅ Из файла «${file.name}» загружено каналов: ${allChannels.length}`;
    };
    reader.readAsText(file);
}

// =========================================================================
// 6. ПАРСЕР M3U
// =========================================================================

function parseM3U(m3uContent) {
    const lines = m3uContent.split('\n');
    const parsedChannels = [];
    const seenUrls = new Set();
    let currentChannel = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.startsWith('#EXTINF:')) {
            const commaIndex = line.lastIndexOf(',');
            const name = commaIndex !== -1 ? line.substring(commaIndex + 1).trim() : 'Телеканал';

            const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
            const logo = (logoMatch && logoMatch[1]) ? logoMatch[1] : DEFAULT_LOGO;

            const groupMatch = line.match(/group-title="([^"]+)"/i);
            const group = (groupMatch && groupMatch[1]) ? groupMatch[1] : '';

            currentChannel = { name, logo, group, url: '', locked: false };
        }
        else if (line && !line.startsWith('#')) {
            if (currentChannel && !seenUrls.has(line)) {
                currentChannel.url = line;
                seenUrls.add(line);
                parsedChannels.push(currentChannel);
                currentChannel = null;
            }
        }
    }

    return parsedChannels;
}

// =========================================================================
// 7. ОТОБРАЖЕНИЕ СПИСКА КАНАЛОВ И ФИЛЬТРАЦИЯ НЕРАБОЧИХ ПОТОКОВ
// =========================================================================

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderCurrentList() {
    const query = searchInput.value.toLowerCase();
    const hideBroken = hideBrokenCheckbox.checked;

    const filtered = allChannels.filter(channel => {
        const searchTarget = (channel.name + ' ' + (channel.group || '')).toLowerCase();
        const matchesName = searchTarget.includes(query);
        const isBroken = channel.url && brokenUrls.has(channel.url);
        if (hideBroken && isBroken) return false;
        return matchesName;
    });

    channelListElement.innerHTML = '';

    if (filtered.length === 0) {
        channelListElement.innerHTML = '<li style="padding:12px; color:#888;">Каналы не найдены (или скрыты фильтром)</li>';
        return;
    }

    filtered.forEach(channel => {
        const li = document.createElement('li');
        const isBroken = channel.url && brokenUrls.has(channel.url);
        const isFav = isFavorite(channel.url);
        const isPlaying = activeChannel && activeChannel.name === channel.name && activeChannel.url === channel.url;

        li.className = 'channel-item';
        if (isPlaying) li.classList.add('playing');
        if (channel.locked) li.classList.add('locked-channel');
        if (isBroken) li.classList.add('broken-stream');

        const groupBadge = channel.group ? `<span class="group-tag">${escapeHtml(channel.group)}</span>` : '';

        const statusLine = channel.locked
            ? `<span class="channel-status-line locked-text">🔒 Поток закрыт (нажмите, чтобы вставить ссылку)</span>`
            : `<span class="channel-status-line">🟢 Доступен онлайн</span>`;

        li.innerHTML = `
            <div class="channel-info-left">
                <img class="channel-logo" src="${channel.logo}" onerror="this.src='${DEFAULT_LOGO}'" alt="Лого">
                <div class="channel-text-block">
                    <span class="channel-name" title="${escapeHtml(channel.name)}">${escapeHtml(channel.name)}${groupBadge}</span>
                    ${statusLine}
                </div>
            </div>
            <div class="channel-actions">
                <button class="icon-btn" title="Указать/изменить ссылку на поток (.m3u8)">🔗</button>
                <button class="icon-btn ${isFav ? 'fav-active' : ''}" title="Добавить в Избранное">${isFav ? '⭐' : '☆'}</button>
            </div>
        `;

        const actionBtns = li.querySelectorAll('.icon-btn');
        actionBtns[0].onclick = (e) => promptCustomStreamForChannel(channel, e);
        actionBtns[1].onclick = (e) => toggleFavorite(channel, e);

        li.onclick = () => {
            if (channel.locked || !channel.url) {
                promptCustomStreamForChannel(channel);
            } else {
                playChannel(channel);
            }
        };

        channelListElement.appendChild(li);
    });
}

async function checkVisibleStreams() {
    const toCheck = allChannels.filter(ch => ch.url && !brokenUrls.has(ch.url)).slice(0, 15);
    if (toCheck.length === 0) return;

    statusText.innerText = `⚡ Проверяем первые ${toCheck.length} открытых потоков...`;

    await Promise.allSettled(toCheck.map(async (ch) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        try {
            const res = await fetch(ch.url, { method: 'GET', signal: controller.signal });
            clearTimeout(timeoutId);
            if (!res.ok) markChannelAsBroken(ch.url);
        } catch (err) {
            clearTimeout(timeoutId);
            markChannelAsBroken(ch.url);
        }
    }));

    renderCurrentList();
    statusText.innerText = '✅ Проверка завершена! Нерабочие потоки скрыты.';
}

// =========================================================================
// 8. ЗАПУСК ВИДЕОПЛЕЕРА (ANDROID / IOS / TELEGRAM / DESKTOP)
// =========================================================================

function playChannel(channel) {
    activeChannel = channel;
    renderCurrentList();

    statusText.innerText = `⏳ Подключаемся к каналу: ${channel.name}...`;

    if (hls) {
        hls.destroy();
        hls = null;
    }

    // Нативный HLS (iOS Safari / iOS Telegram WebView / macOS Safari)
    if (videoPlayer.canPlayType('application/vnd.apple.mpegurl') && (typeof Hls === 'undefined' || !Hls.isSupported())) {
        videoPlayer.src = channel.url;
        videoPlayer.onloadedmetadata = function() {
            videoPlayer.play().catch(() => {
                statusText.innerText = `▶️ Нажмите Play в плеере для запуска «${channel.name}»`;
            });
            statusText.innerText = `🟢 Сейчас играет: ${channel.name}`;
        };
        videoPlayer.onerror = function() {
            markChannelAsBroken(channel.url);
            statusText.innerText = `⚠️ Поток «${channel.name}» недоступен. Нажмите 🔗, чтобы указать другую ссылку.`;
        };
        return;
    }

    if (typeof Hls !== 'undefined' && Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(channel.url);
        hls.attachMedia(videoPlayer);

        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            videoPlayer.play().catch(() => {
                statusText.innerText = `▶️ Нажмите Play в плеере для запуска «${channel.name}»`;
            });
            statusText.innerText = `🟢 Сейчас играет: ${channel.name}`;
        });

        hls.on(Hls.Events.ERROR, function(event, data) {
            if (data.fatal) {
                markChannelAsBroken(channel.url);
                statusText.innerText = `⚠️ Поток «${channel.name}» недоступен. Нажмите 🔗 рядом с каналом, чтобы указать другую ссылку.`;
            }
        });
    } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = channel.url;
        videoPlayer.play().catch(() => {});
        statusText.innerText = `🟢 Сейчас играет: ${channel.name}`;
    } else {
        statusText.innerText = '❌ Ваш браузер не поддерживает воспроизведение HLS (.m3u8).';
    }
}

// =========================================================================
// 9. СТАРТ ПРИЛОЖЕНИЯ
// =========================================================================
initTelegramMiniApp();
initPwa();
initStorage();
selectCategory('provider');
