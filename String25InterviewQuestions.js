// 1. Reverse a String
// 2. Check if a String is a Palindrome
// 3. Remove Duplicates from a String
// 4. Find the First Non-Repeating Character
// 5. Count the Occurrences of Each Character
// 6. Reverse Words in a Sentence
// 7. Check if Two Strings are Anagrams
// 21. Check if a String Contains Only Digits
// 13. Check if a String is a Rotation of Another String
// 22. Find the Number of Words in a String
// 23. Remove a Given Character from a String
// 24. Find the Shortest Word in a String
// 14. Remove All White Spaces from a String
// 25. Find the Longest Palindromic Substring
// 19. Replace Spaces with %20 (URL Encoding)
// 18. Convert a String to a Character Array
// 11. Find the Most Frequent Character
// 11. 4️⃣ Count Character Frequency
// 26. Find longest word from string "Atish vinayak kamble";
// remove dupliacte from below array
// 1️⃣ Remove duplicate elements from an array
// Find second largest number in array
// 29 : flatten an array
// 16. Convert a Array to Title Case

// 16. Convert a String to Title Case
// 27. Convert a Array to Title Case
// 8. Find the Longest Substring Without Repeating Characters
// 27 convert a number into Array

// 9. Convert a String to an Integer (atoi Implementation)
// 10. Compress a String (Run-Length Encoding)
// 12. Find All Substrings of a Given String
// 15. Check if a String is a Valid Shuffle of Two Strings
// 17. Find the Longest Common Prefix

// ====================================================================================

// 1. Reverse a String

const iStr = "atishhhhhhh";
const iReverse = iStr.split("").reverse().join("");
console.log(iReverse);
// ================================================

// 2. Check if a String is a Palindrome
const iStr2 = "MARKram";
const iPelendrome =
  iStr2.toLowerCase().split("").reverse().join("") == iStr2.toLowerCase()
    ? "Pelendrome"
    : "Not pelendrome";
console.log(iPelendrome);

// ================================================================================================

// 3. Remove Duplicates from a String
// Method One Set
const iStr3 = "atishvinayakkamble";
const iRemoveDuplicate = [...new Set(iStr3)].join("");
console.log("// Method One Set : ", iRemoveDuplicate);

// Method Two Reduce;
const iStr4 = "atishvinayakkamble";

const iUnique = iStr4
  .split("")
  .reduce((prev, curr) => {
    if (!prev.includes(curr)) {
      prev.push(curr);
    }
    return prev;
  }, [])
  .join("");

console.log("// Method Two Reduce;", iUnique);

// ================================================================================================

// 4. Find the First Non-Repeating Character
const iStr5 = "manthanashokshinde";
const iResult = iStr5
  .split("")
  .find((ch) => iStr5.indexOf(ch) === iStr5.lastIndexOf(ch));
console.log(iResult);


// ================================================================================================

// 5. Count the Occurrences of Each Character
const iStr6 = "atishatishatishatishatish";
const iResult2 = iStr6.split("").reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});

console.log(iResult2);
// ================================================================================================

// 6. Reverse Words in a Sentence
const iStr7 = "ishuuu khupp chan aahe ";
const iReverrseWord = iStr7.split(" ").reverse().join(" ");
console.log(iReverrseWord);

// ================================================================================================

// 7. Check if Two Strings are Anagrams
const cStr1 = "siljhgent";
const cStr2 = "liasten";
const isAnamagram =
  cStr1.toLowerCase().split("").sort().join("") ==
  cStr2.toLowerCase().split("").sort().join("")
    ? "string is anagram"
    : "not anaagram";
console.log(isAnamagram);

// ================================================================================================

// 21. Check if a String Contains Only Digits
const iStr8 = "12345";
const iDigitonly = iStr8.split("").every((n) => {
  return n >= 0 && n <= 9;
});
console.log(iDigitonly);

const isDigit = !isNaN(iStr8) && iStr8.trim() !== "";
console.log(isDigit);

// ================================================================================================

// 13. Check if a String is a Rotation of Another String
const iStr01 = "abcd";
const iStr02 = "cdab";

const isRotation = (iStr01 + iStr01).includes(iStr02) ? "true" : "false";
console.log(isRotation);
// ================================================================================================

// 22. Find the Number of Words in a String
const iStr001 = "atish vinayak kamble";
const iLength = iStr001.split(" ").length;
console.log(iLength);

// ================================================================================================

// 23. Remove a Given Character from a String
const iStr12 = "atish";
const iRemove = iStr12
  .split("")
  .filter((c) => {
    return c != "h";
  })
  .join("");
console.log(iRemove);

// ================================================================================================

// 24. Find the Shortest Word in a String
const iString = "atish vinayak kamble working as web developer";
///////////////// Method One
const iSHortest = iString.split(" ").reduce((prev, curr) => {
  return curr.length < prev.length ? curr : prev;
});
console.log("Find the Shortest Word : ", iSHortest);

///////////////// Method two

const iSHortest2 = iString.split(" ").sort((a, b) => {
  return a.length - b.length;
})[0];
console.log("Find the Shortest Word Method 2 : ", iSHortest2);

// ================================================================================================

// 14. Remove All White Spaces from a String
const iStr0010 =
  "asjdg asdk hasd asdoi uas d  asdpou dpas adsp asd aspd sda poua";
console.log(iStr0010.split(" ").join(""));

// ================================================================================================

//  25. Find the Longest Palindromic Substring
let iStr011 = "atishvinaynitinakambldade";

function longestPelendrome(str) {
  let iLongest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let iSubStr = str.slice(i, j);
      let iReverse = iSubStr.split("").reverse().join("");

      if (iSubStr == iReverse && iSubStr.length > iLongest.length) {
        iLongest = iSubStr;
      }
    }
  }
  console.log(iLongest);
}
longestPelendrome(iStr011);

// ================================================================================================

// 20. Convert a Sentence into an Acronym
const iSentance = "as soon as Possible";
let acronyn = iSentance
  .split(" ")
  .map((word) => {
    return word[0].toUpperCase();
  })
  .join("");
console.log(acronyn);

// ================================================================================================
// 19. Replace Spaces with %20 (URL Encoding)

let iStrr01 = "atish Vinayak Kamble";
console.log(iStrr01.split(" ").join("%20"));

// ================================================================================================
// 11. Find the Most Frequent Character

let iStrr02 = "atishatiatishatiatiashaata";
let iMaxFreq = Object.entries(
  iStrr02.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] | 0) + 1;
    return acc;
  }, {}),
).reduce((a, b) => (a[1] > b[1] ? a : b));
console.log(iMaxFreq);

// ================================================================================================

// 16. Convert a String to Title Case
let iStr002 = "atish vinayak kamble";
// Method 01
let iTitleCase = iStr002
  .split(" ")
  .map((w) => {
    return w[0].toUpperCase() + w.slice(1);
  })
  .join(" ");
console.log(iTitleCase);

// Method 02 with Regex

let iStr003 = "kamble ashish vinayak";

let iTitleCase02 = iStr003.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(iTitleCase02);

// ================================================================================================

// 18. Convert a String to a Character Array

let iStrr003 = "atish";
console.log(iStrr003.split(""));

// 26. Find longest word from string "Atish vinayak kamble";
const iStr004 = "atish vinayak Kambleeeeeee";

function displayLongestWord(iStr) {
  let iCnt = 0;
  let iMax = 0;
  for (let i = 0; i < iStr.length; i++) {
    if (iStr[i] != " ") {
      iCnt++;
    } else {
      if (iCnt > iMax) {
        iMax = iCnt;
      }

      iCnt = 0;
    }
    if (iCnt > iMax) {
      iMax = iCnt;
    }
  }
  console.log(iMax);
}

displayLongestWord(iStr004);

// =================================================================

// 26. Find longest word from string "Atish vinayak kamble";
// Method 01 : without inbuilt
const iStr007 = "atish vinaykdsklfdjlksfdjak mble";

function displayLongestWord(iStr) {
  let iCnt = 0;
  let iMax = 0;
  for (let i = 0; i < iStr.length; i++) {
    if (iStr[i] != " ") {
      iCnt++;
    } else {
      if (iCnt > iMax) {
        iMax = iCnt;
      }

      iCnt = 0;
    }
    if (iCnt > iMax) {
      iMax = iCnt;
    }
  }
  console.log(iMax);
}

displayLongestWord(iStr007);

// Method 02 : without inbuilt
const iStr005 = "atish vinayak kamble";

function displayLongestWord02(iStr) {
  let word = iStr.split(" ");
  let iMax = -Infinity;

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > iMax) {
      iMax = word[i].length;
    }
  }
  console.log(iMax);
}
displayLongestWord02(iStr005);

// Method 03 : inbuilt;

const iStr006 = "atish vinayak dfsjlkfdjse";
const iMax3 = iStr006
  .split(" ")
  .reduce((curr, prev) =>
    curr.length > prev.length ? curr.length : prev.length,
  );
console.log(iMax3);

// ==========================================================================

// remove dupliacte from below array
let iArr2 = [
  10, 11, 1, 21, 12, 13, 1, 21, 12, 13, 1, 21, 12, 13, 1, 21, 12, 13, 1,
];

const iUnique001 = iArr2.reduce((prev, curr) => {
  if (!prev.includes(curr)) {
    prev.push(curr);
  }
  return prev;
}, []);

console.log(`reduces(). Remove duplicate whole array is : [${iUnique001}]`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1️⃣ Remove duplicate elements from an array
const iArr001 = [1, 2, 2, 3, 4, 4];

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

removeDuplicate(iArr001);

// peoblem solve with inbuilt opeatpor;

console.log("Approch 2 : inbuilt (Set)");

let uniqueArr = [...new Set(arr)];
console.log("Sort array with inbuilt operator : " + uniqueArr);
console.log("");

// method 03

console.log("Approch 2 : inbuilt (filter + indexOf )");
const iArr3 = [
  1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7,
];

const iUnique3 = iArr3.filter((value, index) => {
  return iArr3.indexOf(value) === index;
});
console.log(iUnique3);

// method 04

console.log("Approch 4 : inbuilt (forEach + includes )");
const iArr4 = [1, 9, 0, 5, 6, 7, 2, 3, 4, 5, 6, 7];

const iUnique4 = [];

iArr4.forEach((val) => {
  if (!iUnique4.includes(val)) {
    iUnique4.push(val);
  }
});
console.log(iUnique4);

////////////////////////////////////////==========================////////////////////////////////////

// Find second largest number in array
const iArr = [10, 11, 121, 3, 14, 15, 6, 74];

function Display(iArr) {
  let iMax = -Infinity;
  iMax2 = -Infinity;

  for (let i = 0; i < iArr.length; i++) {
    if (iArr[i] > iMax) {
      iMax2 = iMax;
      iMax = iArr[i];
    } else if (iArr[i] > iMax2 && iArr[i] != iMax) {
      iMax2 = iArr[i];
    }
  }
  console.log(iMax2);
}

Display(iArr);
////////////////////////////////////////////////////////////////////////////////////////////


// 27. Convert a Array to Title Case
const iArr01 = ["manthan shinde", "atish kamble ", "nirya"];

const iNewArrTitleCase = iArr01.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
console.log(iNewArrTitleCase);

// ==========================================
const iFlattenArr = [10,11,[12,23,15], [19]];

function display(iFlattenArr){
    let iNewArr01 = [];
    for(let i = 0; i < iFlattenArr.length; i++){
        if(Array.isArray(iFlattenArr[i])){
            iNewArr01 = iNewArr01.concat(display(iFlattenArr[i]));
        }else{
            iNewArr01.push(iFlattenArr[i]);
        }
    }
    return iNewArr01;
  }

console.log(display(iFlattenArr));
  
// ==========================================
// 11. Find the Most Frequent Character
// 4️⃣ Count Character Frequency
let iString01 = "atishatishatishatishatish";

function display(iStr){
  let freq = {}
  for(let i = 0; i < iStr.length; i++){
    if(freq[iStr[i]]){
      freq[iStr[i]]++
    }else{
      freq[iStr[i]] = 1
    }
  }
  console.log(freq);
}

display(iString01)

// without inbuilt

// 4️⃣ Count Character Frequency
let iString02 = "atishatishatishatishatish";

let iResult1 = iString.split("").reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;

  return prev;
}, {});

console.log(iResult1);

// =============================================================
// 16. Convert a Array to Title Case

const iArrWithNames = ["atish vinayak kamble" ,"Akshay vinayak kamble", "karishma ashish rankhambe"];

const iTitleCaseArray = iArrWithNames.map((name) => {
  return name.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
});
console.log(iTitleCaseArray);