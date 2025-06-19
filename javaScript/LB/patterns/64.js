// print Bingo Line at middle with # and other should be $ => 125 (2nd Approch)

/*
    Input : 

    Row : 6
    Col : 6

    Output : 
    #   $   $   $ 
    $   #   $   $ 
    $   $   #   $
    $   $   $   #
        
*/  

Row = 4;
Col = 4;

function Display(Row, Col){
    document.write("With turnary Operator <br>");
    if(Row != Col){
        document.write(`InValid Input Row = ${Row} : Col=  ${Col} <br> Should be Same`);
        return
    }
    for(i = 1; i<= Row; i++){
        for(j = 1; j<= Col; j++){
            document.write((i == j) ? "\t # \t" : "\t$ \t") ;
           
        }
        document.write("<br>");
    }
    
}
Display(Row, Col);
