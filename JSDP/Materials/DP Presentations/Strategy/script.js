

function AddCalc(x,y)
{
  this.calculate = (x,y) =>
  {
    // sum calculations ...
    return x+y;
  }
}

function SubtractCalc(x,y)
{
  this.calculate = (x,y)  =>
  {
    // sub calculations ...
    return x-y;
  }
}

function MultiplyCalc(x,y)
{
  this.calculate = (x,y) =>
  {
    // Multiply calculations ...
    return x*y;
  }
}


function Calculation()
{
  this.opration ;// to contain an instance 
  this.setStrategy = opration =>
  {
    this.opration = opration //assign your own instance
  }
  this.calculate = (x,y) => {
    return this.opration.calculate(x,y); //call a calc fun from the instance
  }
}

const addcalc = new AddCalc()
const subcalc = new SubtractCalc()
const mulcalc = new MultiplyCalc()
const calc = new Calculation()

calc.setStrategy(addcalc)
console.log("sum: " + calc.calculate(5,6))

calc.setStrategy(subcalc)
console.log("sub: " + calc.calculate(5,6))

calc.setStrategy(mulcalc)
console.log("Multiply: " + calc.calculate(5,6))

