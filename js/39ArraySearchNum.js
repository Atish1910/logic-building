// Take array and search digit is presnet in array or not  : 88
let iValue = [12,14,12, 16,18,19,10,144];
iSearch = 12;
iCnt = 0;
i = 0

function searchNum(iNo){
    iNo.map((num) =>{
        if(iSearch == num){
            iCnt++;
            
        }
    })
    console.log(`Times : ${iCnt}`);
    if(iCnt > 0){
        return true;
    }
    else{
        return false
    }
}

iRet = searchNum(iValue);
if(iRet == true){
    console.log(`Yes ${iSearch} is Present in array`)
}
else{
    console.log(`Yes ${iSearch} is Not  Present in array`)
}