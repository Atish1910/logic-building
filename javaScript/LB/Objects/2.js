const obj1 = {
    name : "Atish",
    age : 26,
    designation : "Developer"
};

const shallowCopy = {...obj1};
shallowCopy.name ="Teju";

console.log(shallowCopy.name);
console.log(obj1.name);