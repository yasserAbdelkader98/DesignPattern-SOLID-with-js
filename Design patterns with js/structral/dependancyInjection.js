class Fuel {
  constructor(type) {
    this.type = type;
  }

  printInfo() {
    console.log(this.type);
  }
}

class Model {
  constructor(year) {
    this.year = year;
  }

  printInfo() {
    console.log(this.year);
  }
}

class Car {
  constructor(fuel, year) {
    this.fuel = fuel;
    this.year = year;
  }
}

let gasFuel = new Fuel("Gas");
let petrolFuel = new Fuel("Petrol");

let newModel = new Model(2022);
let oldModel = new Model(2000);

let newCar = new Car(petrolFuel, newModel);
let oldCar = new Car(gasFuel, oldModel);

newCar.fuel.printInfo();
newCar.year.printInfo();

oldCar.fuel.printInfo();
oldCar.year.printInfo();
