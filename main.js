 <script>
    document.addEventListener("DOMContentLoaded", function() {
        
        // ----------------------------------------------------
        // 1. langs
        // ----------------------------------------------------
       const translations = {
            en: { "nav-home": "Home", "nav-projects": "Projects", "nav-shop": "Shop", "nav-events": "Events", "nav-lore": "Lore","nav-gallery": "Gallery", "nav-about": "About Us", "filter-all": "All", "filter-released": "AVAILABLE", "filter-dev": "UNDER DEVELOPMENT" },
            vi: { "nav-home": "Trang Chủ", "nav-projects": "Dự Án", "nav-shop": "Cửa Hàng", "nav-events": "Sự Kiện", "nav-lore": "Cốt Truyện","nav-gallery": "Thư viện ảnh", "nav-about": "Về Chúng Tôi", "filter-all": "Tất Cả", "filter-released": "ĐÃ PHÁT HÀNH", "filter-dev": "ĐANG PHÁT TRIỂN" },
            zh: { "nav-home": "首页", "nav-projects": "项目", "nav-shop": "商店", "nav-events": "活动", "nav-lore": "故事","nav-gallery": "图库", "nav-about": "关于我们", "filter-all": "全部", "filter-released": "现已推出", "filter-dev": "开发中" },
            ja: { "nav-home": "ホーム", "nav-projects": "プロジェクト", "nav-shop": "ショップ", "nav-events": "イベント", "nav-lore": "ロア","nav-gallery": "ギャラリー", "nav-about": "私たちについて", "filter-all": "すべて", "filter-released": "配信中", "filter-dev": "開発中" },
            ru: { "nav-home": "Главная", "nav-projects": "Проекты", "nav-shop": "Магазин", "nav-events": "События", "nav-lore": "Лор","nav-gallery": "Галерея", "nav-about": "О нас", "filter-all": "Все", "filter-released": "ДОСТУПНО", "filter-dev": "В РАЗРАБОТКЕ" },
            es: { "nav-home": "Inicio", "nav-projects": "Proyectos", "nav-shop": "Tienda", "nav-events": "Eventos", "nav-lore": "Lore","nav-gallery": "Galería", "nav-about": "Sobre Nosotros", "filter-all": "Todo", "filter-released": "DISPONIBLE", "filter-dev": "EN DESARROLLO" }
        };

        // Important: Automatically assign an ID to the select tag.
        let langSelect = document.querySelector('select.language-dropdown') || document.querySelector('select');
        if(langSelect && !langSelect.id) langSelect.id = 'langSwitcher';

        if(langSelect) {
            langSelect.addEventListener('change', function(e) {
                const lang = e.target.value;
                document.querySelectorAll('[data-key]').forEach(el => {
                    const key = el.getAttribute('data-key');
                    if (translations[lang] && translations[lang][key]) {
                        el.textContent = translations[lang][key];
                    }
                });
            });
        }

        // ----------------------------------------------------
        // 2. FILTER TABS
        // ----------------------------------------------------
        const filterBtns = document.querySelectorAll('.filter-tab');
        const projects = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove the old activation and enable the new one.
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // filter tab
                const filterValue = btn.getAttribute('data-filter');
                projects.forEach(card => {
                    const status = card.getAttribute('data-status');
                    if (filterValue === 'all' || filterValue === status) {
                        card.style.display = ''; // show again
                    } else {
                        card.style.display = 'none'; // hide
                    }
                });
            });
        });
    });
</script>
