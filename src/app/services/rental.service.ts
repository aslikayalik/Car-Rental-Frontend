import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({ 
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "http://localhost:57750/api/Rentals/getall"; 

constructor(private httpClient:HttpClient) { }

getRentals():Observable<ListResponseModel<Rental>>{
  return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
} 
}

