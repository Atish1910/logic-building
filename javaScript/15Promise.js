function fetchData() {
  return new Promise((res, rej) => {
    let success = false;
    setTimeout(() => {
      if (success) {
        res({
          name: "Atish",
          age: 26,
          city: "pune",
        });
      } else {
        rej("Failed To Fetch Api details");
      }
    }, 1500);
  });
}

async function getUser() {
  try {
    let user = await fetchData();
    console.log("Api fetch Successful : ", user);
  } catch (error) {
    console.log("Error : ", error);
  }
}

getUser();
