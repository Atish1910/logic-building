// print char a b c  (4Rows , 5Col) => 116

// a b c d
// a b c d
// a b c d
// a b c d
// a b c d
// a b c d

cRow = 5;
cCol = 4;

function Display(cRow, cCol){
    
    for(i = 0; i<= cRow; i++){
        for(j = 0; j < cCol; j++){
            ch = String.fromCharCode(97 + j);
            document.write(`${ch} \t \t`);
        }
        document.write("<br>")
    }
}
Display(cRow, cCol);
