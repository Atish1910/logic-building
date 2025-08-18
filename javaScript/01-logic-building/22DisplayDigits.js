iNo = 1269477;

function DisplayDigits(iValue){
    iDigit = 0;
    iSum = 0;
    for(; iValue != 0; iValue = (iValue / 10) | 0 ){
        iDigit = iValue % 10;
        console.log(iDigit);
    }
}
iRet = DisplayDigits(iNo);
console.log(iRet);