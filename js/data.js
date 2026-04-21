// WOSB Wiki — данные кораблей из Excel
const SHIPS = [
  // ===== БЫСТРОХОДНЫЙ =====
  {
    name: "Pickle",       rank: 7, type: "Быстроходный", faction: null,
    res: { wood: 730, iron: 135, cloth: 30 },
    disc: { wood: 584, iron: 108, cloth: 24 },
    discount: 0.20
  },
  {
    name: "Le Cerf",      rank: 6, type: "Быстроходный", faction: null,
    res: { iron: 465, beam: 22, sail: 14 },
    disc: { iron: 372, beam: 18, sail: 11 },
    discount: 0.20
  },
  {
    name: "La Creole",    rank: 5, type: "Быстроходный", faction: "Эспаньол",
    res: { beam: 70, bulkhead: 23, sail: 189, battle_mark: 25 },
    disc: { beam: 56, bulkhead: 18, sail: 151, battle_mark: 25 },
    discount: 0.20
  },
  {
    name: "Surprise",     rank: 4, type: "Быстроходный", faction: "Антилия",
    res: { beam: 146, bulkhead: 49, sail: 335, battle_mark: 60 },
    disc: { beam: 117, bulkhead: 39, sail: 268, battle_mark: 60 },
    discount: 0.20
  },
  {
    name: "Poltava",      rank: 3, type: "Быстроходный", faction: "Кай и Северия",
    res: { beam: 238, bulkhead: 97, sail: 491, plate: 33, battle_mark: 340 },
    disc: { beam: 190, bulkhead: 78, sail: 393, plate: 26, battle_mark: 340 },
    discount: 0.20
  },
  {
    name: "Ingermanland",  rank: 2, type: "Быстроходный", faction: "Кай и Северия",
    res: { beam: 292, bulkhead: 126, sail: 486, plate: 40, battle_mark: 160 },
    disc: { beam: 234, bulkhead: 101, sail: 389, plate: 32, battle_mark: 160 },
    discount: 0.20
  },

  // ===== БОЕВОЙ =====
  {
    name: "Horizont",     rank: 7, type: "Боевой", faction: null,
    res: { wood: 745, iron: 230, cloth: 30 },
    disc: { wood: 596, iron: 184, cloth: 24 },
    discount: 0.20
  },
  {
    name: "La Salamandre", rank: 6, type: "Боевой", faction: null,
    res: { iron: 770, beam: 23 },
    disc: { iron: 616, beam: 18 },
    discount: 0.20
  },
  {
    name: "Black wind",   rank: 5, type: "Боевой", faction: "Антилия",
    res: { beam: 76, bulkhead: 41, sail: 113, battle_mark: 25 },
    disc: { beam: 61, bulkhead: 33, sail: 90, battle_mark: 25 },
    discount: 0.20
  },
  {
    name: "Essex",        rank: 4, type: "Боевой", faction: "Антилия",
    res: { beam: 157, bulkhead: 86, sail: 189, battle_mark: 130 },
    disc: { beam: 126, bulkhead: 69, sail: 151, battle_mark: 130 },
    discount: 0.20
  },
  {
    name: "Anson",        rank: 3, type: "Боевой", faction: "Антилия",
    res: { beam: 254, bulkhead: 167, sail: 281, plate: 37, battle_mark: 365 },
    disc: { beam: 203, bulkhead: 134, sail: 225, plate: 30, battle_mark: 365 },
    discount: 0.20
  },
  {
    name: "Sans Pareil",  rank: 2, type: "Боевой", faction: "Эспаньол",
    res: { beam: 470, bulkhead: 340, sail: 443, plate: 76, battle_mark: 740 },
    disc: { beam: 376, bulkhead: 272, sail: 354, plate: 61, battle_mark: 740 },
    discount: 0.20
  },
  {
    name: "Victory",      rank: 1, type: "Боевой", faction: "Антилия",
    res: { beam: 972, bulkhead: 1620, sail: 1436, plate: 178, battle_mark: 1650 },
    disc: { beam: 778, bulkhead: 1296, sail: 1149, plate: 142, battle_mark: 1650 },
    discount: 0.20
  },

  // ===== ТРАНСПОРТНЫЙ =====
  {
    name: "Friede",       rank: 7, type: "Транспортный", faction: null,
    res: { wood: 850, iron: 155, cloth: 30 },
    disc: { wood: 680, iron: 124, cloth: 24 },
    discount: 0.20
  },
  {
    name: "Mercury",      rank: 6, type: "Транспортный", faction: null,
    res: { iron: 535, beam: 27 },
    disc: { iron: 428, beam: 22 },
    discount: 0.20
  },
  {
    name: "Russia",       rank: 5, type: "Транспортный", faction: "Кай и Северия",
    res: { beam: 86, bulkhead: 26, sail: 124, battle_mark: 25 },
    disc: { beam: 69, bulkhead: 21, sail: 99, battle_mark: 25 },
    discount: 0.20
  },
  {
    name: "Falmouth",     rank: 4, type: "Транспортный", faction: "Антилия",
    res: { beam: 178, bulkhead: 54, sail: 216, battle_mark: 60 },
    disc: { beam: 142, bulkhead: 43, sail: 173, battle_mark: 60 },
    discount: 0.20
  },
  {
    name: "Mordaunt",     rank: 3, type: "Транспортный", faction: "Антилия",
    res: { beam: 292, bulkhead: 103, sail: 313, plate: 31, battle_mark: 120 },
    disc: { beam: 234, bulkhead: 82, sail: 250, plate: 25, battle_mark: 120 },
    discount: 0.20
  },
  {
    name: "La Sirene",    rank: 2, type: "Транспортный", faction: "Эспаньол",
    res: { beam: 418, bulkhead: 158, sail: 315, plate: 40, battle_mark: 160 },
    disc: { beam: 334, bulkhead: 126, sail: 252, plate: 32, battle_mark: 160 },
    discount: 0.20
  },
  {
    name: "La Couronne",  rank: 1, type: "Транспортный", faction: "Эспаньол",
    res: { beam: 1008, bulkhead: 765, sail: 1026, plate: 76, battle_mark: 1600 },
    disc: { beam: 806, bulkhead: 612, sail: 821, plate: 61, battle_mark: 1600 },
    discount: 0.20
  },

  // ===== ТЯЖЕЛЫЙ =====
  {
    name: "Phoenix",      rank: 6, type: "Тяжелый", faction: null,
    res: { iron: 1071, beam: 26 },
    disc: { iron: 857, beam: 21 },
    discount: 0.20
  },
  {
    name: "San Martin",   rank: 5, type: "Тяжелый", faction: "Эспаньол",
    res: { beam: 86, bulkhead: 59, sail: 92, battle_mark: 25 },
    disc: { beam: 69, bulkhead: 47, sail: 74, battle_mark: 25 },
    discount: 0.20
  },
  {
    name: "Constitution", rank: 4, type: "Тяжелый", faction: "Антилия",
    res: { beam: 144, bulkhead: 99, sail: 104, battle_mark: 125 },
    disc: { beam: 115, bulkhead: 79, sail: 83, battle_mark: 125 },
    discount: 0.20
  },
  {
    name: "Bellona",      rank: 3, type: "Тяжелый", faction: "Антилия",
    res: { beam: 234, bulkhead: 198, sail: 148, plate: 28, battle_mark: 335 },
    disc: { beam: 187, bulkhead: 158, sail: 118, plate: 22, battle_mark: 335 },
    discount: 0.20
  },
  {
    name: "Redoutable",   rank: 2, type: "Тяжелый", faction: "Эспаньол",
    res: { beam: 396, bulkhead: 374, sail: 189, plate: 50, battle_mark: 610 },
    disc: { beam: 317, bulkhead: 299, sail: 151, plate: 40, battle_mark: 610 },
    discount: 0.20
  },
  {
    name: "12 Apostolov", rank: 1, type: "Тяжелый", faction: "Кай и Северия",
    res: { beam: 909, bulkhead: 1674, sail: 387, plate: 140, battle_mark: 1570 },
    disc: { beam: 727, bulkhead: 1339, sail: 310, plate: 112, battle_mark: 1570 },
    discount: 0.20
  },

  // ===== ОСАДНЫЙ =====
  {
    name: "Polacca",      rank: 6, type: "Осадный", faction: null,
    res: { iron: 705, beam: 20 },
    disc: { iron: 564, beam: 16 },
    discount: 0.20
  },
  {
    name: "Le Requin",    rank: 5, type: "Осадный", faction: "Эспаньол",
    res: { beam: 65, bulkhead: 43, sail: 129, battle_mark: 25 },
    disc: { beam: 52, bulkhead: 34, sail: 103, battle_mark: 25 },
    discount: 0.20
  },
  {
    name: "Kobukson",     rank: 3, type: "Осадный", faction: "Кай и Северия",
    res: { beam: 148, bulkhead: 148, sail: 238, plate: 23, battle_mark: 290 },
    disc: { beam: 118, bulkhead: 118, sail: 190, plate: 18, battle_mark: 290 },
    discount: 0.20
  },
  {
    name: "Adventure",    rank: 2, type: "Осадный", faction: "Антилия",
    res: { beam: 302, bulkhead: 238, sail: 387, plate: 35, battle_mark: 430 },
    disc: { beam: 242, bulkhead: 190, sail: 310, plate: 28, battle_mark: 430 },
    discount: 0.20
  },
  {
    name: "La Royale",    rank: 1, type: "Осадный", faction: "Эспаньол",
    res: { beam: 666, bulkhead: 1071, sail: 1161, plate: 81, battle_mark: 940 },
    disc: { beam: 533, bulkhead: 857, sail: 929, plate: 65, battle_mark: 940 },
    discount: 0.20
  },

  // ===== ИМПЕРСКИЙ =====
  {
    name: "Ballon",       rank: 6, type: "Имперский", faction: null,
    res: { escudo: 850 },
    disc: { escudo: 850 },
    discount: 0.20
  },
  {
    name: "Black Prince",  rank: 5, type: "Имперский", faction: null,
    res: { blueprint_frag: 21, escudo: 17 },
    disc: { blueprint_frag: 21, escudo: 17 },
    discount: 0.20
  },
  {
    name: "Devourer",     rank: 4, type: "Имперский", faction: null,
    res: { blueprint: 1, escudo: 128 },
    disc: { blueprint: 1, escudo: 128 },
    discount: 0.20
  },
  {
    name: "Deadfish",     rank: 3, type: "Имперский", faction: null,
    res: { blueprint: 4, escudo: 340 },
    disc: { blueprint: 4, escudo: 340 },
    discount: 0.20
  },
  {
    name: "Octopus",      rank: 2, type: "Имперский", faction: null,
    res: { blueprint_frag: 21, escudo: 5666 },
    disc: { blueprint_frag: 21, escudo: 5666 },
    discount: 0.20
  },
];

// Метки ресурсов
const RES_LABELS = {
  wood:           { label: "Дерево",             emoji: "🪵" },
  iron:           { label: "Железо",             emoji: "⚙️" },
  cloth:          { label: "Ткань",              emoji: "🧵" },
  beam:           { label: "Балка",              emoji: "🔩" },
  bulkhead:       { label: "Переборка",          emoji: "🛡️" },
  sail:           { label: "Парусина",           emoji: "⛵" },
  plate:          { label: "Пластина",           emoji: "🔘" },
  battle_mark:    { label: "Боевая марка",       emoji: "⚔️" },
  blueprint_frag: { label: "Фрагмент чертежа",  emoji: "📜" },
  blueprint:      { label: "Чертеж",             emoji: "📋" },
  escudo:         { label: "Эскудо",             emoji: "🪙" },
};

// Иконки типов кораблей
const TYPE_ICONS = {
  "Быстроходный": "💨",
  "Боевой":       "⚔️",
  "Транспортный": "📦",
  "Тяжелый":      "💣",
  "Осадный":      "🏹",
  "Имперский":    "👑",
};

// Иконки фракций
const FACTION_ICONS = {
  "Антилия":        "🇬🇧",
  "Эспаньол":       "🇪🇸",
  "Кай и Северия":  "🇷🇺",
};
