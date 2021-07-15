import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:string;
  user:any;
  
  constructor(myRouteDetails:ActivatedRoute,private myService:UsersService,private router:Router) {
    this.id= myRouteDetails.snapshot.params.id;
    console.log(myRouteDetails.snapshot.params.id)
   }

  ngOnInit(): void {
    this.myService.getUserByID(this.id).subscribe(
      (res)=>{this.user=res.body;},
      (rej)=>{console.log(rej)}

    )
  }
  updateUser(name,age,position){
    let user = {name:name.value,age:age.value,position:position.value}
    this.myService.updateUser(this.id,user).subscribe(
      (res)=>{    alert(`User ${user.name} Updated`)
      this.router.navigateByUrl('users');
    }
    );
  }

}
