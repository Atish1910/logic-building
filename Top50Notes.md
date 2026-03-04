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

var, let & const are keywords in js used to declear veriables
var : functional scope, can be re-decleard, can be re assigned, Hoisted & re Assign 