var minutes = 0;
var seconds = 0;
var hours = 0;
var runtime = document.getElementById("time");
time = "Run time: " + hours + ":" + "0" + minutes + ":" + "0" + seconds;

setInterval(() => {
    seconds++;
    runtime.innerHTML = time;
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
    time = "Run time: " + hours + ":" + minutes + ":" + seconds;
    if(minutes < 10){
        time = "Run time: " + hours + ":" + "0" + minutes + ":" + seconds;
    }

    if(seconds < 10 && minutes < 10){
        time = "Run time: " + hours + ":" + "0" + minutes + ":" + "0" + seconds;
    }else if(seconds < 10){
        time = "Run time: " + hours + ":" + minutes + ":" + "0" + seconds;
    }
}, 1000);