<<<<<<< HEAD
const iNum = [2, 3, 4, 5, 6, 3, 2345, 67, 8, 9];

iMax = -Infinity;
iMax2 = -Infinity;
for (let i = 0; i < iNum.length; i++) {
  if (iNum[i] > iMax) {
    iMax2 = iMax;

    iMax = iNum[i];
  } else if (iNum[i] > iMax2 && iNum[i] != iMax) {
    iMax2 = iNum[i];
  }
}
console.log(iMax2);
=======
// 1️⃣ Remove duplicate elements from an array
let iArr = [10,11,12,10,11,12,10,11,12,10,11,12,10,11,12];

function display(iArr){
    let iQniqueArr = []
    for(let i = 0; i < iArr.length; i++){
        let isDuplicate = false;

        for(let j = 0; j <= iQniqueArr.length; j++){
            if(iArr[i] == iQniqueArr[j]){
                isDuplicate = true;
            }
        }

        if(!isDuplicate){
            iQniqueArr.push(iArr[i]);
        }

    }
    console.log(iQniqueArr);
}
display(iArr)
>>>>>>> d20cc33bc3ded13385390a89074515f679169211
