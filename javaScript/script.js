const elements = document.getElementsByClassName("div1");
const eId = document.getElementById("div1");
const eQuerySelector = document.querySelectorAll(".div1");

for(i = 0; i < elements.length; i++){
    console.log(elements[i].innerHTML);
}

console.log(eId.innerHTML);


for(i = 0; i < eQuerySelector.length; i++){
    console.log(eQuerySelector[i].innerHTML);
}
