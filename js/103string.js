// take a string and count its Specific Letter (a) from string Atish Vinayak Kamble : 2 (a) => 167 

iStr = "atishvinayakmableahkabpao";

function strlen(iStr){
    i = 0;
    iCh = 'a';
    iCnt = 0;
    while(iStr[i] != undefined){
        i++;
        if(iStr[i] == iCh){
            iCnt++;
        }
    }
    console.log(`${iCnt} time presenet in above string`);
}

strlen(iStr);