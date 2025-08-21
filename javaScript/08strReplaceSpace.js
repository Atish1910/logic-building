
//19. Replace Spaces with %20 (URL Encoding) 

let iStr = "Atish Vinayak Kamble";

function Display(iStr) {
  let newStr = "";
  for(let i = 0; i < iStr.length; i++){
    if(iStr[i] == " "){
      newStr = newStr + "-";
    }
    else{
      newStr = newStr + iStr[i]; //a 
    }
  }
  console.log(newStr)
}

Display(iStr)