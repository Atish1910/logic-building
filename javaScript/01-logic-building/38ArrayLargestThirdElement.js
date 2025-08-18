// take array are return its Manimum Number : 83
iArr = [1001, 11, 44, 5556, 314, 112, 716, 1141];

function thirdLargest(iArr) {
  let n = iArr.length;

  var first = 0;
  var second = 0;
  var third = 0;

  for (i = 0; i < n; i++) {
    if (first < iArr[i]) {
      third = second;
      second = first;
      first = iArr[i];
    } else if (second < iArr[i]) {
      third = second;
      second = iArr[i];
    } else if (third < iArr[i]) {
      third = iArr[i];
    }
  }
  console.log(third);
}

thirdLargest(iArr);
