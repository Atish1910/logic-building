
// print char & num  => 105

let iNum = 8;

function displayCHarNum(iNo){

    for(i = 1; i<= iNo; i++){
        let char = String.fromCharCode(96 + i);
        console.log(`${i} :\t ${char}`);
    }
}

displayCHarNum(iNum);