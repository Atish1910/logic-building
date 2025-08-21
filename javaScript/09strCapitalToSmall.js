let iStr = "AtIsH";


function Display(iStr){
  iNewStr = "";
  for(let i = 0; i < iStr.length; i++){

    iChar = iStr.charCodeAt(i);

    if(iChar >= 65 && iChar <= 90){
      iNewStr = iNewStr + String.fromCharCode(iChar + 32);
    }else{
      iNewStr = iNewStr + String.fromCharCode(iChar - 32);
    }
  }
  console.log(iNewStr);
}
Display(iStr);