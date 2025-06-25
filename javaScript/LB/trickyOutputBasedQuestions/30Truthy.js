let isAdmin = new Boolean(false);
if(isAdmin){
    console.log("Grant access");
}else{
    console.log("Deny access");
}


// isAdmin is an object, which is truthy, even though it holds false as its value.
// The condition if (isAdmin) evaluates to true.
// Output: "Grant access" ✅.


// ================ //
let isAdminTwo = new Boolean(false);
if(isAdminTwo == true){
    console.log("Grant access");
}else{
    console.log("Deny access");
}


// isAdminTwo is an object (Boolean { false }), and objects are truthy.
// When comparing isAdminTwo == true, JavaScript coerces both values.
// Since an object is not the primitive true, the result is false.
// Output: "Deny access" ❌.

