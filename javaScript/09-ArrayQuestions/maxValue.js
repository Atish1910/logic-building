// 2️⃣ Find the largest number in an array
const nums = [10, 45, 67, 23, 89];


function display(nums){
    iMax = 0;
    for(let i = 0; i < nums.length; i++){
        if(iMax < nums[i]){
            iMax = nums[i];
        }
    }
    console.log(iMax);
}

display(nums);

