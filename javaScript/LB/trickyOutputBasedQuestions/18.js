// str = abc 
// str2 = 123456
// op :  a1b2c346

cStr = "abcdef";
iStr = 123;
// op :  a1b2c3def

function murgeStr(cStr, iStr){
    i = 0;
    j = 0
    iDigit = 0;
    while(iStr != 0){
    while(cStr[i] != undefined){
            iDigit = iStr % 10;
            iStr = (iStr / 10) | 0;
            console.log(cStr[i] + iDigit);
            i++;
        }
    }
}
murgeStr(cStr, iStr);
