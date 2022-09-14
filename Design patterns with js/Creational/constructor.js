class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  print() {
    return `this ${this.color} Car was released in ${this.model} `;
  }
}

class BMW extends Car {
  constructor(model, color, engine) {
    super(model, color); //constructor pattern reuse the code by calling super keyword to inhirit from its parent class
    this.engine = engine;
  }

  print() {
    return `this ${this.color} BMW was released in ${this.model} with engine ${this.engine}CC`;
  }
}

let bmw = new BMW(2020, "white", 2000);
console.log(bmw.print());
