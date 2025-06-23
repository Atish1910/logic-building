// MinimumDigit (IP 12345): (OP: 1) : 67

iValue = 984727;

function findMinimumDigit(iNo){
  iDigit = 0;
  iMin = 9;

  while(iNo > 0){
    iDigit = iNo % 10;
    iNo = (iNo / 10) | 0;
    // console.log(iDigit);

    if(iMin > iDigit){
      iDigit = iMin;
    }
  }
  console.log(iMin);
}

findMinimumDigit(iValue);