// -> ✅ Remove elements , ✅ Add elements, ✅ Replace elements

// array.splice(startIndex, deleteCount, item1, item2, ...);

// ✅ Example 1️⃣ Remove elements
const iArr = [10,11,12,13,14];

iArr.splice(1, 3);
console.log(iArr); // [10, 14];

// =============================================================
// ✅ Example 2️⃣ Add elements

const iArr2 = [10,11,12,13,14];
iArr2.splice(1, 0, 100,101, 102, 103);
console.log(iArr2); // [10, 100,101, 102, 103,11,12,13,14]

// ✅ Add & remove elements
// =============================================================

const iArr3 = [1,2,3,4,5,6];
iArr3.splice(0, 3, 11,12,13);
console.log(iArr3);