import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarAddComponent } from './components/carAdd/carAdd.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';



const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:BrandId",component:CarComponent},
// meseal bir numralı bran i isitorsam  o BrandId ye karşılık gelicek.
{path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]}, // LoginGuard ı devreye soktuk.
{path:"login",component:LoginComponent},
{path:"cars/color/:ColorId",component:CarComponent},
{path:"user",component:UserComponent},
{path:"customer",component:CustomerComponent},
{path:"rental",component:RentalComponent},

]; // böyle bi şey olursa bunu çalıştır.



@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
