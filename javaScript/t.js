iStr = 3284792347;

function Display(iStr){
  iMin = 9;
  iDigit = 0;
  while(iStr != 0){
    iDigit = iStr % 10;
    iStr = (iStr / 10) | 0;
    if(iDigit > iMin){
      iDigit = iMin;
    }
  }
  console.log(iMin);
}

Display(iStr);
