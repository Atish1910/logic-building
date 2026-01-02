// 1️⃣3️⃣ Remove falsy values from an array
const arr = [0, 1, false, 2, '', 3, null, undefined];

function display(arr){
    iNewArr = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i] != 0){
            iNewArr[iNewArr.length] = arr[i];
        }
    }
    console.log(iNewArr);
}
display(arr)