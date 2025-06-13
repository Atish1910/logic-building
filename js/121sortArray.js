// string sorting

let Arr = [8, 1, 4, 5, 77, 12, 33, 44444];

function sortArray(Arr) {
  for (i = 0; i < Arr.length; i++) {
    for (j = 0; j < Arr.length; j++) {
      if (Arr[j] > Arr[j + 1]) {
        let temp = Arr[j];
        Arr[j] = Arr[j + 1];
        Arr[j + 1] = temp;
      }
    }
  }
  console.log(Arr);
}

sortArray(Arr);
