// =====================================================================================
// Addition of whole array
let iArr = [10, 11, 1, 21, 12, 13];
const iSum = iArr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(`reduces(). calulate addion of whole array is : ${iSum}`);
// =====================================================================================

// remove dupliacte from below array
let iArr2 = [
  10, 11, 1, 21, 12, 13, 1, 21, 12, 13, 1, 21, 12, 13, 1, 21, 12, 13, 1,
];

const iUnique = iArr2.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(`reduces(). Remove duplicate whole array is : [${iUnique}]`);
// =====================================================================================

// find highest no from array
const iArr3 = [76, 34, 2, 1, 34, 5, 6, 785];

const iMax = iArr3.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});
console.log(`highest no from arrray is : ${iMax}`);

// =====================================================================================