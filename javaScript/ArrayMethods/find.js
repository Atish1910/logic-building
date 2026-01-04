// 🔍 find() — 6 Examples
// 1️⃣ Find first number > 50
let iArr = [10,11,23,4,5,67,8];
const iMax = iArr.find((n) => {
  return n > 50;
}) 
console.log("Find first number > 50 : ", iMax);

// =============================================================================================

// 2️⃣ Find first even number
let iArr2 = [10,11,23,4,5,67,8];
const iEvent = iArr2.find((n) => {
  return n % 2 === 0
})
console.log("Find first even number : ", iEvent);

// =============================================================================================

// 3️⃣ Find object by id
const users = [
  { id: 1, name: "Atish" },
  { id: 2, name: "Rahul" }
];

const iFind = users.find((u) => {
  return u.id === 2;
});
console.log("3️⃣ Find object by id", iFind);

// =============================================================================================

// 4️⃣ Find string with length > 5
const words = ["js", "react", "angular"];
const iResult = words.find((w) => {
  return w.length > 5;
});
console.log("4️⃣ Find string with length > 5", iResult);

// =============================================================================================

// 5️⃣ Find in nested array
const arr = [[1,2], [3,4], [5,6]];
const iSearch = arr.find((f) => {
  return f.includes(4);
});
console.log("5️⃣ Find in nested array", iSearch);

// =============================================================================================

// 6️⃣ Find character in string
const text = "JavaScript";

const iFindChar = text.split("").find((ch) => {
  return ch === "S";
});
console.log(iFindChar);