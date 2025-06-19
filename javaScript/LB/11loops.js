// Display 1 to 5

let iNo = 5;
for(i = 0; i <iNo; i++){
    console.log(i);
}

// Display with Filter
let iNo2 = -5;
if(iNo2 < 0){
    console.log("Enter Only Positive number");
    for(iCnt = 0; iCnt < iNo2; iCnt++){
            console.log(iCnt);
    }
}


// Display with Filter
let iNo3 = -5;
if(iNo3 < 0){
    iNo3 = -iNo3;
    console.log("Your Value is update with " + iNo3);
    for(iCnt = 0; iCnt < iNo3; iCnt++){
            console.log(iCnt);
    }
}