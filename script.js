// Данные для перевода
const translations = {
    ru: {
        hero_title: "Весеннее обновление",
        hero_desc: "Реализуй свои идеи, пока цветут технологии. Скидки на разработку.",
        cat_web: "Web Разработка",
        web_basic: "Базовый сайт",
        web_adv: "Продвинутый",
        cat_mc_server: "Minecraft Сервер",
        mc_consult: "Консультация",
        mc_setup: "Настройка",
        cat_mc_plugin: "MC Плагины",
        plug_min: "Минимальный",
        plug_base: "Базовый",
        plug_adv: "Продвинутый",
        cat_roblox: "Roblox Скрипты",
        rb_min: "Мини скрипт",
        rb_base: "Базовый",
        rb_adv: "Сложный",
        cat_misc: "Софт & Скрипты",
        misc_desc: "Python, C++, C#, Java. Утилиты, боты, приколдесы и домашки."
    },
    en: {
        hero_title: "Spring Update",
        hero_desc: "Bring your ideas to life while tech is blooming. Development discounts.",
        cat_web: "Web Development",
        web_basic: "Basic Site",
        web_adv: "Advanced",
        cat_mc_server: "Minecraft Server",
        mc_consult: "Consultation",
        mc_setup: "Setup Config",
        cat_mc_plugin: "MC Plugins",
        plug_min: "Minimal",
        plug_base: "Basic",
        plug_adv: "Advanced",
        cat_roblox: "Roblox Scripts",
        rb_min: "Mini Script",
        rb_base: "Basic",
        rb_adv: "Complex",
        cat_misc: "Soft & Scripts",
        misc_desc: "Python, C++, C#, Java. Utilities, bots, fun scripts and homeworks."
    }
};

let currentLang = 'ru';

// Смена языка
document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.getElementById('current-lang').textContent = currentLang.toUpperCase();
    
    // Обновляем тексты
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});

// Темная тема
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
    } else {
        themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
    }
});

// Генератор листьев
function createLeaves() {
    const container = document.getElementById('leaves-container');
    const leafCount = 15; // Количество листьев одновременно

    for (let i = 0; i < leafCount; i++) {
        setTimeout(() => {
            spawnLeaf(container);
        }, i * 800);
    }
}

function spawnLeaf(container) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Случайная позиция и параметры
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5-10 сек
    leaf.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Разные цвета для весны (зеленый, розовый, желтый)
    const colors = ['#4ade80', '#f472b6', '#facc15']; 
    leaf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(leaf);

    // Удаляем после анимации и создаем новый
    setTimeout(() => {
        leaf.remove();
        spawnLeaf(container);
    }, 10000);
}

// Запуск при загрузке
window.addEventListener('load', createLeaves);

// Функция заказа (переход в ТГ)
function order(service) {
    const msg = `Привет, хочу заказать: ${service}`;
    window.open(`https://t.me/ws3eqr?text=${encodeURIComponent(msg)}`, '_blank');
}
