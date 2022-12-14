import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Color';
import { ColorService } from 'src/app/services/color.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers:[ColorService]
})
export class ColorComponent implements OnInit {


  colors : Color[]=[];
  currentColor : Color;



  constructor(private colorService:ColorService,private httpClient:HttpClient) { }

  ngOnInit(): void{
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{this.colors = response.data})
  }

  setCurrentColor(color:Color){
  
    this.currentColor=color;
  }

getCurrentColorClass(color:Color){
if(color == this.currentColor){
  return "list-group-item active"
}else{
  return "list-group-item"
}
}


getAllColorClass(){
  if(this.currentColor){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
  }
}

