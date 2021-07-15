import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-user-item]',
  template: `<td>{{user.name}}</td><td>{{user.age}}</td><td>{{user.position}}</td>
  <td><a routerLink="{{ user.id }}">Info</a></td><td><a routerLink="update/{{ user.id }}">Update</a></td>
  <td><a routerLink="delete/{{ user.id }}">Delete</a></td>`,    
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() user:any;
  @Input() len:any;

}
