// find perfect numbers  28 

let iNo = 496;
iSum = 0;
function sumFactors(iValue){
    for(i = 0; i < iNo; i++){
        if([iValue % i] == 0){
            iSum = iSum + i;
        }
    }
    console.log(iSum);
}
sumFactors(iNo);

function isPerfect(iSum){
    return iSum == iNo;
}
isPerfect(iSum);


const perfect = isPerfect(iSum);

if(perfect){
    console.log(`  ${iNo} is perfect Number`)
}
else{
    console.log(`${iNo} is Not perfect Number`)
}



// 13 find a perfect Number : 28is perfect number 

console.log("This is my second approch");
iNo = 987;
iSum = 0;
function factors(iValue){
    for(i = 1; i < iValue; i++){
        if(iValue % i == 0){
            console.log(i);
            iSum = iSum +i;
        }
    }
    console.log("Summation of factors is "+ iSum);
    if(iSum == iNo){
        return true
    }
    else{
        return false;
    }
}
iRet = factors(iNo);
if(iRet){
    console.log(`${iNo} is Perfect Number`)
}
else{
    console.log(`${iNo} is Not Perfect Number`)
}
