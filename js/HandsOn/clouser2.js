function outerFunction() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    displayCount: function () {
      const messgae = "Count : " + count;
      return messgae;
    },
  };
}

const callOuterFunction = outerFunction();

console.log(callOuterFunction.increment());
console.log(callOuterFunction.displayCount());
console.log(callOuterFunction.decrement());
console.log(callOuterFunction.displayCount());
