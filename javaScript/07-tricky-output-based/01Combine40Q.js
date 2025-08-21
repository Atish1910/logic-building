// =============================
// 40 JavaScript Output Questions
// =============================

// ---------- SET 1 ----------

// Q1
let x1 = 1;
console.log(x1++ && ++x1 && x1); 
// Answer: 3


// Q2
console.log(1 && 2 && 0);
// Answer: 0

// Q3
console.log(1 || 0 || 2);
// Answer: 1

// Q4
console.log(0 || (2 && 3));
// Answer: 3

// Q5
console.log([] + []);
// Answer: ""

// Q6
console.log([] + {});
// Answer: "[object Object]"

// Q7
console.log({} + []);
// Answer: 0 (special JS quirk, {} is parsed as block)

// Q8
console.log({} + {});
// Answer: NaN

// Q9
console.log([1,2,3] + [4,5]);
// Answer: "1,2,34,5"

// Q10
console.log([10] - [2]);
// Answer: 8

// Q11
console.log([10,20] - [5]);
// Answer: NaN

// Q12
console.log("5" - 2);
// Answer: 3

// Q13
console.log("5" + 2);
// Answer: "52"

// Q14
console.log(+"5" + 2);
// Answer: 7

// Q15
console.log([] == false);
// Answer: true

// Q16
console.log(![] == false);
// Answer: true

// Q17
console.log(null == undefined);
// Answer: true

// Q18
console.log(null === undefined);
// Answer: false

// Q19
console.log(NaN == NaN);
// Answer: false

// Q20
console.log(Object.is(NaN, NaN));
// Answer: true


// ---------- SET 2 (Complex) ----------

// Q1
let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
obj2.a = 5;
console.log(obj1.a, obj2.a);
// Answer: 5 5

// Q2
console.log([1, 2, 3] == [1, 2, 3]);
// Answer: false

// Q3
console.log({} == {});
// Answer: false

// Q4
let obj3 = { a: 10, toString(){ return "20"; } };
console.log(obj3 + 5);
// Answer: "205"

// Q5
let a1 = [1,2,3];
let b1 = a1;
a1 = [4,5,6];
console.log(b1);
// Answer: [1,2,3]

// Q6
console.log([1] == 1);
console.log([1,2] == "1,2");
// Answer: true, true

// Q7
let obj4 = { x: 10 };
console.log("x" in obj4);
console.log("y" in obj4);
// Answer: true, false

// Q8
let o1 = { a: 1 };
let o2 = { a: 1 };
console.log(o1 == o2);
// Answer: false

// Q9
let arr1 = [10,20,30];
delete arr1[1];
console.log(arr1.length);
console.log(arr1[1]);
// Answer: 3, undefined

// Q10
let user = { name: "Atish" };
let admin = user;
user = null;
console.log(admin.name);
// Answer: "Atish"

// Q11
let obj5 = { a: 1 };
Object.freeze(obj5);
obj5.a = 100;
console.log(obj5.a);
// Answer: 1

// Q12
let arr2 = [1,2,3];
let arr3 = arr2;
arr3.length = 0;
console.log(arr2, arr3);
// Answer: [] []

// Q13
let arr4 = [1,2,3];
console.log([...arr4, ...[4,5]]);
// Answer: [1,2,3,4,5]

// Q14
console.log([..."Atish"]);
// Answer: ["A","t","i","s","h"]

// Q15
let {a=1, b=2} = { a: 5 };
console.log(a, b);
// Answer: 5 2

// Q16
function foo(x, y, ...rest){
  console.log(rest);
}
foo(1,2,3,4,5);
// Answer: [3,4,5]

// Q17
let aa = {};
let bb = {};
console.log(aa + bb);
// Answer: "[object Object][object Object]"

// Q18
console.log([] == false);
console.log({} == false);
// Answer: true, false

// Q19
function f(){
  return f;
}
console.log(f() === f());
// Answer: true

// Q20
let obj6 = { a: 1 };
Object.seal(obj6);
delete obj6.a;
console.log(obj6.a);
// Answer: 1
