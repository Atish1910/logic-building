// prime number from 1 to 100;

var iValue = 100;

function prime(iNo){
    for(i = 2; i < iNo; i++){
        
        let iPrime = true;
        
        for(j = 0; j = i; j++){
             if(i % j == 0){
                iPrime = false;
                break;
             }
        }
    }
    if(iPrime){
        console.log(i)
    }
}

prime(iValue);