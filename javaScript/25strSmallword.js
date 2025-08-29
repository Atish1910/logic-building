// 9. Find the smallest word in a given sentence ?

iStr =
  "lean, mean, ROI driven machine that solves complex problems and delivers scalable growth";

function Display(iStr) {
  iCurrentWord = "";
  iSmallword = iStr;
  for (i = 0; i < iStr.length; i++) {
    if (iStr[i] == " " || i == iStr.length) {
      if (iCurrentWord.length < iSmallword.length) {
        iSmallword = iCurrentWord;
      }
      iCurrentWord = "";
    } else {
      iCurrentWord = iCurrentWord + iStr[i];
    }
  }
  console.log(iSmallword);
}
Display(iStr);
