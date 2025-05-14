// 1. Reverse an Array
// Write a function to reverse an array without using the built-in reverse method.

let arr = [5,4,3,2,1];

function reverseArray(arr) {
    let left = 0;
    let right = arr.lenght -1;

    while(left < right){
        [[arr.left ], [arr.right]] =  [[arr.right ], [arr.left]]
        left++;
        right--;
    }
    return(arr);
}

console.log(reverseArray(arr));