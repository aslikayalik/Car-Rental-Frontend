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
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';



const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:BrandId",component:CarComponent},
{path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
{path:"login",component:LoginComponent},
{path:"cars/color/:ColorId",component:CarComponent},
{path:"brands",component:BrandComponent},
{path:"colors",component:ColorComponent},
{path:"users",component:UserComponent},
{path:"users/:Id",component:UserComponent},
{path:"customers",component:CustomerComponent},
{path:"customers/:CustomerId",component:CustomerComponent},
{path:"rentals",component:RentalComponent},
{path:"rentals/:RentalId",component:RentalComponent},

]; 




@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }


