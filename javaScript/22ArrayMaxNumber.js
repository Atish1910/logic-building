// . Write a JavaScript program to find the maximum number in an array.

iArr = [10, 12, 987654, 23456789, 122, 10];

function Display(iArr) {
  iMax = 0;
  for (i = 0; i < iArr.length; i++) {
    if (iArr[i] > iMax) {
      iMax = iArr[i];
    }
  }
  console.log("Higest Number from Array is : ", iMax);
}

Display(iArr);
