const arr = [10, 20, 30];

// old way
let a = arr[0];
let b = arr[1];

// destructuring way
let [x, y, z] = arr;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30


// ============================================================

const person = { name: "Atish", age: 25 };

// old way
let n = person.name;
let a1 = person.age;

// destructuring way
let { name, age } = person;

console.log(name); // Atish
console.log(age);  // 25
