// Input :

// Row : 6
// Col : 6

// Output :
// *   *   *   *   *   *
// *   &   &   &   &   *
// *   &   &   &   &   *
// *   &   &   &   &   *
// *   &   &   &   &   *
// *   &   &   &   &   *
// *   *   *   *   *   *

iRow = 6;
iCol = 6;

function displayPattern(iRow, iCol) {
  for (i = 1; i <= iRow; i++) {
    for (j = iCol; j >= 1; j--) {
      ch = String.fromCharCode(64 + j);
      if (j != i) {
        document.writeln(ch + " \t");
      } else {
        document.writeln("- \t");
      }
    }
    document.writeln("<br>");
  }
}
displayPattern(iRow, iCol);
