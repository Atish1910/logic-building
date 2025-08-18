// The  call method is used to invoke a function with a specified value and arguments provided individually.


function sayHello(greeting){
    console.log(`${greeting} ${this.nameF}`);
}

person = {
    nameF : 'Atishhhh K'
}

sayHello.call(person, "Hello");

// Here,  the  call  this  is used to invoke the  sayHello  function with   value, and 'Hello' as an argument.  person  as