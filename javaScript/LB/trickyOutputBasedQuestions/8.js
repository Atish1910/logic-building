console.log(a); // undefine
var a = 10;

(function() {
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
})();

// undefined
// ReferenceError: Cannot access 'b' before initialization