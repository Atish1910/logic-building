var iStr = "AshishVinayak";

function reverseString(iStr) {
  i = iStr.length - 1;
  iRevStr = "";
  while (i >= 0) {
    iRevStr = iRevStr + iStr[i];
    i--;
  }
  console.log(iRevStr);
}
reverseString(iStr);
