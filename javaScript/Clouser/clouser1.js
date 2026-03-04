// ======================================================
function outerFunction() {
  let count1 = 10;
  function innerFunction() {
    console.log(count1);
  }
  innerFunction();
}
outerFunction();

// ======================================================
function outerFunction1() {
  let counter1 = 0;
  function innerFunction1() {
    counter1++;
    console.log(counter1);
  }
  return innerFunction1;
}

let c = outerFunction1(); // outerFunction1() execution finished
c(); // 1
c(); // 2
c(); // 3

// ======================================================

function outerFunction2() {
  let counter2 = 10;
  return {
    innerFunction2() {
      counter2++;
      console.log(counter2);
    },
  };
}
const c1 = outerFunction2();
c1.innerFunction2();
c1.innerFunction2();
c1.innerFunction2();

// ======================================================

// Q1: Create a function that prints 1–5 after 1 second each
function printNumbers() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 500 * i);
  }
}
printNumbers();

// ======================================================
// 2️⃣ Closure + setInterval (VERY COMMON BUG)

function displayInterval() {
  let iCnt = 0;

  let id = setInterval(() => {
    iCnt++;
  }, 2000);

  setTimeout(() => {
    clearInterval(id);
  }, 5000);
}

displayInterval();
