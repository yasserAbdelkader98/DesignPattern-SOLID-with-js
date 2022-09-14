let connected;
class DataBase {
  constructor(name) {
    if (connected == null) {
      this.name = name;
      this.date = new Date().toLocaleDateString();
      connected = this;
    } else {
      return connected;
    }
  }

  print() {
    return `you have connected to ${this.name} Database at ${this.date}`;
  }
}

let db = new DataBase("Project Database");
let db2 = new DataBase("school Database"); //will return first obj only

console.log(db.print());
