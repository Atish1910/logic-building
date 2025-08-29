let iStr = [1, 2, 3, 2, 4, 1, 5, 3];
function Display(arr) {
  let uniqueArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let exists = false;

    for (let j = 0; j < index; j++) {
      if (arr[i] === uniqueArr[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      uniqueArr[index] = arr[i];
      index++;
    }
  }

  console.log(uniqueArr);
}

Display(iStr);
// [1, 2, 3, 4, 5]
