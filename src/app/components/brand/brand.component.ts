import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers:[BrandService]
})
export class BrandComponent implements OnInit {

  brands : Brand[]=[];
  currentBrand : Brand;


  constructor(private brandService:BrandService, private httpClient:HttpClient) { }

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{this.brands = response.data})
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

getCurrentBrandClass(brand:Brand){
if(brand == this.currentBrand){
  return "list-group-item active"
}else{
  return "list-group-item"
}

}

getAllBrandClass(){ 
  if(this.currentBrand){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
  }
  
}
