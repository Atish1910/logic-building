// In JavaScript, write a function that is passed a string and return the number of times the letter W occurs in the string.

const cStr = "atishwinayWkambwlWeow";

function display(cStr) {
  let iCnt = 0;
  for (let i = 0; i < cStr.length; i++) {
    if (cStr[i] == "w" || cStr[i] == "W") {
      iCnt++;
    }
  }
  console.log(`w is present in above string ${iCnt} of times`);
}

display(cStr);
