// WOSB Wiki — Данные орудий
// img → имена файлов из папки resources/ (загрузи туда папку из архива)

const GUNS = [
  // ===== Пушки =====
  { name: '6-фн. Ржавая',           type: 'Пушка',      qty: 1,  cost: 50,     gold: 50,                                    img: 'cellImage_1088345157_20.jpg' },
  { name: '8-фн. Пушка',            type: 'Пушка',      qty: 1,  cost: 2016,   iron: 144, rum: 36,                          img: 'cellImage_1088345157_21.jpg' },
  { name: '16-фн. Пушка',           type: 'Пушка',      qty: 1,  cost: 200,    gold: 200,                                   img: 'cellImage_1088345157_22.jpg' },
  { name: '20-фн. Адмиральская',    type: 'Пушка',      qty: 1,  cost: 0,      pirate_token: 40,                            img: 'cellImage_1088345157_23.jpg' },
  { name: '18-фн. Пушка',           type: 'Пушка',      qty: 1,  cost: 4845,   iron: 273, copper: 21, rum: 45,              img: 'cellImage_1088345157_24.jpg' },
  { name: '36-фн. Инрог',           type: 'Пушка',      qty: 1,  cost: 0,      pirate_token: 100,                           img: 'cellImage_1088345157_25.jpg' },
  { name: '32-фн. Пушка',           type: 'Пушка',      qty: 50, cost: 761250, iron: 21750, bronze: 200, volcanic: 600, rum: 150, img: 'cellImage_1088345157_26.jpg' },

  // ===== Кульверины =====
  { name: '6-фн. Кульверина',       type: 'Кульверина', qty: 1,  cost: 150,    gold: 150,                                   img: 'cellImage_1088345157_27.jpg' },
  { name: '8-фн. Кульверина',       type: 'Кульверина', qty: 1,  cost: 3024,   iron: 216, rum: 54,                          img: 'cellImage_1088345157_28.jpg' },
  { name: '18-фн. Кульверина',      type: 'Кульверина', qty: 1,  cost: 300,    gold: 300,                                   img: 'cellImage_1088345157_29.jpg' },
  { name: '22-фн. Испепеляющая',    type: 'Кульверина', qty: 1,  cost: 0,      pirate_token: 60,                            img: 'cellImage_1088345157_30.jpg' },
  { name: '18-фн. Длинная пушка',   type: 'Кульверина', qty: 1,  cost: 5271,   iron: 405, rum: 68,                          img: 'cellImage_1088345157_31.jpg' },
  { name: '38-фн. Иерихон',         type: 'Кульверина', qty: 1,  cost: 0,      pirate_token: 150,                           img: 'cellImage_1088345157_32.jpg' },
  { name: '32фн. Длинная пушка',    type: 'Кульверина', qty: 1,  cost: 22718,  iron: 678, bronze: 6, volcanic: 18, rum: 4,  img: 'cellImage_1088345157_33.jpg' },

  // ===== Карронады =====
  { name: '12-фн. Карронада',       type: 'Карронада',  qty: 1,  cost: 200,    gold: 200,                                   img: 'cellImage_1088345157_34.jpg' },
  { name: '16-фн. Карронада',       type: 'Карронада',  qty: 1,  cost: 4032,   iron: 288, rum: 72,                          img: 'cellImage_1088345157_35.jpg' },
  { name: '24-фн. Карронада',       type: 'Карронада',  qty: 1,  cost: 400,    gold: 400,                                   img: 'cellImage_1088345157_36.jpg' },
  { name: '32-фн. Буревестник',     type: 'Карронада',  qty: 1,  cost: 0,      pirate_token: 80,                            img: 'cellImage_1088345157_37.jpg' },
  { name: '28-фн. Карронада',       type: 'Карронада',  qty: 1,  cost: 9701,   iron: 547, copper: 42, rum: 90,              img: 'cellImage_1088345157_38.jpg' },
  { name: '48-фн. Исполин',         type: 'Карронада',  qty: 1,  cost: 0,      pirate_token: 200,                           img: 'cellImage_1088345157_39.jpg' },
  { name: '42-фн. Карронада',       type: 'Карронада',  qty: 1,  cost: 30134,  iron: 754, bronze: 9, volcanic: 24, rum: 6,  img: 'cellImage_1088345157_40.jpg' },

  // ===== Бомбарды =====
  { name: 'Василиск',               type: 'Бомбарда',   qty: 1,  cost: 0,      pirate_token: 45,  img: 'cellImage_1088345157_41.jpg' },
  { name: 'Посейдон',               type: 'Бомбарда',   qty: 1,  cost: 0,      pirate_token: 55,  img: 'cellImage_1088345157_42.jpg' },
  { name: '6-фн. Сдвоенная',        type: 'Бомбарда',   qty: 1,  cost: 6048,   iron: 432, rum: 108, img: 'cellImage_1088345157_43.jpg' },
  { name: 'Зевс',                   type: 'Бомбарда',   qty: 1,  cost: 0,      pirate_token: 120, img: 'cellImage_1088345157_44.jpg' },
  { name: 'Онагр',                  type: 'Бомбарда',   qty: 1,  cost: 0,      pirate_token: 150, img: 'cellImage_1088345157_45.jpg' },
  { name: '14-фн. Сдвоенная',       type: 'Бомбарда',   qty: 1,  cost: 14436,  iron: 810, copper: 63, rum: 135,    img: 'cellImage_1088345157_46.jpg' },
  { name: '10-фн. Строенная',       type: 'Бомбарда',   qty: 6,  cost: 108744, iron: 6108, copper: 474, rum: 1014,  img: 'cellImage_1088345157_47.jpg' },
  { name: 'Гильгамеш',              type: 'Бомбарда',   qty: 1,  cost: 0,      pirate_token: 300, img: 'cellImage_1088345157_48.jpg' },
  { name: 'Мьельнир',               type: 'Бомбарда',   qty: 1,  cost: 0,      pirate_token: 380, img: 'cellImage_1088345157_49.jpg' },
  { name: '20-фн. Сдвоенная',       type: 'Бомбарда',   qty: 1,  cost: 44289,  iron: 1179, bronze: 12, volcanic: 36, rum: 9,  img: 'cellImage_1088345157_3.jpg' },
  { name: '16-фн. Строенная',       type: 'Бомбарда',   qty: 1,  cost: 54532,  iron: 1402, bronze: 16, volcanic: 45, rum: 10, img: 'cellImage_1088345157_4.jpg' },
  { name: 'Алхимический огонь',     type: 'Бомбарда',   qty: 1,  cost: 120333, iron: 6753, copper: 525, rum: 1125,   img: 'cellImage_1088345157_7.jpg' },
  { name: 'Имперская Бомбарда',     type: 'Бомбарда',   qty: 1,  cost: 96317,  iron: 5407, copper: 420, rum: 900,    img: 'cellImage_1088345157_8.jpg' },

  // ===== Мортиры =====
  { name: '6-Дюймовая',             type: 'Мортира',    qty: 1,  cost: 14000,  iron: 1000, rum: 250,                        img: 'cellImage_1088345157_9.jpg' },
  { name: '7-Дюймовая',             type: 'Мортира',    qty: 1,  cost: 35000,  iron: 2500, rum: 625,                        img: 'cellImage_1088345157_9.jpg' },
  { name: '8-Дюймовая',             type: 'Мортира',    qty: 1,  cost: 75192,  iron: 4220, copper: 328, rum: 703,           img: 'cellImage_1088345157_9.jpg' },
  { name: '9-Дюймовая',             type: 'Мортира',    qty: 1,  cost: 150395, iron: 8441, copper: 656, rum: 1406,          img: 'cellImage_1088345157_9.jpg' },
  { name: '10-Дюймовая',            type: 'Мортира',    qty: 1,  cost: 447470, iron: 11380, bronze: 129, volcanic: 375, rum: 84, img: 'cellImage_1088345157_9.jpg' },
  { name: '11-Дюймовая',            type: 'Мортира',    qty: 1,  cost: 670850, iron: 17010, bronze: 194, volcanic: 562, rum: 126, img: 'cellImage_1088345157_9.jpg' },
  { name: 'Тяжелая мортира',        type: 'Мортира',    qty: 1,  cost: 0,      pirate_token: 670,                          img: 'cellImage_1088345157_9.jpg' },
  { name: 'Метатель бочек',         type: 'Мортира',    qty: 1,  cost: 0,      pirate_token: 500,                          img: 'cellImage_1088345157_9.jpg' },
];

// Иконки типов орудий (fallback если нет картинки)
const GUN_TYPE_ICONS = {
  'Пушка':     '💥',
  'Кульверина':'🎯',
  'Карронада': '💣',
  'Бомбарда':  '🔥',
  'Мортира':   '🏹',
};

// Метки ресурсов
const GUN_RES_LABELS = {
  gold:         { label: 'Золото',          emoji: '💰' },
  iron:         { label: 'Железо',          emoji: '⚙️' },
  copper:       { label: 'Медь',            emoji: '🔶' },
  bronze:       { label: 'Бронза',          emoji: '🥉' },
  rum:          { label: 'Ром',             emoji: '🍺' },
  volcanic:     { label: 'Вулканическая',   emoji: '🌋' },
  pirate_token: { label: 'Пиратский жетон', emoji: '🏴‍☠️' },
};
