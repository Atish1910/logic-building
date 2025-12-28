// 7️⃣ Merge two arrays and remove duplicates
const arr1 = [1, 2, 3,1, 2, 3,1, 2, 3];
const arr2 = [3, 4, 5,5,6,7,8,9,5,3,2,1,3,4,5,6,7,8,90,];

function display(arr1, arr2){
    iResutArr = [];

    // loop for 1st Array
    for(let i = 0; i< arr1.length; i++){
        let iDuplicate = false;

        for(let j = 0; j < iResutArr.length; j++){
            if(arr1[i] == iResutArr[j]){
                iDuplicate = true;
                break;
            }
        }

        if(!iDuplicate){
            iResutArr[iResutArr.length] = arr1[i];
        }

    }

    
    // loop for 2nd Array
    for(let i = 0; i< arr2.length; i++){
        let iDuplicate = false;

        for(let j = 0; j < iResutArr.length; j++){
            if(arr2[i] == iResutArr[j]){
                iDuplicate = true;
                break;
            }
        }

        if(!iDuplicate){
            iResutArr[iResutArr.length] = arr2[i];
        }

    }
    console.log(iResutArr);
}


display(arr1, arr2)



////////////////////////////
// solve above example with inbuilt operator

const iArr1 = [1, 2, 3,1, 2, 3,1, 2, 3];
const iArr2 = [3, 4, 5,5,6,7,8,9,5,3,2,1,3,4,5,6,7,8,90,];

let iUniqueArr = [...new Set([...iArr1, ...iArr2])];
console.log(`sort array withinbuilt array : ${iUniqueArr}`);