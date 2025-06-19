// print Number 1 2 3  (4Rows , 5Col) => 114
/*
    Input : 

    Row : 3
    Col : 5

    Output : 
    1   1   1   1   1
    2   2   2   2   2   
    3   3   3   3   3   

*/  
iRow = 3
iCol = 5;

function Display(iValue1, iValue2){
    for(i = 1; i<= iValue1; i++){
        let row = "";
        for(j = 1; j <= iValue2; j++){
            row = row + i +'\t';
        }
        console.log(row);
    }
}
Display(iRow, iCol)