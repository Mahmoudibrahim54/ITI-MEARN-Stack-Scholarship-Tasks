//Visitor Pattern => Behavioral Design Patterns

// allow you to add or provide new operations and methods
// to an object without changing that object itself

// new functionality is kept in separate object (Visitor Object)

// accept method ==> takes in visitor object
// accept method ==> provides visitor object access to main object

// employee class => name , salary  => get ,set methods

// extend the functionality of employee class using visitor pattern

//properties

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;

  this.getSalary = function () {
    return salary;
  };

  this.setSalary = function (sal) {
    salary = sal;
  };
  // this is a reference to our Employee
  this.accept = function (visitorFunction) {
    visitorFunction(this);
  };
}

///////////////////// new employee ////////////////////////

const emp1 = new Employee("Muhammad", 10000);

console.log(emp1.getSalary());

//visitor function (ExtraSalary)  => modify salary

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

//how visitor function know anything about employee
//user accept
//pass ExtraSalary to accept

emp1.accept(ExtraSalary);

console.log(emp1.getSalary());

//10000 comes from first call get salary
//20000 comes from second get salary
//after we extended the functionality / modified it

class Employee1 {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(salary) {
    this.salary = salary;
  }
  accept(visitorFunction) {
    // this is a reference to our Employee
    visitorFunction(this);
  }
}
const muha = new Employee("Muhammad", 10000);
console.log(muha.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

muha.accept(ExtraSalary);

console.log(muha.getSalary());

//reference
//https://www.dofactory.com/javascript/design-patterns/visitor
//https://www.youtube.com/channel/UCV4AXpDSxschk8I0sCl8JXw
