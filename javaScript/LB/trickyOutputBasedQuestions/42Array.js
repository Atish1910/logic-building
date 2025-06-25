const num = [1,2,3,4,5];
const [x, ...y] = num;

console.log(x, y);

// x will assign to 1
// y is we are descructing array
// so rest of all elements is assign to y

// 1 [ 2, 3, 4, 5 ]
