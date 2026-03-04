=======================================================================================================

01 : 📘 Scope in JavaScript (Global, Functional, Block)

-> Scope defines where a variable is accessible in your code.
There are 3 main types of scope:
1) Global Scope
2) Functional Scope
3) Block Scope

Global Scope:
A variable declared outside any function or block is in the global scope.
It can be accessed from anywhere in the file.

Functional Scope:
A variable declared inside a function is only accessible within that function.
`var` supports functional scope.

Block Scope:
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

var, let, and const are keywords used to declare variables in JavaScript.

var:
- Function scoped
- Can be re-declared
- Can be re-assigned
- Hoisted and initialized with undefined
- Does NOT support block scope

let:
- Block scoped
- Cannot be re-declared in same scope
- Can be re-assigned
- Hoisted but stays in Temporal Dead Zone

const:
- Block scoped
- Cannot be re-declared
- Cannot be re-assigned
- Must be initialized at declaration
- Hoisted but stays in Temporal Dead Zone

=======================================================================================================