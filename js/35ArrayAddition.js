// take array are return its addition : 83
iValue = [10,34,12,76,41];
iSum1 = 0;
iSum = 0;

function addArray(iNum){
    for(i =0; i< iNum.length; i++ ){
        iSum1 = iSum1 + iNum[i];
    }
    console.log(`Summation of array with for Loop is  : ${iSum1}`);
}
addArray(iValue);

function addition(iNo){
    iNo.map((num) =>{
        iSum = iSum + num;
    })
    console.log(`Summation of array is : ${iSum}`);
}
addition(iValue);