// 1 : No  
// 2 : C
// 3 : 101 
// 4 : 240min
// 5 : 59
// 6 : Boolean
// 7 : [object object]
// 8 : "123"
// 9 : undefined
// 10 : [1 2 3]
// 11 : false
// 12 : event run from bottom of leyer to top, when user click on any button it will goes from bottom to top
// 13 : call : 
// 14 : ["h", "e", "l", "l", "o"]
// 15 : a : 2
// 16 : No
// 17 : { name: "Atish" }
// 18 : map is return new array, did not change original array, we cannot use contructor, we cannnot break loop || 
		// forEach : when we want to loop , did nt return new array, change original array
// 19 : because it is expecive to upadte state ditrectly, we update state vai hooks & react use recoinicliation & diffing for state update
// 20 : 1
// 21 : use dependency array
// 22 : controlled compoent has full control on input what kind of value should enter by user, validation use hooks to mangage 
// unControlled : they simpy received data ans show, they do not have control for acceesing data need to sue useRef 
// 23 : if child want to pass data to parent its called state lifting
// 24 : passed as argument to anather component, for optimization technique
// 25 : when compoennt get rerender ]use effect will run on every redender
// 26 : 
let iArr = [10,11,12,13]; 
let iMax = -Infinity;
let iMax2 = -Infinity;
for(let i = 0; i < iArr.length; i++){
    if(iMax < iArr[i]);
    iMax = iArr[i];
    iMax2 = iMax;
};
console.log(iMax2);

// 27 :
// Check if two strings are anagrams.

let iStr1 = "acb";
let iStr2 = "bac";

let isAnagram = iStr1.split("").every((acc, curr) => {
    return 
})



// 28 :
// 29 :
// 30 :

// Convert this to title case:
let iSTring = "frontend developer react";
let iTitleCase = iSTring.replace(/b\w\g/, toUppercase());