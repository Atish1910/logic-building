// MinimumDigit (IP 12345): (OP: 1) : 67

iValue = 5419234;
function MinimumDigit(iNo){
    iDigit = 0;
    iMax = 0;
    while(iNo !=0){
        iDigit = iNo % 10; // 4, 3
        iNo = (iNo / 10) | 0; // 54123 ,5412
        // 0 < 4
        // 4 < 3 // false
        // 4 < 2 // false
        // 4 < 1 // false
        // 4 < 4 // false
        // 4 < 5 
        if(iMax < iDigit){
            // iMin = 4;
            // iMin = 5;
            iMax = iDigit;
        }

        
    } 
    console.log(`Largest Digit From ${iValue} is : ${iMax}`);
}

MinimumDigit(iValue);