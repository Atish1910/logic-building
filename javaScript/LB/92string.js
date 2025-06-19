// take a 1 letter and check where it is Capital or not with ASCII Value => 153 (65 to 90)



iChar = "K";
function dsiplayASCI(iChar){
        ASCI = iChar.charCodeAt(0);

        if(ASCI >= 65 && ASCI <= 90 ){
            return true;
        }
        else{
            false;
        }
}
iRet = dsiplayASCI(iChar);

if(iRet){
    console.log("it is Capital Letter")
}else{
    console.log("No its Not Capital Letter")
}