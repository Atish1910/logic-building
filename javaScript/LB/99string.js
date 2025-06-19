// take a string and count its Capital  letter from string AtiSH : 3 Sapital letter => 163 

iStr = 'AKJHkhgfhgfgfgafhGFHG';

function strlenUpper(iStr){
    i = 0;
    iUpperChar = 0;

    while(iStr[i] !== undefined){
        if(iStr[i] >= 'A' && iStr[i] <= 'Z'){
            // iUpperChar++;
            iUpperChar++;
        }
        i++;
    }
    console.log(` Total No Of Upper Case Char in ABove STring is :  ${iUpperChar}`);
}
strlenUpper(iStr);
// strlenUpper(iStr);
strlenUpper(iStr)