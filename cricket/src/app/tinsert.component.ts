import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tinsert',
  templateUrl: './tinsert.component.html',
  styleUrls: ['./tinsert.component.css']
})
export class TinsertComponent implements OnInit {

  tid:any;
  tname:string = "";
  noofwins:any;
  nooflosses:any;

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }


  insert_team()
  {
    this.db.insert_teamService(this.tid,this.tname,this.noofwins,this.nooflosses).subscribe(data => {

      if(data["message"])
      {
          alert(this.tname+" record inserted successfully...");
      }

    });
  }


  value = [{tid:"",tname:"",noofwins:"",nooflosses:""}];
  show:boolean = false;

  displayAll_team()
  {
    this.db.displayAll_teamService().subscribe(data => {

      this.value = data;
      this.show = true;

    });
  }


}
