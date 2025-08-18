// Search the number is present in array or not & which Index


function SearchFirstOccurrence(iArr, iLength, iSearch){
    let index = -1;
    for(i = 0; i< iLength; i++){

        if(iArr[i] === iSearch){
            index = i;
            break;
        }
    }
    return index;
}
let iArr = [14,12, 16,18,19,10,144];
iLength = iArr.length;
num = 12;

iRet = SearchFirstOccurrence(iArr, iLength, num);
if(iRet == -1){
    console.log(`No ${num} is Not Present at ${iRet}`);
}
else{
    console.log(`yes ${num} is Present at ${iRet}`);
}