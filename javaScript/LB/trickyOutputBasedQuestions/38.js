function doSomething(x, y) {
  arguments[1] = 15;
  return x + y;
}
console.log(doSomething(5, 5));

// arguments[1] == y = 15
// op 20
