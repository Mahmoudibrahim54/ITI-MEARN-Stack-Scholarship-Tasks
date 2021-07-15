import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) { }

  baseUrl = 'http://localhost:3000/users';

  getAllUsers(){
    return this.myClient.get(this.baseUrl);
  }
  getUserByID(id:any){
    return this.myClient.get(`${this.baseUrl}/${id}`,{observe:'response'})
  }
  addNewUser(user:{name:string,age:number,position:string}){
    return this.myClient.post(this.baseUrl,user)
  }
  deleteUser(id){
    return this.myClient.delete(`${this.baseUrl}/${id}`)
  }
  updateUser(id:any,user:object){
    return this.myClient.put(`${this.baseUrl}/${id}`,user)
  }
}
