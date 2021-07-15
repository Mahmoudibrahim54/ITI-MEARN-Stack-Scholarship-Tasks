import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:any;
  user:any;
  resp:any;
  next:number;
  previous:number;
  
  constructor(myRouteDetails:ActivatedRoute,private myAPI:UsersService,private router:Router) {
    this.id= myRouteDetails.snapshot.params.id;
   }

  ngOnInit(): void {
    this.myAPI.getUserByID(this.id).subscribe(
      (res)=>{this.user=res.body;
      this.resp=res.status},
      (rej)=>{console.log(rej)}

    )
  }
  nextItem(){   this.id = parseInt(this.user.id);
    if(this.resp === 200){
      this.id++;}
      else{
        alert("End Of Records")
      }
    this.myAPI.getUserByID(this.id).subscribe(
      (res)=>{this.user = res.body;},
      (err)=>{console.log(err);}
    );
    this.router.navigateByUrl(`users/${this.id}`);}
  previousItem(){
    this.id = parseInt(this.user.id);
    if(this.id>1){
      this.id--;}
    this.myAPI.getUserByID(this.id).subscribe(
      (res)=>{this.user = res.body;},
      (err)=>{console.log(err);}
    );
    this.router.navigateByUrl(`users/${this.id}`);
  }

}
