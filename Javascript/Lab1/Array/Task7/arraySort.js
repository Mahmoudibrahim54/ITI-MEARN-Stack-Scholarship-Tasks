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
} while (count < 5);


function sortAscending(arr){
   var ascenSort =  arr.sort(function(a,b){return a - b;})
   return ascenSort;
}
function sortDescending(arr){
    myArray.sort(function(a,b){return b - a;})
    var descenSort =  arr.sort(function(a,b){return b - a;})
    return descenSort;
}


document.write('<h1 style="display:inline;color:red"> u\'v entered values of : </h1>' +  '<h1 style="display:inline;">'
+ myArray.join(" , ") + '</h1><br>');

document.write('<h1 style="display:inline;color:red"> your values after being sorted Ascending : </h1>' +  '<h1 style="display:inline;">'
+ sortAscending(myArray).join(' , ') + '</h1><br>');

document.write('<h1 style="display:inline;color:red"> your values after being sorted descending : </h1>' +  '<h1 style="display:inline;">'
+ sortDescending(myArray).join(' , ') + '</h1><br>');

