const obj1 = {
    neme : "atish",
    age : 26,
    designation : "Developer",
}

Object.freeze(obj1);

let obj2 = obj1;
obj2.neme = "Akki";
console.log(Object.entries(obj1));
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));