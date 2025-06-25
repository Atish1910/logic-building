// here below is a object just freez the id from object

const kamble = {
  name: "Atish",
  id: 3,
  age: 26,
  profession: "Developer",
  address: {
    city: "pune",
    location: "Swarget",
  },
};

Object.defineProperty(kamble, "id", {
  writable: false,
});

kamble.id = 20;
console.log(kamble.id); // 3

// op 3
