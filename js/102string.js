// take a string and count its Blank spaces from string Atish Vinayak Kamble : 3 Blank spaces => 166 

iStr = "Atis h Vin ay ak K am bl e";

function strlenBlank(iStr){
    i = 0;
    iCnt = 0;
    while(iStr[i] != undefined){
        i++;
        console.log(iStr[i]);

        if(iStr[i] == " "){
            iCnt++;
        }
    }
    console.log(`${iCnt} blank spaces in Above string`);
}
strlenBlank(iStr);