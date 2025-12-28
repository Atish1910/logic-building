iArr = [10, 11, 12, 13, 12, 131, 12, 14, 14, 1515, 11, 11, 16, 17];

function Display(iArr) {
  iUniqueStr = [];
  iCnt = 0;

  for (i = 0; i < iArr.length; i++) {
    isExists = false;

    for (j = 0; j < iCnt; j++) {
      if (iUniqueStr[j] == iArr[i]) {
        isExists = true;
        break;
      }
    }
    if (!isExists) {
      iUniqueStr[iCnt] = iArr[i];
      iCnt++;
    }
  }
  console.log(`Here is unique String : ${iUniqueStr}`);
}

Display(iArr);
