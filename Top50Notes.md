=======================================================================================================

01 : 📘 Scope in JavaScript (Global, Functional, Block)

Scope defines where a variable is accessible in the code.

There are 3 types of scope:

1️⃣ Global Scope:
A variable declared outside any function or block belongs to the global scope.
It can be accessed from anywhere in the file.

2️⃣ Functional Scope:
A variable declared inside a function is only accessible within that function.
`var` supports functional scope.

3️⃣ Block Scope:
A variable declared inside {} is only accessible within that block.
`let` and `const` support block scope.
`var` does NOT support block scope.

=======================================================================================================

02 : 🔹 What is Scope Chaining?

When JavaScript tries to find a variable, it first looks in the current scope.
If it is not found, it moves to the outer (parent) scope.
It keeps moving outward until it reaches the global scope.
If the variable is not found anywhere, JavaScript throws a ReferenceError.

=======================================================================================================

03 : 📘 Primitive vs Non-Primitive in JavaScript

Primitive Data Types:
- Immutable
- Stored by value
- Compared by value

Types:
String, Number, Boolean, Null, Undefined, BigInt, Symbol

Non-Primitive Data Types (Reference Types):
- Mutable
- Stored by reference
- Stored in heap memory

Types:
Object, Array, Function

=======================================================================================================

04 : 📘 var, let and const

var, let, and const are used to declare variables in JavaScript.

🔹 var:
- Function scoped
- Can be re-declared
- Can be re-assigned
- Hoisted and initialized with undefined
- Does NOT support block scope

🔹 let:
- Block scoped
- Cannot be re-declared in the same scope
- Can be re-assigned
- Hoisted but not initialized (Temporal Dead Zone)

🔹 const:
- Block scoped
- Cannot be re-declared
- Cannot be re-assigned
- Must be initialized at declaration
- Hoisted but stays in Temporal Dead Zone

==============================================================================================

05 ✅ Temporal Dead Zone (TDZ)

Temporal Dead Zone is the period between the hoisting of a variable and its initialization.
During this time, if we try to access the variable, JavaScript throws a ReferenceError.
Variables declared with let and const remain in the Temporal Dead Zone until execution reaches their declaration line.

=======================================================================================================

06 ✅ Hoisting in JavaScript

Hoisting is JavaScript’s behavior of allocating memory for variable and function declarations during the creation phase, before code execution.

- var is hoisted and initialized with undefined.
- let and const are hoisted but remain in the Temporal Dead Zone.
- Function declarations are fully hoisted with their definitions.
- Function expressions are not fully hoisted (only the variable is hoisted if declared with var).

=======================================================================================================

07 ✅ Prototypes in JavaScript

A prototype is an object from which other objects inherit properties and methods.
JavaScript uses prototype-based inheritance instead of classical inheritance.
Methods defined on the prototype are shared among all instances, improving memory efficiency.

=======================================================================================================

08 ✅ Prototype Chaining in JavaScript

JavaScript follows prototype-based inheritance.
Every object has an internal [[Prototype]] link that points to another object.

When a property is not found inside the object:
1) JavaScript checks the object's prototype.
2) Then checks the prototype’s prototype.
3) This continues until it reaches null.

This lookup process is called the Prototype Chain.

=======================================================================================================