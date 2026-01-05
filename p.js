// calculate the price

const cart = [
  { item: "Book", price: 120 },
  { item: "Pen", price: "" },
  { item: "Bag", price: 300 },
];

let iTotal = 0;
for (let i = 0; i < cart.length; i++) {
  iTotal = iTotal + Number(cart[i].price);
}
console.log(iTotal);
