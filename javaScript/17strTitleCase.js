// 16. Convert a String to Title Case 

let iStr = " AtIsH viNAY aK ka mb lr"; 

function Display(iStr) {
  let iNewStr = "";
  let makeUpper = true; // Flag to decide if next char should be uppercase

  for (let i = 0; i < iStr.length; i++) {
    let iChar = iStr.charCodeAt(i);

    // If it's a space → next character should be uppercase
    if (iStr[i] === " " || i == 0) { 
      iNewStr = iNewStr + " ";
      makeUpper = true;
      continue;
    }

    if (makeUpper) {
      // Convert to uppercase if it’s lowercase (a-z: 97–122)
      if (iChar >= 97 && iChar <= 122) {
        iNewStr = iNewStr + String.fromCharCode(iChar - 32);
      } else {
        iNewStr = iNewStr + String.fromCharCode(iChar);
      }
      makeUpper = false; // reset flag
    } else {
      // Convert to lowercase if it’s uppercase (A-Z: 65–90)
      if (iChar >= 65 && iChar <= 90) {
        iNewStr = iNewStr + String.fromCharCode(iChar + 32);
      } else {
        iNewStr = iNewStr + String.fromCharCode(iChar);
      }
    }
  }
  console.log(iNewStr);
}

Display(iStr);
