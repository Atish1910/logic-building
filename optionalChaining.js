let object = {
    name : "atish",
    age : 26,
    address : {
        flatNo : "h6/3"
    },
    funn : () => {
        return "atishhhh bhaiiii"
    },
    iArr : [1,2,3,4,5]   
}

console.log(object?.address?.flatNo, object?.address?.buildingName);
console.log(object.funn?.());
console.log(object?.iArr);