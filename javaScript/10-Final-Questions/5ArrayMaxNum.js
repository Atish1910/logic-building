// find maximum value from array
iArr = [10, 34, 12, 76, 41];
function MaximumNum(iArr) {
  iMax = 0;
  for (i = 0; i < iArr.length; i++) {
    if (iMax < iArr[i]) {
      iMax = iArr[i];
    }
  }
  console.log(iMax);
}
MaximumNum(iArr);
