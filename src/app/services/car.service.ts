import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';



@Injectable({ 
  providedIn: 'root'
})
export class CarService {


  apiUrl = "http://localhost:57750/api/Cars/getall"; 

constructor(private httpClient:HttpClient) { }
getCars():Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getall"
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
} 


getCarsByBrand(BrandId:number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getbybrand?brandId="+BrandId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
} 

getCarsByColor(ColorId:number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getbycolor?colorId="+ColorId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
} 


getId(Id:number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getbycarid?carId="+Id
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
} 


add(car:Car):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car);
}


}
