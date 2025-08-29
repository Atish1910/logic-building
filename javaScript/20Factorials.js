// Write a JavaScript function that takes an array of numbers  and returns a new array with only the even numbers.
iArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Display(iArr) {
  iEvenArr = [];
  i = 0;
  iArr.map((num) => {
    if (num % 2 == 0) {
      iEvenArr[i] = num;
      i++;
    }
  });
  console.log(iEvenArr);
}

Display(iArr);

////////////////////////////////////////////////////////////////////////////////////////
