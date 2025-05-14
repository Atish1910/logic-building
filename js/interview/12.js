let obj1 = {};
let obj2 = {};
let obj3 = obj1; // obj3 references the same object as obj1

console.log({} == {});  // false (different objects)
console.log({} === {}); // false (different objects)
console.log(obj1 == obj3);  // true  (same reference)
console.log(obj1 === obj3); // true  (same reference)



// Objects are compared by reference, not by value.

// In JavaScript, when you create an object using {}, it is stored in memory at a unique location.
// Even if two objects have the same structure (e.g., both are empty {}), they are different instances in memory.
// == and === both check reference equality for objects.

// The == operator checks if both operands refer to the same object in memory.
// The === operator does the same but also ensures the same type (which is redundant here because both operands are objects).
// Since {} and {} are two different instances, the comparison results in false for both == and ===.