// find maximum value from array
iArr = [10, 34, 12, 76, 41];
function Findodd(iArr) {
  iOdd = 0;
  for (i = 0; i < iArr.length; i++) {
    if (iArr[i] % 2 != 0) {
      iOdd = iArr[i];
      console.log(iOdd);
    }
  }
}
Findodd(iArr);
