// premetaive data types in js
    // let
    // var
    // const
    // undefined
    // null

// let a = 10;
// a = 20;
console.log(a);  // compilation error

var b = 10; 
var b = 20;
console.log(b)  // 20

c = 10; 
console.log(c)  // 10
c = 20;
console.log(c)  // 20

// ==============================================
// Referance Type
    // 1: Objects
    // 2: Arrays
    // 3: Functions


    // objects
    let person = {
        firstName : "Atishhh",
        lastName : "K"
    }

    // how to access above elements [dot, brackets]
    person.firstName
    person['firstName']
    
    
    // Array
    let a = ['atish', 'manthan', 'nirya'];
    // how to access above elements [index, brackets]
    a[0]; // atish
