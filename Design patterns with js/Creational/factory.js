class Iphone {
  constructor(storage, price, color) {
    this.storage = storage;
    this.price = price;
    this.color = color;
  }
  printInfo() {
    return `${this.color} ${this.storage}GB Iphone costs ${this.price}`;
  }
}

class Oppo {
  constructor(storage, price, color) {
    this.storage = storage;
    this.price = price;
    this.color = color;
  }
  printInfo() {
    return `${this.color} ${this.storage}GB Oppo costs ${this.price}`;
  }
}

class Samsung {
  constructor(storage, price, color) {
    this.storage = storage;
    this.price = price;
    this.color = color;
  }
  printInfo() {
    return `${this.color} ${this.storage}GB Samsung costs ${this.price}`;
  }
}

class MobileFactory {
  constructor(type) {
    this.type = type;
  }

  displayMobileInfo() {
    switch (this.type) {
      case "Iphone":
        return new Iphone(256, "20K", "white").printInfo();
        break;

      case "Oppo":
        return new Oppo(128, "5k", "black").printInfo();
        break;

      case "Samsung":
        return new Samsung(512, "15K", "blue").printInfo();
        break;

      default:
        return `choose a valid phone type 'Iphone' , 'Oppo' , 'Samsung'`;
    }
  }
}

let factory = new MobileFactory("Iphone");
console.log(factory.displayMobileInfo());

let factory2 = new MobileFactory("Oppo");
console.log(factory2.displayMobileInfo());

let factory3 = new MobileFactory("Samsung");
console.log(factory3.displayMobileInfo());
