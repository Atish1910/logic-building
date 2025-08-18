// take a Number and Reverse It (ip: 12345)->(o/p: 54321) 63

var iValue = 12344321;

function pelendromeNum(iNo) {
  iDigit = 0;
  iRev = 0;
  while (iNo > 0) {
    iDigit = iNo % 10;
    iNo = (iNo / 10) | 0;
    iRev = iRev * 10 + iDigit;
  }
  console.log(iRev);
  if (iValue == iRev) {
    return true;
  } else {
    return false;
  }
}

iRet = pelendromeNum(iValue);
if (iRet) {
  console.log("Your Number is Pelendrome");
} else {
  console.log("Your Number is NOT Pelendrome");
}
