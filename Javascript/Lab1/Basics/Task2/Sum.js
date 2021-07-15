var sum = 0;
var val = 0;
do{
    val = prompt("Please Enter a Number");
    if(isFinite(val)){
        sum += parseFloat(val);
        alert("Your Sum is " + sum);
    }
    else alert("Invalid Number")

}while(sum <= 100 && val != 0);