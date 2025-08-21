const atish1 = {
    age : 26,
    education : {
        type : "Engineering"
    }
}


const obj2 = {...atish1};
obj2.age = 30;
obj2.education.type = "Commerce";

console.log("shallow Copy 01 obj1: ", obj2);
console.log("shallow Copy 01 atish: ", atish1);




const atish2 = {
    age : 26,
    education : {
        type : "Engineering"
    }
}


const obj3 = JSON.parse(JSON.stringify(atish2));
obj3.age = 30;
obj3.education.type = "Commerce";

console.log("deep Copy 01 obj1: ", obj3);
console.log("deep Copy 01 atish: ", atish2);