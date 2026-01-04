// ✅ Example 1️⃣ Basic map example
const iArr = [10,11,12,13];

iNewArr = iArr.map((n, i) => {
    return n * 2;
});
console.log(iNewArr);
// ====================================================

// ✅ Example 2️⃣ Convert strings to uppercase
const cArr = ["atish", "ishu", "teju"];

const iUpperCase = cArr.map((name) => {
    return name.toUpperCase();
});
console.log(iUpperCase);
// ====================================================

// ✅ Example 4️⃣ Add property to objects
const users = [
    { name: "Atish" },
    { name: "Rahul" }
];

const updateUser = users.map((u) => ({
    ...users,
    active : true,
    age : 22,
    location : "pune"
}));
console.log(updateUser);

// ====================================================

const cArr2 = ["atish", "ishu", "teju"];

