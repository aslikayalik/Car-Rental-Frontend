import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Color';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({ 
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "http://localhost:4200/api/Colors/getall"; 

constructor(private httpClient:HttpClient) { }

getColors():Observable<ListResponseModel<Color>>{
  return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
} 
}
