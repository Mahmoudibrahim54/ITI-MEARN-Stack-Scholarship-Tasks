import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersApiService } from 'src/app/Services/users-api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:string;
  user:any;
  resp:any;
  constructor(myRouteDetails:ActivatedRoute,private myAPI:UsersApiService) {
    this.id= myRouteDetails.snapshot.params.id;
    console.log(myRouteDetails.snapshot.params.id)
   }

  ngOnInit(): void {
    this.myAPI.getUser(this.id).subscribe(
      (res)=>{this.user=res.body;
      this.resp=res.status},
      (rej)=>{console.log(rej)}

    )
  }

}
