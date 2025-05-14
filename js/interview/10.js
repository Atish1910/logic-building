'use strict'

function interview(){
    salary = 26000; // ❌ Error: salary is not defined
    console.log(salary)
}
interview();

// Your code will throw a ReferenceError because you are using strict mode ('use strict'), and you are assigning a value to salary without declaring it first using var, let, or const.
// OP : ReferenceError: salary is not defined