function display(iCity, iState){
    console.log(`mydelft ${this.name}, i am currently living in ${iCity}, ${iState}`);
}

let iObj = {
    name : "Atishhh vinayak Kamble..."
}

let iBindFunction = display.bind(iObj, "Pune");
iBindFunction("Maharashrta");

// ===============================================

let name01 = {
    name01 : "Atish Vinayak Kamble", 
    show(){
        console.log(this.name01);
    }
};

setTimeout( name01.show.bind(name01), 1000);