// ===================================================================
// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
let iNum = 345678;
let iArr = [];
function display(iNum) {
  while (iNum > 0) {
    let iDigit = iNum % 10;
    iNum = (iNum / 10) | 0;
    iArr.unshift(iDigit);
  }
  console.log(iArr);
}
display(iNum);

// ======================================================================================================================================

// Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.

const n = 5.75;
function display02(n) {
  let fraction = Math.floor(n);
  let whole = n - fraction;
  console.log(fraction, whole);
}
display02(n);

// Count Whole and Fractional Digits Separately

// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// ✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.

// ======================================================================================================================================
let iNumber = 123.54;

function saparateDigits(iNumber) {
  let whole = Math.floor(iNumber);
  let fraction = Number((iNumber - whole).toFixed(10));
  return { whole, fraction };
}

function wholeNumberCount(iNumber) {
  let count = 0;
  while (iNumber > 0) {
    iNumber = (iNumber / 10) | 0;
    count++;
  }
  return count;
}

function fractionCount(iNumber) {
  while (iNumber % 1 !== 0) {
    iNumber = Number(iNumber * 10).toFixed(10);
  }
  return wholeNumberCount(iNumber);
}

function main(iNumber) {
  const { whole, fraction } = saparateDigits(iNumber);
  return {
    wholeCount: wholeNumberCount(whole),
    fractionCount: fractionCount(fraction),
  };
}

console.log(main(iNumber));

// ===========================================
let n3 = 12345.654;

function display3(n3) {
  let str = n3.toString();

  let parts = str.split(".");
  let whole = parts[0].length;
  let fraction = parts[1] ? parts[1].length : 0;

  console.log({ whole, fraction });
}
display3(n3);
// =====================================================================
