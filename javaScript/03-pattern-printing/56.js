// print Number in 1st row # in second row   => 120


// 1 1 1 1 1
// # # # # #
// 3 3 3 3 3
// # # # # #
// 5 5 5 5 5


iRow = 5
sCharCol = 5;

function Display(iRow, sCharCol){
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= sCharCol; j++){
            if(i % 2 == 0){
                document.write("# \t");
            }
            else{
                document.write(`${i} \t`);
            }
        }
        document.write("<br>")
    }
}

Display(iRow, sCharCol);