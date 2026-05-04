const iNum = 678;
function display(iNum){
  let iRev = 0;
  
  while(iNum != 0){
    let iDigit = iNum % 10;
    iNum = (iNum/10 ) | 0;
    iRev = iRev * 10 + iDigit; 
  }
  console.log(iRev);
}
display(iNum);