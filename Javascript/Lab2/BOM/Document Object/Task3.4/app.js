var locationsObj = {
  11: "1",
  12: "3",
  13: "6",
  14: "6",
  21: "4",
  22: "3",
  23: "5",
  24: "1",
  31: "5",
  32: "4",
  33: "2",
  34: "2",
};
var openedKey = [];
var opStatus = 0;
var elem1;
var elem2;
var pic1;
var pic2;
var winCount = 0;

function play(evt){

    
    if(opStatus === 0 ){
        elem1 = evt;
        pic1 = locationsObj[evt.id];
        evt.src = "memoryGame/"+pic1+".gif";
        opStatus++;
    }
    else if (opStatus === 1  ){
        elem2 = evt;
        pic2 = locationsObj[evt.id];
        evt.src = "memoryGame/"+pic2+".gif";
        if(pic1 != pic2){
        opStatus++;

        }else{

            openedKey.push(pic1);
            opStatus = 0;
            winCount++;
            console.log(winCount + "winCount")
            if(winCount === 6){
                alert("Congratulations You Won");
            }
        }
    }
    else if(opStatus === 2 ){
        opStatus = 0
            elem1.src ="memoryGame/Moon.gif";
            elem2.src ="memoryGame/Moon.gif";

    }

}