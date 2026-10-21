
let activeFilter = 'all';

// Элементы DOM (ищем после загрузки страницы)
const productsGrid = document.getElementById('products-grid');
const cartBadge = document.getElementById('cart-badge');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

function updateCartBadge() {
  const cart = getCart(); // из data.js
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = count;
}

function renderProducts(products) {
  if (!productsGrid) return;
  productsGrid.innerHTML = products.map(product => `
    <a href="/product.html?id=${product.id}" class="product-card">
      <div class="product-img">${product.emoji}</div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">${product.price.toLocaleString()} ₽</div>
      </div>
    </a>
  `).join('');
}

function setFilter(category) {
  activeFilter = category;

  filterButtons.forEach(btn => btn.classList.remove('active'));
  // Находим кнопку по тексту или data-атрибуту — здесь проще по тексту, если категории совпадают
  const activeBtn = Array.from(filterButtons).find(
    btn => btn.textContent.toLowerCase() === category.replace('_', ' ')
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  filterProducts();
}

function filterProducts() {
  const query = (searchInput && searchInput.value) ? searchInput.value.toLowerCase() : '';
  const filtered = PRODUCTS.filter(p =>
    (activeFilter === 'all' || p.category === activeFilter) &&
    (p.name.toLowerCase().includes(query) || p.category.includes(query))
  );
  renderProducts(filtered);
}

// Навешиваем обработчики
function initHandlers() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const categoryMap = {
        'Все': 'all',
        'Ноутбуки': 'laptops',
        'Смартфоны': 'phones',
        'Планшеты': 'tablets',
        'Аксессуары': 'accessories'
      };
      const category = categoryMap[btn.textContent] || 'all';
      setFilter(category);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initHandlers();
  renderProducts(PRODUCTS);
  updateCartBadge();
});
