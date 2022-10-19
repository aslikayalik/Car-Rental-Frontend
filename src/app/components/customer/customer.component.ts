import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers : Customer[]=[];
  currentCustomer : Customer;


  constructor(private customerService:CustomerService,private httpClient:HttpClient) { }

  ngOnInit(): void{
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{this.customers = response.data})
  }

  setCurrentCustomer(customer:Customer){
  
    this.currentCustomer=customer;
  }

getCurrentCustomerClass(customer:Customer){
if(customer == this.currentCustomer){
  return "list-group-item active"
}else{
  return "list-group-item"
}
}


getAllCustomerClass(){
  if(this.currentCustomer){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
  }
}


