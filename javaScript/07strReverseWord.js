let iStr = "Kamble Vinayak Atish";
//op :  "Kamble Vinayak Atish "

function Display(iStr) {
    let word = "";
    let result = "";
    for(let i = iStr.length -1 ; i >= 0; i--){
        if(iStr[i] == " " || i == 0){
            // console.log("ghg")
            if(i == 0){
                word = iStr[i] + word;
            }

            if(result.length == 0){
                result = result + word;
            }else{
                result = result + " " + word;
            }
            word = "";
        }
        else{
            word = iStr[i] + word ;
        }
    }
    console.log(result);
}

Display(iStr)