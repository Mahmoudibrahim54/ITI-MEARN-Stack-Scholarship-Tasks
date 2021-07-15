import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private myService: UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  addUser(name,age,position){
    let user = {name:name.value,age:age.value,position:position.value}
    this.myService.addNewUser(user).subscribe(
      (res)=>{   alert(`User ${user.name} Added`)
        this.router.navigateByUrl('users')});

  }

}
