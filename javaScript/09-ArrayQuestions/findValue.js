// 4️⃣ Check if a value exists in an array (without using includes)
const arr = [5, 10, 15, 20];
iCheck = 110;
function display(arr){
    isFind = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == iCheck){
            isFind = true;
            break;
        }
    }
    if(isFind){
        console.log("yes we got the number at", i + "indexed");
    }else{
        console.log("The value is not present");
    }
}

display(arr)