import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  value = [{name:"",age:"",jno:"",runs:"",rating:"",team:""}];
  show:boolean = false;

  displayAll()
  {
    this.db.displayAllService().subscribe(data => {

      this.value = data;
      this.show = true;

    });
  }

}
