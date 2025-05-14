// Replace blank Space with hyphen : At is h -> At_is_h => 176

iStr = "atish vinayak kamble working as a web developer in gladowl";

function strReplace(iStr){
    i = 0;
    iStrNew = ""; 
    while(iStr[i] != undefined){
        if(iStr[i] == " "){
            iStrNew = iStrNew + "_";
        }else{
            iStrNew = iStrNew + iStr[i];
        }
        i++;
    }
    console.log(iStrNew);
}
strReplace(iStr);