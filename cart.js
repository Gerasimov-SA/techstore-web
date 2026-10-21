
function renderCart() {
  const cart = getCart(); // из data.js
  const cartItemsContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');
  const emptyMessage = document.getElementById('cart-empty');
  const cartBadge = document.getElementById('cart-badge');

  if (!cart || cart.length === 0) {
    if (emptyMessage) emptyMessage.style.display = 'block';
    if (cartItemsContainer) cartItemsContainer.style.display = 'none';
    if (totalElement) totalElement.style.display = 'none';

    // Обнуляем бейдж корзины
    if (cartBadge) cartBadge.textContent = '0';
    return;
  }

  // Показываем список, скрываем «пусто»
  if (emptyMessage) emptyMessage.style.display = 'none';
  if (cartItemsContainer) cartItemsContainer.style.display = 'block';
  if (totalElement) totalElement.style.display = 'block';

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">
          ${item.price.toLocaleString()} ₽ × ${item.qty} = ${(item.price * item.qty).toLocaleString()} ₽
        </div>
      </div>
      <div class="cart-item-actions">
        <button class="btn-control minus" data-index="${index}">−</button>
        <button class="btn-control plus" data-index="${index}">+</button>
        <button class="btn-delete" data-index="${index}">✕</button>
      </div>
    </div>
  `).join('');

  if (totalElement) {
    totalElement.textContent = `Итого: ${total.toLocaleString()} ₽`;
  }

  // Обновляем бейдж
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) {
    cartBadge.textContent = count;
  }
}

function handleCartActions(e) {
  const btn = e.target.closest('button');
  if (!btn) return;

  const index = parseInt(btn.dataset.index, 10);
  const cart = getCart();
  if (index === undefined || index < 0 || index >= cart.length) return;

  let updatedCart = [...cart];

  if (btn.classList.contains('minus')) {
    updatedCart[index].qty--;
    if (updatedCart[index].qty <= 0) {
      updatedCart.splice(index, 1);
    }
  } else if (btn.classList.contains('plus')) {
    updatedCart[index].qty++;
  } else if (btn.classList.contains('btn-delete')) {
    updatedCart.splice(index, 1);
  }

  saveCart(updatedCart); // из data.js
  renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
  const actionsContainer = document.getElementById('cart-items');
  if (actionsContainer) {
    actionsContainer.addEventListener('click', handleCartActions);
  }
  renderCart();
});
