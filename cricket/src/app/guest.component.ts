import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  name:string = "";

  scroll(){
    window.scrollTo(300,700);
  }


}
