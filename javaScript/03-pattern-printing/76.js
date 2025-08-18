/*
    Input : 141

    Row : 6
    Col : 6


    Output : 
    *   a   a   a   a   a
    b   *   b   b   b   b
    c   c   *   c   c   c
    d   d   d   *   d   d   
    e   e   e   e   *   e
    f   f   f   f   f   *              
*/ 

iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            char = String.fromCharCode(96 + i);
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