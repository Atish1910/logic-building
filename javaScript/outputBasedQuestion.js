// answers below
function outer(){
  let a = 3.5;
  return (function b() {
    console.log(a);
  });
}

console.log(outer()); // [Function: b]
console.log(b()); // refereneceError b is not define
const c = outer(); // 3.5
console.log(c()); // undefined
//============================================================================================