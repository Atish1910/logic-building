// Input: "ggg.ttt.com"
// Output: "ttt"

let iStr = "ggg.ttt.com";

function display(iStr){
  iSubStr = "";
  let iCnt = 0;
  for(let i = 0; i< iStr.length; i++){
    if(iStr[i] == "."){
      iCnt++
    }
    if(iCnt > 1){
      iSubStr = iSubStr + iStr[i];
    }
  }
  console.log(iSubStr);
}

display(iStr)