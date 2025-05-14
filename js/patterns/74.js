/*
    Input : 139

    Row : 6
    Col : 6

    Output : 
    *
    $   *
    $   $   *
    $   $   $   *    
    $   $   $   $   *
    $   $   $   $   $   *               
*/  

iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            if(i == j){
                document.write("X\t");
            }
            else if(i > j ){
                document.write("Y\t");
            }
            else{
                document.write(".\t");
            }
        }
        document.write("<br>");

    }
}