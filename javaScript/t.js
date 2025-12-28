// remove duplicate from gicene array

let iArr = [1,2,3,4,5,6,67,77,7,7,77,77,7,7,12,1];

const uniqueArr = [...new Set(iArr)];
console.log(uniqueArr);
