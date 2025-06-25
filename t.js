
// return numbers array addition [3,5,71,8] => 87

var numArray = [2,3,44,5,6,4,6,74,89,7,5,46,7,8,9,4];

iFind = 4;
iCount = 0;
numArray.map((num) => {
  if(num == iFind){
    iCount++;
  }
})
console.log("Yes it is present in array "+ iCount);