// In JavaScript, a closure is a function along with its lexical scope, 
// which allows it to access variables from its outer (enclosing) scope 
// even after that scope has finished executing. A closure allows a 
// function to remember and access variables from the environment in 
// which it was created, even if the function is executed in a different 
// scope.


function outerFunction(){
    let outerVariable = 10;

    function innerFunction(){
        let innerVariable = 20;

        console.log(` Outer Variable :  ${outerVariable}`);
        console.log(` Inner Variable :  ${innerVariable}`);
    }
    return innerFunction;
}
let callClouserFunction = outerFunction();
callClouserFunction();
