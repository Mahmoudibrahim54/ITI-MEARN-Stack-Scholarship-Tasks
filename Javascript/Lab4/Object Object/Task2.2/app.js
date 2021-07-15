
// object constructor application
function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.width * this.height;
    }
    this.perimeter = function (){
        return (this.height+this.width)*2;
    }
    this.displayInfo = function(){
        return "width is : " +this.width +", height is " + this.height+", permiter is : "+this.perimeter()+ ", area is : " +this.area();
    }

}

