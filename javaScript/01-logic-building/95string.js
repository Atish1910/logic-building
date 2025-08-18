// take a 1 letter and check where it is Capital or not with charactor (ASCI 97 to 122) => 



iChar = "g";
function dsiplayASCI(iChar){
        asci = iChar.charCodeAt(0);
        if(asci >= 97 && asci <= 122 ){
            return true;
        }
        else{
            false;
        }
}
iRet = dsiplayASCI(iChar);

if(iRet){
    console.log("it is Small Letter")
}else{
    console.log("its Capital Letter")
}