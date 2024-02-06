/**
 * Shirt price ==> 800
 * Pant price ==> 900
 * Shoe price ==>2500
 */

function calculatePrice(shirt, pant, shoe) {
  const parShirt = 800;
  const parPant = 900;
  const parShoe = 2500;

  const shirtTotal = shirt * parShirt;
  const pantTotal = pant * parPant;
  const shoeTotal = shoe * parShoe;

  const priceTotal = shirtTotal + pantTotal + shoeTotal;
  return priceTotal;
}

const price = calculatePrice(0, 0, 2);
console.log(price);
