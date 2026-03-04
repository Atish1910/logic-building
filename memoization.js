const iObj = {};

function display(a, b) {
  let result = a + b + a * b + a - b;
  console.log(result);
  return result;
}

function memoize(a, b) {
  let key = a + ":" + b;
  if (!iObj[key]) {
    const result = display(a, b);

    iObj[key] = result;
    return result;
  } else {
    console.log("result from catche", iObj[key]);
    return iObj[key];
  }
}
