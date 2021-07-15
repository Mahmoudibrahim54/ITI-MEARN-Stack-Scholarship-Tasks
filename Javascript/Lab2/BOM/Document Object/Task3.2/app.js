
var slideShowAuto;
var slideCount = 1;

function slideShow(){
  clearInterval(slideShowAuto);
 slideShowAuto = setInterval(() => {

  if (slideCount === 6) {
    slideCount=0;
     }
    document.getElementById("img").src = "SlideShow/"+slideCount+".jpg";
    slideCount++;

    
}, 2000);
}
function nextSlide(){
  clearInterval(slideShowAuto);
  if(slideCount < 6){
  slideCount++;
  document.getElementById("img").src = "SlideShow/"+slideCount+".jpg";
  }
}
function previousSlide(){
  clearInterval(slideShowAuto);
  if(slideCount > 1){
  slideCount--;
  document.getElementById("img").src = "SlideShow/"+slideCount+".jpg";
}}
function stop(){
  clearInterval(slideShowAuto);
}