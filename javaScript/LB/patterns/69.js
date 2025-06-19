/*
    Input : 

    Row : 6
    Col : 6

    Output : 
    @ @ @ @ @ @
    @ @       @
    @   @     @
    @     @   @
    @       @ @
    @ @ @ @ @ @
                        
*/  
function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            if(i == 1|| i == iRow || j == 1 || j == iCol || i == j){
                document.write("@ \t");
            }
            else{
                document.write("& \t");
            }
        }
        document.write("<br>");

    }
}

// Hardcoded values
let iRow = 6, iCol = 6;
Display(iRow, iCol);
