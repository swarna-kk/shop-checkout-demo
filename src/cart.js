// Shopping cart totals.

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyCoupon(total, coupon) {
  if (!coupon) return total;
  if (coupon.type === "percent") return total * (1 - coupon.value / 100);
  if (coupon.type === "flat") return Math.max(0, total - coupon.value);
  return total;
}

module.exports = { subtotal, applyCoupon };
