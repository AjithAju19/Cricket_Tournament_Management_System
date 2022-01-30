import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-tdelete',
  templateUrl: './tdelete.component.html',
  styleUrls: ['./tdelete.component.css']
})
export class TdeleteComponent implements OnInit {

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  tname:string = "";

  delete_team(){

    this.db.delete_teamService(this.tname).subscribe(data => {

      if(data["message"])
      {
          alert(this.tname+" record deleted successfully...");
      }

      
      else if(data["message"] = "")
      {
          alert("No record found...");
      }

    });

  }

}
