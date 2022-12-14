import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  providers:[CartService]
})
export class CartSummaryComponent implements OnInit {
cartItems:CartItem[]=[];
  constructor( private cartService:CartService, private toastrService:ToastrService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.getCart();
  }
getCart(){
  this.cartItems = this.cartService.list();
}

removeFromCart(car:Car){
  this.cartService.removeFromCart(car);
  this.toastrService.error("Silindi",car.CarName+" sepetten silindi.")
}
}
