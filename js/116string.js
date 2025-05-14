// String Reverse (Atish -> hsitA) => 187

iStr = "lwodalg ni repoleved bew a sa gnikrow elbmak kayaniv hsita";

function strRevX(iStr){
    
    iStrRev = ""
    for(i = iStr.length-1; i>= 0; i--){
        iStrRev = iStrRev + iStr[i];
    }
    console.log(iStrRev);

}
strRevX(iStr);


