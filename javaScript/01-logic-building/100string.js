// take a string and count its Number from string At62iS6H1 : 4 Numbers => 164 

iStr = 'AKJHkhg168fhgfg20290fgafhGFHGFHGF112';

function strlenNum(iStr){
    i = 0;
    iNumChar = 0;

    while(iStr[i] !== undefined){
        if(iStr[i] >= '0' && iStr[i] <= '9'){
            iNumChar++;
        }
        i++;
    }
    console.log(` Total No Of Num Case Char in ABove STring is :  ${iNumChar}`);
}
strlenNum(iStr);