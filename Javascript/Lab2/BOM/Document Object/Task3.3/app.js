
var movingMarbels;
var count = 0;
var reverse = 0;


function move(){

    movingMarbels = setInterval(function (){
        count++;
        console.log(count + " count ");

        reverse = count% 5;
        reverse++;
        console.log(reverse + " reverse ");

        document.getElementById("img"+count).src="marbels/marble1.jpg"
        document.getElementById("img"+reverse).src="marbels/marble3.jpg"
    if(count === 5){
        console.log(count + " inside ")
        count = 0;
    }

},2000);
}

function freez(){
    clearInterval(movingMarbels);
}

