$(function () {
  //1
  $("div>span").css("color", "blue");
  //2
  $("div>.myclass").css("background-color", "yellow");
  //3
  $(".myclass").css({ color: "green", width: "100%", height: "50px" });
  //4
  $(".content li:eq(0)").css("color", "red");
  $(".content li:eq(3)").css("color", "blue");
  $(".content li:eq(4)").css("color", "brown");
  //5
  $("a:nth-of-type(2)").css("color", "red");
  $("a:nth-of-type(3)").css("color", "red");
  //6
  $("#q6>h2, #q6>h1, #q6>p, #q6>span").css("color", "darkorange");
  //7
  $("ol li:gt(2)").css("color", "cornflowerblue");
  //8
  $(".content.active>p:even").css("color", "darkgoldenrod");
  $(".content.active>p:odd").css("color", "darkcyan");
  //9
  // $("#q9 li:eq(0),#q9 li:eq(3),#q9 li:eq(4)").css("color", "lightslategrey");
  $("#q9 li").filter(':eq(0),:gt(2F)').css("color", "lightslategrey");
  //10
  $(".q10:first-child,.q10:last-child,.q10:nth-child(3)").css(
    "color",
    "lightsalmon"
  );
  //q11
  $("#q11>span>a").css("color", "red");
  $("#q11>a").css("color", "red");
  $("#q11>div>a").css("color", "red");
  $("#q11 .myClass>a").css("color", "black");
  $("#q11 #d1>a").css("color", "black");
});
