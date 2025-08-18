// 6 Write a program which checks whether number is even or odd. 

let value = 12;

function checkEvenOdd(num){
    return num % 2 === 0;
}

const isEven = checkEvenOdd(value);
if(isEven){
    console.log(`${value} is a Even Number`);
} 
else{
    console.log(`${value} is a Odd Number`);
}