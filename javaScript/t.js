// take a string and return 1234 in between them;

const iStr = "users";
function Display(iStr) {
  iNewStr = "";
  for (i = 0; i < iStr.length; i++) {
    iNewStr = iNewStr + iStr[i] + (i + 1);
  }
  console.log(iNewStr);
}

Display(iStr);
