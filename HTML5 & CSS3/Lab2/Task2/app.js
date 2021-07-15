document.getElementById("canv").addEventListener("click", function (evt) {
  console.log(evt.offsetX, evt.offsetY);
});

var myCanv = document.getElementById("canv");
var ctx = myCanv.getContext("2d");

grd_1 = ctx.createRadialGradient(300, 300, 300, 350, 350, 200);
grd_1.addColorStop(0, "blue");
grd_1.addColorStop(0.8, "cornflowerblue");
ctx.fillStyle = grd_1;

ctx.beginPath();
ctx.arc(300, 300, 300, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();

grd_2 = ctx.createRadialGradient(300, 300, 200, 275,290, 75);

grd_2.addColorStop(0, "blue");
grd_2.addColorStop(0.5, "cornflowerblue");

ctx.fillStyle = grd_2;

ctx.beginPath();
ctx.arc(300, 300, 200, 2 * Math.PI, false);
ctx.closePath();

ctx.fill();

ctx.createRadialGradient(300, 300, 200, 398, 377, 75);

ctx.strokeStyle = "white";

ctx.lineWidth = 20;

ctx.beginPath();
ctx.moveTo(400, 410);
ctx.lineTo(400, 200);
ctx.lineTo(395, 200);
ctx.lineTo(300, 400);
ctx.lineTo(295, 400);
ctx.lineTo(200, 200);
ctx.lineTo(195, 200);
ctx.lineTo(195, 410);
ctx.stroke();
