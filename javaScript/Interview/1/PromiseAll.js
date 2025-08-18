const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve ,"Hello", 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve, "Atish", 1500)); 
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve, "Kamble", 2000));

Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})