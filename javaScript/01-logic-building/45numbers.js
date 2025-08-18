// print 1 2 3 4 5 4 3 2 1  => 108

let iNo = 5;

function DisplayNum(iNo){
    for(i = 1; i<= iNo; i++){
        console.log(i + '\t');
    }
    for(i = iNo; i >= 1; i--){
        console.log(i + '\t');
    }
}

DisplayNum(iNo)