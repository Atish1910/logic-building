// take array are return its Manimum Number : 83
iArr = [90, 1, 2, 3, 4, 566, 7, 89, 40, 50, 60, 70];

function findMaxNum(iArr) {
  iMax = 0;
  iMax2 = 0;
  n = iArr.length;
  for (i = 0; i < n; i++) {
    if (iMax < iArr[i]) {
      iMax2 = iMax;
      iMax = iArr[i];
    } else if (iMax2 < iArr[i]) {
      iMax2 = iArr[i];
    }
  }
  console.log(iMax2);
}

findMaxNum(iArr);
