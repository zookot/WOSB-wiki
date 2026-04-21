-- WOSB Wiki — Схема базы данных
-- Запусти этот файл в Supabase: SQL Editor → New query → вставь → Run

-- ===== Таблица кораблей =====
CREATE TABLE IF NOT EXISTS ships (
  id           SERIAL PRIMARY KEY,
  name         TEXT    NOT NULL,
  rank         INTEGER NOT NULL,
  type         TEXT    NOT NULL,
  faction      TEXT,
  discount     NUMERIC DEFAULT 0.20,
  -- Ресурсы без скидки
  wood         INTEGER DEFAULT 0,
  iron         INTEGER DEFAULT 0,
  cloth        INTEGER DEFAULT 0,
  beam         INTEGER DEFAULT 0,
  bulkhead     INTEGER DEFAULT 0,
  sail         INTEGER DEFAULT 0,
  plate        INTEGER DEFAULT 0,
  battle_mark  INTEGER DEFAULT 0,
  blueprint_frag INTEGER DEFAULT 0,
  blueprint    INTEGER DEFAULT 0,
  escudo       INTEGER DEFAULT 0
);

-- ===== Таблица категорий крафта =====
CREATE TABLE IF NOT EXISTS craft_categories (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- ===== Таблица рецептов крафта =====
CREATE TABLE IF NOT EXISTS craft_items (
  id              SERIAL PRIMARY KEY,
  category_id     INTEGER REFERENCES craft_categories(id),
  name            TEXT    NOT NULL,
  quantity        INTEGER DEFAULT 1,
  craft_cost      NUMERIC,
  discount        NUMERIC DEFAULT 0,
  craft_time      INTEGER DEFAULT 0,
  gold            INTEGER DEFAULT 0,
  wood            INTEGER DEFAULT 0,
  iron            INTEGER DEFAULT 0,
  copper          INTEGER DEFAULT 0,
  bronze          INTEGER DEFAULT 0,
  coal            INTEGER DEFAULT 0,
  tar             INTEGER DEFAULT 0,
  cloth           INTEGER DEFAULT 0,
  sail            INTEGER DEFAULT 0,
  plate_res       INTEGER DEFAULT 0,
  iron_ore        INTEGER DEFAULT 0,
  copper_ore      INTEGER DEFAULT 0,
  debris          INTEGER DEFAULT 0,
  animals         INTEGER DEFAULT 0,
  blueprint_frag  INTEGER DEFAULT 0,
  rum             INTEGER DEFAULT 0,
  supplies        INTEGER DEFAULT 0,
  fish            INTEGER DEFAULT 0,
  fresh_meat      INTEGER DEFAULT 0,
  whale_oil       INTEGER DEFAULT 0,
  battle_mark     INTEGER DEFAULT 0,
  voodoo_skull    INTEGER DEFAULT 0
);

-- ===== Таблица стоимости ресурсов =====
CREATE TABLE IF NOT EXISTS resources (
  id           SERIAL PRIMARY KEY,
  name         TEXT    NOT NULL,
  cost_avg     NUMERIC,
  cost_calc    NUMERIC,
  discount     NUMERIC DEFAULT 0,
  quantity     INTEGER DEFAULT 1
);

-- ===== Публичный доступ только на чтение (Row Level Security) =====
ALTER TABLE ships          ENABLE ROW LEVEL SECURITY;
ALTER TABLE craft_items    ENABLE ROW LEVEL SECURITY;
ALTER TABLE craft_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources      ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read ships"          ON ships          FOR SELECT USING (true);
CREATE POLICY "Public read craft_items"    ON craft_items    FOR SELECT USING (true);
CREATE POLICY "Public read craft_cats"     ON craft_categories FOR SELECT USING (true);
CREATE POLICY "Public read resources"      ON resources      FOR SELECT USING (true);
