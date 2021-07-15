//Object 
//Constructor DP for creationl object in JS
// var myobj={
//     nameopprop:valueofprop
// }
// var myobj=new Object();
// myobj.nameofprop=valueofprop;
// const myobj={};
// myobj[nameofprop]=valueofprop;

// var Employees={
//     Name:'Nadia',
//     Age:29,
//     "Salary":2000,
//     printData:function () {
//         console.log(`EmpName ${this.Name} and Salary ${this.Salary}`)
//       }
// }
// Employees.printData();
// var newEmp=Employees;
// console.log(newEmp);
// newEmp.Name="Ahmed";
// console.log(newEmp.printData());
// Employees.printData();
//ES5
//constructor Function
// function Employess(_name, _age, _dep, _track) {
//     //as public  props 
//     this.Name = _name;
//     this.Age = _age;
//     var Salary;//private member (Constructor);
//     //  this.Salary=_salary*0.2;
//     this.setSalary = function (salary) {
//         console.log("This",this);
//         Salary = salary * 0.2;
//     }
//     this.getSalary = function () {
//         return Salary;
//     }
//     this.Dept = _dep;
//     this.Track = _track;
//     //appears for each instance
//     // console.log("this instance for each object",this);
//     this.printData=function () {
//         console.log(`Emp Data ${this.Name} Age ${this.Age}`);
//       }

// };
//Courses for ALl Instances /Proptotype


// var emp1 = new Employess("Nadia", 29, "PD", "SD");
// Employess.prototype.Courses=["C#","OOP"];
// emp1.printData();
// // emp1.Courses=["C#","JS","OOP"];
// // emp1.printData=function(){
// //     console.log("Override");
// // }
// // console.log(emp1);
// const emp2 = new Employess("Ahmed",30,"OS","EL");
// emp2.printData();
// Employess();//js function 

// console.log(emp2);
// emp2.x = 50;
// console.log(emp2);
// console.log(emp1);

//ES6 for class 
class Employees{
    constructor(_name,_age,_track,_dept){
        this.Name=_name;
        this.Age=_age;
        this.Track=_track;
        this.Dept=_dept;
    }
    printData(){
        console.log(`Emp Data ${this.Name} and Dept ${this.Dept}`);
    }
    set Salary(_Salary){
        this.salary=_Salary*0.2;

    }
    get Salary(){
        return this.salary
    }
}

const emp1=new Employees("Mohamed",26,"Sd","PD");
emp1.printData();