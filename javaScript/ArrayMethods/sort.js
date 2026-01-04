// 📌 Array Method: sort()
// ✅ What is sort()?

// sort() is used to arrange array elements in ascending or descending order.

// 👉 Modifies the original array
// 👉 Returns the sorted array

// sort below array
const iArr = [11,14,15,6,78,9];
const iSort = iArr.sort((a,b) => a -b);
console.log(iSort);
// ==============================================================

// ✅ Example 1️⃣ Sort strings
const friends = [ "pratik", "manthan", "atish"];
iSortFriends = friends.sort();
console.log(friends);
// ==============================================================

const obj =  [
    {name : "manthan", height : 5.8},
    {name : "atish", height : 5.7},
    {name : "pratik", height : 5.9},
    {name : "nirya", height : 5.1},
    {name : "niraj", height : 5.7},
];
const iSortbyHeight = obj.sort((a , b) => a.height - b.height);
console.log(iSortbyHeight);
// ==============================================================

const names = ["APPLE", "Banana", "cherry"];
const iSortName = names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
console.log(names);
