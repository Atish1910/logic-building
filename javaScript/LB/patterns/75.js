/*
    Input : 140

    Row : 6
    Col : 6

    Output : 
    A
    A   B
    A   B   C
    A   B   C   D
    A   B   C   D   E
    A   B   C   D   E   F             
*/ 

iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            char = String.fromCharCode(96 + j);
            if(i >= j){
                document.write( char +"\t");
            }
            else{
                document.write(".\t");
            }
        }
        document.write("<br>");

    }
}