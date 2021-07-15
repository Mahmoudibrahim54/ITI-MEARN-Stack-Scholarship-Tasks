var myCanv = document.getElementById("canv");
var ctx = myCanv.getContext("2d");

var grd_1 = ctx.createLinearGradient(0, 0, 0, 200);
grd_1.addColorStop(0, "cornflowerblue");
grd_1.addColorStop(0.8, "white");
ctx.fillStyle = grd_1;
ctx.fillRect(0, 0, 400, 200);

ctx.rect(0,200,40,200);
var grd_2 = ctx.createLinearGradient(0, 200, 0, 400);
grd_2.addColorStop(0, "greenyellow");
grd_2.addColorStop(0.8, "white");
ctx.fillStyle = grd_2;
ctx.fillRect(0, 200, 400, 200);

var grd_3 = ctx.createLinearGradient(50, 100, 50,250);
grd_3.addColorStop(0, "black");
grd_3.addColorStop(0.8, "white");
ctx.lineWidth = 5;
ctx.strokeStyle = grd_3;
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(330, 100);
ctx.lineTo(330, 250);
ctx.moveTo(50, 100);
ctx.lineTo(50, 250);
ctx.stroke();
