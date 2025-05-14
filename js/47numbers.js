
// print -5 , -4, -3, -2, -1 0 1 2 3 4 5  => 112;

iNo = 5;

function DisplayNum(iNo){
    for(i = -iNo; i<= iNo; i++){
        console.log(i);
    }
}
DisplayNum(iNo);