
//     *
//     *   *
//     *   *   *
//     *   *   *   *
//     *   *   *   
//     *   *
//     *


iRow = 6; 
iCol = 6;

function Display(iRow, iCol){

    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            if(i >= j){
                document.write("X\t");
            }else{
                document.write("-\t");
            }
        }
        document.write("<br>");
    }
    for(i = iRow; i >= 1; i--){
        for(j = 1; j <= iCol; j++){
            if(i >= j ){
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