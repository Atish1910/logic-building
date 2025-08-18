// Print ASCII Table Value => 152
// 0 to 9 => 0 to 9 Number
// 65 to 91 => A to Z 
// 97 to 122 => a to z 


function dsiplayASCI(){
    for(i = 0; i< 127; i++){
        ASCI = String.fromCharCode(17 + i);
        console.log(ASCI);
    }
}

dsiplayASCI();