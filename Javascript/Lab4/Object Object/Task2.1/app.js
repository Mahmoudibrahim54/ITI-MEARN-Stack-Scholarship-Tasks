function LnkdListObj() {
  this.values = [] ;
  this.insertInto = function (val) {
    if (this.values[this.values.length - 1] < val || this.values.length === 0) {
      this.values.push(val);
      console.log(this.values[0] + "here");
    } else if (val < this.values[0]) {
      this.values.unshift(val);
    } else {
      for (var i = this.values.length - 1; i >= 0; i--) {
        if (this.values[i] === val) {
          throw Error("value already exist");
        } else if (val > this.values[i]) {
          this.values.splice(i+1, 0, val);
          break;
        }
      }
    }
  };
  this.deleteEntry = function (val) {
    var flag = false;
    for (var i = 0; i < this.values.length; i++) {
        console.log(this.values[i]);
      if (this.values[i] == val) {
        this.values.splice(i, 1);
        flag = true;
      }
    }
    if (!flag) {
      console.log("value doesn't exist");
    }
  };
  this.popEntry = function () {
    this.values.pop();
  };
  this.shiftEntry =  function() {
    this.values.shift();
  };
  this.displayInfo = function () {
    return this.values;
    // for (var i = 0; i < values.length; i++) {
    //     console.log( " value " + i +" is : " + values[i]);

    // }
  };
}

var myL = new LnkdListObj();
