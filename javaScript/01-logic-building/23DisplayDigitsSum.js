iNo = 1269477;

function DisplayDigitsSum(iValue){
    iDigit = 0;
    iSum = 0;
    for(; iValue != 0; iValue = (iValue / 10) | 0 ){
        iDigit = iValue % 10;
        console.log(iDigit);
        iSum = iSum + iDigit;
    }
    console.log("Sum of all digits are : " + iSum);
}
iRet = DisplayDigitsSum(iNo);
console.log(iRet);