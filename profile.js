
const cartBadge = document.getElementById('cart-badge');

function updateCartBadge() {
  const cart = getCart(); // из data.js
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = count;
}

function renderStats() {
  const ordersCount = 3;
  const totalSpent = 42500;

  document.getElementById('orders-count').textContent = ordersCount;
  document.getElementById('total-spent').textContent = totalSpent.toLocaleString() + ' ₽';
}

function logout() {
  if (confirm('Вы уверены, что хотите выйти?')) {
    alert('Вы вышли из аккаунта');
  }
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  updateCartBadge();
});
