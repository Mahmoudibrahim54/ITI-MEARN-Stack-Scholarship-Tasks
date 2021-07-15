var str = prompt("Please enter a word to check if it's a palindrome");
var isCaseSen = confirm("do you want case sensitive");
var endCount = str.length - 1;
var startCount = 0;
var isPal = true;
if(isCaseSen){
while (startCount <= (str.length-1)/2){
    if(str.charAt(startCount) != str.charAt(endCount) ){
        isPal = false;
        break;
    }
    startCount++;
    endCount--;
}
}
else {
    while (startCount <= (str.length-1)/2){
        if(str.toUpperCase(str.charAt(startCount)) != str.toUpperCase(str.charAt(endCount)) ){
            isPal = false;
            alert(str.charAt(startCount));
            break;
        }
        startCount++;
        endCount--;
    }

}
if(isPal){
    alert("you'v entered a palindrome");
}
else{
    alert("not a palindrome")
}
