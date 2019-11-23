var minutes = 0;
var seconds = 0;
var runtime = document.getElementById("time");
time = "Run time: " + minutes + ":" + "0" + seconds;

setInterval(() => {
    seconds++;
    runtime.innerHTML = time;
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
    time = "Run time: " + minutes + ":" + seconds;
    if(seconds < 10){
        time = "Run time: " + minutes + ":" + "0" + seconds;
    }
}, 1000)