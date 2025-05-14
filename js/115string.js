// String Reverse (Atish -> hsitA) => 187

iStr = "lwodalg ni repoleved bew a sa gnikrow elbmak kayaniv hsita";

function strRevX(iStr){
    
    i = iStr.length-1;
    iStrRev = ""
    while(i >= 0){
        iStrRev = iStrRev + iStr[i];
        i--;
    }
    console.log(iStrRev);
}
strRevX(iStr);


