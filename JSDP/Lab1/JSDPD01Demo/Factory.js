//factory function in js
function Emps(_name, age, address) {
    return {
        Name: _name,
        Age: age,
        Address: address,
        printdata: function () {
            console.log(`Data ${this.Name}`);
        }
    }
}
// const emp1 = Emps("A", 12, "ABC");
// const emp2 = Emps("B", 3, "dd");
//EMpyess ,Tester class,Developers  class 

class Tester {
    constructor(Name) {
        this.Name = Name;
        this.type = "Tester"
    }
}
class Developer {
    constructor(Name) {
        this.Name = Name;
        this.type = "Developer"

    }
}
//Emp Factory 
function EmpFactory() {
    this.create = function (Name, type) {
        switch (type) {
            case 1:
                return new Tester(Name);
                break;
            case 2:
                return new Developer(Name);
        }
    }
}
 
function printData(){
    console.log(`hi my name is ${this.Name} and iam ${this.type}`);
}
const emps=new EmpFactory();
const emp1=emps.create("Mohamed",2);
const emp2=emps.create("Ahmed" ,1);
const emp3=emps.create("Rania",1);
printData.call(emp1);
printData.call(emp2);