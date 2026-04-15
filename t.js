const iArr = [10, 11, 121, 3, 14, 15, 6, 74];

function Display(iArr) {
  let iMax = -Infinity;
  iMax2 = -Infinity;

  for (let i = 0; i < iArr.length; i++) {
    if (iArr[i] > iMax) {
      iMax2 = iMax;
      iMax = iArr[i];
    } else if (iArr[i] > iMax2 && iArr[i] != iMax) {
      iMax2 = iArr[i];
    }
  }
  console.log(iMax2);
}

Display(iArr);
