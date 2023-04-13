import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

   display:boolean=false;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onclick(){
    this.display=!this.display;
  }

}
