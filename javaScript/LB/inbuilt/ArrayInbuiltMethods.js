let Arr1 = [10,20,54,23,456,112,33, 34, 556, 909];

// All Get Methods
// indexOf(), filter(), find(), slice()
console.log("Find index of any number", Arr1.indexOf(23)); // 3
console.log(Arr1.filter( a => a % 2 == 0)); // [10, 20,  54, 456,112, 34, 556] 
console.log(Arr1.find( (a1 => a1 > 400 ))); // 909
console.log(Arr1.slice(0,3));   //[ 10, 20, 54 ]


let Arr2 = [10,20,54,23,456,112,33, 34, 556, 909];
let Arr3 = [ 909 ,8787, 6767];
// All Post Methods
// push(), concat();

// push()
console.log(Arr2.push(10001,121,121)); // it will return updated length of array 13
console.log(Arr2); // here we get all data which is added in our array

// concat();
console.log(Arr2.concat(Arr3));