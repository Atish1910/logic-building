// 7. Write a JavaScript function to check if a given number is  prime.

iNo = 11;

function Display(iNo) {
  for (i = 2; i <= iNo / 2; i++) {
    isPrime = null;
    if (iNo % i == 0) {
      isPrime = false;
    } else {
      isPrime = true;
    }
  }
  if (isPrime) {
    console.log(`${iNo} : is Prime Number`);
  } else {
    console.log(`${iNo} : is not Prime Number`);
  }
}
Display(iNo);
