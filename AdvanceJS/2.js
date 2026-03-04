let n3 = 12345.654;

function display3(n3) {
  let str = n3.toString();

  let parts = str.split(".");
  let whole = parts[0].length;
  let fraction = parts[1] ? parts[1].length : 0;

  console.log({ whole, fraction });
}
display3(n3);
