// factorials  Approch 2
// Factorial = 5 * 4 * 3 * 2 * 1   = 120

function factorials(iValue){
    //filter updator
    if(iValue < 0){
        iValue = -iValue;
    }
    let iMult = 1;
    for(i= iValue; i > 0; i--){
        iMult = i * iMult;

    }
    return iMult;
}

const iNo = -5;
iRet = factorials(iNo);
console.log(`factorials of ${iNo} is : ${iRet}`);
