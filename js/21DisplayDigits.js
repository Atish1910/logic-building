function DisplayDigits(iNo) {
    let iDigit = 0;
    // let iDigit = 12.6;

    while (iNo != 0) {
        // Extract last digit
        // iDigit = 126 % 10 = 6; // 1ST ITERATION
        // iDigit = 12 % 10 = 2; // 2nd ITERATION
        // iDigit = 1 % 10 = 1; // 3rd ITERATION
        iDigit = iNo % 10;
        console.log(iDigit);
        
        // Remove last digit
        // iNo = 12
        // iNo = 1
        // iNo = 0
        iNo = (iNo / 10 )| 0;  // Using bitwise OR to simulate integer division
    }
}

// Hardcoded input
let iValue = 126;
console.log("Number:", iValue);
DisplayDigits(iValue);
