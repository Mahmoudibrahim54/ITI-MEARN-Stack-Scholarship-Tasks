$(function () {
    var winFlag;
  $("[value=start]").click(function () {
    var firstRand = Math.floor(Math.random() * (2000 + 1) + 100);
    var secondRand = Math.floor(Math.random() * (2000 + 1) + 100);
    winFlag = false
    console.log(firstRand + "********" + secondRand);

    $("#first-car>img").animate({ left: "45vw" }, firstRand,"swing",function(){
        if(!winFlag){
        $(".winner").html("car 1 wins")
        winFlag=true;
        }
    });

    $("#second-car>img").animate({ left: "45vw" }, secondRand,"swing",function(){

        if(!winFlag){
            $(".winner").html("car 2 wins")
            winFlag=true;
        }
    });
  });

  $("[value=reset").click(function () {
    $("#first-car>img").css("left","0vw");
    $("#second-car>img").css("left","0vw");
    $(".winner").html("winner")

  });
});
