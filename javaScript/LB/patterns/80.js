/*
    Input : 144

    Row : 4
    Col : 4

    Output : 
    *   *   *   #
    *   *   #  
    *   #   
    #   
            
*/  

iRow = 6, iCol = 6;


function Display(iRow, iCol) {
    for(i = iRow; i >= 1; i--){
        for(j = 1; j <= i; j++){
            if(i == j){
                document.write("X")
            }
            else{
                document.write("Y")
            }
        }
        document.write("<br>");
        
    }
}
Display(iRow, iCol);