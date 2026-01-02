// 5. Program to find longest word in a given sentence?

iStr = "atish vinayak kamble";

function Display(iStr){
    iCnt = 0;
    for(i = 0; i< iStr.length; i++){
        if(iStr[i] == " "){
            iCnt = 0;
        }else{
            if(iTempCnt > iCnt){
                
            }
            iTempCnt = iCnt;
            iCnt++
        }
    }
    console.log(iCnt);

}
Display(iStr)