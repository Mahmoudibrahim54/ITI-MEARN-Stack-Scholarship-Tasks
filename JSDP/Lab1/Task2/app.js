import  Developer  from "./Developer.js";
import  Tester  from "./Tester.js";
import  Designer  from "./Designer.js";
import  QA  from "./QA.js";
import DesignerLeader from "./DesignerLeader.js";
import DeveloperLeader from "./DeveloperLeader.js";
import TesterLeader from "./TestserLeader.js";
import QALeader from "./QALeader.js";


function EmpFactory(){
    this.create= function(name,position,leader,type){
        switch (type) {
            case 1:
              return new Developer(name,position,leader);
            case 2:
              return new Tester(name,position,leader);
            case 3:
              return new QA(name,position,leader);
            case 4:
              return new Designer(name,position,leader);
          }
    }
}

var designLead = new DesignerLeader("Mahmoud",29)
var devLead = new DeveloperLeader("Ali",30)
var testLead = new TesterLeader("Ibrahim",35)
var QALead = new QALeader("Ahmed",37)
var devLead2 = new DeveloperLeader("samia","30");


var emps = new EmpFactory();
var dev1 = emps.create('Mahmoud','Junior',devLead,1);
var dev2 = emps.create('Ahmed','Junior',devLead2,1);
var tester1 = emps.create('Ibrahim','Junior',testLead,2);
var designer1 = emps.create('Ismail','Junior',designLead,4);
var designer2 = emps.create('Ali','Junior',designLead,4);
var qa = emps.create("john","senior",QALead,3)

console.log(dev1)
console.log(dev2)
console.log(tester1)
console.log(designer1)
console.log(designer2)
console.log(qa)

