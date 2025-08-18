const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};

const res = obj.sum;
// You're extracting the function sum from the object.
// Now res is just a plain function without context.

console.log(res());
// When you call res()...
// this is no longer bound to obj.
// So this.a and this.b become undefined.
