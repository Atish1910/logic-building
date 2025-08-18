// Enter the String and find lenght of its string (In built Operator) => 159
// NOTE : In here js we need to u=run while loop till undefined but in Java Or C we can user "\0";

iChar = "ABCDsdfajk";

function strlen(iChar){
    i = 0;
    while(iChar[i] != undefined)
    {
        i++;
    }
    console.log(i);
}
strlen(iChar);