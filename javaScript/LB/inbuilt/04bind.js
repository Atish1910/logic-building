// bind
function sayHello(greeting){
    console.log(`${greeting} ${this.nameF}`)
}
const person = {
    nameF : "Atishhh K"
}
let sayHelloCall = sayHello.bind(person);
sayHelloCall("Hello");