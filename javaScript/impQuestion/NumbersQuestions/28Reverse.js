
// take a Number and Reverse It (ip: 12345)->(o/p: 54321) 63 

let iValue = 1234;
function Reverse(iNo){
    iDigit = 0;
    iReverse = 0;
    while(iNo != 0){
        // iDigit = 1234 % 10;  = 4
        // iDigit = 123 % 10;  = 3
        iDigit = iNo % 10;
        // iNo = (1234 / 10) | 0; = 123
        // iNo = (123 / 10) | 0; = 12
        iNo = (iNo / 10) | 0;

        // iReverse = (0 * 10) + 4; = 4
        // iReverse = (4 * 10) + 3; = 43
        // iReverse = (43 * 10) + 2; = 432
        // iReverse = (432 * 10) + 1; = 4321
        iReverse = (iReverse * 10) + iDigit;
    }
    console.log(` Here is Reversed Value : ${iReverse} ` )
}
Reverse(iValue);