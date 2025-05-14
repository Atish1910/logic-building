// : Take a number (12345) and give digit(4) it is present is number or not? -> = 54
iValue = 88888878;
iFind = 8;
function checkDigitAppirance(iNo){
    iCnt = 0;
    iCntF = 0;
    iDigit = 0;
    iSum = 0;
    while(iNo != 0){    
        iDigit = iNo % 10;
        console.log(iDigit);
        iNo = iNo / 10 | 0;
        iSum = iSum + iDigit; 
        iCnt++;
        if(iDigit == iFind){
            iCntF++
        }
    }
    console.log(" Total Digits :  " +iCnt);
    console.log(" Total Digits Summation :  " +iSum);
    if(iDigit == iFind){
        return true;
    }
    else{
        return false;
    }
}

iResult = checkDigitAppirance(iValue);
if(iResult){
    console.log(`${iFind} : is Presend in -> ${iValue}` );
    console.log(`${iFind} : is Presend ${iCntF} times ` );
}
else{
    console.log(`${iFind} : is Not Presend in -> ${iValue}` );
}