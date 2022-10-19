import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals : Rental[]=[];
  currentRental : Rental;


  constructor(private rentalService:RentalService,private httpClient:HttpClient) { }

  ngOnInit(): void{
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{this.rentals = response.data})
  }

  setCurrentRental(rental:Rental){
  
    this.currentRental=rental;
  }

getCurrentRentalClass(rental:Rental){
if(rental == this.currentRental){
  return "list-group-item active"
}else{
  return "list-group-item"
}
}


getAllRentalClass(){
  if(this.currentRental){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
  }
}


