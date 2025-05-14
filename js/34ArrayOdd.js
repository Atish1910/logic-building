// take array are return its Even Number : 76
let iValue = [10,11,12,14,16,15,0];
function getEven(iNo){
    console.log("With For Loop");
    for(i = 0; i< iNo.length; i++){
        if(iNo[i] % 2 != 0){
            console.log(iNo[i]);
        }
    }
}
getEven(iValue);

function getEven1(iNo1){
    console.log("With Map Function");
    iNo1.map((num)=>{
        
        if(num % 2 != 0){
            console.log(num);
        }
    })
}
getEven1(iValue);