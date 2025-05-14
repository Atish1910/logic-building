// take array are return its Manimum Number : 83
iValue = [1001,314,112,716,1141];

function maxNum(iNo){
    imax = 0;
    iMin = iNo[0];
    iNo.map((num) =>{
        // 0 < 101
        // 101 < 34 // false
        // 101 < 12 // false
        // 101 < 76 // false
        // 101 < 41 // false
        if(imax < num){
            // imax = 101;
            imax = num;
        }
        // 101 > 101
        // 101 > 34
        // 34 > 112 // false
        // 34 > 716 // false
        // 34 > 1141 // false
        if(iMin > num){
            // iMin = 34;
            iMin = num;
        }
    })


    console.log(`Highest Number is : ${imax}`);
    console.log(`Smallest Number is : ${iMin}`);
}
maxNum(iValue);

