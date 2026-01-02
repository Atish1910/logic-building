    // 1️⃣4️⃣ Flatten a nested array (1 level) 
const arr = [1, [2, 3], [4, 5]];

function display(arr){
    let iResult = [];

    for(let i = 0; i < arr.length; i++){

        if(typeof arr[i] == "object"){
            for(let j = 0; j < arr[i].length; j++){
                iResult[iResult.length] = arr[i][j];
            }
        }else{
            iResult[iResult.length] = arr[i];
        }
    }
    console.log(iResult);
}
display(arr)