/*
    Input : 

    Row : 3
    Col : 5

    Output : 
    *   *   *   *   *
    *   *   *   *   *
    *   *   *   *   *    

*/  

function Display(iRow, iCol) {
    let i = 0, j = 0;
    for(i = 0; i< iRow; i++){
        for(j = 0; j < iCol; j++){    
            document.write("* \t")
        }
        document.write("<br>");
    }
}

// Hardcoded values
let iValue1 = 3, iValue2 = 5;

// Function call
Display(iValue1, iValue2);
