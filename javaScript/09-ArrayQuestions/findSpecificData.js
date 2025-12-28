// 4️⃣ Check if a value exists in an array (without using includes)
const arr = [5, 10, 15, 20];
let iFind = false 
arr.map((a) => {
    if(a == 10){
        iFind = true;
    }
})
if(iFind){
    console.log("yes")
}else{
    console.log("No")
}
////////////////////////////////////////////////////////////////////////////////////////////////////

// with include
let iArr = [1,3,4,5,6,7,8];

if(iArr.includes(4)){
    console.log("yes")
}else{
    console.log("No")
}

////////////////////////////////////////////////////////////////////////////////////////////////////

