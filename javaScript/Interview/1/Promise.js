const myPromise = new Promise((resolve, reject) => {
  console.log("promise is still pending");
  document.getElementById("btn1").addEventListener("click", () => {
    console.log(resolve + "Promise is Resolve");
  });

  document.getElementById("btn2").addEventListener("click", () => {
    console.log(reject + "Promise is reject");
  });
});
