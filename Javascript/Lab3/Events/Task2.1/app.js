

document.addEventListener('keypress', getChars);
document.addEventListener('keydown', getSpecialKey);

function getChars(event) {
  var char = event.keyCode;
  alert(char);
  console.log(event);
}

function getSpecialKey(event) {
    
if(event.altKey){
    alert("you pressed alt key");
}
else if(event.ctrlKey){
    alert("you pressed ctrl key");

}
else if(event.shiftKey){
    alert("you pressed shift key");

}
}
