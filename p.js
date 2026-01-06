// calculate the price

const cart = [
  { item: "Book", price: 120 },
  { item: "Pen", price: "" },
  { item: "Bag", price: 300 },
];
let iSum = 0;
for (let i = 0; i < cart.length; i++) {
  iSum = iSum + Number(cart[i].price);
}
console.log(iSum);
