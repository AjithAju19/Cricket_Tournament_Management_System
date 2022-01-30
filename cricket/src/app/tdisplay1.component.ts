import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tdisplay1',
  templateUrl: './tdisplay1.component.html',
  styleUrls: ['./tdisplay1.component.css']
})
export class Tdisplay1Component implements OnInit {

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  value:any = [{tid:"",tname:"",noofwins:"",nooflosses:""}];
  show:boolean = false;
  

  displayAll_team()
  {
    this.db.displayAll_teamService().subscribe(data => {
      
      
      this.value = data;
      this.show = true;
          

    });
  }

}
