// Methods in array Are 

// =======================================================

// 1. Adding/Removing Elements

// 01 : push() → add at end
// 02 : pop() -> Remove from end

// 03 : unshift() → add at beginning
// 04 : shift() → remove from beginning

// 06 : splice() → add/remove at specific index

// =======================================================

// 2. Searching & Checking

// 01 : indexOf() 
// 02 : lastIndexOf()
// 03 : includes()

// 04 : find() → first match

// =======================================================

// 3. Transforming

// 01 :  map() → transform each element
// 02 : filter() → keep only matching

// 03 : reduce() → accumulate values


// =======================================================
// 4. Iterating
// 01 :  forEach() → loop through


// =======================================================
// 5. Sorting & Joining

// sort()
// reverse()
// join()

// =======================================================
// 6. Copying & Slicing

// slice() → extract portion (no modify)
// concat() → merge arrays

// copyWithin() // 
// copyWithin(target, start,)
// copyWithin(indexPasteInto, indexCopyFrom, )
// target : Whatever we are going to copy we are going to stare from that index
// start : We need to copy from that index till end of array if end endex in not there



// =====================================================================================================================================================================
// 1. Adding/Removing Elements
let arr1 = [10,20,30,40,50,60,70,80];

arr1.push(100);
console.log("Array Push", arr1);

arr1.pop();
console.log("Array Pop", arr1);

arr1.shift();
console.log("Array Shift", arr1);

arr1.unshift(1);
console.log("Array unSHift", arr1);


arr1.splice(1, 4, 110, 120,130,140);
console.log("Array Splice : ", arr1); 


// Array Push [
//   10, 20, 30,  40, 50,
//   60, 70, 80, 100
// ]

// Array Pop [
//   10, 20, 30, 40,
//   50, 60, 70, 80
// ]

// Array Shift [
//   20, 30, 40, 50,
//   60, 70, 80
// ]

// Array unSHift [
//    1, 20, 30, 40,
//   50, 60, 70, 80
// ]

// Array Splice :  [
//     1, 110, 120, 130,
//   140,  60,  70,  80
// ]

// Q5. Push with nested array
let arr2 = [1, 2];
arr2.push([3, 4]);
console.log("Array Push With Nested Array : ", arr2); // [ 1, 2, [ 3, 4 ] ]



// Q8. Splice with 0 delete count

let arr3 = [1, 2, 3];
arr3.splice(1, 0, "A");
console.log("Array Splice with delete Count 0",arr3);


// Q9. Trick with push inside splice
let arr4 = [1, 2, 3];
arr4.splice(2, 1, arr4.push(4));
console.log("Trick with push inside splice", arr4); // 1,3,4,4
// splice will delete 2nd index 1 value & add 4 over & push method will add 4 value at end so op will // 1,3,4,4


// Q10. Push return value
let arr5 = [1, 2];
let len = arr5.push(3, 4);
console.log("Push return value",len, arr5); // 4 [ 1, 2, 3, 4 ]
// len will return count of veriable inside array
// arr5 will return updated array


const arr13 = [10,11,12];
arr13.unshift(arr13.pop());
console.log("add item useing unshift & remove last item ", arr13) 
// [ 12, 10, 11 ]

// =====================================================================================================================================================================


// 2. Searching & Checking

let arr6 = [1, 2, NaN];
console.log("Checking with includes NaN ", arr6.includes(NaN)); // true
// includes will return true or false

// Q4. find (first match)

let arr7 = [5, 1, 8, 6, 44];
let res = arr7.find(x => x < 10);
console.log("find (first match)", res); // 5
// it will itrate will condion is satisfy once condition is not satisfy return op 


//Q6. indexOf vs includes
let arr8 = ["apple", "banana", "cherry"];
console.log(arr8.indexOf("grape")); // -1
console.log(arr8.includes("grape")); // false


// Q10. Trick with objects
let arr9 = [{id: 1}, {id: 2}];
console.log("trick With includes : ",arr9.includes({id: 1})); // false
// includes() → checks for same object reference (works with primitives but not new object literals).

console.log("trick With Find : ",arr9.find(x => x.id === 1)); // {id : 1}
// find() → allows value-based matching using a condition.

// =====================================================================================================================================================================

// 3. Transforming

const arr10 = [1,2,3,4,5,6,7,8,9];
const res1 = arr10.reduce((x,y) => x + y);
console.log("Reduce Mthod in js [1,2,3,4,5,6,7,8,9]  : ", res1);



// 02 Reduce Methods 
[10,11,12,13].reduce((x, y) =>  console.log("Reduce Mthod 02 : ", x , y))
// op 
// Reduce Mthod 02 :  10 11
// Reduce Mthod 02 :  undefined 12
// Reduce Mthod 02 :  undefined 13



/// delete element from array
const arr12 = [10,20,30,40];
arr12.push(40);
delete arr12[2]

console.log(arr12); // [ 10, 20, <1 empty item>, 40, 40 ]
console.log(arr12.length); // 5



// ================================================================================================================================================================================
// 6. Copying & Slicing
// copyWithin() // 
// copyWithin(target, start,)
const arr14 = [11,12,14,15];
arr14.copyWithin(0, 2);
console.log("Copy Within : ", arr14); // [ 14, 15, 14, 15 ]
