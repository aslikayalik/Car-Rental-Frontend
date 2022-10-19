import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private toastrService:ToastrService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.createLoginForm(); 
  }

  createLoginForm(){
this.loginForm=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required],

})
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(data=>{
        this.toastrService.info(data.message)
      
      },responseError=>{
        
        this.toastrService.error(responseError.error)
      })
    }
  }
}
