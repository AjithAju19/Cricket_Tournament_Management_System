import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tsearch1',
  templateUrl: './tsearch1.component.html',
  styleUrls: ['./tsearch1.component.css']
})
export class Tsearch1Component implements OnInit {

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  
  tname:string = "";
  show:boolean = false;
  value = [{tid:"",tname:"",noofwins:"",nooflosses:""}];

  search_team(){

    this.db.search_teamService(this.tname).subscribe(data=>{
    
      this.value = data;
      this.show = true;
      
    });

}
}
