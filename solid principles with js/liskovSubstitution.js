//liskov substitution princible
//don't inhirit some methods you won't use it

class Bird {
  eat() {
    console.log("I must eat");
  }
}

class FlyBirds extends Bird {
  fly() {
    console.log("I can fly");
  }
}

class Eagle extends FlyBirds {
  // eat + fly
}

class Duck extends Bird {
  //eat only
}

let eagle = new Eagle();
let duck = new Duck();

eagle.eat();
eagle.fly();
duck.eat();
