let x = {a : 1, b : 2};
let y = {b : 3};
let z = {...x, ...y};

console.log(z);

// { a: 1, b: 3 }