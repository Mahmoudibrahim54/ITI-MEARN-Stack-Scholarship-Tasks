var myArray = [];

var count = 0;

do {
    var val = prompt("please enter a Number number");
  if (!isFinite(val)) {
    continue;
  } else {
    myArray.push(val);
    count++;
  }
} while (count < 3);

var sum =parseFloat( myArray[0]) +parseFloat( myArray[1]) +parseFloat( myArray[2]);
var mult =parseFloat( myArray[0]) *parseFloat( myArray[1]) *parseFloat( myArray[2]);
var div =parseFloat( myArray[0]) /parseFloat( myArray[1]) /parseFloat( myArray[2]);

document.write(
  '<h1 style="color:red; display:inline;">sum of the 3 values is : </h1>' +
    '<h1 style="display:inline;">' +
    myArray[0] +
    ' + ' +
    myArray[1] +
    ' + ' +
    myArray[2] +
    ' = ' +
    sum.toFixed(2) +
    '</h1 ><br>'
);
document.write(
  '<h1 style="color:red; display:inline;">multiplication ofthe 3 values is : </h1>' +
    '<h1 style="display:inline;">' +
    myArray[0] +
    ' * ' +
    myArray[1] +
    ' * ' +
    myArray[2] +
    ' = ' +
    mult.toFixed(2) +
    '</h1><br>'
);
document.write(
    '<h1 style="color:red; display:inline;">division ofthe 3 values is : </h1>' +
      '<h1 style="display:inline;">' +
      myArray[0] +
      ' / ' +
      myArray[1] +
      ' / ' +
      myArray[2] +
      ' = ' +
     div.toFixed(2) +
      '</h1><br>'
  );