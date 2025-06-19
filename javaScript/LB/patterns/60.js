// print increment of char in ROW and second line numbers increment

// 1 1 1 1 1
// c c c c c
// 3 3 3 3 3
// e e e e e
// 5 5 5 5 5

cRow = 5;
iCol = 5;

function Display(cRow, iCol){
    for(i = 1; i <= cRow; i++){
        char = String.fromCharCode(97 + i);
        for(j = 1; j <= iCol; j++){
            if(i % 2 == 0){
                document.write(char + "\t");
            }
            else{
                document.write(i + "\t");
            }
        }
        document.write("<br>");
    }
}
Display(cRow, iCol);