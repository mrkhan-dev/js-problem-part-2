const products = [
  {name: "mouse", price: 500},
  {name: "keyboard", price: 800},
  {name: "headphone", price: 1100},
  {name: "monitor", price: 11000},
];

function countTotal(product) {
  let totalPrice = 0;
  for (const item of product) {
    totalPrice += item.price;
  }
  return totalPrice;
}

const total = countTotal(products);
console.log(`Total price ${total} taka`);
