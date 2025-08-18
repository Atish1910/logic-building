// take array are return its Manimum Number : 83
iValue = [101,34,12,76,41];

function minNum(iNo){
    iMin = iNo[0];
    iNo.map((num) =>{
        if(iMin > num){
            iMin = num;
        }
    })
    console.log('min number from array iis : '+iMin);
}
minNum(iValue);