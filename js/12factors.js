// foctors of given number
let iNo2 = 1000;

function factorsApproch1(num){
    console.log(` Fctors of ${iNo2} Time complexity : O(N)`);
    iCnt = 1
    for(iCnt = 0; iCnt <= num; iCnt++){
        if([num % iCnt] == 0){
            console.log(`${iCnt}`);
        }
    }
}
factorsApproch1(iNo2);


// Approch 2
// factors of 100 Time complexity : O(N)/ 2 : 
iNo = 1000;
function factors(num){
    console.log(` Fctors of ${iNo} Time complexity : O(N)/ 2 :`);
    for(iCnt = 0; iCnt<= (iNo / 2); iCnt++){
        if([num % iCnt] == 0){
            
            console.log(`${iCnt}`);
        }
    }
}

factors(iNo);