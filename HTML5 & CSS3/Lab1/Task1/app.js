var red;
var green;
var blue;
function colorInit() {
  red = document.getElementsByTagName("input")[0].value;
  green = document.getElementsByTagName("input")[1].value;
  blue = document.getElementsByTagName("input")[2].value;
  document.getElementsByTagName("h2")[0].style.color =
    "rgb(" + red + "," + green + "," + blue + ")";
}

function addRed(redC) {
  red = redC.value;
  document.getElementsByTagName("h2")[0].style.color =
    "rgb(" + red + "," + green + "," + blue + ")";
}
function addGreen(greenC) {
  green = greenC.value;
  document.getElementsByTagName("h2")[0].style.color =
    "rgb(" + red + "," + green + "," + blue + ")";
}
function addBlue(blueC) {
  blue = blueC.value;
  color = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementsByTagName("h2")[0].style.color =
    "rgb(" + red + "," + green + "," + blue + ")";
}
