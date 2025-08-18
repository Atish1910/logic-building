/*
    Input : 

    Row : 3
    Col : 5

    Output : 
    *   *   *   *   *
    *   *   *   *   *
    *   *   *   *   *    

*/  

function Display(iRow, iCol) {
    let i = 0, j = 0;
    // i = 0; i< 3  
    // i = 1; i< 3  
    // i = 2; i< 3  
    // i = 3; i< 3 // false  
    for(i = 0; i< iRow; i++){
        let row = "";
        // j = 0; 0 < 5  
        //  1 < 5  
        //  2 < 5  
        //  3 < 5  
        //  4 < 5  
        //  5 < 5 // false  
        for(j = 0; j < iCol; j++){
            // row =  "* \t";    
            // row =  "* *";    
            // row =  "* * *";    
            // row =  "* * * * ";    
            // row =  "* * * * *"; // print 
            
               // row =  "* \t";    
            // row =  "* *";    
            // row =  "* * *";    
            // row =  "* * * * ";    
            // row =  "* * * * *"; // print 

               // row =  "* \t";    
            // row =  "* *";    
            // row =  "* * *";    
            // row =  "* * * * ";    
            // row =  "* * * * *"; // print 
            
            row = row + "* \t";    
        }
        // row =  "* * * * *"; // print
        // row =  "* * * * *"; // print
        // row =  "* * * * *"; // print
        console.log(row);
    }
}

// Hardcoded values
let iValue1 = 3, iValue2 = 5;

// Function call
Display(iValue1, iValue2);
