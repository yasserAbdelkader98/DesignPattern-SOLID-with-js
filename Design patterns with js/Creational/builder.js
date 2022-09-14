class User {
  constructor(name, age, phone, address) {}
}

class UserBuilder {
  constructor() {
    this.user = new User();
  }

  setName(name) {
    this.user.name = name;
    return this;
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAdress(adress) {
    this.user.adress = adress;
    return this;
  }

  build() {
    return this.user;
  }
}

let firstUser = new UserBuilder()
  .setName("yasser")
  .setAge(24)
  .setAdress("smouha")
  .setPhone(123);

let secUser = new UserBuilder()
  .setName("ahmed")
  .setAge(20)
  .setAdress("gleem")
  .setPhone(543);

console.log(firstUser.user);
console.log(secUser.user);
