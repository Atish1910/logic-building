// : Count Event Digits From Number 1234567 -> 3 = 61

iValue = 123456;
iCntE = 0;

function displayEvenCount(iNo){
    iDigit = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        console.log( "Total Digits Are: " + iDigit);
        iNo = iNo / 10 | 0;

        if(iDigit % 2 == 0){
            iCntE++;
        }
    }
    console.log(` Even Digits ${iCntE}  times`)

}

displayEvenCount(iValue);
