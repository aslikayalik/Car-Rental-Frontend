import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[CarService]
})
export class CarComponent implements OnInit {

  cars:Car[]= []; 
 dataLoaded = false;
 filterText="";

constructor(private carService : CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private cartService:CartService , private httpClient:HttpClient) {}  

  ngOnInit(): void {

  this.activatedRoute.params.subscribe(params=>{if(params["brandId"]){
    this.getCarsByBrand(params["brandId"])
  }else{
    this.getCars()
  }
}),

this.activatedRoute.params.subscribe(params=>{if(params["colorId"]){
  this.getCarsByColor(params["colorId"])
}else{
  this.getCars()
}
}),


this.activatedRoute.params.subscribe(params=>{if(params["Id"]){
  this.getCarId(params["Id"])
}else{
  this.getCars()
}
})
  
  }

 getCars(){
  
this.carService.getCars().subscribe(response=>{this.cars = response.data

this.dataLoaded = true;
})

}


 getCarsByBrand(brandId:number){
this.carService.getCarsByBrand(brandId).subscribe(response=>{this.cars = response.data

this.dataLoaded = true;
})

}

getCarsByColor(colorId:number){
  this.carService.getCarsByColor(colorId).subscribe(response=>{this.cars = response.data

  this.dataLoaded=true;
  })
}


getCarId(Id:number){
  this.carService.getId(Id).subscribe(response=>{this.cars = response.data

  this.dataLoaded=true;
  })
}


addToCart(car:Car){
  if(car.Id===1){
    this.toastrService.error("Hata","Bu ürün sepete eklenemez.")
  }else{
 this.toastrService.success("Sepete eklendi", car.CarName)
 this.cartService.addToCart(car);
  }
}
}
