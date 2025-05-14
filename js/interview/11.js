// what will be the op of below function

function test(){
    console.log(test.abc);
}

test();              // undefined
test.abc = 400;
test();              // 400
test.abc = 600;
test();              // 600


// op 
// undefined
// 600