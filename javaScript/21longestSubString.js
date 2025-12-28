// 5. Program to find longest word in a given sentence ?
iStr =
  "Look, we know you need results! Forget cookie-cutter websites and generic marketing tactics. IKF is a lean, mean, ROI driven machine that solves complex problems and delivers scalable growth.";

function Display(iStr) {
  iCurrentStr = "";
  iLongestStr = "";

  for (i = 0; i <= iStr.length; i++) {
    if (iStr[i] == " " || i == iStr.length) {
      if (iCurrentStr.length > iLongestStr.length) {
        iLongestStr = iCurrentStr;
      }
      iCurrentStr = "";
    } else {
      iCurrentStr = iCurrentStr + iStr[i];
    }
  }
  console.log("Logest Substring from above String is : ", iLongestStr);
}
Display(iStr);
