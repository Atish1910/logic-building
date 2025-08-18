document.getElementById("btn5").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error to fetch data", err);
    });
});
