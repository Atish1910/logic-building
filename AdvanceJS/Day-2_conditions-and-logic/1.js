// 🧩 Core Concept Focus
// Conditional statements (if, else if, else)
// Comparison and logical operators
// Decision making based on different inputs
// Strengthening flow-of-control understanding

// ==================================================================================
// Q1 Find the Maximum of Three Numbers
// Input: 10 20 5
// Output: 20

let iArr = [10, 20, 5];
let iMax = -Infinity;
for (let i = 0; i < iArr.length; i++) {
  if (iMax < iArr[i]) {
    iMax = iArr[i];
  }
}
console.log("Find the Maximum of Three Numbers via For Loop", iMax);

console.log(
  "Find the Maximum of Three Numbers via reducer",
  iArr.reduce((acc, curr) => (acc > curr ? acc : curr)),
);
// ==================================================================================

// Check if a Number is Positive, Negative, or Zero
// Input: -9
// Output: Negative
let input = 9;

function display(input) {
  if (input < 0) {
    console.log("number is negative");
  } else if (input == 0) {
    console.log("number is 0");
  } else {
    console.log("number is positive");
  }
}
display(input);

// ==================================================================================
// Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
let units = 140;

function calculateElectricity(units) {
  let bill = 0;
  if (units > 0 && units < 100) {
    bill = units * 5;
  } else if (units > 101 && units < 200) {
    bill = units * 7;
  } else if (units > 201 && units < 300) {
    bill = units * 10;
  } else if (units > 300) {
    bill = units * 12;
  }
  console.log(bill);
}
calculateElectricity(units);
