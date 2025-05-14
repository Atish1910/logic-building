// print char a b c  (4Rows , 5Col) => 116

// a a a a
// b b b b
// c c c c
// d d d d
// e e e e
// f f f f

cRow = 5;
cCol = 4;

function Display(cRow, cCol){
    
    for(i = 0; i<= cRow; i++){
        ch = String.fromCharCode(97 + i);
        for(j = 0; j < cCol; j++){
            document.write(`${ch} \t \t`);
        }
        document.write("<br>")
    }
}
Display(cRow, cCol);
