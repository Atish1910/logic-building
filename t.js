






// 29 : flatten an array
let iArr = [10,11,12,[12,45,67,8],[10]];
function display(iArr){
  let iResult = []
  for(let i = 0; i < iArr.length; i++){
    if(Array.isArray(iArr[i])){
      iResult = iResult.concat(display(iArr[i]))
    }else{
      iResult.push(iArr[i]);
    }
  }
  return iResult;
};

console.log(display(iArr));