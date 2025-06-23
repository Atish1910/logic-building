// solve below problem ispelendrome Or Not "markram";
// with inBuilt opertor

str = "NiTIN";

function isPelendrome(str){
    // convert to lowercase;
    const cleanStr = str.toLowerCase();
    
    // split evry char
    iRevStr = cleanStr.split("").reverse().join("");
    // compare & return
    
    if(iRevStr == cleanStr){
        console.log("pelendrome");
    }else{
        console.log("NOT pelendrome");
    }
}

isPelendrome(str);


