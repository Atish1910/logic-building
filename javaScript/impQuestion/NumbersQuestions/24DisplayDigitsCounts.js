
function displyDigitsCount(iNo){
    iDigit = 0;
    i = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        console.log(iDigit);
        iNo = (iNo / 10) | 0;
        i++;
    }
    console.log("Counting Digits: " +i);
}
console.log(displyDigitsCount(21332));