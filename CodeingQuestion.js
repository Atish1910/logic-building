// 1. Find longest word from string "Atish vinayak kamble";
//================================================================================
let iStr01 = "atish vinayak kambletuytutuyt";
function display01(iStr){
    let iLongest = "";  
    let iMax = 0;  
    let iCurrentWord = ""; 

    for(let i = 0; i < iStr.length; i++){
        if(iStr[i] != " "){
            iCurrentWord = iCurrentWord + iStr[i];
        }else{
            if(iCurrentWord.length > iMax){
                iMax = iCurrentWord.length;
                iLongest = iCurrentWord;
            }
            iCurrentWord = "";
        }
    }
    if(iCurrentWord.length > iMax){
        iMax = iCurrentWord.length;
        iLongest = iCurrentWord;
    }

    console.log(iLongest, iMax);

}
display01(iStr01);


// ====================================================================================

// 1️⃣ Remove duplicate elements from an array
const iArr01 = [1, 2, 2, 3, 4, 4];

console.log("Approch 1 : WIthout inbuilt");

function removeDuplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] == newArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      newArr.push(arr[i]);
    }
  }
  console.log("Sort array withOut inbuilt operator : " + newArr);
}

removeDuplicate(iArr01);