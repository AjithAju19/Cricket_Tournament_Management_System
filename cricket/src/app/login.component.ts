import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  name:string="";
  pass:string = "";
  show:boolean =false;
  stmt:string = "";
  value:string = "";

  submit(){
    if(this.name == "admin" && this.pass == "admin"){
      this.show = true;
      this.value = "home";
    }
    else if(this.name != "admin" && this.pass != "admin"){
    
      this.show = false;
      alert("Login failed, Invalid/Missing Credentials");
    }


  }


  ngOnInit(): void {
  }


  

}
