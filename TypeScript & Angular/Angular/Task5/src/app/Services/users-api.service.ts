import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService{

  constructor(private myReq:HttpClient) { }
  myBaseURL:string = "https://jsonplaceholder.typicode.com/users";

  getAllUsers(){
    return this.myReq.get(this.myBaseURL);
  }
  getUser(id){
    return this.myReq.get(`${this.myBaseURL}/${id}`,{observe:'response'});
  }
  }