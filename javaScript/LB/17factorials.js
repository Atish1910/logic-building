// factorials 

function factorials(){
    const iNo = 5;
    let iMult = 1;
    for(i = 1; i<= iNo; i++ ){
        iMult = iMult * i;
    }
    console.log(`factorails of ${iNo} is : ${iMult}`);
}
factorials()


/*
    iNo = 5;
    
    5!
    
    Factorial = 5 * 4 * 3 * 2 * 1   = 120

    Factorial = 1 * 2 * 3 * 4 * 5   = 120

*/