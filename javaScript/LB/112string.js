
// take string and save only capital letter in 1 veriable and print that veriable (ATisH -> ATH) => 183

iStr = "kjahdsTEJUnakli Idoni jsdahLOVEjhdksjha dlfksjYdsOdsU";

function strEdit(iStr){
    i = 0;
    iStrNew = "";
    while(iStr[i] != undefined){
        iChar = iStr.charCodeAt(i);
        
        if(iChar >= 65 && iChar <= 90){
            iStrNew = iStrNew + iStr[i];
        }else if(iStr[i] == " "){
            
            iStrNew = iStrNew + "-";
        }
        i++;
    }

    console.log(iStrNew);
}

strEdit(iStr);