const details = {
    name : "Atishhh",
    age : 26,
    friends : {
        school : "niru",
        clg : "niraj"
    }
}

const obj1 = {...details}; // shallow copy

obj1.name = "Kamble";
obj1.friends.school = "Manthan";

console.log(obj1);
// {
//   name: 'Kamble',
//   age: 26,
//   friends: { school: 'Manthan', clg: 'niraj' }
// }

console.log(details);
// {
//   name: 'Atishhh',
//   age: 26,
//   friends: { school: 'Manthan', clg: 'niraj' }
// }


// A shallow copy only copies the first level of an object/array.
// If the object has nested objects, they are still referenced (not fully copied).