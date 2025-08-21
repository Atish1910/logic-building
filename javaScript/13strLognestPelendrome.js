let iStr = "hnitinghgdadhj";

function Display(iStr){
  let iMaxPelendrome = "";
  
  for(let i = 0; i < iStr.length; i++){
  
    for(let j = i+1; j <= iStr.length; j++){
  
      let iSubStr = iStr.slice(i, j);
      let iRevStr = iSubStr.split("").reverse().join("");

      if(iSubStr == iRevStr && iSubStr.length > iMaxPelendrome.length){
        iMaxPelendrome = iSubStr;
      }
    }
  }
  console.log("Longest pelendrome From given string is :", iMaxPelendrome)
}

Display(iStr)