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
// 26. take an array 1st letter should be capitalize
// 20. Convert a Sentence into an Acronym
// 16. Convert a String to Title Case
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
  .reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, [])
  .join("");

console.log("// Method Two Reduce;", iUnique);

// ================================================================================================

// 4. Find the First Non-Repeating Character
const iStr5 = "manthanashokshinde";

const iResult = iStr5.split("").find((ch) => {
  return iStr5.indexOf(ch) === iStr5.lastIndexOf(ch);
});

console.log(iResult);

// ================================================================================================

// 5. Count the Occurrences of Each Character
const iStr6 = "atishatishatishatishatish";
const iResult2 = iStr6.split("").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, []);

console.log(iResult2);
// ================================================================================================

// 6. Reverse Words in a Sentence
const iStr7 = "Tejshree khupp chan aahe ";
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
const iSHortest = iString.split(" ").reduce((acc, curr) => {
  return curr.length < acc.length ? curr : acc;
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

// ================================================================================================

// 26 : find nearest No From Array

const iArr01 = [10, 15, 20, 25, 66, 100];
let target = 50;
function nearestNoFromArray(iArr01, target) {
  let nearestValue = iArr01[0];
  let minDiff = Math.abs(iArr01[0] - target);

  for (let i = 0; i < iArr01.length; i++) {
    let currentDiff = Math.abs(iArr01[i] - target);
    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      nearestValue = iArr01[i];
    }
  }
  console.log(
    ` here is array : ${iArr01} & taret value is ${target} : nearest No from array ${nearestValue}`,
  );
}
nearestNoFromArray(iArr01, target);

// -------------------------------------------------------------------------------------------------
let iNearValue = iArr01.reduce((curr, prev) =>
  Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev,
);

console.log(
  `INBUILT Operator here is array : ${iArr01} & taret value is ${target} : nearest No from array ${iNearValue}`,
);

// ================================================================================================

let iArrOfName = ["atish", "manthan", "pratik"];
let iArrOfName2 = ["atish", "manthan", "pratik"];
function capitalizeFunction(iArr) {
  for (let i = 0; i < iArr.length; i++) {
    iArr[i] = iArr[i][0].toUpperCase() + iArr[i].slice(1);
  }
  console.log("1st letter should be capital for every name", iArr);
}
capitalizeFunction(iArrOfName);

// method 2 inbuilt-----------

let iCapitalize = iArrOfName2.map(
  (word) => word[0].toLocaleUpperCase() + word.slice(1),
);
console.log("INBUILT 1st letter should be capital for every name", iCapitalize);

// ================================================================================================

// convert a number into Array

let numbers = 123456;
function displayIntoArr(iStr) {
  let iArr = [];
  let iDigit = 0;

  while (iStr != 0) {
    iDigit = iStr % 10;
    iStr = (iStr / 10) | 0;
    iArr.unshift(iDigit);
  }
  console.log(iArr);
}
displayIntoArr(numbers);
