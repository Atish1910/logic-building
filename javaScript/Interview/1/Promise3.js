async function fetchUsers() {
  const button = document.getElementsByClassName("btn3");
  const API = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(API);
    const data = response.json();
    console.log("Users (with async/await)", data);
  } catch (error) {
    console.log(error);
  }
}
