
// : Take a number (12345) and give digit(4) it is present is number or not? -> = 54

iValue = 87641;
function iFindFunction(iNo){
  iFind = 4;
  iDigit = 0;
  iCnt = 0;

  while(iNo > 0){
    iDigit = iNo % 10;
    iNo = (iNo / 10) | 0;
    console.log(iDigit);
    
    if(iDigit == iFind){
      iCnt++;
    }
  }
  if(iCnt > 0){
    console.log("yes it is present");
  }else{
    console.log("No it is Not Present");
  }
}
iFindFunction(iValue);

////////////////////////////////////////////////////////////////////////////////

// : Count Event Digits From Number 1234567 -> 3 = 61

iValue = 8672139;
function isEven(iNo){
  iDigit = "";
  iCnt = 0;

  while(iNo > 0){
    
    iDigit = iNo % 10;
    iNo = (iNo / 10) | 0;
    if(iDigit % 2 == 0){
      iCnt++;
    console.log(`Even Numbers Are ${iDigit} & total ${iCnt} are Even Numbers`);
    }
  }
}

isEven(iValue);



////////////////////////////////////////////////////////////////////////////////////////////
// MinimumDigit (IP 12345): (OP: 1) : 67

iValue = 90927;

function findMinimumDigit(iNo){
  iDigit = 0;
  iMin = 9;

  while(iNo > 0){
    iDigit = iNo % 10;
    iNo = (iNo / 10) | 0;
    // console.log(iDigit);

    if(iMin > iDigit){
      iMin = iDigit;
    }
  }
  console.log(iMin);
}

findMinimumDigit(iValue);