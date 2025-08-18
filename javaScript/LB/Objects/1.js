const obj1 = {
    name : "Atish",
    age : 26,
    designation : "Developer"
};

const shallowCopy = {...obj1};
const deepCopy = JSON.parse(JSON.stringify(obj1));