vid = document.getElementsByTagName("video")[0];
vidProgress = document.getElementById("vidRange");
var volume = document.getElementById("vol")
var volValue = document.getElementById("vol").value;


function vidInit() {
  vidProgress.max = vid.duration;
}
function controlTime() {
  console.log(vid.currentTime);
  vidProgress.value = vid.currentTime;
  vidProgress.stepUp();

}
function vidGoTo(video) {
  vid.currentTime = video.value; 

}
function changeVoice(voice) {
  vid.volume = voice.value / 10;
  volValue = voice.value;
}
function muteVoice(voice) {
  if (vid.muted) {
    vid.muted = false;
    volume.stepUp(volValue);

  } else {
    vid.muted = true;
    volume.stepDown(volValue);

  }
}
function playVid() {
  vid.play();
}
function pauseVid() {
  vid.pause();
}
function skipForward10() {
  console.log(vid.currentTime);
  vid.currentTime +=10;
}
function skipForward5() {
  vid.currentTime +=5;

}
function skipBackward10() {
  vid.currentTime -=10;

}
function skipBackward5() {
  vid.currentTime -=10;

}
function changeSpeed(playSpeed) {
  vid.playbackRate = playSpeed.value;
}
