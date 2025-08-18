// 2. Find the Largest Element in an Array
// Write a function to find the largest number in an array.

let arr = [10,30,33,22,1,0,555,642,8,9,0];

let largest = arr[0];
function findLargestNumber(arr){
    for(i = 0; i< arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestNumber(arr));