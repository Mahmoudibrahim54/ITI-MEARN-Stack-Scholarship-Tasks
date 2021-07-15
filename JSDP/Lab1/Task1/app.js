function Rectangle (_width,_height){

    Rectangle.noInstances++;

    this.width = _width;
    this.height=_height;

    this.premiter = function(){
        return (this.width + this.height ) * 2;
    }

    this.area = function(){
        return this.width * this.height;
    }
    this.toString = function (){
        return `width is: ${this.width}, height is: ${this.height}, premiter is: ${this.premiter()} and area is: ${this.area()}`
    }
    this.getNoInstances = function(){
        return Rectangle.noInstances;
    }

}
Rectangle.noInstances = 0;

var rect = new Rectangle(10,20);