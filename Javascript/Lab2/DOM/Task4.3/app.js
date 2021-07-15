var movingImg1;
var movingImg2;
var movingImg3;
var notMoving = true;
var img1Count = 90;
var img1Flag = true;
var img2Count = -5;
var img2Flag = true;
var img3Count = 60;
var img3Flag = true;

function toggle() {
  if (notMoving) {
    notMoving = false;
    movingImg1 = setInterval(function () {
      if (img1Flag) {
        img1Count--;
        document.getElementById("img1").style.top = img1Count + "%";
        console.log(img1Count + "flagout");

        if (img1Count === 0) {
          img1Flag = false;
          console.log(img1Count + "flag1");
        }
      } else {
        img1Count++;
        console.log(img1Count + "flag1 - 2");

        document.getElementById("img1").style.top = img1Count + "%";
        if (img1Count === 90) {
          img1Flag = true;
        }
      }
    }, 20);
    movingImg2 = setInterval(function () {
        if (img2Flag) {
          img2Count++;
          document.getElementById("img2").style.left = img2Count + "%";
          if (img2Count === 75) {
            img2Flag = false;
          }
        } else {
          img2Count--;
          document.getElementById("img2").style.left = img2Count + "%";
          if (img2Count === -5) {
            img2Flag = true;
          }
        }
      }, 20);
      movingImg3 = setInterval(function () {
        if (img3Flag) {
          img3Count--;
          document.getElementById("img3").style.left = img3Count + "%";
          if (img3Count === -20) {
            img3Flag = false;
          }
        } else {
          img3Count++;
          document.getElementById("img3").style.left = img3Count + "%";
          if (img3Count === 60) {
            img3Flag = true;
          }
        }
      }, 20);
  } else {
    console.log("not moving");
    notMoving = true;
    clearInterval(movingImg1);
    clearInterval(movingImg2);
    clearInterval(movingImg3);

  }
}

function reset() {
  clearInterval(movingImg1);
  clearInterval(movingImg2);
  clearInterval(movingImg3);
  // document.getElementById("img1").style.top = "90%";
  // document.getElementById("img2").style.left="-5%";
  // document.getElementById("img3").style.left="60%";
  img1Count = 90;
  img2Count = -5;
  img3Count = 60;
  img1Flag = true;
  img2Flag = true;
  img3Flag = true;
  notMoving = true;
  toggle();
}
