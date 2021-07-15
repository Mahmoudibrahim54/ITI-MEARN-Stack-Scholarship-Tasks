class Director{
    build(builder){
        builder.addSeats();
        builder.addDoors();
    }
}

class Product{
    finalproduct = [];

    addPart(part){
        this.finalproduct.push(part);
    }
    showProduct(){
        for(let i = 0; i < this.finalproduct.length;i++){
            console.log(this.finalproduct[i]);
        }
    }

}

class CarBuilder{
    carProd = new Product;

    addSeats(){
        this.carProd.addPart("5 Seats Added");
    }
    addDoors(){
        this.carProd.addPart("4 Doors Added")
    }

    getVehicle(){
        return this.carProd;
    }
}

class TruckBuilder{
    truckProd = new Product;

    addSeats(){
        this.truckProd.addPart("2 Seats Added");
    }
    addDoors(){
        this.truckProd.addPart("2 Doors Added")
    }

    getVehicle(){
        return this.truckProd;
    }
}


let director = new Director();
let carBuilder = new CarBuilder(); 
let truckBuilder = new TruckBuilder();
director.build(carBuilder);
director.build(truckBuilder);
car = carBuilder.getVehicle();
truck = truckBuilder.getVehicle();
car.showProduct();
truck.showProduct();