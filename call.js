const user = {
    name : "Atishhhh",
    display() {
        console.log(this.name);
    }
}
let myFunction = user.display;
myFunction.call(user);

// =====================================================

function display(city){
    console.log(`hey myself ${this.name} i am from ${city}`);
}

let userObj = {
    name : "Atishhhhhhh"
}

display.call(userObj, "pune");
