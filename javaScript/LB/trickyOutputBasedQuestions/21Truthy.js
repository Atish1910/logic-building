let x = !false;
console.log(x); // true

let y = !-1;
console.log(y); // false


let z = !'false';
console.log(z); // false

let z1 = !'';
console.log(z1); // true


// 2. let y = !-1;
// -1 is a truthy value in JavaScript. Any non-zero number is truthy.
// Applying ! to a truthy value (-1) results in false.


// 3. let z = !'false';
// 'false' is a non-empty string, and in JavaScript, any non-empty string is truthy, regardless of its content.
// Since 'false' (the string) is truthy, applying ! makes it false.