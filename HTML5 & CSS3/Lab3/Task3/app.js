document.getElementById("canv").addEventListener("click", function (evt) {
  console.log(evt.clientX, evt.clientY);
});

var myCanv = document.getElementById("canv");
var ctx = myCanv.getContext("2d");

var img = new Image();
img.src = "img.jpg";
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  ctx.shadowColor = "grey";
  ctx.shadowBlur = 2;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 6;
  ctx.font = "bold 25px Verdana";
  ctx.fillStyle = "white";
  ctx.fillText("it's gonna be okay sweatheart!", 20, 280);
};
