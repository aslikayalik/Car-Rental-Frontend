import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import {BrandComponent} from './components/brand/brand.component';
import {CarComponent} from './components/car/car.component';
import {ColorComponent} from './components/color/color.component';
import {CustomerComponent} from './components/customer/customer.component';
import {NaviComponent} from './components/navi/navi.component';
import {CarAddComponent} from './components/carAdd/carAdd.component';
import {RentalComponent} from './components/rental/rental.component';
import {UserComponent} from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { VatAddedPipe } from './pipes/vatAdded.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FilterPipePipe } from './pipes/filterPipe.pipe';

import {ToastrModule} from "ngx-toastr"
import { CartSummaryComponent } from './components/cartSummary/cart-summary.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [	
    AppComponent,
      MyComponentComponent,
      BrandComponent,
      CarComponent,
      ColorComponent,
      CustomerComponent,
      NaviComponent,
      RentalComponent,
      UserComponent,
      VatAddedPipe,
      FilterPipePipe,
      CartSummaryComponent,
      CarAddComponent,
      LoginComponent
     
   ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule, FormsModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
