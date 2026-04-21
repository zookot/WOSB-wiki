// WOSB Wiki — Страница кораблей (Supabase + fallback на локальные данные)
(function () {
    let allShips = [];
    let activeType = null;
    let activeFaction = null;
    let activeRank = null;
    let searchQuery = '';
    let showDiscount = false;
    let viewMode = 'card';

    const grid = document.getElementById('ships-grid');
    const countEl = document.getElementById('ship-count');
    const searchEl = document.getElementById('search-input');
    const toggleEl = document.getElementById('discount-toggle');
    const toggleLbl = document.getElementById('discount-label');
    const loader = document.getElementById('loader');

    // ===== Загрузка данных =====
    async function loadShips() {
        showLoader(true);
        try {
            const { data, error } = await db
                .from('ships')
                .select('*')
                .order('type')
                .order('rank', { ascending: false });

            if (error) throw error;
            allShips = data.map(normalizeShip);
            console.log(`✅ Загружено ${allShips.length} кораблей из Supabase`);
        } catch (e) {
            console.warn('⚠️ Supabase недоступен, используем локальные данные:', e.message);
            allShips = SHIPS; // fallback на data.js
        }
        showLoader(false);
        initButtons();
        render();
    }

    // Приводим запись из БД к единому формату с data.js
    function normalizeShip(s) {
        const res = {}, disc = {};
        const fields = ['wood', 'iron', 'cloth', 'beam', 'bulkhead', 'sail', 'plate',
            'battle_mark', 'blueprint_frag', 'blueprint', 'escudo'];
        fields.forEach(f => {
            if (s[f] > 0) {
                res[f] = s[f];
                disc[f] = Math.round(s[f] * (1 - (s.discount || 0.20)));
            }
        });
        return {
            name: s.name, rank: s.rank, type: s.type, faction: s.faction,
            discount: s.discount, res, disc
        };
    }

    function showLoader(on) {
        if (loader) loader.style.display = on ? 'flex' : 'none';
    }

    // ===== Фильтры =====
    function setFilter(kind, value) {
        const map = {
            type: () => { activeType = activeType === value ? null : value; },
            faction: () => { activeFaction = activeFaction === value ? null : value; },
            rank: () => { activeRank = activeRank === value ? null : value; },
        };
        map[kind]();

        document.querySelectorAll(`.btn-${kind}`).forEach(b => b.classList.remove('active', 'active-type'));
        if (kind === 'type' && activeType) document.querySelector(`[data-type="${activeType}"]`)?.classList.add('active', 'active-type');
        if (kind === 'faction' && activeFaction) document.querySelector(`[data-faction="${activeFaction}"]`)?.classList.add('active');
        if (kind === 'rank' && activeRank) document.querySelector(`[data-rank="${activeRank}"]`)?.classList.add('active');
        render();
    }

    function resetFilters() {
        activeType = activeFaction = activeRank = null;
        searchQuery = '';
        searchEl.value = '';
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active', 'active-type'));
        render();
    }

    searchEl.addEventListener('input', function () {
        searchQuery = this.value.toLowerCase().trim();
        render();
    });

    toggleEl.addEventListener('click', function () {
        showDiscount = !showDiscount;
        this.classList.toggle('on', showDiscount);
        toggleLbl.textContent = showDiscount ? 'Со скидкой' : 'Без скидки';
        render();
    });

    document.getElementById('btn-card').addEventListener('click', () => setView('card'));
    document.getElementById('btn-table').addEventListener('click', () => setView('table'));

    function setView(mode) {
        viewMode = mode;
        grid.classList.toggle('table-view', mode === 'table');
        document.getElementById('btn-card').classList.toggle('active', mode === 'card');
        document.getElementById('btn-table').classList.toggle('active', mode === 'table');
        render();
    }

    // ===== Фильтрация =====
    function filtered() {
        return allShips.filter(s => {
            if (activeType && s.type !== activeType) return false;
            if (activeFaction && s.faction !== activeFaction) return false;
            if (activeRank && s.rank !== activeRank) return false;
            if (searchQuery && !s.name.toLowerCase().includes(searchQuery)) return false;
            return true;
        });
    }

    // ===== Рендер =====
    function render() {
        const ships = filtered();
        countEl.textContent = ships.length;

        if (!ships.length) {
            grid.innerHTML = `
        <div class="empty-state">
          <div class="icon">⚓</div>
          <h3>Корабли не найдены</h3>
          <p>Попробуй изменить фильтры</p>
        </div>`;
            return;
        }
        grid.innerHTML = ships.map(renderCard).join('');
    }

    function renderCard(s) {
        const res = showDiscount && s.disc ? s.disc : s.res;
        const typeIcon = TYPE_ICONS[s.type] || '🚢';
        const factionIcon = FACTION_ICONS[s.faction] || '';
        const isTable = viewMode === 'table';

        const resList = Object.entries(res)
            .filter(([, v]) => v > 0)
            .map(([key, val]) => {
                const r = RES_LABELS[key] || { label: key, emoji: '📦' };
                const orig = s.res[key];
                const hasDisc = showDiscount && orig && orig !== val;
                return `
          <div class="res-item" title="${r.label}">
            <span class="res-emoji">${r.emoji}</span>
            ${isTable ? '' : `<span class="res-label">${r.label}</span>`}
            <span class="res-value">${val.toLocaleString('ru-RU')}</span>
            ${hasDisc ? `<span class="res-value-disc">(-${Math.round((1 - val / orig) * 100)}%)</span>` : ''}
          </div>`;
            }).join('');

        const factionBadge = s.faction
            ? `<span class="badge badge-faction">${factionIcon} ${s.faction}</span>`
            : `<span class="badge badge-no-faction">⚓ Общий</span>`;

        return `
      <div class="ship-card${isTable ? ' table-row' : ''}">
        <div class="card-header">
          <div class="ship-avatar">${typeIcon}</div>
          <div class="ship-info">
            <div class="ship-name">${s.name}</div>
            <div class="ship-tags">
              <span class="badge badge-rank rank-${s.rank}">★${s.rank}</span>
              <span class="badge badge-type">${s.type}</span>
              ${factionBadge}
            </div>
          </div>
        </div>
        <div class="resources-section">
          <div class="res-title">Ресурсы крафта</div>
          <div class="res-grid">${resList || '<span style="color:var(--text-muted);font-size:12px">— нет данных —</span>'}</div>
        </div>
      </div>`;
    }

    // ===== Кнопки фильтров =====
    function initButtons() {
        const types = [...new Set(allShips.map(s => s.type))];
        const factions = [...new Set(allShips.map(s => s.faction).filter(Boolean))];

        const typeContainer = document.getElementById('type-filters');
        types.forEach(t => {
            const btn = document.createElement('button');
            btn.className = 'btn-filter btn-type';
            btn.dataset.type = t;
            btn.innerHTML = `${TYPE_ICONS[t] || ''} ${t}`;
            btn.addEventListener('click', () => setFilter('type', t));
            typeContainer.appendChild(btn);
        });

        const facContainer = document.getElementById('faction-filters');
        factions.forEach(f => {
            const btn = document.createElement('button');
            btn.className = 'btn-filter btn-faction';
            btn.dataset.faction = f;
            btn.innerHTML = `${FACTION_ICONS[f] || ''} ${f}`;
            btn.addEventListener('click', () => setFilter('faction', f));
            facContainer.appendChild(btn);
        });

        const rankContainer = document.getElementById('rank-filters');
        [1, 2, 3, 4, 5, 6, 7].forEach(r => {
            const btn = document.createElement('button');
            btn.className = 'btn-filter btn-rank';
            btn.dataset.rank = r;
            btn.innerHTML = `★${r}`;
            btn.addEventListener('click', () => setFilter('rank', r));
            rankContainer.appendChild(btn);
        });

        document.getElementById('btn-reset').addEventListener('click', resetFilters);
    }

    setView('card');
    loadShips();
})();
