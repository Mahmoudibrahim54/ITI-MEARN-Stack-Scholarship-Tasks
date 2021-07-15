const task = require("../index");

describe("MathUtils", function () {
  var calc;

  //This will be called before running each spec

  let vals = [];
  let posVals = [];
  let negVals = [];
  let sum_of_vals = 0;
  afterAll(() => {
    vals = 0;
    posVals = 0;
    negVals = 0;
    sum_of_vals = 0;
  });

  beforeAll(function () {
    posVals = [1, 2, 3];
    negVals = [-5, -7];
    vals = posVals.concat(negVals);
    sum_of_vals = vals.reduce((x, y) => x + y);
    console.log(sum_of_vals);
  });

  beforeEach(() => {
    console.log(vals);
  });

  it("sum function should equal to sum of the values", () => {
    expect(task.sum(vals)).toEqual(-6);
  });

  it("positive function should equal to positive values", () => {
    expect(task.positive(vals)).toEqual(posVals);
  });
});

var counter = {
  currentValues: function () {
    return 1;
  },
};

function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  // expect some of values is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time
  it("spying", function () {
    spyOn(counter, "currentValues");
    counter.currentValues.and.callFake(() => 100);
    expect(counter.currentValues()).toEqual(100);
    expect(counter.currentValues).toHaveBeenCalledTimes(1);


  });

  // mock a function that takes any string and return number, call it twice and expect that it is called twice
  it("mocking", function () {
    let MockObj = jasmine.createSpyObj("MockjckObj", ["passStr"]);
    MockObj.passStr.and.callFake(() => 5);
    MockObj.passStr("aaa");
    MockObj.passStr("bbb");
    expect(MockObj.passStr).toHaveBeenCalledTimes(2);
  });
});
