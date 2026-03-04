// 4. Find the First Non-Repeating Character 

let str1 = "atishpatish";
let nonRepeatChar = str1.split("").find(char => str1.indexOf(char) === str1.lastIndexOf(char));
console.log("First Non-Repeating Char is with inbuilt operator : ", nonRepeatChar);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
// 4. Find the First Non-Repeating Character 
let iStr = "asdfghjklasdfghjuklasdfghjkl";

function Display(iStr){
    for(let i = 0; i < iStr.length; i++){
        let iCnt = 0;
        for(let j = 0; j < iStr.length; j++){
            if(iStr[i] == iStr[j]){
                iCnt++
            }
        }
        if(iCnt == 1){
            console.log(iChar);
        }
    }
}

Display(iStr);