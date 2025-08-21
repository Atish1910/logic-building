// 7. Check if Two Strings are Anagrams 

let iStr1 = "ati";
let iStr2 = "ita";

function Display(iStr1, iStr2) {
  let isAnagram = true;

  if(iStr1.length != iStr2.length){
    isAnagram = false;
    console.log(`length of "${iStr1}" and "${iStr2}" are not same So They are anagrams? : ${isAnagram}`);
    return;
  }

  for (let i = 0; i < iStr1.length; i++) {
    let found = false;
    for (let j = 0; j < iStr2.length; j++) {
      if (iStr1[i] === iStr2[j]) {
        found = true;
        break; // once found, no need to check further
      }
    }
    if (!found) {
      isAnagram = false;
      break;
    }
  }

  console.log(`Are "${iStr1}" and "${iStr2}" anagrams? : ${isAnagram}`);
}

Display(iStr1, iStr2);
