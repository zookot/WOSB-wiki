// WOSB Wiki — Логика страницы кораблей
(function () {
    let activeType = null;
    let activeFaction = null;
    let activeRank = null;
    let searchQuery = '';
    let showDiscount = false;
    let viewMode = 'card'; // 'card' | 'table'

    const grid = document.getElementById('ships-grid');
    const countEl = document.getElementById('ship-count');
    const searchEl = document.getElementById('search-input');
    const toggleEl = document.getElementById('discount-toggle');
    const toggleLbl = document.getElementById('discount-label');

    // ===== Фильтры =====
    function setFilter(kind, value, btn) {
        const map = {
            type: () => { activeType = activeType === value ? null : value; },
            faction: () => { activeFaction = activeFaction === value ? null : value; },
            rank: () => { activeRank = activeRank === value ? null : value; }
        };
        map[kind]();

        document.querySelectorAll(`.btn-${kind}`).forEach(b => b.classList.remove('active', 'active-type'));
        if (activeType || activeFaction || activeRank) {
            const active = document.querySelector(`[data-${kind}="${value}"]`);
            if (active) {
                active.classList.add('active');
                if (kind === 'type') active.classList.add('active-type');
            }
        }
        render();
    }

    function resetFilters() {
        activeType = activeFaction = activeRank = null;
        searchQuery = '';
        searchEl.value = '';
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active', 'active-type'));
        render();
    }

    // ===== Поиск =====
    searchEl.addEventListener('input', function () {
        searchQuery = this.value.toLowerCase().trim();
        render();
    });

    // ===== Скидка =====
    toggleEl.addEventListener('click', function () {
        showDiscount = !showDiscount;
        this.classList.toggle('on', showDiscount);
        toggleLbl.textContent = showDiscount ? 'Со скидкой' : 'Без скидки';
        render();
    });

    // ===== Вид =====
    document.getElementById('btn-card').addEventListener('click', () => setView('card'));
    document.getElementById('btn-table').addEventListener('click', () => setView('table'));
    function setView(mode) {
        viewMode = mode;
        grid.classList.toggle('table-view', mode === 'table');
        document.getElementById('btn-card').classList.toggle('active', mode === 'card');
        document.getElementById('btn-table').classList.toggle('active', mode === 'table');
        render();
    }

    // ===== Данные =====
    function filtered() {
        return SHIPS.filter(s => {
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

        grid.innerHTML = ships.map(s => renderCard(s)).join('');
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
                const original = s.res[key];
                const hasDisc = showDiscount && s.disc && original && original !== val;
                return `
          <div class="res-item" title="${r.label}">
            <span class="res-emoji">${r.emoji}</span>
            ${isTable ? '' : `<span class="res-label">${r.label}</span>`}
            <span class="res-value">${val}</span>
            ${hasDisc ? `<span class="res-value-disc">(-${Math.round((1 - val / original) * 100)}%)</span>` : ''}
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

    // ===== Инициализация кнопок =====
    function initButtons() {
        // Типы
        const types = [...new Set(SHIPS.map(s => s.type))];
        const typeContainer = document.getElementById('type-filters');
        types.forEach(t => {
            const btn = document.createElement('button');
            btn.className = 'btn-filter btn-type';
            btn.dataset.type = t;
            btn.innerHTML = `${TYPE_ICONS[t] || ''} ${t}`;
            btn.addEventListener('click', () => setFilter('type', t, btn));
            typeContainer.appendChild(btn);
        });

        // Фракции
        const factions = [...new Set(SHIPS.map(s => s.faction).filter(Boolean))];
        const facContainer = document.getElementById('faction-filters');
        factions.forEach(f => {
            const btn = document.createElement('button');
            btn.className = 'btn-filter btn-faction';
            btn.dataset.faction = f;
            btn.innerHTML = `${FACTION_ICONS[f] || ''} ${f}`;
            btn.addEventListener('click', () => setFilter('faction', f, btn));
            facContainer.appendChild(btn);
        });

        // Ранги
        const ranks = [1, 2, 3, 4, 5, 6, 7];
        const rankContainer = document.getElementById('rank-filters');
        ranks.forEach(r => {
            const btn = document.createElement('button');
            btn.className = 'btn-filter btn-rank';
            btn.dataset.rank = r;
            btn.innerHTML = `★${r}`;
            btn.style.cssText = `background:linear-gradient(135deg,var(--rank-${r}),var(--rank-${r}))22;border-color:var(--rank-${r})55;`;
            btn.addEventListener('click', () => setFilter('rank', r, btn));
            rankContainer.appendChild(btn);
        });

        document.getElementById('btn-reset').addEventListener('click', resetFilters);
    }

    initButtons();
    setView('card');
})();
