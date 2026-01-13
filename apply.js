// fn.apply(thisArg, [arg1, arg2, arg3] / iArr );


const iNum = [2,3,4,5,6,3,2345,67,8,9];

const max = Math.max.apply(null, iNum);
console.log(max)