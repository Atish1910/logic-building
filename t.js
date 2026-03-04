const iNum = [2, 3, 4, 5, 6, 3, 2345, 67, 8, 9];

iMax = -Infinity;
iMax2 = -Infinity;
for (let i = 0; i < iNum.length; i++) {
  if (iNum[i] > iMax) {
    iMax2 = iMax;

    iMax = iNum[i];
  } else if (iNum[i] > iMax2 && iNum[i] != iMax) {
    iMax2 = iNum[i];
  }
}
console.log(iMax2);
