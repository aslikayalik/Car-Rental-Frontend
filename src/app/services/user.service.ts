import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({ 
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:4200/api/Users/getall"; 

constructor(private httpClient:HttpClient) { }

getUsers():Observable<ListResponseModel<User>>{
  return this.httpClient.get<ListResponseModel<User>>(this.apiUrl);
} 
}

