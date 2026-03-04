=======================================================================================================
01 : 📘 Scope in JavaScript (Global, Functional, Block)
-> Scope define where a veriable accessible in your code.
There are 3 Main type of scole
Globle scope
Functional Scope
block Scope

Globle scope :
a veriable declear outside to function or block it is in global scope
it can be accessed from anywhere in the file

Functional Scope
a veriable decleared inside function are only accessible inside function

block Scope :
a veriable declear inside {} is only accesble inside block
let & const support the block scope
var does not support the block scope
=======================================================================================================

02: 🔹 What is Scope Chaining?
when javascript try to find veriable, it looks first in to current scope.
if its not found, it moves to outer (parent) scope.
it keep moving out word untill it reaches to global scope.
if veriable not found anywhere it throws Reference Error.

=======================================================================================================
03 : 📘 Primitive vs Non-Primitive in JavaScript

premitive Data type : immutable, stored by values, compared by value.
types : String, boolean, null, undefined, null

Non Premitive data type : Mutable, Stored by referance, stored in heap memory
Types of data type : Object, Array, Function

=======================================================================================================
04: Var, let and const

var, let, and const are used to declare variables in JavaScript.

In JavaScript, var is function scoped, while let and const are block scoped.
var allows re-declaration and re-assignment, which can cause bugs.
let allows re-assignment but not re-declaration.
const allows neither re-assignment nor re-declaration.
Also, var is hoisted with undefined, whereas let and const are hoisted but stay in temporal dead zone until initialized.

The main differences are:

1. var
   Scope
   Re-declaration
   Re-assignment
   Hoisting
   Block behavior

2. let
   Block scoped
   Cannot be re-declared in same scope
   Can be re-assigned
   Hoisted but not initialized (Temporal Dead Zone)

🔹 3. const
Block scoped
Cannot be re-declared
Cannot be re-assigned
Must be initialized at declaration

=======================================================================================================
05 ✅ Temporal Dead Zone (TDZ)
Temporal Dead Zone is the period between the hoisting of a variable and its initialization.
During this time, if we try to access the variable, JavaScript throws a ReferenceError.

=======================================================================================================
06 ✅ Hoisting in JavaScript
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.
var is hoisted and initialized with undefined.
let and const are hoisted but remain in the Temporal Dead Zone.
Function declarations are fully hoisted, but function expressions are not.

=======================================================================================================
✅ Prototypes in JavaScript
A prototype is an object from which other objects inherit properties and methods.

=======================================================================================================
✅ Prototype chaining in JavaScript
JavaScript follows prototype-based inheritance.
Every object has a prototype, and it inherits properties and methods from it.
When a property is not found inside the object, JavaScript looks up the prototype chain until it reaches null.
This mechanism is called the prototype chain.
