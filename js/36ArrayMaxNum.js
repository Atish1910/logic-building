// take array are return its Maximum Number : 83
iValue = [10,34,12,76,41];

function maxNum(iNo){
    iMax = 0;
    iNo.map((num) =>{
        // 0 < 10
        // 10 < 34
        // 34 < 12 // falase
        // 34 < 76
        // 76 < 41 // false
        if(iMax < num){
            // iMax = 10;
            // iMax = 34;
            // iMax = 76;
            iMax = num;
        }
    })
    console.log('max number from array iis : '+iMax);
}
maxNum(iValue);