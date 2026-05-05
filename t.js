const iFlattenArr = [10,11,[12,23,15], [19]];

function display(iArr){
  iNewArr = [];
  for (let i = 0; i < iArr.length; i++) {
    if(Array.isArray(iArr[i])){
      iNewArr.concat(iArr[i]);
    }else{
      iNewArr.push(iArr[i]);
    }
  }
  console.log(iNewArr);
}

display(iFlattenArr)
