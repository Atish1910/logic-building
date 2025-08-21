// 5. Count the Occurrences of Each Character
let iStr = "aabb";

function Display(iStr){
    isCounted = {};
    for(i = 0; i < iStr.length; i++){
        if(!isCounted[iStr[i]]){
            iCnt = 0;
            for(j = 0; j < iStr.length; j++){
                if(iStr[i] == iStr[j]){
                    iCnt++
                }
            }
            console.log(`${iStr[i]} count for : ${iCnt}`);
            isCounted[iStr[i]] = true; // mark as counted
        }
    }
}
Display(iStr)
// console.log(`I Row : ${i} = ${iStr[i]}`);
// console.log(`I Col : ${i} :  ${j} = ${iStr[j]}`);