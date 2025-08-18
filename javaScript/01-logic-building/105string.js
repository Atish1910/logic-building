// take a string and find Last Occurance of its Specific Letter (a) from string ztishVinayakKamble : 12th index (a) => 174

iStr = "kdsjfhkhsdfjkhdfsbmbksjdfhsdkjfhdskjhsdkjh";
function lastOccuranceInString(iStr){
    iPos = 0;
    iCnt = 0
    for(i = 0; iStr[i] != undefined; i++){
        if(iStr[i] == "k"){
            iPos = i;
            iCnt++;
        }
    }
    return iPos;
}

iRet = lastOccuranceInString(iStr);

if(iRet == 0){
    console.log(`k is Not found`);
}
else{
    console.log(`${iCnt} time k is Found, & last occurance is at ${iPos} index`);
}