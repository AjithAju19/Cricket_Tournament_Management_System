import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tsearch',
  templateUrl: './tsearch.component.html',
  styleUrls: ['./tsearch.component.css']
})
export class TsearchComponent implements OnInit {

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
