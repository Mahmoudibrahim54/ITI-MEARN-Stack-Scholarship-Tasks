var values = [];
var operators = [];
var opRepeat = false;
var dotRepeat = false;

function EnterNumber(value) {
  if(!dotRepeat || value != "."){
  opRepeat = false;
  values.push(value);
  document.getElementById("ans").value = showElements(values);
  }
  if(value === "."){
    dotRepeat = true;
  }
}

function EnterOperator(value) {
  if(!opRepeat){
    dotRepeat = false;
  values.push(value);
  operators.push(value);
  document.getElementById("ans").value = showElements(values);
  }
  opRepeat = true;
}

function EnterClear() {
  values.splice(0,values.length);
  operators.splice(0,operators.length);
  document.getElementById("ans").value = showElements(values);
}

function EnterEqual() {
  var opCount = 0,
    noCount = 0,
    result = 0.00;
  console.log(operators + "*****" + values);
  while (opCount <= operators.length) {
    var num = "";
    while (
      values[noCount] != operators[opCount] &&
      noCount < values.length
    ) {
      num += values[noCount];
      noCount++;
      console.log(noCount + " no ");
    }
    console.log(opCount + " op ");

    if (opCount === 0) {
      opCount++;
      noCount++;
      result = parseFloat(num);
      console.log("result 1 " + result);
    
    }
    else{
    console.log("before switch ");

    switch (operators[opCount - 1]) {
      case "+":
        console.log("inside + ")
        result += parseFloat(num);
        break;
      case "-":
        result -= parseFloat(num);
        break;
      case "*":
        result *= parseFloat(num);
        break;
      case "/":
        result /= parseFloat(num);
        break;
      default:
        break;
    }
    opCount++;
    noCount++;
  }
  console.log("final result" + result);
  }
  EnterClear();
  document.getElementById("ans").value = result;
}

function showElements(arr){
  str = "";
  for(var i = 0 ; i < arr.length; i++){
    str += arr[i];
  }
  return str;
}