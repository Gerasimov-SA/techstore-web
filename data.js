const PRODUCTS = [
  { id: 1, name: "MacBook Pro 14\"", category: "laptops", price: 199990, emoji: "💻", desc: "Премиальный ноутбук для профессионалов. Процессор M3 Pro, 18 ГБ ОЗУ, 512 ГБ SSD.", specs: { "Экран": "14.2\" Liquid Retina XDR", "Процессор": "Apple M3 Pro", "ОЗУ": "18 ГБ", "Накопитель": "512 ГБ SSD", "Вес": "1.6 кг" } },
  { id: 2, name: "ASUS ROG Strix G16", category: "laptops", price: 149990, emoji: "💻", desc: "Игровой ноутбук с RTX 4060. Идеален для гейминга и тяжёлых задач.", specs: { "Экран": "16\" 165 Гц", "Процессор": "Intel i7-13650HX", "Видеокарта": "RTX 4060", "ОЗУ": "16 ГБ", "Накопитель": "1 ТБ SSD" } },
  { id: 3, name: "Lenovo IdeaPad 3", category: "laptops", price: 45990, emoji: "💻", desc: "Надёжный ноутбук для работы и учёбы. Лёгкий, с хорошей автономностью.", specs: { "Экран": "15.6\" Full HD", "Процессор": "AMD Ryzen 5 5500U", "ОЗУ": "8 ГБ", "Накопитель": "256 ГБ SSD", "Вес": "1.65 кг" } },
  { id: 4, name: "iPhone 15 Pro", category: "phones", price: 119990, emoji: "📱", desc: "Флагманский смартфон Apple. Титановый корпус, A17 Pro, камера 48 МП.", specs: { "Экран": "6.1\" Super Retina XDR", "Процессор": "A17 Pro", "Память": "128 ГБ", "Камера": "48 МП", "Батарея": "3274 мАч" } },
  { id: 5, name: "Samsung Galaxy S24", category: "phones", price: 99990, emoji: "📱", desc: "Топовый Android‑смартфон. Яркий дисплей, мощный процессор, отличная камера.", specs: { "Экран": "6.2\" Dynamic AMOLED", "Процессор": "Exynos 2400", "Память": "256 ГБ", "Камера": "50 МП", "Батарея": "4000 мАч" } },
  { id: 6, name: "iPad Air 11\"", category: "tablets", price: 79990, emoji: "📺", desc: "Лёгкий и производительный планшет для работы и развлечений.", specs: { "Экран": "11\" Liquid Retina", "Процессор": "M2", "Память": "64 ГБ", "Аккумулятор": "до 10 часов", "Вес": "461 г" } },
  { id: 7, name: "Sony WH‑1000XM5", category: "accessories", price: 34990, emoji: "🎧", desc: "Беспроводные наушники с топовым шумоподавлением и отличным звуком.", specs: { "Тип": "полноразмерные", "Шумоподавление": "активное", "Время работы": "до 30 часов", "Подключение": "Bluetooth 5.2", "Вес": "250 г" } },
  { id: 8, name: "Apple Watch Series 9", category: "accessories", price: 44990, emoji: "⌚", desc: "Умные часы с расширенными функциями здоровья и ярким дисплеем.", specs: { "Дисплей": "45 мм Retina", "Датчики": "пульс, SpO2, ЭКГ", "Время работы": "до 18 часов", "Водонепроницаемость": "WR50", "Совместимость": "iOS" } }
];

// Вспомогательная функция для получения корзины из localStorage
function getCart() {
  const stored = localStorage.getItem('techstore-cart');
  return stored ? JSON.parse(stored) : [];
}
// Сохраняем корзину
function saveCart(cart) {
  localStorage.setItem('techstore-cart', JSON.stringify(cart));
}
