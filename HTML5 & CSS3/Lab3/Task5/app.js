document.querySelector(".canv").addEventListener("click", function (evt) {
  console.log(evt.clientX, evt.clientY);
});
var ctx = document.querySelector(".canv").getContext("2d");
var angle = 20;
count = 0;
ctx.globalAlpha = 0.2;
ctx.fillStyle = 'deepskyblue';

var draw = setInterval(function(){
    count++;
    ctx.translate(300, 300);
    ctx.rotate(angle*Math.PI / 180);
    ctx.translate(-300, -300);
    
    // Rotated rectangle
    ctx.fillRect(300, 300, 200, 50);

    if(count === 360/angle){
        clearInterval(draw);
        console.log("cleared");
    }
    

},500);
// ctx.fillStyle = 'gray';
// ctx.fillRect(100, 100, 140, 30);

// // Matrix transformation
// ctx.translate(100, 100);
// ctx.rotate(10*Math.PI / 180);
// ctx.translate(-100, -100);

// // Rotated rectangle
// ctx.fillStyle = 'red';
// ctx.fillRect(100, 100, 140, 30);
