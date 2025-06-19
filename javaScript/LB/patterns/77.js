/*
    Input : 141

    Row : 6
    Col : 6


    Output : 
    X b c d e f
    a X c d e f
    a b X d e f
    a b c X e f
    a b c d X f
    a b c d e X            
*/ 

iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            char = String.fromCharCode(96 + j);
            if(i == j){
                document.write("X\t");
            }
            else{
                document.write( char +"\t");
            }
        }
        document.write("<br>");

    }
}