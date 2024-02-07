const myShopping = [
  {name: "shirt", price: "600", quantity: 4},
  {name: "pant", price: "800", quantity: 2},
  {name: "shoe", price: "1500", quantity: 3},
  {name: "t-shirt", price: "500", quantity: 1},
];

function cartTotal(products) {
  let totalCart = 0;
  for (const product of products) {
    const myProductCost = product.price * product.quantity;
    totalCart += myProductCost;
  }
  return totalCart;
}

const totalPrice = cartTotal(myShopping);
console.log(totalPrice);
