var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bgImage = new Image();
bgImage.src = "../images/yama.png";

bgImage.addEventListener("load", function(){
    ctx.drawImage(bgImage,0,0,canvas.width,canvas.height);
});

var personImage = new Image();
personImage.src = "../images/hituji0.png";

personImage.addEventListener("load", function(){
    ctx.drawImage(personImage,0,0,canvas.width,canvas.height);
});

function loop(){
    ctx.fillStyle = "#202020"
    ctx.fillRect(0,0,canvas.width, canvas.height);
}

loop();