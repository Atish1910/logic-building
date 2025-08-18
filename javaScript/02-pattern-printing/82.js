/*
    Input : 146

    Row : 4
    Col : 4

    Output : 
    Y Y Y Y Y X
    Y Y Y Y X Z
    Y Y Y X Z Z
    Y Y X Z Z Z
    Y X Z Z Z Z
    X Z Z Z Z Z
            
*/  

iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = iRow; i >= 1; i--){
        for(j = 1; j <= iCol; j++){
            if(i == j){
                document.write("X\t");
            }
            else if(i >= j){
                document.write("Y\t");
            }
            else{
                document.write("Z\t");
            }
        }
        document.write("<br>");

    }
}