//  4. Event Loop / Async

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
},0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Start
// End
// Promise
// Timeout