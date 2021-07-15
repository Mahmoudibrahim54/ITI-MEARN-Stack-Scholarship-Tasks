

import { Component, OnInit,Input } from '@angular/core';



@Component({
    selector: "app-display",
    templateUrl: "./display.component.html",
    styleUrls: ["./display.component.css"]
})

export class DisplayComponent{
    

  constructor() { }

  ngOnInit(): void {
  }

  @Input() studentsArray:{name:string,age:number}[];
}