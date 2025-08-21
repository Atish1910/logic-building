// =======================

// =======================
function promiseWithThenCatch() {
  let promise = new Promise((resolve, reject) => {
    let success = true; // change to false to test reject
    setTimeout(() => {
      if (success) {
        resolve("✅ then/catch: Data fetched successfully!");
      } else {
        reject("❌ then/catch: Error fetching data!");
      }
    }, 1000);
  });

  promise
    .then(result => console.log(result))   // success case
    .catch(error => console.log(error));   // error case
}

// Run example 1
promiseWithThenCatch();


// =======================
// 2. Promise with async/await (success)
// =======================
async function promiseWithAsyncAwait() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("✅ async/await: Data fetched successfully!"), 1000);
  });

  let result = await promise; // waits until resolved
  console.log(result);
}

// Run example 2
promiseWithAsyncAwait();


// =======================
// 3. Promise with async/await and try/catch (failure)
// =======================
async function promiseWithTryCatch() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ async/await + try/catch: Failed to fetch data!"), 1000);
  });

  try {
    let result = await promise; // will throw error
    console.log(result);
  } catch (error) {
    console.log(error); // error handled here
  }
}

// Run example 3
promiseWithTryCatch();


// =======================
// 4. Mixed Example: Resolve and Reject handling
// =======================
function mixedPromiseExample(success = true) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("✅ Mixed: Operation successful!");
      } else {
        reject("❌ Mixed: Operation failed!");
      }
    }, 1000);
  });

  // using both then/catch
  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// Run example 4 (you can toggle true/false)
mixedPromiseExample(true);
mixedPromiseExample(false);
