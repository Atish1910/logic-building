// Find the first element greater than 50
const arr = [1, 2, 2, 3];

const iUnique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(iUnique);
