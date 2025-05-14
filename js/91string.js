// Print ASCII Table Value => 152
// 0 to 9 => 0 to 9 Number


function dsiplayASCI(){
    for(i = 0; i< 127; i++){
        ASCI = String.fromCharCode(17 + i);
        console.log(ASCI);
    }
}

dsiplayASCI();