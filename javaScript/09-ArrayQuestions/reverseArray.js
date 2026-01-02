// 6️⃣ Reverse an array without using reverse()
const arr = [1, 2, 3, 4, 5];

function display(arr){
    let iRev = [];
    for(let i = arr.length -1 ; i >= 0; i--){
        iRev.push(arr[i]);
    }
    console.log(iRev);
}

display(arr)