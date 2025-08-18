function doSomething(x, y) {
  arguments[1] = 15;
  return x + y;
}
console.log(doSomething(5, 5));

// In non-strict mode, the arguments object is linked to the function's parameters. That means:
// arguments[1] == y = 15
// op 20
