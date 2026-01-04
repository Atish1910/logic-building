// 📌 Array Method: some()
// ✅ What is some()?

// some() is used to check if AT LEAST ONE element in an array satisfies a condition.

// 👉 Returns true or false
// 👉 Stops early once condition becomes true
// 👉 Does NOT modify the original array

// 🔹 Syntax
// array.some((element, index, array) => {
//   return condition;
// });

// ==========================================================================
// ✅ Example 1️⃣ Check number greater than 50
const iNum = [10,11,23,66];
iResult = iNum.some((n) => {
    return n > 50;
});
console.log(iResult); // true
// ==========================================================================


// ✅ Example 1️⃣ Check number greater than 50
const iNum2 = [10,11,23,66];
iResult2 = iNum2.some((n) => {
    return n > 100;
})
console.log(iResult2); // true
// ==========================================================================


const users = [
  { name: "Atish", active: false },
  { name: "Rahul", active: true }
];

console.log(users.some(user => user.active));
