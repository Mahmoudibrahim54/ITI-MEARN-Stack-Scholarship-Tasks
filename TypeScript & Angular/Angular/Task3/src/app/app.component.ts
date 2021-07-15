import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  dataFromRegister:any="";
  students:{name:string,age:number}[]=[];
  getData(event){
    this.dataFromRegister = event;
    console.log(event);
    this.students.push(event);
  }
}
