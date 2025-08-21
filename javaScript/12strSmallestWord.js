let iStr = "Ati sh vinayak kamble";

function Display(iStr){
  let iWord = "";
  let shortWord = "";
  let iMinLen = Infinity;
  for(i = 0; i < iStr.length; i++){
    if(iStr[i] == " " || i == iStr.length){

      if(iWord.length > 0){
        if(iWord.length < iMinLen){
          iMinLen = iWord.length ;
          shortWord = iWord;
        }
        iWord = ""
      }

    }else{
      iWord = iWord + iStr[i];
    }
  }
  console.log("Smallest word from String is : ", shortWord);
}

Display(iStr)