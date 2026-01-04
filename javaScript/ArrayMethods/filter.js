// 1️⃣ Filter numbers > 30
const nums = [10, 25, 60, 40, 80];
const iNum = nums.filter((n) => {
  return n > 30;
});
console.log("filter no above 30", iNum);
// ======================================================================================


// 2️⃣ Filter even numbers
const iArr2 = [10, 25, 60, 40, 80];
const iEvent = iArr2.filter((n) => {
  return n % 2 == 0;
})

console.log("filter Even No", iEvent);

// ======================================================================================
// 3️⃣ Filter objects (age > 25)

const users = [
  { id: 1, name: "Atish", age : 27 },
  { id: 2, name: "Akshay", age : 29 },
  { id: 3, name: "Karishma", age : 32 },
  { id: 4, name: "Vasanti", age : 50 },
];

const iMax = users.filter((u) => {
  return u.age < 30;
})
console.log("Filter object by age", iMax);

// ======================================================================================


// 4️⃣ Remove duplicates

const iArr3 = [10, 25, 60, 40, 80, 25, 60, 40, 80, 25, 60, 40, 80, 25, 60, 40, 80, 25, 60, 40, 80];
const iUnique = iArr3.filter((n,i) => {
  return iArr3.indexOf(n) == i; 
});
console.log("Remove duplicate", iUnique);
// ======================================================================================

// 5️⃣ Filter string characters
const cStr = "atishhhh";

const vowels = "aeiou";

const extractWevels = cStr.split("").filter((ch) => {
  return vowels.includes(ch);
})

console.log(extractWevels);




// ======================================================================================