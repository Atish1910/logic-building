let iStr = "atishvinaynitinakambldade";

function longestPelendrome(str){
    let iLongest = "";
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j <= str.length; j++){
            let iSubStr = str.slice(i,j);
            let iReverse = iSubStr.split("").reverse().join("");
            
            if(iSubStr == iReverse && iSubStr.length > iLongest.length){
                iLongest = iSubStr;
            }
        }
    }
    console.log(iLongest);
}
longestPelendrome(iStr);