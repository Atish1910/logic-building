let promise = new Promise(function (resolve, reject) {
  const x = "Saikrishna";
  const y = "Saikrishna";
  if (x === y) {
    resolve("Valid");
  } else {
    let err = new Error("Invalid");
    reject(err);
  }
});
promise
  .then((response) => {
    console.log("success", response);
  })
  .catch((err) => {
    console.log("failed", err);
  });
