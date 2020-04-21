var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
document.addEventListener("keypress", moveSquare);
var x = 0;

ctx.fillStyle = "#fff"

class Rectangle {
    constructor(xpos, ypos, width, height) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.ctx = ctx.fillRect(xpos, ypos, width, height);
    }
}

var rect1 = new Rectangle(20, 20, 100, 100);

function moveSquare(e){
    console.log(e.charCode);
    if(e.charCode == 49 && rect1.xpos >= 5 && rect1.xpos <= 695){
        ctx.clearRect(0, 0, 800, 500);
        console.log("key pressed");
        x += 5;
        rect1 = new Rectangle(20 + x, 20, 100, 100);
    } 

    if(e.charCode == 50 && rect1.xpos >= 5 && rect1.xpos <= 695){
        ctx.clearRect(0, 0, 800, 500);
        console.log("key pressed");
        x -= 5;
        rect1 = new Rectangle(20 + x, 20, 100, 100);
    }
}