let iStr = "atish vinayak kambletuytutuyt";
function display(iStr){
    let iLongest = "";  
    let iMax = 0;  
    let iCurrentWord = ""; 

    for(let i = 0; i < iStr.length; i++){
        if(iStr[i] != " "){
            iCurrentWord = iCurrentWord + iStr[i];
        }else{
            if(iCurrentWord.length > iMax){
                iMax = iCurrentWord.length;
                iLongest = iCurrentWord;
            }
            iCurrentWord = "";
        }
    }
    if(iCurrentWord.length > iMax){
        iMax = iCurrentWord.length;
        iLongest = iCurrentWord;
    }

    console.log(iLongest, iMax);

}
display(iStr);
