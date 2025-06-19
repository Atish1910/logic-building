const x = +"code";
const y = +"code";

console.log(x); // nan
console.log(x == y); // false
console.log(x === y); // false

// This is because NaN represents an invalid number, and comparisons involving NaN always return false.