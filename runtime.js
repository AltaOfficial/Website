var minutes = 0;
var seconds = 0;
var runtime = document.getElementById("time");

setInterval(() => {
    seconds++;
    time = "Run time: " + minutes + ":" + seconds;
    runtime.innerHTML = time;
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
}, 1000)