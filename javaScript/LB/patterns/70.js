
    // Input : 

    // Row : 6
    // Col : 6

    // Output : 
    // @ @ @ @ @ @
    // @ # & & & @
    // @ & # & & @
    // @ & & # & @
    // @ & & & # @
    // @ @ @ @ @ @
                    
// Hardcoded values
iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            if(i == 1|| j == 1 || j == iCol || i == iRow){
                document.write("@ \t");
            }else if( i == j){
                document.write("# \t");
            }
            else{
                document.write("& \t");
            }
        }
        document.write("<br>");

    }
}


