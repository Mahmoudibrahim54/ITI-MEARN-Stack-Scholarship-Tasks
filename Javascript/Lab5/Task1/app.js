function MySequence(start, end, step) {
  this.step = step;
var sequence = [];
  var genSeq = function () {
    for (var i = start; i <= end; i += step) {
      sequence.push(i);
    }
  };
  genSeq.call(this);

  this.prepend = function(val){
      if (val === this.sequence[0] - this.step){
          this.sequence.unshift(val);
      }else{
          throw "value not allowed"
      }

  }
  this.append = function(val){
    if (val === this.sequence[sequence.length-1] + this.step){
        this.sequence.push(val);
    }else{
        throw "value not allowed"
    }

}
this.pop = function(){
        this.sequence.pop();

}
this.dequeue = function(){
    this.sequence.shift();

}
this.display = function(){
    for(var i = 0;i<sequence.length;i++){
        console.log(sequence[i])
    }
}

  Object.defineProperty(this, "sequence", {
    get() {
      return sequence;
    },
    configurable: false,
    enumerable: false
  });

  Object.defineProperty(this, "pop", {
    configurable: false,
    enumerable: false
  });
  Object.defineProperty(this, "dequeue", {
    configurable: false,
    enumerable: false
  });
  Object.defineProperty(this, "append", {
    configurable: false,
    enumerable: false
  });
  Object.defineProperty(this, "prepend", {
    configurable: false,
    enumerable: false
  });
  Object.defineProperty(this, "step", {
    configurable: false,
    enumerable: false
  });
  Object.defineProperty(this, "display", {
    configurable: false,
    enumerable: false
  });
}

var myVar = new MySequence(5,20,5);