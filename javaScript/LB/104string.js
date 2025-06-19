// take a string and find first Occurance of its Specific Letter (a) from string ztishVinayakKamble : 8th index (a) => 171 

iStr = "tishvinayakmableahkabpao";

function strlen(iStr){
    i = 0;
    iCh = 'a';
    iCnt = 0;
    while(iStr[i] != undefined){
        i++;
        if(iStr[i] == iCh){
            return true;
        }
    }
}
iRet = strlen(iStr);

if(iRet){
    console.log(`first index of ${iCh} is at :  ${i} index `);
    console.log("a is Found in STring")
}else{
    console.log("a is Not in STring")
}