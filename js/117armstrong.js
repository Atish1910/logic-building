// -> Chcek where the number is Armstrong number or not (true or false);

iNo = 153;
function Armstrong(iNo){
    iTemp = iNo;
    iCount = 0;
    // count digits
    while(iTemp != 0){
        iCount++;
        iTemp = (iTemp / 10) | 0 ;
    }
    console.log("number of digits : " + iCount);

    iCnt = 0;
    iDigit = 0;
    iPower = iCount;
    iMult = 1;
    iSum = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        iNo = (iNo / 10) | 0;
        iMult = iDigit ** iPower;
        iSum = iSum + iMult;
    }
    return iSum;
    
}
iRet = Armstrong(iNo);

if(iSum == iNo){
    console.log(`it is ArmSTrong number Summation of above number is : ${iSum} == input from user ${iNo}`);
}else{
    console.log(`it is Not ArmSTrong number Summation of above number is : ${iSum} == input from user ${iNo}`);
}
