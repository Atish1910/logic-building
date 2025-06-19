let value = 21;

function isDivisible(num){
    return num % 3 == 0 && num % 5 == 0;
}

const isDivide = isDivisible(value);

if(isDivide){
    console.log(`${value} is divisible by 5 & 3`);
}
else{
    console.log(`${value} is Not divisible by 5 & 3`);
}