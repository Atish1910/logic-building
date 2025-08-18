let x = [null, 0, "0", false, "a"];
let y = x.filter((value) => value);
// it will only filter truthy values

console.log(y); 
// "0", "a"