// 1️⃣ Remove duplicate elements from an array
const iArr001 = [1, 2, 2, 3, 4, 4];

console.log("Approch 1 : WIthout inbuilt")
function removeDuplicate(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false;

        for(let j = 0; j < newArr.length; j++){
            if(arr[i] == newArr[j]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            newArr.push(arr[i]);
        }
        
    }
    console.log("Sort array withOut inbuilt operator : "+ newArr);
}

removeDuplicate(iArr001);

////////////////////////////////////////==========================////////////////////////////////////

// peoblem solve with inbuilt opeatpor;

console.log("Approch 2 : inbuilt (Set)")

let uniqueArr = [...new Set(arr)];
console.log("Sort array with inbuilt operator : " + uniqueArr);
console.log("")

////////////////////////////////////////==========================////////////////////////////////////


console.log("Approch 2 : inbuilt (filter + indexOf )");
const iArr3 = [1,2,3,4,5,6,7,2,3,4,5,6,7,2,3,4,5,6,7,2,3,4,5,6,7];

const iUnique3 = iArr3.filter((value, index) => {
    return iArr3.indexOf(value) === index;
});
console.log(iUnique3);

////////////////////////////////////////==========================////////////////////////////////////

console.log("Approch 4 : inbuilt (forEach + includes )");
const iArr4 = [1,9,0,5,6,7,2,3,4,5,6,7];

const iUnique4 = [];

    iArr4.forEach((val) => {
        if(!iUnique4.includes(val)){
            iUnique4.push(val);
        }
    })
    
    console.log(iUnique4);

////////////////////////////////////////==========================////////////////////////////////////