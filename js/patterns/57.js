// print Number Incremenet in 1st row # in second row   => 122

// 1 2 3 4 5
// # # # # #
// 1 2 3 4 5
// # # # # #
// 1 2 3 4 5

iRow = 5
sCharCol = 5;

function Display(iRow, sCharCol){
    for(i = 1; i <= iRow; i++){
        for(j = 1; j <= sCharCol; j++){
            if(i % 2 == 0){
                document.write("# \t");
            }
            else{
                document.write(`${j} \t`);
            }
        }
        document.write("<br>")
    }
}

Display(iRow, sCharCol);