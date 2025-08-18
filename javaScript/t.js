<<<<<<< HEAD
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
=======
// take a string and return 1234 in between them;

const iStr = "users";
function Display(iStr) {
  iNewStr = "";
  for (i = 0; i < iStr.length; i++) {
    iNewStr = iNewStr + iStr[i] + (i + 1);
  }
  console.log(iNewStr);
>>>>>>> 5f87e0fb5c0271a68808eb2265db8ed846ce1ae7
}

Display(iStr);
