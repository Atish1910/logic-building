//14. Remove All White Spaces from a String 

iStr1 = "Atish Vin a  ya k kamble";
let result = iStr1.replace(/\s+/g, "-");
console.log("remove White space from string with inbuilt operator  : ", result)

// ========================================================================================
let iStr = "Atish Vinayak Kamble";
function Display(iStr){
  let iCnt = 0;
  let newStr = "-"
  for(i = 0; i < iStr.length; i++){
    if(iStr[i] == " "){
      newStr = newStr + "-";
    }else{
      newStr = newStr + iStr[i];
    }
  }
  console.log("new Str is  : ", newStr);
}

Display(iStr);