// String Reverse (Atish -> hsitA) => 187

var str = "Atishhhhhhh";
function strRev(iStr) {
  reversed = "";
  i = iStr.length - 1;
  while (i >= 0) {
    reversed = reversed + str[i];
    i--;
  }
  console.log(reversed);
}
strRev(str);
