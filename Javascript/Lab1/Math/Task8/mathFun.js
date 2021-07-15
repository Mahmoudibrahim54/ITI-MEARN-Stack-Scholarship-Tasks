var radius = prompt("please enter radius to calculate circle's area");
area = (Math.PI * Math.pow(radius, 2));
alert('total area of the circle is : '+ area.toFixed(2));


var calSqr = prompt("please enter number to calculate the square root");
alert('total Square root is : '+ Math.sqrt(calSqr).toFixed(2));



var calCos = prompt("please enter the angle to calculate the Cos for");
toRadians = calCos * (Math.PI/180);
document.write('<h1> Cos ' + calCos + ' ' +  Math.cos(toRadians).toFixed(2) + '</h1>');
