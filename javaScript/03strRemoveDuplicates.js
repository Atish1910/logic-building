// Remove Dupliacte Value From string 

// with inbuilt operator
const str1 = "asdfghjklasdfghjkllasdfghjklqwer";
let newStr = [...new Set(str1)].join("");
console.log("Remove Duplicate values From STring with inbuilt operator : ", newStr);



// ================================================================================================================================================
const str = "asdfghjklasdfghjkllasdfghjklqwer";
function Display(str){
    uniqueStr = "";
    alreadyExist = false;
    for(i = 0; i < str.length; i++){
        for(j = 0; j < uniqueStr.length; j++){
            if(str[j] == str[i]){
                alreadyExist = true;
                break;
            }
        }
        if(!alreadyExist){
            uniqueStr = uniqueStr + str[i];
        }
    }
    console.log("Remove Duplicate values From STring withOut inbuilt operator : ", uniqueStr);
}

Display(str);