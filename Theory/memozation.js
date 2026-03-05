// how to memoize the function

function memoize() {
  iResult = {};
  // const iResult = {
  //   n: false,
  // };
  return function (n) {
    if (iResult.n) {
      return console.log("here is cache result...", iResult.n);
    }
    iResult.n = n * n;
    return console.log("here is calculated result...", iResult.n);
  };
}
const square = memoize();
square(10);
square(10);
square(10);
square(10);
square(10);
square(10);
