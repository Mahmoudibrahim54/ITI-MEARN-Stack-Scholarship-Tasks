


function Shape(width,height){
  if(this.constructor === Shape){
    throw "you can't create a Shap it's asbstract"
  }
  this.width = width;
  this.height = height;
}
function Rectangle(width,height) {
  if(this.constructor === Rectangle){
    Rectangle.rectCount++;
    if(Rectangle.rectCount > 1){
      throw "You can't create more than one rectangle"
    }
  }
  Shape.call(this,width,height);
 
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

//define static counter for Rectangle
Rectangle.rectCount = 0;

Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.premiter = function () {
  return (this.height + this.width) * 2;
};
Rectangle.prototype.toString = function () {
  return (
    "width is : " +
    this.width +
    " height is " +
    this.height +
    " area is : " +
    this.area() +
    " premiter is : " +
    this.premiter()
  );
};


function Square(width) {
  if(this.constructor === Square){
    Square.sqrCount++;
    if(Square.sqrCount > 1){
      throw "You can't create more than one rectangle"
    }
  }
  Rectangle.call(this,width,width);
  
}

//define static counter for Square
Square.sqrCount = 0;

Square.prototype= Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;



// instntiate Rectangle and Square
var rect = new Rectangle(10,20);
var sqr = new Square(10);