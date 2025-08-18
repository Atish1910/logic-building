function outerFunction() {
  let outerVar = "Hii i am Outer Vaeiable";

  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}

const callOuterFunction = outerFunction();

callOuterFunction();
