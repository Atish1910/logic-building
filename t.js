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