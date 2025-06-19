// print * in 1st row # in second row  => 119

sRow = 6;
sCol = 5;

function Display(sRow, sCol){
    for(i = 1; i <= sRow; i++){
        for(j = 1; j<sCol; j++){
            if((i % 2) == 0)
                {
                    document.write("*\t");
                }
                else
                {
                    document.write("#\t");
                }
        }
        document.write("<br>");

    }
}
Display(sRow, sCol);
