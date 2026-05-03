// 01 : remove duplicate from array
// check pelendrome
// find 2nd Largest maxNumber from array 
// reverse the string



// ====================================================================
// 01 : remove duplicate from array
const iArr = [10,11,12,10,11,12,10,11,12,10,11,12];
function display(iArr){
    let iUniqueArr = [];
    for (let i = 0; i < iArr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < iUniqueArr.length; j++) {
            if(iArr[i] == iUniqueArr[j]){
                isDuplicate = true;
                break;
            }            
        }
        if(!isDuplicate){
            iUniqueArr.push(iArr[i]);
        }
    }
    console.log(iUniqueArr);
}
display(iArr);

// check pelendrome
const iStr = "markrAM";

function isPelendrome(iStr){
    let iRev = "";
    for (let i = (iStr.length - 1); i >= 0 ; i--) {
        iRev = iRev + iStr[i];
    }
    if(iRev.toLowerCase() == iStr.toLowerCase()){
        console.log("string is pelendrome", iRev);
    }else{
        console.log("string is not pelendrome", iRev);
    }
}
isPelendrome(iStr);

// find 2nd Largest maxNumber from array 
let iArr02 = [10,4,3,5,7,8,3,155,7];
function findMaxNumber(iArr){
    let iMax = -Infinity;
    let iMax2 = -Infinity;
    for (let i = 0; i < iArr.length; i++) {
        if(iMax < iArr[i]){
            iMax2 = iMax
            iMax = iArr[i];
        }        
    }
    console.log(iMax2);
}
findMaxNumber(iArr02);

// reverse the string
let iStr04 = "atishhhhh";
function reverseString(iStr){
    let iRev = "";
    for (let i = iStr.length - 1; i >= 0 ; i--) {
        iRev = iRev + iStr[i];
    }
    console.log(iRev);
}
reverseString(iStr04);


// longest word from string
let iStr05 = "atish lfksjlkjsdfkljsdkljsdlkjfdslkjsdfkljsdfkljvinayak kamblfyuiysduyds";
function longestWordFromSTring(iStr){
    let iLongestWord = "";
    let currentWord = "";
    for (let i = 0; i < iStr.length; i++) {
        if(iStr[i] != " "){
            currentWord = currentWord + iStr[i];
        }else{
            if(currentWord.length > iLongestWord.length){
                iLongestWord = currentWord;
            }
            currentWord = "";
        }
        if(currentWord.length > iLongestWord.length){
            iLongestWord = currentWord;
        }
    }
    console.log(iLongestWord);
}

longestWordFromSTring(iStr05);

// // Count the Occurrences of Each Character
let iStr05 = "atiszhatiatishshh";
function countOccurance(iStr){
    let iFreq = {};
    for (let i = 0; i < iStr.length; i++) {
        if(iFreq[iStr[i]]){
            iFreq[iStr[i]]++;
        }else{
            iFreq[iStr[i]] = 1;
        }
    }
    console.log(iFreq);
}

countOccurance(iStr05);

// Count number of keys in object
const user = { name: "Atish", age: 25, city: "" };
console.log(Object.keys(user).length);
console.log(Object.entries(user));


// ✅ 8️⃣ Find Largest Value in Object
const scores = { a: 10, b: 50, c: 30 };

function findLargestNoFromObject(scores){
    let iMax = 0;   
    for(let key in scores){
        if(scores[key] > iMax){
            iMax = scores[key];
        }
    }
    console.log(iMax)
}
findLargestNoFromObject(scores)


// ✅ 9️⃣ Remove Duplicate Objects from Array
const iArr002 = [
  { id: 1 },
  { id: 2 },
  { id: 1 }
];

function duplicateObjectsfromArray(iArr){
    let iUniqueArr = [];
    iArr.forEach((obj) => {
        if(!iUniqueArr.some((o) => o.id == obj.id)){
            iUniqueArr.push(obj);
        }
    })
    console.log(iUniqueArr);
}
duplicateObjectsfromArray(iArr002);

// Create a counter that increments value each time
function outerFn(){
    let iCnt = 0;
    return function innerFn (){
           return  iCnt++;
    };
}
const call = outerFn();
console.log(call());
console.log(call());
console.log(call());

// ✅ 6️⃣ Group By Property (Very Important ⭐)
const users = [
    {name : "atish", age : "29"},
    {name : "nirya", age : "27"},
    {name : "manthya", age : "26"},
    {name : "niraj", age : "27"},
    {name : "ganya", age : "26"},
    {name : "pk", age : "27"}
];
let iResult = users.reduce((acc, user) => {
    if(!acc[user.age]){
        acc[user.age] = [];
    }
    acc[user.age].push(user);
    return acc;
}, {});

console.log(iResult);


// Create a promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done...");
    }, 2000);
});

myPromise.then((res) => {
    return console.log(res);
});

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("not able to make api calll....");
    }, 1000);
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log("error : ", error);
})