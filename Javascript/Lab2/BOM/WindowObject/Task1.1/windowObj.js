win = window.open("SecondPage.html","","width=200px,height=200px");
win.focus();
window.blur();



var count = 0;
var flag = true;
var screenSize = parseInt(window.outerHeight/5);
var repeatMove = setInterval(() => {
    count++
    if(flag){
        win.moveBy(11.5,5);
        if(count % 120 == 0){
            flag = false;
        }
    }
    else{
        win.moveBy(-11.5,-5);
        if(count % 120 == 0){
            flag = true;
        }
    }
},100);

function stopMoving(){
    clearInterval(repeatMove);
}