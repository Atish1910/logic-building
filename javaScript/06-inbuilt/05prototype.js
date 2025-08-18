// proto type
function College(friends){
    this.friends = friends;
}

College.prototype.greet = function(){
    console.log(`hii my name is ${this.friends}`);
}

person1 = new College("Atishhhh");
person2 = new Object("Nirru");
person3 = new Object("Niraj");

console.log(person1)
console.log(person2)
console.log(person3)