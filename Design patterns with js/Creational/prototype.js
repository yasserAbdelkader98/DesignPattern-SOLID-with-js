// class ManyFeatures {
//   featureOne() {}
//   featureTwo() {}
//   featureThree() {}
//   featureFour() {}
//   featureFive() {}
//   featureSix() {}
// }

// if we need to inhirit from this class using extends to
// use only one method it'll duplicate all this methods
// so no use for this we can use prototype

let manyFeatures = {
  featureOne() {
    console.log(1);
  },
  featureTwo() {
    console.log(2);
  },
  featureThree() {
    console.log(3);
  },
};

let featureInstance = Object.create(manyFeatures);
featureInstance.featureOne();
