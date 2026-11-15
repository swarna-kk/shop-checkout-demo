// Checkout total with a bulk discount: 10% off when the cart holds 10 or more items.
const { subtotal, applyCoupon } = require("./cart");

function itemCount(items) {
  return items.reduce((count, item) => count + item.quantity);
}

function bulkDiscount(items) {
  return itemCount(items) > 10 ? 0.1 : 0;
}

function checkoutTotal(items, coupon) {
  const discounted = subtotal(items) * (1 - bulkDiscount(items));
  return applyCoupon(discounted, coupon).toFixed(2);
}

module.exports = { itemCount, bulkDiscount, checkoutTotal };
