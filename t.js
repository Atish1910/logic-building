// 2. Check if a String is a Palindrome 
cStr = "markram";

function isPelendrome(str){
    iLength = str.length;
    iRevStr = "";
    i = 0;
    while(iLength[i] != 0){
        iRevStr = str[i] + iRevStr;
        i--;
    }
    if(iRevStr == cStr){
        console.log("String is Pelendrome");
    }
    else{
        console.log("String is Not Pelendrome");
    }
}
isPelendrome(cStr);