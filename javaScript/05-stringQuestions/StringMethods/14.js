// check where below string is pelendrome or not
let iStr = "Markram";

let isPelendrome = iStr.toLocaleLowerCase().split("").reverse().join("");

console.log(isPelendrome ? "Yes its Pelendrome" : "no its not pelendrome");
