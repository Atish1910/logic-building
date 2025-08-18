// take string and save only Small letter in 1 veriable and print that veriable (ATisH -> is) => 183

iStr = "SAiAS AlAAlA JHVBnevXCerXC XCfaXCllS DiSDn lSDoveSD uSDntSDiSDll TiRT fRTounRTdTR RyoRTuR";

function strEdit(iStr){
    i = 0;
    iStrnew = ""
    while(iStr[i] != undefined){

        if(iStr[i] >= "a" && iStr[i] <= "z"){
            iStrnew = iStrnew + iStr[i];
        }else if(iStr[i] == " "){
            iStrnew = iStrnew + "-";
        }
        i++;
    }
    console.log(iStrnew);
}
strEdit(iStr);