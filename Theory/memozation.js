function memozation(){
  let iResult = {};
  return function (a){
    if(iResult[a]){
      return console.log(" calculate from", iResult[a]);
    }
    iResult[a] = a * a;
    return console.log(" calculate result", iResult[a]);
  }
}
const add = memozation();
add(10);
add(10);
add(10);
add(10);