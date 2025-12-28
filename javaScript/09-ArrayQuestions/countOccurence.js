// 5️⃣ Count the occurrence of each element
const arr = ['a', 'b', 'a', 'c', 'b', 'a'];

function display(arr){
    for(let i = 0; i < arr.length; i++){
        iCnt = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                iCnt++
            }
        }
        console.log(`${arr[i]} : ${iCnt}`);
    }
}

display(arr)