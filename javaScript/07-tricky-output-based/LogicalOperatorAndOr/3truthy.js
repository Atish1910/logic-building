console.log(false || null || "Hello");  // op Hello
console.log(false || null || "");  // op (blank)
console.log(false || null || 45);  // op 45
// The logical OR (||) operator returns the first "truthy" value it encounters or the last value if all are falsy.
// false || null → null (both are falsy, so it moves to the next value)
// null || "Hello" → "Hello" (since "Hello" is truthy, it is returned)

console.log(false && null && "Hello"); // false
console.log(false && null && "");  // false
console.log(false && null && 45);  // false
// The logical AND (&&) operator returns the first falsy value it encounters or the last value if all are truthy.
// Evaluation:
// false && null → false (since false is falsy, the evaluation stops here)
// The remaining values (null and "Hello") are not evaluated.
