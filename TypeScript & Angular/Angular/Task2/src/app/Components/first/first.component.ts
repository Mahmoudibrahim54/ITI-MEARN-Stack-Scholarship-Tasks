import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  disp:string="";
  constructor() { }

  ngOnInit(): void {
  }
  displayInp(data){
    this.disp = data.target.value;
  }
  ChangeInto(){
    this.disp = "Text Changed";
  }

}
