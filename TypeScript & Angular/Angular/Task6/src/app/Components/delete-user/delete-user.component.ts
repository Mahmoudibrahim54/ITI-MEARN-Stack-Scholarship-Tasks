import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id:string;
  user:any;
  backToUsers:any;
  
  constructor(myRouteDetails:ActivatedRoute,private myService:UsersService,private router:Router) {
    this.id= myRouteDetails.snapshot.params.id;
    console.log(myRouteDetails.snapshot.params.id)
   }

  ngOnInit(): void {
    this.myService.getUserByID(this.id).subscribe(
      (res)=>{this.user=res.body;},
      (rej)=>{console.log(rej)}

    )
    this.myService.deleteUser(this.id).subscribe(
      (res)=>{ 
      this.backToUsers = setTimeout(()=>{
        alert(`User ${this.user.name} Deleted`);
        clearTimeout(this.backToUsers);
        this.router.navigateByUrl('users');
      },5000)
    
    }
    );

  }
}
