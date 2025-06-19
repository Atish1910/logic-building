// take a string and count its smallcase letter from string AtiSH : 2 small letter => 162

iStr = 'AKJHkhgfhgfgfgafhGFHGFHGF';

function strlenLower(iStr){
    i = 0;
    ilowerChar = 0;

    while(iStr[i] !== undefined){
        if(iStr[i] >= 'a' && iStr[i] <= 'z'){
            ilowerChar++;
        }
        i++;
    }
    console.log(` Total No Of Small Case Char in ABove STring is :  ${ilowerChar}`);
}
strlenLower(iStr);