// : Take a number (12345) and returns its digits ->1 2 3 4 5

const iNum = 345678;

function display(iNo) {
  while (iNo > 0) {
    let iDigit = iNo % 10;
    console.log(iDigit);
    iNo = (iNo / 10) | 0;
  }
}
display(iNum);
console.log("saparate digit with anather method");
function funstiondisplayTwo(num) {
  let iStr = num.toString();
  for (let i = 0; i <= iStr.length - 1; i++) {
    console.log(iStr[i]);
  }
}
funstiondisplayTwo(iNum);
