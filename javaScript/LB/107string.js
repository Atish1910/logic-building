// Replace All Capital letters With * : AtiSh -> *ti*h => 177

iStr = "aTish VnAYAks KsMblX worKing As A wEb deveLoper in gladowl";

function strReplace(iStr) {
    i = 0;
    iStrNew = "";
    while (iStr[i] != undefined) {
        if (iStr[i] > "A" && iStr[i] < "Z") {
            iStrNew = iStrNew + "*";
        } else {
            iStrNew = iStrNew + iStr[i];
        }
        i++;
    }
    console.log(iStrNew);
}
strReplace(iStr);