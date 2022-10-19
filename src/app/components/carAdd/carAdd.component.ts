import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carAdd',
  templateUrl: './carAdd.component.html',
  styleUrls: ['./carAdd.component.css'],
  providers:[CarService]
})
export class CarAddComponent implements OnInit {
carAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.createCarAddForm(); 
  }

  createCarAddForm(){
this.carAddForm = this.formBuilder.group({
  Id:["",Validators.required],
  carName:["",Validators.required],
  ModelYear:["",Validators.required],
  DailyPrice:["",Validators.required],
  Description:["",Validators.required],

})
  }

  add(){
    if(this.carAddForm.valid){
    let carModel = Object.assign({},this.carAddForm.value)
    this.carService.add(carModel).subscribe(response=>{
      
      this.toastrService.success(response.message,"Succeed")
    }, responseError=>{
     if(responseError.error.Errors.length>0){
       for (let i=0;  i < responseError.error.Errors.length;i++) {
        
      this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
         
       }
     }
      
    })
   
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }

}
