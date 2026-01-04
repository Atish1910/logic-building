// 1️⃣ Basic slice
const arr = [10,20,30,40,50];
console.log(arr.slice(1, 4));


// 2️⃣ Slice from index to end
const arr2 = [10,20,30,40,50];
console.log(arr2.slice(1));

// 3️⃣ Negative index
const arr3 = [10,20,30,40,50];
console.log(arr3.slice(-4, -1));

// 5️⃣ Slice string
const iStr = "atishvinayakkamble";
const iSlice = iStr.split("").slice(0, 5).join("")
console.log(iSlice);