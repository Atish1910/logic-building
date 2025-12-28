let s = "07:45:12pm";
// op : 19:45:12

function display(s){
    let hour = "";
    let minute = "";
    let second = "";
    let period = "";

    hour = (s[0] + "0") * 10 (s[1] + "0");
    minute = s[2] + s[3];
    second = s[5] + s[6];

    if(period == "am"){
        if(hour == 12){
            hour = 0;
        }
    }else{
        hour = hour + 12;
    }

    let hourStr = "";

    if(hourStr < 10){
        hour = hour
    }else{
        hour = "0" + hour;
    }


    hourStr = hour + ":" + minute + ":" + second 

    console.log(hourStr)



}

display(s)