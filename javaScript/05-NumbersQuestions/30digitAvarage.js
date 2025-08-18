// DigitsAverage (IP 12345): (OP: 15/5 = 3) = 66

let iValue = 98754;
function DigitsAverage(iNo){
    iDigit = 0;
    iSum = 0;
    iCnt = 0;
    totalAvg = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        iNo = (iNo / 10) | 0;    
        iCnt++;
        iSum = iSum + iDigit;
    }
    totalAvg = iSum/ iCnt 
    console.log(`Total Digits Are : ${iCnt}`);
    console.log(`Total Sum Are : ${iSum}`);
    console.log(`Total Avarage of ${iValue} is : ${totalAvg}`);

}
DigitsAverage(iValue);