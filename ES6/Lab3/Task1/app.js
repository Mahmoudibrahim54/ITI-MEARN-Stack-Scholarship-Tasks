class Polyion {
  constructor(canv) {
    this.canv = canv;
  }
  ctx = canv.getContext("2d");
  clearCanv = function () {
    this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);
  };
  toString = function () {
    console.log(`area is ${this.clacArea()}`);
  };
}

class Triangle extends Polyion {
  constructor(width, height, canv) {
    super(canv);
    this.width = width;
    this.height = height;
  }
  clacArea = function () {
    

    let area = 0.5*this.width*this.height;
    return area;
  };
  drawTriangle = function () {
    let left = 500-this.width;
    let up = 500-this.height;
    this.clearCanv();
    this.ctx.beginPath();
    this.ctx.moveTo(500,500);
    this.ctx.lineTo(left,500);
    this.ctx.lineTo(left,up);
    this.ctx.closePath();
    this.ctx.stroke();

  };
}
class Square extends Polyion {
  constructor(side, canv) {
    super(canv);
    this.side = side;
  }
  clacArea = function () {
    let area = Math.pow(this.side, 2);
    return area;
  };
  
  drawSquare = function () {
    this.clearCanv();
    this.ctx.beginPath();
    this.ctx.rect(100, 100, this.side, this.side);
    this.ctx.stroke();
  };
}
class Rectangle extends Polyion {
    constructor(side1,side2, canv) {
      super(canv);
      this.side1 = side1;
      this.side2 = side2;

    }
    clacArea = function () {
      let area = this.side1*this.side2;
      return area;
    };
    drawRect = function () {
      this.clearCanv();
      this.ctx.beginPath();
      this.ctx.rect(100, 100, this.side1, this.side2);
      this.ctx.stroke();
    };
  }
  class Circle extends Polyion {
    constructor(rad, canv) {
      super(canv);
  
      this.radius = rad;
    }
    clacArea = function () {
      let area = 2 * Math.PI * this.radius;
      return area;
    };
    drawCircle = function () {
      this.clearCanv();
      this.ctx.beginPath();
      this.ctx.arc(300, 300, this.radius, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.closePath();
    };
  }
let canv = document.querySelector("#canv");
