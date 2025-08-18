// take a string and count its vowels from string Atish : 2 vowels => 165 

iStr = 'atish';

function strlenVowels(iStr){
    i = 0;
    iVowelsChar = 0;

    while(iStr[i] !== undefined){
        if(iStr[i] == 'a' || iStr[i] == 'e' || iStr[i] == 'i' || iStr[i] == 'o' || iStr[i] == 'u'){
            iVowelsChar++;
        }
        i++;
    }
    console.log(` Total No Of Vowels Case Char in ABove STring is :  ${iVowelsChar}`);
}
strlenVowels(iStr);