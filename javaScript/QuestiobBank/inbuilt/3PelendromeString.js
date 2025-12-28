// 3. How to check whether a string is palindrome or not ?

iStr = "mkarkram";
function Display(iStr){
    iRev = iStr.toLowerCase();
    return iRev == iStr.split("").reverse().join("");
}
console.log(Display("madam"));