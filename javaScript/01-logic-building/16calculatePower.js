// 15 take a base number & power calculte power 5^3 ? 625 (2 Approches)-> 32, 33, 34, 35

//Approch 2/////////////////////////////////////////////////
let val1 = -5;
let val2 = -3;
let iResult = 1;

function calcPower(iBase, iPower){
    if(iBase < 0 || iPower < 0){
        iBase = -iBase;
        iPower = -iPower;
        console.log(`You have entered a negative values we converted into +ve `)
    }
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


