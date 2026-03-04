// *
// **
// ***
// ****
// *****
console.log("1. Print Right-Angled Star Triangle");
let iRow1 = 5;
function display1(iRow1) {
  for (let i = 1; i <= iRow1; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}
// ==============================================================================
// *****
// ****
// ***
// **
// *
console.log("1. Print Right-Angled Star Triangle");
display1(iRow1);
let iRow2 = 5;
function display2(iRow2) {
  for (let i = iRow2; i > 0; i--) {
    let str = " ";
    for (let j = i; j > 0; j--) {
      str = str + "*";
    }
    console.log(str);
  }
}
