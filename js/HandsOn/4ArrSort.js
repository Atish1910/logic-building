// Sort array

Arr = [1, 4, 5, 62, 3, 4, 77, 1, 22, 3, 4, 5];

function sortArray(Arr) {
  for (i = 0; i < Arr.length; i++) {
    let iMin = i;
    for (j = i + 1; j < Arr.length; j++) {
      if (Arr[j] < a[i]) {
        iMin = j;
      }
    }
    let temp = Arr[i];
    Arr[i] = a[Min];
    a[Min] = temp;
  }
  console.log(Arr);
}
sortArray(Arr);
