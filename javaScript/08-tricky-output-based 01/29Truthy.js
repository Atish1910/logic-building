let x = +"0";  // 0
let y = -"0";  // 0
console.log(x == y); // true
console.log(x === y); // true

console.log(Object.is(x,y));

// true
// true
// true