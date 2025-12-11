Arr = [9, 3, 4, 5, 7, 1, 6];

function display(iArr) {
  let n = iArr.length - 1;
  console.log(Arr);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (iArr[j] > iArr[j + 1]) {
        let iTemp = iArr[j];
        iArr[j] = iArr[j + 1];
        iArr[j + 1] = iTemp;
        console.log("j", iArr[j]);
      }
    }
    console.log("I", iArr[i]);
  }

  console.log(iArr);
}

display(Arr);
