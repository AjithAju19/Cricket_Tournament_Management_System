import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tupdate',
  templateUrl: './tupdate.component.html',
  styleUrls: ['./tupdate.component.css']
})
export class TupdateComponent implements OnInit {

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  show1:boolean = false;
  tid:any;
  tname:string = "";
  noofwins:any;
  nooflosses:any;

  update_team(){
    this.show1 = true;

  }

  update1_team()
  {
    this.db.update_teamService(this.tid,this.tname,this.noofwins,this.nooflosses).subscribe(data => {

      if(data["message"])
      {
          alert(this.tname+" record updated successfully...");
      }

      else if(data["message"] == ""){

        alert("No player record found");

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
