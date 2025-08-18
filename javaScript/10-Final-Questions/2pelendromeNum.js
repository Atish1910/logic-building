// markram

iNum = 123454321;

function isPelendrome(iNo){

    iDigit = 0;
    iRev = "";
    while(iNo > 0){
        iDigit = iNo % 10;
        iNo = (iNo / 10) | 0;
        iRev = iRev + iDigit;
    }
    console.log(`reverse number is ${iRev}`);
    if(iRev == iNum){
        console.log(` ${iRev} : is Pelendrome`);
    }else{
        console.log(` ${iRev} : NOT is Pelendrome`);
    }
}
isPelendrome(iNum);