var myCanv = document.getElementById("canv");
var ctx = myCanv.getContext("2d");

var countX = 0;
var countY = 0;
ctx.moveTo(0,0);
ctx.strokeStyle = "red"; 
ctx.lineWidth = "20";
var draw = setInterval(function(){
    countX +=5;
    countY+=6;
    ctx.lineTo(countX,countY);
    ctx.stroke();
    console.log("going")
    if(countX === myCanv.width && countY === myCanv.height){
        clearInterval(draw);
        alert("Animation End")
    }

},50)