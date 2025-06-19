// check it is digit or not => 156 (48 to 57)
iChar = '6';

function dsiplayASCI(iChar){
    asci = iChar.charCodeAt(0);

    if(asci >= 48  && asci <= 57){
        return true;
    }
    else{
        return false;
    }
}
iRet = dsiplayASCI(iChar);

if(iRet){
    console.log("Its Number");
}
else{
    console.log("No Its Not Number");
}

