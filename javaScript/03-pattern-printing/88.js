/*
    Input : 147

    Row : 4
    Col : 4



    Output : 
                *
            *   *
        *   *   *
    *   *   *   *    
    *   *   *   *
        *   *   *
            *   *
                *
            
*/  

iRow = 6, iCol = 6;

function Display(iRow, iCol){
    for(i = iRow; i >= 1; i--){
        for(j = 1; j <= iCol; j++){
            if(i <= j){
                document.write("X\t");
            }
            else{
                document.write("-\t");
            }
        }
        document.write("<br>")
    }

    for(i = 1; i<= iRow; i++){
        for(j = iCol; j >= 1; j-- ){
            if(j >= i){
                document.write("X\t");
            }
            else{
                document.write("-\t");
            }
        }
        document.write("<br>");
    }
}

Display(iRow, iCol);