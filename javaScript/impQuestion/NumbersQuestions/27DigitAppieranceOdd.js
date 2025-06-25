// : Count Odd Digits From Number 1234567 -> 3 = 61
iValue = 123456;
function findOddDigits(iNo){
    iDigit = 0;
    iCntOdd = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        iNo = (iNo / 10) | 0;
        
        if(iDigit % 2 != 0){
            console.log(iDigit);
            iCntOdd++
        }
    }
    console.log("Odd Number present : " + iCntOdd + " Times");
}
findOddDigits(iValue);