import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
id:any;
url:any;
  constructor(myRouteDetails:Router) { 
     this.url = myRouteDetails.url;
  }

  ngOnInit(): void {
  }

}
