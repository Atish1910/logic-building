    let iNo = 8;

    function checkPrime(iValue){
        if(iNo < 2){
            return false;
        }
        for(i = 2; i<= iValue; i++ ){
            if(iValue % i === 0){
                return true;
            }
            else{
                return false;
            }
        }
    }
    iRet = checkPrime(iNo);
    if(iRet){
        console.log( iNo + " is Not a Prime Number")
    }
    else{
        console.log( iNo + " Prime Number")
    }