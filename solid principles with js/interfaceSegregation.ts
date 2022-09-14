interface IEmployee {
  salary: number;
  salaryInfo: () => void;
}

interface IPerson {
  gender: string;
  personInfo: () => void;
}

class Employee implements IEmployee, IPerson {
  salary: number;
  gender: string;

  constructor(gender: string, salary: number) {
    this.salary = salary;
    this.gender = gender;
  }

  personInfo(): void {
    console.log(`my ${this.gender}`);
  }

  salaryInfo(): void {
    console.log(`my salary is ${this.salary}`);
  }
}

class Person implements IPerson {
  gender: string;

  constructor(gender: string) {
    this.gender = gender;
  }

  personInfo(): void {
    console.log(`my ${this.gender}`);
  }
}

let employee: Employee = new Employee("male", 5000);
employee.personInfo();
employee.salaryInfo();

let person: Person = new Person("male");
person.personInfo();
