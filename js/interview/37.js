// make below code op 3

const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};

const res = obj.sum.bind(obj);
console.log(res(obj));

// NaN
// ========================================================================================================================================================
