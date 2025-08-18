// take integer as parameter and return following string 
// ip 10
// op-> zero
// ip 5
// -> Five
// divisible by 2
// -> Even
// not divisible by 2
// -> odd number

iValue = 97;
function numPirity(iNo){
    
    if(iNo % 10 == 0){
        console.log("Zero");
    }else if(iNo % 5 == 0){
        console.log("Five");
    }else if(iNo % 2 == 0){
        console.log("Even");
    }else if(iNo % 2 != 0){
        console.log("Odd");
    }
}

numPirity(iValue);