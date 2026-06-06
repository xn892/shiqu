// 食趣 - 美食发现应用
// 数据存储
const appData = {
    currentUser: {
        name: '美食爱好者',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
        favorites: [],
        history: []
    },
    categories: [
        { id: 'breakfast', name: '早餐', icon: 'fa-coffee' },
        { id: 'lunch', name: '午餐', icon: 'fa-hamburger' },
        { id: 'dinner', name: '晚餐', icon: 'fa-utensils' },
        { id: 'dessert', name: '甜点', icon: 'fa-ice-cream' },
        { id: 'drink', name: '饮品', icon: 'fa-cocktail' },
        { id: 'snack', name: '小吃', icon: 'fa-cookie' },
        { id: 'healthy', name: '健康餐', icon: 'fa-leaf' },
        { id: 'quick', name: '快手菜', icon: 'fa-bolt' }
    ],
    recipes: [
        {
            id: 1,
            title: '红烧肉',
            image: 'https://images.unsplash.com/photo-1606659639419-814049dc84bd?w=400&h=300&fit=crop',
            time: '90分钟',
            difficulty: '中等',
            calories: '450卡',
            author: {
                name: '厨神小王',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
            },
            category: 'dinner',
            rating: 4.8,
            likes: 2341,
            ingredients: [
                { name: '五花肉', amount: '500g' },
                { name: '冰糖', amount: '30g' },
                { name: '生抽', amount: '2勺' },
                { name: '老抽', amount: '1勺' },
                { name: '料酒', amount: '2勺' },
                { name: '姜片', amount: '5片' }
            ],
            steps: [
                '五花肉洗净切块，冷水下锅焯水去血沫',
                '锅中放油和冰糖，小火炒至糖色呈琥珀色',
                '倒入五花肉翻炒上色',
                '加入生抽、老抽、料酒和姜片，翻炒均匀',
                '加入没过肉的热水，大火烧开后转小火炖煮1小时',
                '大火收汁至浓稠即可'
            ]
        },
        {
            id: 2,
            title: '麻婆豆腐',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
            time: '20分钟',
            difficulty: '简单',
            calories: '280卡',
            author: {
                name: '川菜大师',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
            },
            category: 'dinner',
            rating: 4.6,
            likes: 1856,
            ingredients: [
                { name: '嫩豆腐', amount: '1块' },
                { name: '猪肉末', amount: '100g' },
                { name: '豆瓣酱', amount: '1勺' },
                { name: '花椒粉', amount: '适量' },
                { name: '葱花', amount: '适量' }
            ],
            steps: [
                '豆腐切块，用淡盐水浸泡10分钟',
                '锅中热油，炒香肉末至变色',
                '加入豆瓣酱炒出红油',
                '加入豆腐和适量水，轻轻推动',
                '勾芡收汁，撒花椒粉和葱花即可'
            ]
        },
        {
            id: 3,
            title: '番茄鸡蛋面',
            image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&h=300&fit=crop',
            time: '15分钟',
            difficulty: '简单',
            calories: '320卡',
            author: {
                name: '家常味道',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
            },
            category: 'breakfast',
            rating: 4.7,
            likes: 3120,
            ingredients: [
                { name: '面条', amount: '200g' },
                { name: '番茄', amount: '2个' },
                { name: '鸡蛋', amount: '2个' },
                { name: '葱花', amount: '适量' },
                { name: '盐', amount: '适量' }
            ],
            steps: [
                '番茄切块，鸡蛋打散备用',
                '先炒鸡蛋盛出备用',
                '炒番茄出汁后加入鸡蛋',
                '加水煮开，放入面条煮熟',
                '调味撒葱花即可'
            ]
        },
        {
            id: 4,
            title: '宫保鸡丁',
            image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop',
            time: '25分钟',
            difficulty: '中等',
            calories: '380卡',
            author: {
                name: '美食达人',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
            },
            category: 'lunch',
            rating: 4.9,
            likes: 4520,
            ingredients: [
                { name: '鸡胸肉', amount: '300g' },
                { name: '花生米', amount: '50g' },
                { name: '干辣椒', amount: '10个' },
                { name: '葱段', amount: '3根' },
                { name: '花椒', amount: '1小把' }
            ],
            steps: [
                '鸡肉切丁，用料酒、生抽腌制15分钟',
                '花生米炸至金黄酥脆备用',
                '调碗汁：生抽、老抽、糖、醋、淀粉',
                '爆香花椒辣椒，下鸡丁炒至变色',
                '倒入碗汁快速翻炒，加花生米和葱段即可'
            ]
        },
        {
            id: 5,
            title: '草莓奶油蛋糕',
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
            time: '60分钟',
            difficulty: '困难',
            calories: '420卡',
            author: {
                name: '甜品控',
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
            },
            category: 'dessert',
            rating: 4.8,
            likes: 2890,
            ingredients: [
                { name: '低筋面粉', amount: '100g' },
                { name: '鸡蛋', amount: '4个' },
                { name: '细砂糖', amount: '80g' },
                { name: '淡奶油', amount: '300ml' },
                { name: '草莓', amount: '适量' }
            ],
            steps: [
                '蛋黄蛋白分离，蛋黄加糖打发至发白',
                '蛋白分次加糖打至湿性发泡',
                '混合蛋黄糊和蛋白霜，筛入面粉翻拌',
                '倒入模具，160度烤35分钟',
                '蛋糕切片，抹奶油，装饰草莓即可'
            ]
        },
        {
            id: 6,
            title: '芒果奶昔',
            image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
            time: '5分钟',
            difficulty: '简单',
            calories: '180卡',
            author: {
                name: '饮品师',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
            },
            category: 'drink',
            rating: 4.7,
            likes: 1520,
            ingredients: [
                { name: '芒果', amount: '1个' },
                { name: '牛奶', amount: '200ml' },
                { name: '酸奶', amount: '100g' },
                { name: '蜂蜜', amount: '适量' }
            ],
            steps: [
                '芒果去皮切块',
                '所有材料放入搅拌机',
                '搅打至顺滑',
                '倒入杯中，可加少许芒果块装饰'
            ]
        },
        {
            id: 7,
            title: '清蒸鲈鱼',
            image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
            time: '20分钟',
            difficulty: '中等',
            calories: '220卡',
            author: {
                name: '海鲜大厨',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
            },
            category: 'dinner',
            rating: 4.9,
            likes: 3200,
            ingredients: [
                { name: '鲈鱼', amount: '1条' },
                { name: '姜丝', amount: '适量' },
                { name: '葱丝', amount: '适量' },
                { name: '蒸鱼豉油', amount: '2勺' },
                { name: '热油', amount: '2勺' }
            ],
            steps: [
                '鲈鱼处理干净，两面划刀',
                '盘底铺姜片，放上鱼，表面放姜丝',
                '水开后大火蒸8-10分钟',
                '倒掉蒸出的水，铺上葱丝',
                '淋上蒸鱼豉油和热油即可'
            ]
        },
        {
            id: 8,
            title: '蔬菜沙拉',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
            time: '10分钟',
            difficulty: '简单',
            calories: '150卡',
            author: {
                name: '健康达人',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
            },
            category: 'healthy',
            rating: 4.5,
            likes: 980,
            ingredients: [
                { name: '生菜', amount: '适量' },
                { name: '小番茄', amount: '8个' },
                { name: '黄瓜', amount: '1根' },
                { name: '玉米粒', amount: '30g' },
                { name: '沙拉酱', amount: '适量' }
            ],
            steps: [
                '所有蔬菜洗净沥干',
                '生菜撕小块，黄瓜切片，小番茄对半',
                '混合所有蔬菜',
                '淋上沙拉酱拌匀即可'
            ]
        },
        {
            id: 9,
            title: '蛋炒饭',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=400&h=300&fit=crop',
            time: '10分钟',
            difficulty: '简单',
            calories: '350卡',
            author: {
                name: '快手厨娘',
                avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop'
            },
            category: 'quick',
            rating: 4.6,
            likes: 2100,
            ingredients: [
                { name: '米饭', amount: '1碗' },
                { name: '鸡蛋', amount: '2个' },
                { name: '葱花', amount: '适量' },
                { name: '盐', amount: '适量' },
                { name: '胡椒粉', amount: '少许' }
            ],
            steps: [
                '鸡蛋打散炒熟盛出',
                '锅中放油，下米饭炒散',
                '倒入鸡蛋翻炒均匀',
                '调味撒葱花即可'
            ]
        },
        {
            id: 10,
            title: '煎饺',
            image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
            time: '15分钟',
            difficulty: '简单',
            calories: '300卡',
            author: {
                name: '面食专家',
                avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop'
            },
            category: 'snack',
            rating: 4.7,
            likes: 1890,
            ingredients: [
                { name: '饺子', amount: '12个' },
                { name: '油', amount: '2勺' },
                { name: '水', amount: '半碗' },
                { name: '葱花', amount: '适量' }
            ],
            steps: [
                '平底锅放油，饺子摆入锅中',
                '小火煎至底部金黄',
                '倒入半碗水，盖盖焖5分钟',
                '水干后再煎一会儿，撒葱花即可'
            ]
        },
        {
            id: 11,
            title: '糖醋排骨',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
            time: '45分钟',
            difficulty: '中等',
            calories: '480卡',
            author: {
                name: '家常菜',
                avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop'
            },
            category: 'dinner',
            rating: 4.8,
            likes: 4100,
            ingredients: [
                { name: '排骨', amount: '500g' },
                { name: '糖', amount: '3勺' },
                { name: '醋', amount: '2勺' },
                { name: '生抽', amount: '2勺' },
                { name: '料酒', amount: '1勺' }
            ],
            steps: [
                '排骨焯水去血沫',
                '锅中放油和糖，炒出糖色',
                '下排骨翻炒上色',
                '加调料和水，大火烧开转小火炖30分钟',
                '大火收汁，至汤汁浓稠裹匀排骨'
            ]
        },
        {
            id: 12,
            title: '寿司拼盘',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop',
            time: '40分钟',
            difficulty: '困难',
            calories: '380卡',
            author: {
                name: '日料大师',
                avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop'
            },
            category: 'lunch',
            rating: 4.9,
            likes: 2800,
            ingredients: [
                { name: '寿司米', amount: '300g' },
                { name: '海苔', amount: '5张' },
                { name: '三文鱼', amount: '100g' },
                { name: '黄瓜', amount: '1根' },
                { name: '寿司醋', amount: '2勺' }
            ],
            steps: [
                '米饭煮好后趁热拌入寿司醋晾凉',
                '海苔铺在竹帘上，铺一层米饭',
                '放上切好的食材',
                '卷起竹帘压实，切成小段',
                '摆盘装饰即可'
            ]
        }
    ]
};

// 状态管理
let currentPage = 'home';
let favorites = JSON.parse(localStorage.getItem('shiqu_favorites')) || [];
let history = JSON.parse(localStorage.getItem('shiqu_history')) || [];
let isDarkMode = localStorage.getItem('shiqu_darkmode') === 'true';

// DOM 元素
const elements = {
    navItems: document.querySelectorAll('.nav-item'),
    mobileNavItems: document.querySelectorAll('.mobile-nav-item'),
    pages: document.querySelectorAll('.page'),
    searchInput: document.getElementById('searchInput'),
    recipeModal: document.getElementById('recipeModal'),
    recipeDetail: document.getElementById('recipeDetail')
};

// 初始化
function init() {
    renderRecommendations();
    renderCategories();
    renderPopular();
    renderFavorites();
    renderHistory();
    setupEventListeners();

    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// 设置事件监听
function setupEventListeners() {
    // 导航切换
    elements.navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // 移动端导航
    elements.mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // 搜索
    elements.searchInput.addEventListener('input', debounce((e) => {
        searchRecipes(e.target.value);
    }, 300));

    // 分类卡片点击
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
        });
    });

    // 筛选按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPopular(btn.dataset.filter);
        });
    });

    // Tab 切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadProfileTab(btn.dataset.tab);
        });
    });

    // 深色模式切换
    document.getElementById('darkModeToggle')?.addEventListener('change', (e) => {
        toggleDarkMode(e.target.checked);
    });

    // 模态框关闭
    elements.recipeModal.addEventListener('click', (e) => {
        if (e.target === elements.recipeModal) {
            closeModal();
        }
    });

    // ESC 关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 页面导航
function navigateTo(page) {
    currentPage = page;

    // 更新导航状态
    elements.navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    elements.mobileNavItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    // 切换页面
    elements.pages.forEach(p => {
        p.classList.toggle('active', p.id === page);
    });

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 页面特定逻辑
    if (page === 'favorites') {
        renderFavorites();
    } else if (page === 'history') {
        renderHistory();
    }
}

// 渲染推荐食谱
function renderRecommendations() {
    const container = document.getElementById('recommendationGrid');
    const recommendations = appData.recipes.slice(0, 6);
    container.innerHTML = recommendations.map(recipe => createRecipeCard(recipe)).join('');
}

// 渲染分类
function renderCategories() {
    const container = document.getElementById('categoryGrid');
    const categoriesWithImages = [
        { id: 'breakfast', name: '早餐', image: 'https://images.unsplash.com/photo-1533089862017-5614ec95e214?w=400&h=300&fit=crop', count: 156 },
        { id: 'lunch', name: '午餐', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', count: 234 },
        { id: 'dinner', name: '晚餐', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', count: 312 },
        { id: 'dessert', name: '甜点', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop', count: 189 },
        { id: 'drink', name: '饮品', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', count: 98 },
        { id: 'snack', name: '小吃', image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop', count: 145 },
        { id: 'healthy', name: '健康餐', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop', count: 167 },
        { id: 'quick', name: '快手菜', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop', count: 203 }
    ];

    container.innerHTML = categoriesWithImages.map(cat => `
        <div class="category-detail-card" onclick="filterByCategory('${cat.id}')">
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-detail-overlay">
                <div>
                    <h4>${cat.name}</h4>
                    <p>${cat.count}道食谱</p>
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染热门食谱
function renderPopular() {
    const container = document.getElementById('popularGrid');
    const sorted = [...appData.recipes].sort((a, b) => b.likes - a.likes);
    container.innerHTML = sorted.map(recipe => createRecipeCard(recipe)).join('');
}

// 渲染收藏
function renderFavorites() {
    const container = document.getElementById('favoritesGrid');
    const emptyState = document.getElementById('favoritesEmpty');

    if (favorites.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    const favoriteRecipes = appData.recipes.filter(r => favorites.includes(r.id));
    container.innerHTML = favoriteRecipes.map(recipe => createRecipeCard(recipe)).join('');
}

// 渲染历史
function renderHistory() {
    const container = document.getElementById('historyList');

    if (history.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clock"></i>
                <p>还没有浏览记录</p>
            </div>
        `;
        return;
    }

    const historyRecipes = history.map(h => {
        const recipe = appData.recipes.find(r => r.id === h.id);
        return recipe ? { ...recipe, viewedAt: h.date } : null;
    }).filter(Boolean);

    container.innerHTML = historyRecipes.map(recipe => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(recipe.viewedAt)}</div>
            <div class="timeline-content" onclick="openRecipe(${recipe.id})">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="timeline-info">
                    <h4>${recipe.title}</h4>
                    <p>${recipe.time} · ${recipe.difficulty}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// 创建食谱卡片
function createRecipeCard(recipe) {
    const isFavorite = favorites.includes(recipe.id);
    return `
        <div class="recipe-card" onclick="openRecipe(${recipe.id})">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                ${recipe.rating >= 4.8 ? '<span class="recipe-badge">精选</span>' : ''}
                <button class="recipe-favorite ${isFavorite ? 'active' : ''}"
                        onclick="event.stopPropagation(); toggleFavorite(${recipe.id})"
                        title="${isFavorite ? '取消收藏' : '收藏'}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="recipe-content">
                <h4 class="recipe-title">${recipe.title}</h4>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
                <div class="recipe-author">
                    <img src="${recipe.author.avatar}" alt="${recipe.author.name}">
                    <span>${recipe.author.name}</span>
                </div>
            </div>
        </div>
    `;
}

// 打开食谱详情
function openRecipe(id) {
    const recipe = appData.recipes.find(r => r.id === id);
    if (!recipe) return;

    // 添加到历史
    addToHistory(id);

    const isFavorite = favorites.includes(id);
    elements.recipeDetail.innerHTML = `
        <div class="recipe-detail-header">
            <img src="${recipe.image}" alt="${recipe.title}">
        </div>
        <div class="recipe-detail-content">
            <h2 class="recipe-detail-title">${recipe.title}</h2>
            <div class="recipe-detail-meta">
                <div class="recipe-detail-meta-item">
                    <i class="far fa-clock"></i>
                    <span>${recipe.time}</span>
                </div>
                <div class="recipe-detail-meta-item">
                    <i class="fas fa-signal"></i>
                    <span>${recipe.difficulty}</span>
                </div>
                <div class="recipe-detail-meta-item">
                    <i class="fas fa-fire"></i>
                    <span>${recipe.calories}</span>
                </div>
                <div class="recipe-detail-meta-item">
                    <i class="fas fa-star" style="color: #ffa502;"></i>
                    <span>${recipe.rating}分</span>
                </div>
                <div class="recipe-detail-meta-item">
                    <i class="fas fa-heart" style="color: #ff6b6b;"></i>
                    <span>${recipe.likes}赞</span>
                </div>
            </div>

            <div class="recipe-section">
                <h3>食材清单</h3>
                <div class="ingredients-list">
                    ${recipe.ingredients.map(ing => `
                        <div class="ingredient-item">
                            <span>${ing.name}</span>
                            <span style="color: var(--text-secondary);">${ing.amount}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <h3>制作步骤</h3>
                <div class="steps-list">
                    ${recipe.steps.map((step, index) => `
                        <div class="step-item">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-content">${step}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <button class="btn-primary" style="width: 100%; margin-bottom: 12px;"
                        onclick="toggleFavorite(${recipe.id}); closeModal(); showToast('${isFavorite ? '已取消收藏' : '已添加到收藏'}')">
                    <i class="fas fa-heart" style="margin-right: 8px;"></i>
                    ${isFavorite ? '取消收藏' : '收藏食谱'}
                </button>
            </div>
        </div>
    `;

    elements.recipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    elements.recipeModal.classList.remove('active');
    document.body.style.overflow = '';
}

// 切换收藏
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('已取消收藏');
    } else {
        favorites.push(id);
        showToast('已添加到收藏');
    }
    localStorage.setItem('shiqu_favorites', JSON.stringify(favorites));

    // 刷新显示
    if (currentPage === 'favorites') {
        renderFavorites();
    } else {
        renderRecommendations();
        renderPopular();
    }
}

// 添加到历史
function addToHistory(id) {
    const existingIndex = history.findIndex(h => h.id === id);
    if (existingIndex > -1) {
        history.splice(existingIndex, 1);
    }
    history.unshift({ id, date: new Date().toISOString() });
    if (history.length > 50) {
        history = history.slice(0, 50);
    }
    localStorage.setItem('shiqu_history', JSON.stringify(history));
}

// 按分类筛选
function filterByCategory(category) {
    navigateTo('category');
    const filtered = appData.recipes.filter(r => r.category === category);
    const container = document.getElementById('categoryGrid');
    const catName = appData.categories.find(c => c.id === category)?.name || category;

    container.innerHTML = `
        <div style="grid-column: 1 / -1;">
            <h3 style="margin-bottom: 20px;">${catName} (${filtered.length}道食谱)</h3>
            <div class="recipe-grid">
                ${filtered.map(recipe => createRecipeCard(recipe)).join('')}
            </div>
        </div>
    `;
}

// 筛选热门
function filterPopular(filter) {
    const container = document.getElementById('popularGrid');
    let sorted;

    switch(filter) {
        case 'week':
            sorted = [...appData.recipes].sort((a, b) => b.likes - a.likes).slice(0, 6);
            break;
        case 'month':
            sorted = [...appData.recipes].sort((a, b) => b.rating - a.rating);
            break;
        case 'new':
            sorted = [...appData.recipes].reverse();
            break;
        default:
            sorted = [...appData.recipes].sort((a, b) => b.likes - a.likes);
    }

    container.innerHTML = sorted.map(recipe => createRecipeCard(recipe)).join('');
}

// 搜索食谱
function searchRecipes(query) {
    if (!query.trim()) {
        renderRecommendations();
        return;
    }

    const filtered = appData.recipes.filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(query.toLowerCase()))
    );

    const container = document.getElementById('recommendationGrid');
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <p>没有找到相关食谱</p>
            </div>
        `;
    } else {
        container.innerHTML = filtered.map(recipe => createRecipeCard(recipe)).join('');
    }
}

// 加载个人中心Tab
function loadProfileTab(tab) {
    const container = document.getElementById('profileTabContent');

    switch(tab) {
        case 'my-recipes':
            container.innerHTML = `
                <div class="recipe-grid">
                    ${appData.recipes.slice(0, 4).map(recipe => createRecipeCard(recipe)).join('')}
                </div>
            `;
            break;
        case 'liked':
            container.innerHTML = `
                <div class="recipe-grid">
                    ${appData.recipes.slice(4, 8).map(recipe => createRecipeCard(recipe)).join('')}
                </div>
            `;
            break;
        case 'reviews':
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fas fa-comment" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                    <p>暂无评论</p>
                </div>
            `;
            break;
    }
}

// 切换深色模式
function toggleDarkMode(enabled) {
    isDarkMode = enabled;
    if (enabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('shiqu_darkmode', enabled);
}

// 显示Toast提示
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
    if (diff < 604800000) return `${Math.floor(diff / 86400000)}天前`;

    return date.toLocaleDateString('zh-CN');
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导出全局函数供HTML调用
window.navigateTo = navigateTo;
window.openRecipe = openRecipe;
window.closeModal = closeModal;
window.toggleFavorite = toggleFavorite;
window.filterByCategory = filterByCategory;
