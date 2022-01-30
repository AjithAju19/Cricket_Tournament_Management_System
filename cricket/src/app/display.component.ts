import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  constructor(private db:DbutilityService) { }

  

  ngOnInit(): void {
  }

  value:any;
  show:boolean = false;

  displayAll()
  {
    this.db.displayAllService().subscribe(data => {
      
      this.value = data;
      this.show = true;
    });
  }

}
