// ✅ 1. Convert Object to Array
// ✅ 2. Sum All Values in Object
// ✅ 3. Sum All Values in Object
// ✅ 4. Count Keys in Object

//======================================================================
// ✅ 1. Convert Object to Array
const obj = { name: "atish", sirname: "kamble" };
const iResult = Object.entries(obj);
console.log(iResult);

//======================================================================
// ✅ 2. Sum All Values in Object
const obj2 = { a: 10, b: 20, c: 30 };
const iSum = Object.values(obj2).reduce((prev, curr) => {
  return prev + curr;
});
console.log(iSum);

//======================================================================
// ✅ 2. Sum All Values in Object
const obj3 = { a: 10, b: "", c: 30 };
//method 1
const iSum2 = Object.values(obj3).reduce((prev, curr) => {
  return prev + (curr || 0);
});
console.log("solve Only with reduce method", iSum2);

// method 2

const iSum3 = Object.values(obj3)
  .filter((value) => typeof value == "number")
  .reduce((prev, curr) => {
    return prev + curr;
  });

console.log("solev with filter & reduce method", iSum3);

// method 3
const obj7 = { 1: 1, b: 20, c: undefined, d: true };
const iSum4 = Object.values(obj7).reduce((prev, curr) => {
  return (prev + (curr ?? 0), 0);
});
console.log(iSum4);
//======================================================================

// ✅ 3. Count Keys in Object
const obj4 = { a: 2, b: 3, c: 4, d: 5 };
const countKeys = Object.keys(obj4).length;
console.log("Count Keys in Object : ", countKeys);

//======================================================================

// ✅ 4. Merge Two Objects

const obj5 = { a: 2, b: 3, c: 4, d: 5 };
const obj6 = { a: 10, b: "", c: 30 };
const merge2Object = { ...obj5, ...obj6 };
console.log("Merge Two Objects", merge2Object);
