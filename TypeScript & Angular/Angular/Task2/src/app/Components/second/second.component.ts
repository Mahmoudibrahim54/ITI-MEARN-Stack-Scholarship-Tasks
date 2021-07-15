import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName:string="";
  userAge:number=18;
  students:{name:string,age:number}[]=[];

  displayInfo(){
    let student:{name:string,age:number}={name:this.userName,age:this.userAge};
    if(this.nameValid && this.ageValid){
      this.students.push(student);
    }
    console.log(this.students);
   
  }
  get nameValid(){
    return this.userName.length >= 3 && this.userName.length <= 15
  }
  get ageValid(){
    return this.userAge >=18 && this.userAge <=50;
  }

}
