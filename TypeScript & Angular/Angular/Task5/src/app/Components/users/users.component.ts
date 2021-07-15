import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/Services/users-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private myAPI:UsersApiService) { }
  users:any;
  ngOnInit(): void {
    this.myAPI.getAllUsers().subscribe(
      (res)=>{this.users=res},
      (rej)=>{console.log(rej)}

    );
  }

}
