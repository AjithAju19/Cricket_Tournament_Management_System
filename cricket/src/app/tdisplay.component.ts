import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tdisplay',
  templateUrl: './tdisplay.component.html',
  styleUrls: ['./tdisplay.component.css']
})
export class TdisplayComponent implements OnInit {

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
