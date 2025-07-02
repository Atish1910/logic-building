let c = {greeting : "Hey!"};
let d ;

d = c;
c.greeting = "hello";

console.log(d.greeting); // hello