// what is deep copy & SHallow copy

let obj1 = {
  name: "Atishhh",
  child: {
    age: 29,
  },
};

let obj2 = { ...obj1 };

obj2.name = "Askhay";
obj2.child.age = 45;

console.log(obj1);
console.log(obj2);
