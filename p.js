// 3. Remove Duplicates from a String

const iStr = [10, 11, 12,10, 11, 12,10, 11, 12,10, 11, 12];

function display(iStr){
  var iUnique = [];
  isDuplicate = false;

  for(let i = 0; i < iStr.length; i++){
    iUnique.push(iStr[i])
  }

  console.log(iUnique);
}

display(iStr);