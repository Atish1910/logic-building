// 15 take a base number & power calculte power 5^3 ? 625 (2 Approches)-> 32, 33, 34, 35

//Approch 1/////////////////////////////////////////////////
let val1 = 8;
let val2 = 5;
let iResult = 1;

function calcPower(iBase, iPower){
    for(i = 1; i<= iPower; i++){
        
        // each loop iteraion
        //  iResult = 1 * 5 = 5;
        //  iResult = 5 * 5 = 25;
        //  iResult = 25 * 5 = 125 ;
        iResult = iResult * iBase;
    }
    console.log(iResult);
}
const iRet = calcPower(val1, val2);

