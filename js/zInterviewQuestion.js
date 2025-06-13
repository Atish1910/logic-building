let iNo = 8;

function checkPrime(iValue) {
  if (iNo < 2) {
    return false;
  }
  for (i = 2; i <= iValue; i++) {
    if (iValue % i === 0) {
      return true;
    } else {
      return false;
    }
  }
}
iRet = checkPrime(iNo);
if (iRet) {
  console.log(iNo + " is Not a Prime Number");
} else {
  console.log(iNo + " Prime Number");
}

// foctors of given number
let iNo2 = 1000;

function factorsApproch1(num) {
  console.log(` Fctors of ${iNo2} Time complexity : O(N)`);
  iCnt = 1;
  for (iCnt = 0; iCnt <= num; iCnt++) {
    if ([num % iCnt] == 0) {
      console.log(`${iCnt}`);
    }
  }
}
factorsApproch1(iNo2);

// find perfect numbers  28

let iNo = 496;
iSum = 0;
function sumFactors(iValue) {
  for (i = 0; i < iNo; i++) {
    if ([iValue % i] == 0) {
      iSum = iSum + i;
    }
  }
  console.log(iSum);
}
sumFactors(iNo);

function isPerfect(iSum) {
  return iSum == iNo;
}
isPerfect(iSum);

// factorials

function factorials() {
  const iNo = 5;
  let iMult = 1;
  for (i = 1; i <= iNo; i++) {
    iMult = iMult * i;
  }
  console.log(`factorails of ${iNo} is : ${iMult}`);
}
factorials();

/*
    iNo = 5;
    
    5!
    
    Factorial = 5 * 4 * 3 * 2 * 1   = 120

    Factorial = 1 * 2 * 3 * 4 * 5   = 120

*/

function DisplayDigits(iNo) {
  let iDigit = 0;
  // let iDigit = 12.6;

  while (iNo != 0) {
    // Extract last digit
    // iDigit = 126 % 10 = 6; // 1ST ITERATION
    // iDigit = 12 % 10 = 2; // 2nd ITERATION
    // iDigit = 1 % 10 = 1; // 3rd ITERATION
    iDigit = iNo % 10;
    console.log(iDigit);

    // Remove last digit
    // iNo = 12
    // iNo = 1
    // iNo = 0
    iNo = (iNo / 10) | 0; // Using bitwise OR to simulate integer division
  }
}

// Hardcoded input
let iValue = 126;
console.log("Number:", iValue);
DisplayDigits(iValue);

// take a Number and Reverse It (ip: 12345)->(o/p: 54321) 63

let iValue = 1234;
function Reverse(iNo) {
  iDigit = 0;
  iReverse = 0;
  while (iNo != 0) {
    // iDigit = 1234 % 10;  = 4
    // iDigit = 123 % 10;  = 3
    iDigit = iNo % 10;
    // iNo = (1234 / 10) | 0; = 123
    // iNo = (123 / 10) | 0; = 12
    iNo = (iNo / 10) | 0;

    // iReverse = (0 * 10) + 4; = 4
    // iReverse = (4 * 10) + 3; = 43
    // iReverse = (43 * 10) + 2; = 432
    // iReverse = (432 * 10) + 1; = 4321
    iReverse = iReverse * 10 + iDigit;
  }
  console.log(` Here is Reversed Value : ${iReverse} `);
}
Reverse(iValue);

// CheckPallindrome or not (IP: 123321) 65

iValue = 12321;
function CheckPallindrome(iNo) {
  iDigit = 0;
  iReverse = 0;
  while (iNo != 0) {
    iDigit = iNo % 10;
    iNo = (iNo / 10) | 0;

    iReverse = iReverse * 10 + iDigit;
  }
  console.log(`Reverse Number is :  ${iReverse}`);
}
iRet = CheckPallindrome(iValue);
if (iReverse == iValue) {
  console.log("the number is palendrome");
} else {
  console.log("the number is NOT palendrome");
}

// MinimumDigit (IP 12345): (OP: 1) : 67

iValue = 541234;
function MinimumDigit(iNo) {
  iDigit = 0;
  iMin = 9;
  while (iNo != 0) {
    iDigit = iNo % 10; // 4, 3
    iNo = (iNo / 10) | 0; // 54123 ,5412
    // 9 > 4
    // 4 > 3
    // 3 > 2
    // 2 > 1
    // 1 > 2 // false
    // 1 > 4 // false
    // 1 > 5 // false
    if (iMin > iDigit) {
      // iMin = 4;
      // iMin = 3;
      // iMin = 2;
      // iMin = 1;
      iMin = iDigit;
    }
  }
  console.log(`Smallest Digit From ${iValue} is : ${iMin}`);
}

MinimumDigit(iValue);

// ========================================================================
// take array are return its Manimum Number : 83
iValue = [1001, 314, 112, 716, 1141];

function maxNum(iNo) {
  imax = 0;
  iMin = iNo[0];
  iNo.map((num) => {
    // 0 < 101
    // 101 < 34 // false
    // 101 < 12 // false
    // 101 < 76 // false
    // 101 < 41 // false
    if (imax < num) {
      // imax = 101;
      imax = num;
    }
    // 101 > 101
    // 101 > 34
    // 34 > 112 // false
    // 34 > 716 // false
    // 34 > 1141 // false
    if (iMin > num) {
      // iMin = 34;
      iMin = num;
    }
  });

  console.log(`Highest Number is : ${imax}`);
  console.log(`Smallest Number is : ${iMin}`);
}
maxNum(iValue);

// print * 5 times with for loop => 94
// ASCII Value A TO Z : 65 to 90
// ASCII Value a TO z : 97 to 112

iStar = 5;
for (i = 1; i <= iStar; i++) {
  ch = String.fromCharCode(97 + i);
  console.log(`${ch}: ${i}`);
}

// take a 1 letter and check where it is Capital or not with charactor (a to z) => 154

iChar = "l";
function dsiplayASCI(iChar) {
  if (iChar >= "A" && iChar <= "Z") {
    return true;
  } else {
    false;
  }
}
iRet = dsiplayASCI(iChar);

if (iRet) {
  console.log("it is Capital Letter");
} else {
  console.log("No its Not Capital Letter");
}

// take a string and count its smallcase letter from string AtiSH : 2 small letter => 162

iStr = "AKJHkhgfhgfgfgafhGFHGFHGF";

function strlenLower(iStr) {
  i = 0;
  ilowerChar = 0;

  while (iStr[i] !== undefined) {
    if (iStr[i] >= "a" && iStr[i] <= "z") {
      ilowerChar++;
    }
    i++;
  }
  console.log(
    ` Total No Of Small Case Char in ABove STring is :  ${ilowerChar}`
  );
}
strlenLower(iStr);

// String Reverse (Atish -> hsitA) => 187

iStr = "lwodalg ni repoleved bew a sa gnikrow elbmak kayaniv hsita";

function strRevX(iStr) {
  i = iStr.length - 1;
  iStrRev = "";
  while (i >= 0) {
    iStrRev = iStrRev + iStr[i];
    i--;
  }
  console.log(iStrRev);
}
strRevX(iStr);

// String Reverse (Atish -> hsitA) => 187

iStr = "lwodalg ni repoleved bew a sa gnikrow elbmak kayaniv hsita";

function strRevX(iStr) {
  iStrRev = "";
  for (i = iStr.length - 1; i >= 0; i--) {
    iStrRev = iStrRev + iStr[i];
  }
  console.log(iStrRev);
}
strRevX(iStr);
