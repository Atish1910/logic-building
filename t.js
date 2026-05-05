// concat & remove duplicate

let iArr = ["atish kamble", "manthan shinde"];

let iResult = iArr.map((word) => {
  return word[0].toUpperCase() + word.slice(1)
});
console.log(iResult);