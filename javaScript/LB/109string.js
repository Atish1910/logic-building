// Convert Capital String To lower Strig : ATISH -> atish => 179

iStr = "ATISH kamble Working As Developer IN GLADowl";

function istrSmall(iStr){
    let i = 0;
    let iStrNew = "";
    while(iStr[i] != undefined){
        let iChar = iStr.charCodeAt(i);
        if(iChar >= 65 && iChar <= 90){
            iStrNew = iStrNew + String.fromCharCode(iChar + 32);
        }
        else{
            iStrNew += iStr[i];
        }
        i++;
    }
    console.log(`Here is Original STring${iStr}`);
    console.log(`Convetted Sting : ${iStrNew}`);
}

istrSmall(iStr);