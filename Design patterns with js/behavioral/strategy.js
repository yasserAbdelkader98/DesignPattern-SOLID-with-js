class XShippingCompany {
  shippingPrice(details) {
    //obj
    return `price of your shipment will be ${details.distance * 0.02}$`;
  }
}

class YShippingCompany {
  shippingPrice(details) {
    return `price of your shipment will be ${details.distance * 0.035}$`;
  }
}

class ZShippingCompany {
  shippingPrice(details) {
    return `price of your shipment will be ${details.distance * 0.06}$`;
  }
}

class Shipping {
  setStrategy(company) {
    this.company = company;
  }

  myShipment(details) {
    return console.log(this.company.shippingPrice(details));
  }
}

const details = {
  from: "alex",
  to: "cairo",
  distance: 1000,
};

let firstCompany = new XShippingCompany();
let secCompany = new YShippingCompany();
let thirdCompany = new ZShippingCompany();
let myOrder = new Shipping();

myOrder.setStrategy(firstCompany);
myOrder.myShipment(details);

myOrder.setStrategy(secCompany);
myOrder.myShipment(details);

myOrder.setStrategy(thirdCompany);
myOrder.myShipment(details);
