

// 26. Find longest word from string "Atish vinayak kamble";
// Method 01 : without inbuilt
const iStr004 = "atish vinaykdsklfdjlksfdjak mble";
function displayLongestWord(iStr){
  let iCnt = 0;
  let iMax = 0
  for(let i = 0; i < iStr.length; i++){
    if(iStr[i] != " "){
      iCnt++
    }else{
      if(iCnt > iMax){
        iMax = iCnt;
      }

      iCnt = 0;
    }
    if(iCnt > iMax){
      iMax = iCnt;
    }
  }
  console.log(iMax);
}

displayLongestWord(iStr004);

// Method 02 : without inbuilt
const iStr005 = "atish vinayak kamble";
function displayLongestWord02(iStr){
    let word = iStr.split(" ");
    let iMax = -Infinity;

    for(let i = 0; i < word.length; i++){
        if(word[i].length > iMax){
            iMax = word[i].length;
        }
    }
    console.log(iMax);
}
displayLongestWord02(iStr005);

// Method 03 : inbuilt;

const iStr006 = "atish vinayak dfsjlkfdjse";
const iMax3 = iStr006.split(" ").reduce((curr, prev) => curr.length > prev.length ? curr.length : prev.length);
console.log(iMax3)

