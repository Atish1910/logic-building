var a = {};
var b = {key : "b"};
var c = {key : "c"};

a[b] = 600; // {}[b] == 600
b[c] = 700; // {}[c] == 700
b[b] = 400; // 

console.log(a[c]); // 
console.log(a[b]); // 600
console.log(b[b]);
console.log(b[c]); // 700

// op
// 600
// 600
// 400
// 400
