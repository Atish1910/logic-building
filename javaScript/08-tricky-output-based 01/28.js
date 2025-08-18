let iArr = [743,456,35,123,432,123,432,11,2,33,44,555,6];

function thirdLargest(iArr){
    iMaxOne = 0;
    iMaxTwo = 0;
    iMaxThree = 0;

    n = iArr.length;
    for(i = 0; i < n ;  i++){
        if(iMaxOne < iArr[i]){
            iMaxThree = iMaxTwo;
            iMaxTwo - iMaxOne;
            iMaxOne = iArr[i];
        }else if(iMaxTwo < iArr[i]){
            iMaxThree = iMaxTwo;
            iMaxTwo = iArr[i];
        } else if(iMaxThree < iArr[i]){
            iMaxThree = iArr[i];
        }
    }
    console.log(iMaxThree);
}

thirdLargest(iArr);