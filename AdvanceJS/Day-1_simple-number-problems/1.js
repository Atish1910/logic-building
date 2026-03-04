// Print all numbers divisible by 3 and 5 up to N

let iNo = 15;

function display(iNo) {
  let isDivisible = false;
  for (let i = 0; i < iNo; i++) {
    if (iNo % 3 == 0 && iNo % 5 == 0) {
      isDivisible = true;
    }
  }
  if (isDivisible) {
    console.log(`yes ${iNo} is divisible by 3 & 5`);
  } else {
    console.log(`No ${iNo} is NOt divisible by 3 & 5`);
  }
}
display(iNo);

// ===============================================================================================
// Find the sum of all odd numbers up to N

let iNo2 = 10;

function displaySum(iNo2) {
  let iSum = 0;
  for (let j = 0; j <= iNo2; j++) {
    if (j % 2 == 0) {
      iSum = iSum + j;
    }
  }
  console.log(iSum);
}
displaySum(iNo2);
// ===============================================================================================

// Print the cubes of numbers from 1 to N
// Input: 5
// Output: 1 8 27 64 125

let iNum = 5;
function displayCube(iNum) {
  iCube = 0;
  iCubeArr = [];
  for (let i = 1; i <= iNum; i++) {
    iCube = i * i * i;
    iCubeArr.push(iCube);
  }
  console.log(iCubeArr);
}

displayCube(iNum);
// ===============================================================================================
// Print only the numbers that are both even and perfect squares
// Input: 1 to 20
// Output: 4 16

let iNumber = 20;

function displaySquare(iNumber) {
  for (let i = 2; i * i <= iNumber; i += 2) {
    console.log(i * i);
  }
}
displaySquare(iNumber);
