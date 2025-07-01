let resolvePromise = null;
let rejectPromise = null;

const myPromise = new Promise((res, rej) => {
    document.getElementById("myBtn1").addEventListener("click", () => {
        res("promise Resolve");
    })
    document.getElementById("myBtn2").addEventListener("click", () => {
        rej("promise Rejected");
    })
}).then(res => console.log(res)).catch((err) => console.log(err));


// async function myFun() {
//     return "Atishh";
// }
// const res = myFun();
// console.log(res);