console.log([1,2,3] + [4,5,6]);

// when we use + operator in both array it will convert to 2 string 
// "1, 2, 3" + "4, 5, 6";
// 1, 2, 34, 5, 6

let a = [11, 22, 44, 1010];
a.push(a[3]++);
console.log(a); // [ 11, 22, 44, 1011, 1010 ]

// ====================================
// Array Splice 

const arr = [1,2,3,4];
console.log(arr.splice(1,3, 10, 11, 12, 13));
console.log("Array Splice OP : ",arr);
// array splice will take argument arr.splice(index, deleteCount, argument1, arument2);

 