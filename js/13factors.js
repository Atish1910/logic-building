// factors & Summation of factors Approch1

let iNo = 100;
let iSum = 0;
function sumFactors(num){
    for(i = 0; i <= iNo; i++){
        if([num % i] == 0){
            console.log(i);
            iSum = iSum + i;
        }
    }
    console.log(`Summation of factors is :  ${iSum}`);
}
sumFactors(iNo)

// Approch2 negative value updator

let iNo2 = -100;
let iSum2 = 0;
function sumFactors2(num2){
    if(iNo2){
        iNo2 = -iNo2;
        console.log("Your Value is update with +ve ")
    }
    for(i = 0; i <= iNo2; i++){
        if([num2 % i] == 0){
            console.log(i);
            iSum2 = iSum2 + i;
        }
    }
    console.log(`Summation of factors is :  ${iSum2}`);
}
sumFactors2(iNo2)

// Approch 3 time complexity N/2

let iNo3 = -100;
let iSum3 = 0;
function sumFactors3(num3){
    if(iNo3){
        iNo3 = -iNo3;
        console.log("Your Value is update with +ve ")
    }
    for(i = 0; i <= (iNo3/ 2); i++){
        if([num3 % i] == 0){
            console.log(i);
            iSum3 = iSum3 + i;
        }
    }
    console.log(`Summation of factors is :  ${iSum3}`);
}
sumFactors3(iNo3)