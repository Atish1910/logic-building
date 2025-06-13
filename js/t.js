iString = "atishhhhH";

function pelendrome(iStr) {
  i = iStr.length - 1;
  iRev = "";
  while (i > 0) {
    iRev = iStr[i] + iRev;
    i--;
  }
  console.log(iRev);
  if (iRev == iString) {
    console.log("Pelendrome");
  } else {
    console.log("Not Pelendrome");
  }
}
pelendrome(iString);
