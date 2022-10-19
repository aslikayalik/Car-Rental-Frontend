import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[]=[];
  currentUser : User;


  constructor(private userService:UserService,private httpClient:HttpClient) { }

  ngOnInit(): void{
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{this.users = response.data})
  }

  setCurrentUser(user:User){
  
    this.currentUser=user;
  }

getCurrentUserClass(user:User){
if(user == this.currentUser){
  return "list-group-item active"
}else{
  return "list-group-item"
}
}


getAllUserClass(){
  if(this.currentUser){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
  }
}



