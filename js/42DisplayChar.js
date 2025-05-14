// print * 5 times with for loop => 94
// ASCII Value A TO Z : 65 to 90
// ASCII Value a TO z : 97 to 112

iStar = 5;
for(i = 1; i <= iStar; i++){
    ch = String.fromCharCode(97 + i);
    console.log(`${ch}: ${i}`);
}