// Write a program which accepts the marks and display the class accordingly


//  0 to 34         Fail
//  35 to 49        Pass Class
//  50 to 59        Second Class
//  60 to 74        First Class
// 75 to 100        First Class with Deistinction

let marks = 65;

function checkResult(marks){

    if(marks < 0 || marks > 100 ){
        console.log("invalid Input , Plz Enter marks from 1 to 100");
        return;
    }

    if(marks < 34){
        console.log(` You got ${marks} Marks, You Are Failed`)
    }
    else if(marks < 49){
        console.log(` You got ${marks} Marks, Congratulations You Are pass`)
    }
    else if(marks < 59){
        console.log(` You got ${marks} Marks, Congratulations You Are pass with second Class`)
    }
    else if(marks < 74){
        console.log(` You got ${marks} Marks, Congratulations You Are pass with first Class`)
    }
    else if(marks < 74){
        console.log(` You got ${marks} Marks, Congratulations You Are pass with first Class with distingution`)
    }

}
checkResult(marks);