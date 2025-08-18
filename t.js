const obj1 = {
    name : "Atish",
    age : 26,
    designation : "Developer",
    address : {
        area : "swarget",
        city : "pune"
    }
};

// const shallowCopy = {...obj1};
// shallowCopy.address.area ="katraj"; =

// console.log(obj1.address.area);
// console.log(shallowCopy.address.area);


const deepcopy = JSON.parse(JSON.stringify(obj1));

deepcopy.address.area = "katraj";

console.log(deepcopy.address.area);
console.log(obj1.address.area);
