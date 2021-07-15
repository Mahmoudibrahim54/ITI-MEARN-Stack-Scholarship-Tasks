class Product {
    finalProduct = [];
    addPart(part) {
      this.finalProduct.push(part);
    }
   showProduct(){
       for(let i = 0; i < this.finalProduct.length;i++){
           console.log(this.finalProduct[i]);
       }
   }
  }
class CarBuilder {
    product = new Product();
  
  addDoors() {
    this.product.addPart("4 Doors Added");
  }

  addSeats() {
    this.product.addPart("2 Seats Added");
  }
  get product() {
    return this.product;
  }
}

class TruckBuilder {
    product = new Product();
  
  addDoors() {
    this.product.addPart("2 Doors Added");
  }

  addSeats() {
    this.product.addPart("5 Seats Added");
  }
  get product() {
    return this.product;
  }
}

class Director {
    myDirector = null;
    build(builder) {
      this.myDirector = builder;
      this.myDirector.addDoors();
      this.myDirector.addSeats();
    }
  }


var director = new Director();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
director.build(carBuilder);
director.build(truckBuilder);
var car = carBuilder.product;
var truck = truckBuilder.product;
// car.showProduct();
truck.showProduct();


