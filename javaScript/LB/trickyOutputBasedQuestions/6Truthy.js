function check(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

check(0);        // Falsy
check("test");   // Truthy
check("");       // Falsy
check([]);       // Truthy
check(null);     // Falsy
