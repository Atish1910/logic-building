// MinimumDigit (IP 12345): (OP: 1) : 67

iValue = 541234;
function MinimumDigit(iNo){
    iDigit = 0;
    iMin = 9;
    while(iNo !=0){
        iDigit = iNo % 10; // 4, 3
        iNo = (iNo / 10) | 0; // 54123 ,5412 
        // 9 > 4 
        // 4 > 3 
        // 3 > 2
        // 2 > 1
        // 1 > 2 // false
        // 1 > 4 // false
        // 1 > 5 // false
        if(iMin > iDigit){
            // iMin = 4;
            // iMin = 3;
            // iMin = 2;
            // iMin = 1;
            iMin = iDigit;
        }

        
    } 
    console.log(`Smallest Digit From ${iValue} is : ${iMin}`);
}

MinimumDigit(iValue);