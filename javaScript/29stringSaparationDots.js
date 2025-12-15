// Input: "ggg.ttt.com"
// Output: "ttt"

iStr = "sadjkasdh.sadljlkdasjklsadjksdajkldsajlksdaj.a.a";
function display(iStr) {
  let iCnt = 0;
  iNewStr = "";

  let i = 0;
  while (iStr[i] != undefined) {
    if (iStr[i] == ".") {
      i++;
      iCnt++;
    }
    if (iCnt == 1) {
      iNewStr = iNewStr + iStr[i];
    }

    if (iCnt == 2) {
      break;
    }
    i++;
  }
  console.log(iNewStr);
}

display(iStr);
