
function interview(record){
    if(record == {age : 28}){
        console.log("You are an adult");
    }else if(record === { age : 28}){
        console.log("You Are Still Adult");
    }else{
        console.log("No FRecord");
    }
}

interview({age : 28});


// Objects are compared by reference, not by value.
// In JavaScript, when you compare two objects using == or ===, it checks whether they reference the same memory location, not their content.
