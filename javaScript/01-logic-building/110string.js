// Convert Capital to small & Small To capital : AtisH -> aTISh => 181

iStr = "aTISH vINAYAK kAMBLE wORKING aS wEB dEVELOPER iN gLAD oWL pVT lTD";


function strEdit(iStr){
    i = 0;
    iStrNew = ""
    while(iStr[i] != undefined){
        
        iChar = iStr.charCodeAt(i);

        if(iChar >= 65 && iChar <= 90){
            iStrNew = iStrNew + String.fromCharCode(iChar + 32);
        }else if(iStr[i] == " "){
            iStrNew = iStrNew + "-";
        }

        else{
            iStrNew = iStrNew + String.fromCharCode(iChar -32);
        }
        i++;
    }
    console.log(iStrNew);
}
strEdit(iStr);