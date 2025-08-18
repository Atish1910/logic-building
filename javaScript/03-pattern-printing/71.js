/*
    Input : 

    Row : 6
    Col : 6

    Output : 
    @  #  #  #  #  #
    #  @           #
    #     @        #
    #        @     #
    #           @  #
    #  #  #  #  #  @
                    
*/  
iRow = 6, iCol = 6;



function Display(iRow, iCol) {
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= iCol; j++){
            if( i == j){
                document.write("@\t");
            }
            else if(i == 1 || i == iRow || j == 1 || j == iCol){
                document.write("#\t");
            }
            else{
                document.write("&\t");
            }
        }
        document.write("<br>");

    }
}

Display(iRow, iCol);
