
// 2. Check if a String is a Palindrome 

let iStrold = "markram";

function Display(iStr){
  let strRev = "";
  for(let i = iStr.length -1 ; i >= 0; i--){
    strRev = strRev + iStr[i];
  }
  console.log(strRev);
  if(strRev == iStrold){
    console.log("string is pelendrome")
  }else{
    console.log("string is not pelendrome")
  }
}



Display(iStrold);