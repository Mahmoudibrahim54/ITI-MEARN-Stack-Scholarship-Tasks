var count = 0;
function Rectangle(width,height) {
  this.width = width;
  this.height = height;
  var recNumber= count;
  var recNum = function () {
    recNumber++;
    return ++count;
  };

  recNum();
  this.getRecNum = function () {
    return recNumber();
  };
}
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


