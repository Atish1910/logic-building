// solve below problem ispelendrome Or Not "markram";
// with inBuilt opertor


iNum = 123454321;

function isPelendrome(iNo){
    iStr = iNo.toString();
    const iRev = iStr.split("").reverse().join("");

    if(iRev == iStr){
        console.log("pelendrome");
    }else{
        console.log("NOT pelendrome");
    }
}
isPelendrome(iNum);