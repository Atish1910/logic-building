let iArr = [64, 34, 25, 12, 22, 11, 90];
function sortArray(iArr) {
  for (let i = 0; i < iArr.length; i++) {
    // Compare each pair of elements
    for (let j = 0; j < iArr.length - i; j++) {
      if (iArr[j] > iArr[j + 1]) {
        // Swap if the current item is greater than the next
        let temp = iArr[j];
        iArr[j] = iArr[j + 1];
        iArr[j + 1] = temp;
      }
    }
  }
  console.log(iArr);
}

// Example:
sortArray(iArr); // Output: [11, 12, 22, 25, 34, 64, 90]
