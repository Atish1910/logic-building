// create a 1 promise of condtion is true then is should resolve
// create a promise with setTimeOut it should resolve after 2sec;

//=================================================================================================
// create a 1 promise of condtion is true then is should resolve
const isSuccess01 = true;
const myPromise = new Promise((res, rej) => {
  if (isSuccess01) {
    res("yes promise is resolve");
  } else {
    rej("promise is rejected");
  }
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//=================================================================================================
// create a promise with setTimeOut it should resolve after 2sec;

const myPromise02 = new Promise((res, rej) => {
  setTimeout(() => {
    res("yes api call successfull");
  }, 5000);
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
