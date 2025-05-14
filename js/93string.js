// take a 1 letter and check where it is Capital or not with charactor (a to z) => 154



iChar = "l";
function dsiplayASCI(iChar){

        if(iChar >= 'A' && iChar <= 'Z' ){
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