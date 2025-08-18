const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        const randomNum = Math.floor(Math.random() * 10); // 0–9
        
        if(randomNum > 5) {
            resolve(`Success Random number is ${randomNum} `);
        }else{
            reject(`Reject random num is ${randomNum}`);
        }

    }, 2000)
});


myPromise.then(result => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

