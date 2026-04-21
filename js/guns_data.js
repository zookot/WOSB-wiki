// WOSB Wiki — Данные орудий и расходников

// ===== ОРУДИЯ =====
const GUNS = [
    // Пушки
    { name: '6-фн. Ржавая', type: 'Пушка', qty: 1, cost: 50, gold: 50 },
    { name: '8-фн. Пушка', type: 'Пушка', qty: 1, cost: 2016, iron: 144, rum: 36 },
    { name: '16-фн. Пушка', type: 'Пушка', qty: 1, cost: 200, gold: 200 },
    { name: '20-фн. Адмиральская', type: 'Пушка', qty: 1, cost: 0, pirate_token: 40 },
    { name: '18-фн. Пушка', type: 'Пушка', qty: 1, cost: 4845, iron: 273, copper: 21, rum: 45 },
    { name: '36-фн. Инрог', type: 'Пушка', qty: 1, cost: 0, pirate_token: 100 },
    { name: '32-фн. Пушка', type: 'Пушка', qty: 50, cost: 761250, iron: 21750, bronze: 200, volcanic: 600, rum: 150 },

    // Кульверины
    { name: '6-фн. Кульверина', type: 'Кульверина', qty: 1, cost: 150, gold: 150 },
    { name: '8-фн. Кульверина', type: 'Кульверина', qty: 1, cost: 3024, iron: 216, rum: 54 },
    { name: '18-фн. Кульверина', type: 'Кульверина', qty: 1, cost: 300, gold: 300 },
    { name: '22-фн. Испепеляющая', type: 'Кульверина', qty: 1, cost: 0, pirate_token: 60 },
    { name: '18-фн. Длинная пушка', type: 'Кульверина', qty: 1, cost: 5271, iron: 405, rum: 68 },
    { name: '38-фн. Иерихон', type: 'Кульверина', qty: 1, cost: 0, pirate_token: 150 },
    { name: '32фн. Длинная пушка', type: 'Кульверина', qty: 1, cost: 22718, iron: 678, bronze: 6, volcanic: 18, rum: 4 },

    // Карронады
    { name: '12-фн. Карронада', type: 'Карронада', qty: 1, cost: 200, gold: 200 },
    { name: '16-фн. Карронада', type: 'Карронада', qty: 1, cost: 4032, iron: 288, rum: 72 },
    { name: '24-фн. Карронада', type: 'Карронада', qty: 1, cost: 400, gold: 400 },
    { name: '32-фн. Буревестник', type: 'Карронада', qty: 1, cost: 0, pirate_token: 80 },
    { name: '28-фн. Карронада', type: 'Карронада', qty: 1, cost: 9701, iron: 547, copper: 42, rum: 90 },
    { name: '48-фн. Исполин', type: 'Карронада', qty: 1, cost: 0, pirate_token: 200 },
    { name: '42-фн. Карронада', type: 'Карронада', qty: 1, cost: 30134, iron: 754, bronze: 9, volcanic: 24, rum: 6 },

    // Бомбарды
    { name: 'Василиск', type: 'Бомбарда', qty: 1, cost: 0, pirate_token: 45 },
    { name: 'Посейдон', type: 'Бомбарда', qty: 1, cost: 0, pirate_token: 55 },
    { name: '6-фн. Сдвоенная', type: 'Бомбарда', qty: 1, cost: 6048, iron: 432, rum: 108 },
    { name: 'Зевс', type: 'Бомбарда', qty: 1, cost: 0, pirate_token: 120 },
    { name: 'Онагр', type: 'Бомбарда', qty: 1, cost: 0, pirate_token: 150 },
    { name: '14-фн. Сдвоенная', type: 'Бомбарда', qty: 1, cost: 14436, iron: 810, copper: 63, rum: 135 },
    { name: '10-фн. Строенная', type: 'Бомбарда', qty: 6, cost: 108744, iron: 6108, copper: 474, rum: 1014 },
    { name: 'Гильгамеш', type: 'Бомбарда', qty: 1, cost: 0, pirate_token: 300 },
    { name: 'Мьельнир', type: 'Бомбарда', qty: 1, cost: 0, pirate_token: 380 },
    { name: '20-фн. Сдвоенная', type: 'Бомбарда', qty: 1, cost: 44289, iron: 1179, bronze: 12, volcanic: 36, rum: 9 },
    { name: '16-фн. Строенная', type: 'Бомбарда', qty: 1, cost: 54532, iron: 1402, bronze: 16, volcanic: 45, rum: 10 },
    { name: 'Алхимический огонь', type: 'Бомбарда', qty: 1, cost: 120333, iron: 6753, copper: 525, rum: 1125 },
    { name: 'Имперская Бомбарда', type: 'Бомбарда', qty: 1, cost: 96317, iron: 5407, copper: 420, rum: 900 },

    // Мортиры
    { name: '6-Дюймовая', type: 'Мортира', qty: 1, cost: 14000, iron: 1000, rum: 250 },
    { name: '7-Дюймовая', type: 'Мортира', qty: 1, cost: 35000, iron: 2500, rum: 625 },
    { name: '8-Дюймовая', type: 'Мортира', qty: 1, cost: 75192, iron: 4220, copper: 328, rum: 703 },
    { name: '9-Дюймовая', type: 'Мортира', qty: 1, cost: 150395, iron: 8441, copper: 656, rum: 1406 },
    { name: '10-Дюймовая', type: 'Мортира', qty: 1, cost: 447470, iron: 11380, bronze: 129, volcanic: 375, rum: 84 },
    { name: '11-Дюймовая', type: 'Мортира', qty: 1, cost: 670850, iron: 17010, bronze: 194, volcanic: 562, rum: 126 },
    { name: 'Тяжелая мортира', type: 'Мортира', qty: 1, cost: 0, pirate_token: 670 },
    { name: 'Метатель бочек', type: 'Мортира', qty: 1, cost: 0, pirate_token: 500 },
];

// ===== РАСХОДНЫЕ ПРЕДМЕТЫ =====
const CONSUMABLES = [
    // Заплатки и ремонт
    { name: 'Деревяные заплатки', category: 'Ремонт', wood: 10 },
    { name: 'Железные заплатки', category: 'Ремонт', iron: 30 },
    { name: 'Бронзовые заплатки', category: 'Ремонт', bronze: 1 },
    { name: 'Заплатки из обломков', category: 'Ремонт', debris: 25, battle_mark: 1 },
    { name: 'Деревянные ремонт-набор', category: 'Ремонт', wood: 10, cloth: 8 },
    { name: 'Железные ремонт-набор', category: 'Ремонт', iron: 22, cloth: 30 },
    { name: 'Бронзовый ремонт-набор', category: 'Ремонт', bronze: 1, sail: 1 },
    // Еда
    { name: 'Походный рацион', category: 'Еда', gold: 100, rum: 10 },
    { name: 'Малые добавочные паруса', category: 'Паруса', gold: 40 },
    { name: 'Большие добавочные паруса', category: 'Паруса', sail: 2 },
    { name: 'Малые пластины', category: 'Броня', iron: 30 },
    { name: 'Большие пластины', category: 'Броня', plate: 1, battle_mark: 5 },
    // Тактика
    { name: 'Дымовая бомба', category: 'Тактика', battle_mark: 10 },
    { name: 'Дымовая завеса', category: 'Тактика', iron: 40, battle_mark: 10 },
    { name: 'Подкуп', category: 'Тактика', voodoo_skull: 1 },
    // Порох
    { name: 'Черный двойной порох', category: 'Порох', gold: 60 },
    { name: 'Красный двойной порох', category: 'Порох', gold: 60 },
    { name: 'Белый двойной порох', category: 'Порох', gold: 60 },
    // Еда/Припасы
    { name: 'Ром-паек', category: 'Еда', rum: 20 },
    { name: 'Сытный паёк', category: 'Еда', fish: 20, fresh_meat: 40 },
    { name: 'Фосфор', category: 'Тактика', gold: 150, battle_mark: 4 },
    { name: 'Пороховой заряд', category: 'Боеприпасы', gold: 150, battle_mark: 4 },
    { name: 'Крюк Посейдона', category: 'Тактика', gold: 5000, voodoo_skull: 1 },
    // Сигналки
    { name: 'Сигнальная ракета Синяя', category: 'Прочее', gold: 130 },
    { name: 'Сигнальная ракета Красная', category: 'Прочее', gold: 200 },
    { name: 'Сигнальная ракета Желтая', category: 'Прочее', battle_mark: 10 },
    { name: 'Горн', category: 'Прочее', voodoo_skull: 1 },
];

// Иконки типов орудий
const GUN_TYPE_ICONS = {
    'Пушка': '💥',
    'Кульверина': '🎯',
    'Карронада': '💣',
    'Бомбарда': '🔥',
    'Мортира': '🏹',
};

// Метки ресурсов для орудий
const GUN_RES_LABELS = {
    gold: { label: 'Золото', emoji: '💰' },
    iron: { label: 'Железо', emoji: '⚙️' },
    copper: { label: 'Медь', emoji: '🔶' },
    bronze: { label: 'Бронза', emoji: '🥉' },
    rum: { label: 'Ром', emoji: '🍺' },
    volcanic: { label: 'Вулканическая', emoji: '🌋' },
    pirate_token: { label: 'Пиратский жетон', emoji: '🏴‍☠️' },
    battle_mark: { label: 'Боевая марка', emoji: '⚔️' },
    wood: { label: 'Дерево', emoji: '🪵' },
    cloth: { label: 'Ткань', emoji: '🧵' },
    sail: { label: 'Парусина', emoji: '⛵' },
    plate: { label: 'Пластина', emoji: '🔘' },
    debris: { label: 'Обломки', emoji: '🗑️' },
    voodoo_skull: { label: 'Череп Вуду', emoji: '💀' },
    fish: { label: 'Рыба', emoji: '🐟' },
    fresh_meat: { label: 'Свежее мясо', emoji: '🥩' },
};
