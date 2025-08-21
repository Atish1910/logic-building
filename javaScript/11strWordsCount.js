// 22. Find the Number of Words in a String 

let iStr = "Atish Vinay ghg  ";

function Display(iStr){
  iCnt = 1;
  for(i = 0; i< iStr.length; i++){
    if(iStr[i] == " "){
      iCnt++;
    }
  }
  console.log("in aboove string There are words : ", iCnt)
}
Display(iStr)