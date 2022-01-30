import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  name:String = "";
  age:any;
  jno:any;
  rating:any;
  runs:any;

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  delete(){

    this.db.deleteService(this.name).subscribe(data => {

      if(data["message"])
      {
          alert(this.name+" record deleted successfully...");
      }
      else if(data["message"] == ""){

        alert("No player record found");

      }


    });

  }

}
