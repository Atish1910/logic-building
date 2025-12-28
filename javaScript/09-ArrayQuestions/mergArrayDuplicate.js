// 7️⃣ Merge two arrays and remove duplicates
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

function display(arr1, arr2){
    iNewArr = [...arr1 , ...arr2];
    console.log(iNewArr);

    let iUniqueArr = [];
    for(let i = 0; i < iNewArr.length ; i++){
        let isAdded = false;

        for(let j = 0; j < iUniqueArr.length; j++){
            if(iNewArr[i] == iUniqueArr[j]){
                isAdded = true;
                break;
            }
        }

        if(!isAdded){
            iUniqueArr.push(iNewArr[i]);
        }
    }
    console.log(iUniqueArr);
}

display(arr1, arr2)