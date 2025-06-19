// print Number 1 2 3 increment in row  (4Rows , 5Col) => 115
/*
    Input : 

    Row : 3
    Col : 5

    Output : 
    1   2   3   4   5
    1   2   3   4   5
    1   2   3   4   5

*/  
iRow = 3
iCol = 5;

function Display(iValue1, iValue2){
    for(i = 1; i<= iValue1; i++){
        for(j = 1; j <= iValue2; j++){
            document.write(j + "\t");

        }
        document.write("<br>")
    }
}
Display(iRow, iCol);