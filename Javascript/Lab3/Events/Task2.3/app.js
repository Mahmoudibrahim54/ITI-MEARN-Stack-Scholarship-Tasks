
var myTimer;
var autoSub


function setEvent(){
 autoSub = new Event("autoSubmit");
document.forms[0].addEventListener("autoSubmit", function(){
    alert("please enter your info");
});
myTimer = setTimeout(function(){
    document.forms[0].dispatchEvent(autoSub);
    },3000);
}

function clearAlarm(){
    console.log("input done");
    clearTimeout(myTimer);
}


function ask(){
var askForCon = confirm("do you want to save your info");
if(askForCon){
    document.forms[0].submit();
}

}
function myTest(e){
    console.log(e);

}
document.getElementsByTagName("button")[0].addEventListener('click', myTest);

