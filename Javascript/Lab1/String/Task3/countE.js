var str = prompt("Please Enter a String");
var caseSen = confirm("do you want Case Sensitive")
var strLen = str.length;
var count = 0;
for(var i = 0; i < strLen; i++){

    if(caseSen){
        if(str.charAt(i) === "e"){
        count++;
        }
    }else{
        if(str.charAt(i) === "e" || str.charAt(i) === "E"){
            count++;
        }
    }

}
alert("Number of e letters in the string is : " + count);