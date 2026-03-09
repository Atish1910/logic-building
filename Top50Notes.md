1. Definition (1–2 lines)
2. Types / Explanation (short)
3. Small Example
4. Practical Tip / Best Practice

# Total speaking time: 40–60 seconds

=====================================================
01 : 📘 Scope in JavaScript (Global, Functional, Block)

"Scope in JavaScript defines where a variable can be accessed in the program. It controls the visibility of variables.

There are mainly three types of scope:
global scope,
function scope, and
block scope.
Global variables are declared outside functions and can be accessed anywhere.
Function scoped variables are accessible only inside the function, which usually happens with var.
Block scope comes with let and const, where variables are limited to {} blocks like if or loops.
For example if we declare let x inside an if block, it cannot be accessed outside that block.
In modern JavaScript we usually prefer let and const because they provide block scope and prevent scope-related issues."

================================

02 : 🔹 What is Scope Chaining?

When we try to access a variable, JavaScript first checks the current scope.
If the variable is not found there, it moves to the outer scope, and continues searching until it reaches the global scope. This process is called scope chaining.

===============================

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

========================

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
- Hoisted but stays in Temporal Dead Zone

=======================

05 ✅ Temporal Dead Zone (TDZ)

Temporal Dead Zone is the period between the hoisting of a variable and its initialization.
During this time, if we try to access the variable, JavaScript throws a ReferenceError.
Variables declared with let and const remain in the Temporal Dead Zone.

=======================

06 ✅ Hoisting in JavaScript

it is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase before the code executes.
Because of hoisting, we can use variables or functions before they are declared in the code.

- Variables declared with var are hoisted but initialized with undefined.
- let and const are hoisted but remain in the Temporal Dead Zone.
- Normal Function are fully hoisted
- Function expressions are not hoisted

======================

07 ✅ Prototypes in JavaScript
Prototypes : Prototypes in JavaScript are a mechanism that allows objects to inherit properties and methods from other objects.
This concept is called prototype-based inheritance.
In JavaScript, every object has an internal property called [[Prototype]], which points to another object.

=====================
08 ✅ Prototype Object in JavaScript
prototype oject is created automatically when we call a constructor function. it is used to share properties & methods among all object created from that contructor.
in simple terms prototype objects is like a parent, & object created from contructor function can inhearit the method & properties from it.

# =====================

=====================
09 : 1️⃣ What is Prototype Chain?
The prototype chain is the mechanism JavaScript uses to look for properties or methods in parent objects.
If a property is not found in the current object, JavaScript moves to its prototype, and continues searching until it reaches null.

When a property is not found inside the object:

1. JavaScript checks the object's prototype.
2. Then checks the prototype’s prototype.
3. This continues until it reaches null.
   This lookup process is called the Prototype Chain.

===================

10 : 2️⃣ Difference between **proto** and prototype
prototype :

- 1 : Property of constructor functions
- 2 : Used to define properties shared by instances

**proto**
Property of all JavaScript objects
Points to the object's internal prototype

<!-- ================= -->

10 ✅ Closures in JavaScript

A closure is created when a function remembers and can access variables from its outer (lexical) scope even after the outer function has finished executing.
In simple words, a closure allows an inner function to access variables of its parent function.
Closures are commonly used for :
data encapsulation,
creating private variables,
callbacks, and
functions like setTimeout or event handlers.

===================
1️⃣ What is Lexical Scope?
Lexical scope means that a function can access variables from its parent scope based on where it is defined in the code, not where it is executed.

===================

✅ Pass by Value vs Pass by Reference in JavaScript
In JavaScript, values passed to function in 2 ways: pass by value and pass by reference Reference.

Pass by Value:
When we pass primitive data types like number, string, or boolean to a function, a copy of the value is passed.
So if we change the value inside the function, it does not affect the original variable.

Pass by Reference:
When we pass non-primitive data types like objects or arrays, the reference of the object is passed.
So if we modify the object inside the function, it affects the original object.

Also, technically JavaScript always passes by value, but in the case of objects the value passed is the reference.

===================
✅ Currying in JavaScript
Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.
In simple terms, instead of passing all arguments at once, we pass them one by one using nested functions.

Example (Normal Function)

function add(a, b, c) {
return a + b + c;
}

console.log(add(1, 2, 3)); // 6

Curried Version
function add(a) {
return function (b) {
return function (c) {
return a + b + c;
};
};
}
console.log(add(1)(2)(3)); // 6

<!-- ------------- -->

===================
✅ Why Currying is Used
Currying helps in: Function reusability

===================
✅ Infinite Currying in JavaScript
Infinite currying is a technique where a function keeps returning another function and allows unlimited chained calls until a final terminating condition is met.
sum(1)(2)(3)(4)()

===================
✅ Memoization in JavaScript
Memoization is an optimization technique where we cache the result of a function call so that if the same inputs occur again, we return the cached result instead of recalculating it.

===================
✅ Rest Parameter in JavaScript
The rest parameter allows a function to accept the number of arguments as an array.
It is represented using three dots ....
Sometimes we don’t know how many arguments will be passed to a function.
Instead of writing multiple parameters, we use rest parameter.

===================
✅ Spread Operator in JavaScript
The spread operator (...) is used to expand elements of an array or object into individual elements.

===================
How many ways you can create object in js

There are mainly 6–8 ways to create objects in JavaScript:
object literal, :
Object.create,
new Object(),
ES6 class,
constructor function,
factory function,
spread operator,
and JSON.parse.
The most common and recommended approach is object literal and ES6 class.

===================
✅ What is a Generator Function?
A Generator function is a special type of function that can pause and resume execution.
It is declared using function\* and uses the yield keyword.

===================
✅ What is a Callback?
A callback is a function that is passed as an argument to another function and is executed later.

JavaScript is single-threaded, so we use callbacks to handle async tasks like:
API calls
Timers
File reading
Database operations

# ===================
