// solve below problem ispelendrome Or Not "markram";

cStr = "markram";
function isPelendrome(iStr){
    i = iStr.length -1;
    iRevStr = "";
    while(i >= 0){
        iRevStr = iRevStr + iStr[i];
        i--;
    }
    if(iRevStr == cStr){
        return true;
    }
    else{
        return false;
    }
}

iRet = isPelendrome(cStr);
if(iRet){
    console.log("Pelendrome");
}else{
    console.log("NOT Pelendrome");
}


