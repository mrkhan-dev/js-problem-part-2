/**
 * up to 100 -----> 100
 * up to 101-200 --->90
 * up to 200 ----> 70
 */

function discountPrice(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const totalPrice = discountPrice(200);
console.log(totalPrice);
