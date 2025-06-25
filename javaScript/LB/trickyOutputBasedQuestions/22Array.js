let array = [10, 20, 30];
array[-1] = -10;
console.log(array.length);  // 3
console.log(array[-1]); // -10

// 3
// -10

// array[-1] = -10;

// JavaScript arrays are objects, and when you use a negative index like -1, JavaScript doesn't treat it as a valid array index (like Python does).
// Instead, -1 is added as a custom property on the array object, not as a numeric index.
// The actual array remains [10, 20, 30], but now it has a property "-1" with a value of -10.
// console.log(array.length); // 3

// The length of an array in JavaScript is determined by the highest numeric index.
// Since -1 is not a numeric index but a property, the length remains 3 (from [10, 20, 30]).
// console.log(array[-1]); // -10

// Since -1 is stored as an object property, JavaScript can access it like array["-1"], which returns -10.