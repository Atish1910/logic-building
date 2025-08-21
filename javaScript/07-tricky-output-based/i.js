// find 1st non repeating char from array
const str = "aabbcadakzkpapap";

function display(iStr) {
    let iCnt = 0;
    let i = 0;
    while(iStr[i] != undefined){

        if(iStr[i] != str[i]){
            iCnt++
            console.log("inside if Condtion", iStr[i], iCnt);
        }

        // console.log(str[i]);
        i++
    }
}

display(str);