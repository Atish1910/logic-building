
// print table of 4   => 106

let iValue = 10;
iMult = 1;
function iTable(iNo){
    for(i = 1; i <= iNo; i++){
        iMult = 4 * i;
        console.log(iMult);
    }
}
iTable(iValue);