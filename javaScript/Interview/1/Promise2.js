const API = "https://jsonplaceholder.typicode.com/users";

fetch(API)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to do api call");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
