import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  name:string="";
  age:any;
  jno:any;
  rating:any;
  team:any;
  runs:any;

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  insert()
  {
    this.db.insertService(this.name,this.age,this.jno,this.runs,this.rating,this.team).subscribe(data => {

      if(data["message"])
      {
          alert(this.name+" record inserted successfully...");
      }

    });
  }

}
