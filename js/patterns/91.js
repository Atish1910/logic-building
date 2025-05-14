// Y Y Y Y Y X
// Y Y Y Y X Z
// Y Y Y X Z Z
// Y Y X Z Z Z
// Y X Z Z Z Z
// X Z Z Z Z Z

iRow = 5;
iCol = 5;
function Display(iRow, iCol){
    i = 0; j = 0;
    for(i = iRow; i >= 0 ; i--){
        for(j = iCol; j >= 0; j--){
            if(i > j ){
                document.writeln("X \t");
            }else{
                document.writeln("- \t");
            }
        }
        document.writeln("<br>")
    }
}
Display(iRow, iCol);