// take a 1 letter and check where it is Capital or not with charactor (a to z) => 155



iChar = "p";
function dsiplayASCI(iChar){

        if(iChar >= 'a' && iChar <= 'z' ){
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