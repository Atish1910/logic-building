let iStr = "qwertyu23f5f6ga57h";

function Display(iStr){
  iCnt = 0;
  for(i = 0; i < iStr.length; i++){
    if(iStr[i] > 0 && iStr[i] < 9){
      console.log(iStr[i]);
      iCnt++;
    }
  }
  console.log("yes in above string contain numbers : ", iCnt);
}
Display(iStr)