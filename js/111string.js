
// take string and save only capital letter in 1 veriable and print that veriable (ATisH -> ATH) => 183

iStr = "kjahdsTEJUnakli Idoni jsdahLOVEjhdksjha dlfksjYdsOdsU";

function strEdit(iStr){
    i = 0;
    iStrNew = "";
    while(iStr[i] != undefined){
        
        if(iStr[i] >= "A" && iStr[i] <= "Z"){
            iStrNew = iStrNew + iStr[i];
        }else if(iStr[i] == " "){
            
            iStrNew = iStrNew + "-";
        }
        i++;
    }

    console.log(iStrNew);
}

strEdit(iStr);