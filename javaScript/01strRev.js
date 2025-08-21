//1. Reverse a String 

let iStr = "Atishh";

function Display(iStr){
  let revStr = ""
  for(let i = iStr.length -1 ; i >= 0; i--){
    revStr = revStr + iStr[i]
  }
  console.log(revStr);
}
Display(iStr);