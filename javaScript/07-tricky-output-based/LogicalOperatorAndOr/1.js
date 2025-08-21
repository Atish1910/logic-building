console.log(0 || "Hello");
console.log(0 && "Hello");
// =================================================================

console.log(null || undefined || "JS");
// =================================================================



console.log("React" && "Node" && "MongoDB");
// =================================================================


console.log(false || true && false);
// =================================================================


console.log(!null);
console.log(!!"");
// =================================================================


let a = 10;
console.log(a > 5 && a < 15 || a === 20);
// =================================================================


console.log(0 && "First" || "Second");
// =================================================================



let x = 5;
console.log(x > 10 && x++);
console.log(x);
// =================================================================



let a1 = null;
let b = 0;
let c = "Hello";

console.log(a1 ?? "Default");
console.log(b ?? "Default");
console.log(c ?? "Default");
// =================================================================


console.log(!![]);
console.log(!!{});
console.log(!!"");
// =================================================================


let a2 = 0;
let b2 = a2 || 10 && 20;
console.log(b2);
// =================================================================


console.log(true || false && false || false);
// console.log(false && false); // false
// console.log(true || false); // true
// console.log(true || false); // true
// console.log(true);
// =================================================================



let x1 = 1;
console.log(x1++ && ++x1 && x1);
// console.log(x1++ && ++x1); 1++ && ++1 => 1 && 2 // 2
console.log(2 && 1); //1
// =================================================================



function hello() {
  console.log("Hello called");
  return true;
}
function world() {
  console.log("World called");
  return false;
}
console.log(hello() && world());

// =================================================================


console.log("" || 0 || null || "JavaScript" || undefined);
// =================================================================


console.log(![]);
console.log(!!{});
console.log(!{});
// =================================================================



console.log("" || 0 || null || "JavaScript" || undefined);
// =================================================================




