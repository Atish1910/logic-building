
// CheckPallindrome or not (IP: 123321) 65

iValue = 12321;
function CheckPallindrome(iNo){
    iDigit = 0;
    iReverse = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        iNo = (iNo / 10) | 0;

        iReverse = (iReverse * 10) + iDigit;
    }
    console.log(`Reverse Number is :  ${iReverse}`);
}
iRet = CheckPallindrome(iValue);
if(iReverse == iValue){
    console.log('the number is palendrome');
}
else{
    console.log('the number is NOT palendrome');
}