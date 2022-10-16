import { HttpClient } from '@angular/common/http';  // bunun vasıtasıyla backend de istek bulunabiliyoruz. api call yapabiliyoruz.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({ 
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:4200/api/Brands/getall"; 

constructor(private httpClient:HttpClient) { }


getBrands():Observable<ListResponseModel<Brand>>{
  return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
} 
}
