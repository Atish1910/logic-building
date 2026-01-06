
// 16. Convert a String to Title Case
let iStr = "atish vinayak kamble";

let iTitleCase = iStr.replace(/\b\w/g, (char) => char.toLowerCase());
console.log(iTitleCase);