const phones = [
  {name: "Samsung", price: 120000, battery: "5000mah", color: "black"},
  {name: "Xiaomi", price: 220000, battery: "5000mah", color: "black"},
  {name: "Iphone", price: 10000, battery: "5000mah", color: "black"},
  {name: "Oppo", price: 5000, battery: "5000mah", color: "black"},
  {name: "Itel", price: 8000, battery: "5000mah", color: "black"},
  {name: "Walton", price: 9000, battery: "5000mah", color: "black"},
];

function getHighestPhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

const myChoice = getHighestPhone(phones);
console.log(myChoice);
