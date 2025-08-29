// 8. Program to find Reverse of a string without using  built-in method

iStr = "atish";

function Display(iStr) {
  iRevStr = "";
  let i = iStr.length - 1;
  for (i = iStr.length - 1; i >= 0; i--) {
    iRevStr = iRevStr + iStr[i];
  }
  console.log("String reverse withOut inbuilt operator : ", iRevStr);
}
Display(iStr);

function DisplayWithInbuilt(iStr) {
  inewStr = iStr.split("").reverse().join("");
  console.log("String reverse with inbuilt operator : ", inewStr);
}

DisplayWithInbuilt(iStr);
