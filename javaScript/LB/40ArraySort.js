function sortArray(arr) {
  let n = arr.length -1;

  for (let i = 0; i < n; i++) {
    // Compare each pair of elements
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap if the current item is greater than the next
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example:
let numbers = [64, 34, 25, 12, 22, 11, 90];
let sorted = sortArray(numbers);
console.log(sorted); // Output: [11, 12, 22, 25, 34, 64, 90]
