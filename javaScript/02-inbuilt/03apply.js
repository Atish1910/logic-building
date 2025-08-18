// apply  method: The  apply method is similar to  array. call , but it accepts arguments as an  array

function sayHello(greeting){
    console.log(`${greeting} ${this.nameF}`);
}

person = {
    nameF : 'Atishhhh K'
}

sayHello.apply(person, ['a', 'b', 'c']);

// In this example,  apply is used to achieve the same result as call  but the arguments are provided as an array.